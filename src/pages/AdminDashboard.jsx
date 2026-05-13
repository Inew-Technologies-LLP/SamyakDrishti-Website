import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, RefreshCw, Check, X, Filter, Calendar, MessageSquare, Download, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  
  // --- TAB STATE ---
  const [activeTab, setActiveTab] = useState('Appointments'); 

  // --- APPOINTMENTS STATE ---
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- FEEDBACK STATE ---
  const [feedbackData, setFeedbackData] = useState([]);
  const [feedbackLoading, setFeedbackLoading] = useState(true);

  // --- FILTER STATES (For Appointments) ---
  const [statusFilter, setStatusFilter] = useState('Pending'); 
  const [dateFilter, setDateFilter] = useState(''); 
  const [serviceFilter, setServiceFilter] = useState('All'); 

  // --- PAGINATION STATES ---
  const [appointmentPage, setAppointmentPage] = useState(1);
  const [feedbackPage, setFeedbackPage] = useState(1);
  const itemsPerPage = 10;

  const servicesList = [
    "LASIK", "Cataract", "Refractive Lens Exchange (RLE)", "Routine Eye Test",
    "Dry Eye Clinic", "Glaucoma Clinic", "Retina & Diabetic Retinopathy",
    "Oculoplastic Clinic", "Squint Clinic", "Myopia Clinic", 
    "Keratoconus Clinic", "Cornea Clinic", "Contact Lens & Optometry"
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin');
  };

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`);
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFeedback = async () => {
    setFeedbackLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback`);
      const data = await response.json();
      setFeedbackData(data);
    } catch (error) {
      console.error("Failed to fetch feedback:", error);
    } finally {
      setFeedbackLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
    fetchFeedback();
  }, []);

  // Reset pagination when filters change
  useEffect(() => {
    setAppointmentPage(1);
  }, [statusFilter, dateFilter, serviceFilter]);

  const handleRefresh = () => {
    if (activeTab === 'Appointments') fetchAppointments();
    if (activeTab === 'Feedback') fetchFeedback();
  };

  // ✅ SORTING: Latest to Oldest (Based on ID)
  const sortedAppointments = [...appointments].sort((a, b) => b.id - a.id);
  const sortedFeedback = [...feedbackData].sort((a, b) => b.id - a.id);

  const totalAppointments = appointments.length;
  const pendingAppointments = appointments.filter(app => app.status === "Pending").length;
  const acceptedAppointments = appointments.filter(app => app.status === "Accepted").length;
  const rejectedAppointments = appointments.filter(app => app.status === "Rejected").length;

  const getFormattedFilterDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month, 10) - 1]} ${day}, ${year}`;
  };

  const filteredAppointments = sortedAppointments.filter(app => {
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    const matchesService = serviceFilter === 'All' || (app.reason && app.reason.includes(serviceFilter));
    const matchesDate = !dateFilter || (app.dateTime && app.dateTime.includes(getFormattedFilterDate(dateFilter)));
    return matchesStatus && matchesService && matchesDate;
  });

  // ✅ APPOINTMENT PAGINATION MATH
  const totalAppPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const currentAppointments = filteredAppointments.slice(
    (appointmentPage - 1) * itemsPerPage, 
    appointmentPage * itemsPerPage
  );

  // ✅ FEEDBACK PAGINATION MATH
  const totalFeedbackPages = Math.ceil(sortedFeedback.length / itemsPerPage);
  const currentFeedback = sortedFeedback.slice(
    (feedbackPage - 1) * itemsPerPage, 
    feedbackPage * itemsPerPage
  );

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setAppointments(prev => prev.map(app => app.id === id ? { ...app, status: newStatus } : app));
      } else {
        alert("Failed to update status. Please try again.");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Server connection error.");
    }
  };

  const clearFilters = () => {
    setStatusFilter('All');
    setDateFilter('');
    setServiceFilter('All');
  };

  const getCardClass = (type) => {
    const isActive = statusFilter === type;
    return `bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between h-[140px] cursor-pointer transition-all duration-200 ${
      isActive ? 'border-2 border-[#1b2a4e] ring-4 ring-[#1b2a4e]/10 transform scale-[1.02]' : 'border border-gray-100 hover:border-blue-300 hover:shadow-md'
    }`;
  };

  const formatFeedbackDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateStr;
  };

  // ✅ UPDATED: EXPORT TO EXCEL FUNCTION (Fixes distorion)
  const exportFeedbackToExcel = () => {
    const escapeCSV = (str) => {
      if (!str) return '""';
      let cleanedStr = String(str)
        .replace(/"/g, '""')
        .replace(/\n/g, ' ')
        .replace(/\r/g, '');
      
      return `"${cleanedStr}"`;
    };

    const headers = ["Visit Date", "Service Used", "Overall Experience", "Waiting Time", "Staff Interaction", "Concern Explained", "What Worked Well", "What To Improve"];
    const csvRows = [headers.join(",")];

    sortedFeedback.forEach(item => {
      const row = [
        escapeCSV(formatFeedbackDate(item.visitDate)),
        escapeCSV(item.serviceUsed),
        escapeCSV(item.overallExperience),
        escapeCSV(item.waitingTime),
        escapeCSV(item.staffInteraction),
        escapeCSV(item.concernExplained),
        escapeCSV(item.whatWorkedWell),
        escapeCSV(item.whatToImprove)
      ];
      csvRows.push(row.join(","));
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Patient_Feedback_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#F3F7FB] py-10 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1b2a4e] mb-1">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm">Manage hospital data</p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm font-medium">Samyak Drishti</span>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {/* ================= TAB NAVIGATION ================= */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 pb-2">
          <button 
            onClick={() => setActiveTab('Appointments')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-t-lg font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === 'Appointments' 
                ? 'bg-[#1b2a4e] text-white shadow-md' 
                : 'bg-transparent text-gray-500 hover:bg-gray-100'
            }`}
          >
            <Calendar size={18} />
            Appointments
          </button>
          <button 
            onClick={() => setActiveTab('Feedback')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-t-lg font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === 'Feedback' 
                ? 'bg-[#1b2a4e] text-white shadow-md' 
                : 'bg-transparent text-gray-500 hover:bg-gray-100'
            }`}
          >
            <MessageSquare size={18} />
            Patient Feedback
          </button>
        </div>

        {/* ================= APPOINTMENTS VIEW ================= */}
        {activeTab === 'Appointments' && (
          <div className="animate-in fade-in duration-300">
            {/* STATS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className={getCardClass('Pending')} onClick={() => setStatusFilter('Pending')}>
                <p className="text-gray-500 font-medium text-sm">Pending</p>
                <p className="text-4xl font-bold text-yellow-500">{pendingAppointments}</p>
              </div>
              <div className={getCardClass('Accepted')} onClick={() => setStatusFilter('Accepted')}>
                <p className="text-gray-500 font-medium text-sm">Accepted</p>
                <p className="text-4xl font-bold text-green-500">{acceptedAppointments}</p>
              </div>
              <div className={getCardClass('Rejected')} onClick={() => setStatusFilter('Rejected')}>
                <p className="text-gray-500 font-medium text-sm">Rejected</p>
                <p className="text-4xl font-bold text-red-500">{rejectedAppointments}</p>
              </div>
              <div className={getCardClass('All')} onClick={() => setStatusFilter('All')}>
                <p className="text-gray-500 font-medium text-sm">Total Appointments</p>
                <p className="text-4xl font-bold text-[#1b2a4e]">{totalAppointments}</p>
              </div>
            </div>

            {/* TABLE SECTION */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#1b2a4e] mb-1">
                    {statusFilter === 'All' ? 'All Appointments' : `${statusFilter} Appointments`}
                  </h2>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <button onClick={handleRefresh} className="flex items-center justify-center p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
                    <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
                  </button>

                  <select 
                    value={serviceFilter}
                    onChange={(e) => setServiceFilter(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="All">All Services</option>
                    {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>

                  <input 
                    type="date" 
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm focus:outline-none cursor-pointer"
                  />

                  {(statusFilter !== 'All' || dateFilter !== '' || serviceFilter !== 'All') && (
                    <button onClick={clearFilters} className="text-sm text-red-500 font-medium px-2 cursor-pointer">Clear</button>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto min-h-[400px]">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-500 text-sm">
                      <th className="p-5 font-medium">Patient Name</th>
                      <th className="p-5 font-medium">Email</th>
                      <th className="p-5 font-medium">Phone</th>
                      <th className="p-5 font-medium">Date & Time</th>
                      <th className="p-5 font-medium">Reason</th>
                      <th className="p-5 font-medium">Status</th>
                      <th className="p-5 font-medium text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700 font-medium">
                    {loading ? (
                      <tr><td colSpan="7" className="p-12 text-center text-gray-500">Loading appointments...</td></tr>
                    ) : currentAppointments.length === 0 ? (
                      <tr><td colSpan="7" className="p-12 text-center text-gray-500">No appointments found</td></tr>
                    ) : (
                      currentAppointments.map((app) => (
                        <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-[#1b2a4e]">{app.patientName}</td>
                          <td className="p-5">{app.email}</td>
                          <td className="p-5">{app.phone}</td>
                          <td className="p-5">{app.dateTime}</td>
                          <td className="p-5 text-gray-500">{app.reason}</td>
                          <td className="p-5">
                            <span className={`px-3 py-1.5 rounded-md text-[13px] font-semibold ${
                              app.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' : 
                              app.status === 'Accepted' ? 'bg-green-50 text-green-600' : 
                              'bg-red-50 text-red-600'
                            }`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="p-5">
                            <div className="flex items-center justify-center gap-3">
                              {app.status === 'Pending' ? (
                                <>
                                  <button onClick={() => handleStatusChange(app.id, 'Accepted')} className="bg-[#00b341] text-white px-3 py-1.5 rounded-md hover:bg-[#009635] flex items-center gap-1 cursor-pointer">
                                    <Check size={16} /> Accept
                                  </button>
                                  <button onClick={() => handleStatusChange(app.id, 'Rejected')} className="bg-[#ff2e2e] text-white px-3 py-1.5 rounded-md hover:bg-[#df2020] flex items-center gap-1 cursor-pointer">
                                    <X size={16} /> Reject
                                  </button>
                                </>
                              ) : (
                                <span className="text-gray-400 italic text-xs">Action taken</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* ✅ APPOINTMENTS PAGINATION CONTROLS */}
              {totalAppPages > 1 && (
                <div className="p-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Showing <span className="font-semibold text-gray-700">{(appointmentPage - 1) * itemsPerPage + 1}</span> to <span className="font-semibold text-gray-700">{Math.min(appointmentPage * itemsPerPage, filteredAppointments.length)}</span> of <span className="font-semibold text-gray-700">{filteredAppointments.length}</span> appointments
                  </span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setAppointmentPage(p => Math.max(1, p - 1))}
                      disabled={appointmentPage === 1}
                      className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="text-sm font-medium text-gray-700 px-2">
                      Page {appointmentPage} of {totalAppPages}
                    </span>
                    <button 
                      onClick={() => setAppointmentPage(p => Math.min(totalAppPages, p + 1))}
                      disabled={appointmentPage === totalAppPages}
                      className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= FEEDBACK VIEW ================= */}
        {activeTab === 'Feedback' && (
          <div className="animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
              
              <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#1b2a4e] mb-1">Patient Feedback Responses</h2>
                  <p className="text-gray-500 text-sm">Review recent feedback from the contact page.</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <button onClick={handleRefresh} className="flex items-center justify-center p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
                    <RefreshCw size={18} className={feedbackLoading ? "animate-spin" : ""} />
                  </button>
                  
                  {/* ✅ EXPORT TO EXCEL BUTTON */}
                  <button 
                    onClick={exportFeedbackToExcel}
                    className="flex items-center gap-2 bg-[#00b341] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#009635] transition-colors shadow-sm cursor-pointer"
                  >
                    <Download size={16} />
                    Export to Excel
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto min-h-[400px]">
                <table className="w-full text-left border-collapse min-w-[1100px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider bg-gray-50">
                      <th className="p-5 font-semibold">Visit Date</th>
                      <th className="p-5 font-semibold">Service</th>
                      <th className="p-5 font-semibold">Experience</th>
                      <th className="p-5 font-semibold">Wait Time</th>
                      <th className="p-5 font-semibold">Staff</th>
                      <th className="p-5 font-semibold">Explained?</th>
                      <th className="p-5 font-semibold w-64">What worked well</th>
                      <th className="p-5 font-semibold w-64">What to improve</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700 font-medium">
                    {feedbackLoading ? (
                      <tr><td colSpan="8" className="p-12 text-center text-gray-500">Loading feedback...</td></tr>
                    ) : currentFeedback.length === 0 ? (
                      <tr><td colSpan="8" className="p-12 text-center text-gray-500">No feedback submitted yet.</td></tr>
                    ) : (
                      currentFeedback.map((item) => (
                        <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors align-top">
                          <td className="p-5 text-[#1b2a4e] whitespace-nowrap">{formatFeedbackDate(item.visitDate)}</td>
                          <td className="p-5 font-semibold text-gray-600">{item.serviceUsed || 'N/A'}</td>
                          
                          <td className="p-5">
                            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                              item.overallExperience === 'Excellent' ? 'bg-green-100 text-green-700' :
                              item.overallExperience === 'Poor' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                            }`}>{item.overallExperience || 'N/A'}</span>
                          </td>
                          <td className="p-5">{item.waitingTime || '-'}</td>
                          <td className="p-5">{item.staffInteraction || '-'}</td>
                          <td className="p-5">{item.concernExplained || '-'}</td>
                          
                          <td className="p-5 text-gray-600 text-xs leading-relaxed max-w-xs break-words">
                            {item.whatWorkedWell || '-'}
                          </td>
                          <td className="p-5 text-gray-600 text-xs leading-relaxed max-w-xs break-words">
                            {item.whatToImprove || '-'}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* ✅ FEEDBACK PAGINATION CONTROLS */}
              {totalFeedbackPages > 1 && (
                <div className="p-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Showing <span className="font-semibold text-gray-700">{(feedbackPage - 1) * itemsPerPage + 1}</span> to <span className="font-semibold text-gray-700">{Math.min(feedbackPage * itemsPerPage, sortedFeedback.length)}</span> of <span className="font-semibold text-gray-700">{sortedFeedback.length}</span> responses
                  </span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setFeedbackPage(p => Math.max(1, p - 1))}
                      disabled={feedbackPage === 1}
                      className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="text-sm font-medium text-gray-700 px-2">
                      Page {feedbackPage} of {totalFeedbackPages}
                    </span>
                    <button 
                      onClick={() => setFeedbackPage(p => Math.min(totalFeedbackPages, p + 1))}
                      disabled={feedbackPage === totalFeedbackPages}
                      className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}