import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, RefreshCw, Check, X, Calendar, MessageSquare, Download, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

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

  // --- SYNC & NOTIFICATION STATE ---
  const [isSyncing, setIsSyncing] = useState(false);
  const [seenApptCount, setSeenApptCount] = useState(() => parseInt(localStorage.getItem('seenApptCount')) || 0);
  const [seenFeedbackCount, setSeenFeedbackCount] = useState(() => parseInt(localStorage.getItem('seenFeedbackCount')) || 0);

  // --- FILTER STATES ---
  const [statusFilter, setStatusFilter] = useState('Pending'); 
  const [dateFilter, setDateFilter] = useState(''); 
  const [serviceFilter, setServiceFilter] = useState('All'); 
  const [feedbackStartDate, setFeedbackStartDate] = useState('');
  const [feedbackEndDate, setFeedbackEndDate] = useState('');

  // --- PAGINATION STATES ---
  const [appointmentPage, setAppointmentPage] = useState(1);
  const [feedbackPage, setFeedbackPage] = useState(1);
  const itemsPerPage = 10;

  // --- RESCHEDULE MODAL STATES ---
  const [rescheduleAppt, setRescheduleAppt] = useState(null); 
  const [newRescheduleDate, setNewRescheduleDate] = useState('');
  const [newRescheduleTime, setNewRescheduleTime] = useState('');

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

  const fetchAppointments = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`);
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    } finally {
      if (!silent) setLoading(false);
    }
  };

  const fetchFeedback = async (silent = false) => {
    if (!silent) setFeedbackLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback`);
      const data = await response.json();
      setFeedbackData(data);
    } catch (error) {
      console.error("Failed to fetch feedback:", error);
    } finally {
      if (!silent) setFeedbackLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
    fetchFeedback();

    const intervalId = setInterval(async () => {
      setIsSyncing(true);
      await Promise.all([
        fetchAppointments(true), 
        fetchFeedback(true)
      ]);
      setTimeout(() => setIsSyncing(false), 1000); 
    }, 30000); 
    
    return () => clearInterval(intervalId);
  }, []);

  // NOTIFICATION LOGIC
  useEffect(() => {
    if (activeTab === 'Appointments') {
      setSeenApptCount(appointments.length);
      localStorage.setItem('seenApptCount', appointments.length);
    }
    if (activeTab === 'Feedback') {
      setSeenFeedbackCount(feedbackData.length);
      localStorage.setItem('seenFeedbackCount', feedbackData.length);
    }
  }, [activeTab, appointments.length, feedbackData.length]);

  const hasNewAppointments = appointments.length > seenApptCount && activeTab !== 'Appointments';
  const hasNewFeedback = feedbackData.length > seenFeedbackCount && activeTab !== 'Feedback';

  // RESET PAGINATION ON FILTER CHANGE
  useEffect(() => { 
    setAppointmentPage(1); 
  }, [statusFilter, dateFilter, serviceFilter]);
  
  useEffect(() => { 
    setFeedbackPage(1); 
  }, [feedbackStartDate, feedbackEndDate]);

  const handleRefresh = () => {
    if (activeTab === 'Appointments') fetchAppointments(false);
    if (activeTab === 'Feedback') fetchFeedback(false);
  };

  // SORTING
  const sortedAppointments = [...appointments].sort((a, b) => b.id - a.id);
  const sortedFeedback = [...feedbackData].sort((a, b) => b.id - a.id);

  // DATE FORMATTING FOR FILTERS
  const getFormattedFilterDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month, 10) - 1]} ${day}, ${year}`;
  };

  // APPOINTMENTS FILTERING
  const filteredAppointments = sortedAppointments.filter(app => {
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    const matchesService = serviceFilter === 'All' || (app.reason && app.reason.includes(serviceFilter));
    const matchesDate = !dateFilter || (app.dateTime && app.dateTime.includes(getFormattedFilterDate(dateFilter)));
    return matchesStatus && matchesService && matchesDate;
  });

  // FEEDBACK FILTERING
  const filteredFeedback = sortedFeedback.filter(item => {
    if (!feedbackStartDate && !feedbackEndDate) return true;
    const itemDate = new Date(item.visitDate);
    const start = feedbackStartDate ? new Date(feedbackStartDate) : null;
    const end = feedbackEndDate ? new Date(feedbackEndDate) : null;
    if (start && itemDate < start) return false;
    if (end && itemDate > end) return false;
    return true;
  });

  // PAGINATION MATH
  const totalAppPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const currentAppointments = filteredAppointments.slice(
    (appointmentPage - 1) * itemsPerPage, 
    appointmentPage * itemsPerPage
  );

  const totalFeedbackPages = Math.ceil(filteredFeedback.length / itemsPerPage);
  const currentFeedback = filteredFeedback.slice(
    (feedbackPage - 1) * itemsPerPage, 
    feedbackPage * itemsPerPage
  );

  // STATUS UPDATE SUBMIT
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
    }
  };

  // RESCHEDULE SUBMIT
  const handleRescheduleSubmit = async () => {
    if (!newRescheduleDate || !newRescheduleTime) {
      alert("Please select both a new date and time.");
      return;
    }

    const dateObj = new Date(newRescheduleDate);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    
    const [hourStr, minute] = newRescheduleTime.split(':');
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12 || 12;
    const formattedDateTime = `${formattedDate} - ${hour}:${minute}${ampm}`;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/${rescheduleAppt.id}/reschedule`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newDateTime: formattedDateTime }),
      });

      if (response.ok) {
        setAppointments(prev => prev.map(app => 
          app.id === rescheduleAppt.id ? { ...app, status: 'Accepted', dateTime: formattedDateTime } : app
        ));
        setRescheduleAppt(null); 
        setNewRescheduleDate('');
        setNewRescheduleTime('');
      } else {
        alert("Failed to reschedule.");
      }
    } catch (error) {
      console.error("Error rescheduling:", error);
    }
  };

  const clearApptFilters = () => { 
    setStatusFilter('All'); 
    setDateFilter(''); 
    setServiceFilter('All'); 
  };
  
  const clearFeedbackFilters = () => { 
    setFeedbackStartDate(''); 
    setFeedbackEndDate(''); 
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
    if (parts.length === 3) return `${parts[2]}-${parts[1]}-${parts[0]}`;
    return dateStr;
  };

  // EXCEL EXPORT
  const exportFeedbackToExcel = () => {
    const escapeCSV = (str) => {
      if (!str) return '""';
      return `"${String(str).replace(/"/g, '""').replace(/\n/g, ' ').replace(/\r/g, '')}"`;
    };

    const headers = ["Visit Date", "Service Used", "Overall Experience", "Waiting Time", "Staff Interaction", "Concern Explained", "What Worked Well", "What To Improve"];
    const csvRows = [headers.join(",")];

    filteredFeedback.forEach(item => {
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

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `Feedback_Report${feedbackStartDate ? `_from_${feedbackStartDate}` : ''}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#F3F7FB] py-10 px-6 font-sans relative">
      
      {/* ================= RESCHEDULE MODAL ================= */}
      {rescheduleAppt && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#1b2a4e]">Reschedule Appointment</h3>
              <button onClick={() => setRescheduleAppt(null)} className="text-gray-400 hover:text-gray-600">
                <X size={20}/>
              </button>
            </div>
            
            <div className="mb-4 text-sm text-gray-600">
              <p>Patient: <span className="font-semibold">{rescheduleAppt.patientName}</span></p>
              <p>Current Time: <span className="font-semibold text-red-500">{rescheduleAppt.dateTime}</span></p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">New Date</label>
                <input 
                  type="date" 
                  value={newRescheduleDate} 
                  onChange={(e) => setNewRescheduleDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#1b2a4e] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">New Time</label>
                <input 
                  type="time" 
                  value={newRescheduleTime} 
                  onChange={(e) => setNewRescheduleTime(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#1b2a4e] outline-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setRescheduleAppt(null)} 
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleRescheduleSubmit} 
                className="flex-1 py-2 bg-[#00b341] text-white rounded-lg font-semibold hover:bg-[#009635] transition-colors"
              >
                Confirm & Email
              </button>
            </div>
          </div>
        </div>
      )}

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
              className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 shadow-sm cursor-pointer"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* ================= TABS ================= */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 pb-2">
          <button 
            onClick={() => setActiveTab('Appointments')} 
            className={`relative flex items-center gap-2 px-6 py-2.5 rounded-t-lg font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === 'Appointments' ? 'bg-[#1b2a4e] text-white shadow-md' : 'bg-transparent text-gray-500 hover:bg-gray-100'
            }`}
          >
            <Calendar size={18} /> Appointments
            {hasNewAppointments && (
              <span className="absolute top-2 right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
              </span>
            )}
          </button>
          
          <button 
            onClick={() => setActiveTab('Feedback')} 
            className={`relative flex items-center gap-2 px-6 py-2.5 rounded-t-lg font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === 'Feedback' ? 'bg-[#1b2a4e] text-white shadow-md' : 'bg-transparent text-gray-500 hover:bg-gray-100'
            }`}
          >
            <MessageSquare size={18} /> Patient Feedback
            {hasNewFeedback && (
              <span className="absolute top-2 right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
              </span>
            )}
          </button>
        </div>

        {/* ================= APPOINTMENTS TAB ================= */}
        {activeTab === 'Appointments' && (
          <div className="animate-in fade-in duration-300">
            {/* STAT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className={getCardClass('Pending')} onClick={() => setStatusFilter('Pending')}>
                <p className="text-gray-500 font-medium text-sm">Pending</p>
                <p className="text-4xl font-bold text-yellow-500">{appointments.filter(a => a.status === 'Pending').length}</p>
              </div>
              <div className={getCardClass('Accepted')} onClick={() => setStatusFilter('Accepted')}>
                <p className="text-gray-500 font-medium text-sm">Accepted</p>
                <p className="text-4xl font-bold text-green-500">{appointments.filter(a => a.status === 'Accepted').length}</p>
              </div>
              <div className={getCardClass('Rejected')} onClick={() => setStatusFilter('Rejected')}>
                <p className="text-gray-500 font-medium text-sm">Rejected</p>
                <p className="text-4xl font-bold text-red-500">{appointments.filter(a => a.status === 'Rejected').length}</p>
              </div>
              <div className={getCardClass('All')} onClick={() => setStatusFilter('All')}>
                <p className="text-gray-500 font-medium text-sm">Total Appointments</p>
                <p className="text-4xl font-bold text-[#1b2a4e]">{appointments.length}</p>
              </div>
            </div>

            {/* APPOINTMENT TABLE */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <h2 className="text-xl font-bold text-[#1b2a4e] mb-1">
                  {statusFilter === 'All' ? 'All Appointments' : `${statusFilter} Appointments`}
                </h2>
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <button 
                    onClick={handleRefresh} 
                    title="Force Refresh"
                    className={`flex items-center justify-center p-2 rounded-lg transition-colors cursor-pointer ${
                      isSyncing ? 'bg-green-100 text-[#00b341]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <RefreshCw size={18} className={loading || isSyncing ? "animate-spin" : ""} />
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
                    <button onClick={clearApptFilters} className="text-sm text-red-500 font-medium px-2 cursor-pointer">Clear</button>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto min-h-[400px]">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-500 text-sm">
                      <th className="p-5 font-medium">Patient Name</th>
                      <th className="p-5 font-medium">Email</th>
                      <th className="p-5 font-medium">Phone</th>
                      <th className="p-5 font-medium">Date & Time</th>
                      <th className="p-5 font-medium w-48">Reason</th>
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
                          <td className="p-5 text-gray-500 text-xs">{app.reason}</td>
                          <td className="p-5">
                            <span className={`px-3 py-1.5 rounded-md text-[13px] font-semibold ${
                              app.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' : 
                              app.status === 'Accepted' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                            }`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="p-5">
                            <div className="flex flex-wrap items-center justify-center gap-2">
                              {app.status === 'Pending' ? (
                                <>
                                  <button onClick={() => handleStatusChange(app.id, 'Accepted')} className="bg-[#00b341] text-white px-2.5 py-1.5 rounded text-xs font-bold hover:bg-[#009635] flex items-center gap-1 cursor-pointer">
                                    <Check size={14} /> Accept
                                  </button>
                                  {/* ✅ NEW RESCHEDULE BUTTON */}
                                  <button onClick={() => setRescheduleAppt(app)} className="bg-blue-500 text-white px-2.5 py-1.5 rounded text-xs font-bold hover:bg-blue-600 flex items-center gap-1 cursor-pointer">
                                    <Clock size={14} /> Reschedule
                                  </button>
                                  <button onClick={() => handleStatusChange(app.id, 'Rejected')} className="bg-[#ff2e2e] text-white px-2.5 py-1.5 rounded text-xs font-bold hover:bg-[#df2020] flex items-center gap-1 cursor-pointer">
                                    <X size={14} /> Reject
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

              {/* APPOINTMENT PAGINATION */}
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
                    <span className="text-sm font-medium text-gray-700 px-2">Page {appointmentPage} of {totalAppPages}</span>
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

        {/* ================= FEEDBACK TAB ================= */}
        {activeTab === 'Feedback' && (
          <div className="animate-in fade-in duration-300">
            {/* FEEDBACK STAT CARD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[140px]">
                <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                  <MessageSquare size={16} /> Total Feedback Submitted
                </div>
                <p className="text-4xl font-bold text-[#1b2a4e]">{filteredFeedback.length}</p>
              </div>
            </div>

            {/* FEEDBACK TABLE */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#1b2a4e] mb-1">Patient Feedback Responses</h2>
                  <p className="text-gray-500 text-sm">Review recent feedback from the contact page.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <button 
                    onClick={handleRefresh} 
                    title="Force Refresh"
                    className={`flex items-center justify-center p-2 rounded-lg transition-colors cursor-pointer ${
                      isSyncing ? 'bg-green-100 text-[#00b341]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <RefreshCw size={18} className={feedbackLoading || isSyncing ? "animate-spin" : ""} />
                  </button>
                  
                  {/* DATE RANGE FILTERS */}
                  <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-lg border border-gray-200">
                    <span className="text-xs text-gray-500 font-medium px-2">From:</span>
                    <input 
                      type="date" 
                      value={feedbackStartDate} 
                      onChange={(e) => setFeedbackStartDate(e.target.value)} 
                      className="bg-white border border-gray-300 py-1.5 px-2 rounded text-sm outline-none cursor-pointer" 
                    />
                    <span className="text-xs text-gray-500 font-medium px-2">To:</span>
                    <input 
                      type="date" 
                      value={feedbackEndDate} 
                      onChange={(e) => setFeedbackEndDate(e.target.value)} 
                      className="bg-white border border-gray-300 py-1.5 px-2 rounded text-sm outline-none cursor-pointer" 
                    />
                  </div>
                  
                  {(feedbackStartDate || feedbackEndDate) && (
                    <button onClick={clearFeedbackFilters} className="text-sm text-red-500 font-medium px-2 cursor-pointer">Clear</button>
                  )}
                  
                  <button 
                    onClick={exportFeedbackToExcel} 
                    className="flex items-center gap-2 bg-[#00b341] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#009635] transition-colors shadow-sm cursor-pointer"
                  >
                    <Download size={16} /> Export to Excel
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
                      <tr><td colSpan="8" className="p-12 text-center text-gray-500">No feedback found.</td></tr>
                    ) : (
                      currentFeedback.map((item) => (
                        <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors align-top">
                          <td className="p-5 text-[#1b2a4e] whitespace-nowrap">{formatFeedbackDate(item.visitDate)}</td>
                          <td className="p-5 font-semibold text-gray-600">{item.serviceUsed || 'N/A'}</td>
                          <td className="p-5">
                            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                              item.overallExperience === 'Excellent' ? 'bg-green-100 text-green-700' : 
                              item.overallExperience === 'Poor' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                            }`}>
                              {item.overallExperience || 'N/A'}
                            </span>
                          </td>
                          <td className="p-5">{item.waitingTime || '-'}</td>
                          <td className="p-5">{item.staffInteraction || '-'}</td>
                          <td className="p-5">{item.concernExplained || '-'}</td>
                          <td className="p-5 text-gray-600 text-xs leading-relaxed max-w-xs break-words">{item.whatWorkedWell || '-'}</td>
                          <td className="p-5 text-gray-600 text-xs leading-relaxed max-w-xs break-words">{item.whatToImprove || '-'}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* FEEDBACK PAGINATION */}
              {totalFeedbackPages > 1 && (
                <div className="p-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Showing <span className="font-semibold text-gray-700">{(feedbackPage - 1) * itemsPerPage + 1}</span> to <span className="font-semibold text-gray-700">{Math.min(feedbackPage * itemsPerPage, filteredFeedback.length)}</span> of <span className="font-semibold text-gray-700">{filteredFeedback.length}</span> responses
                  </span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setFeedbackPage(p => Math.max(1, p - 1))} 
                      disabled={feedbackPage === 1} 
                      className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="text-sm font-medium text-gray-700 px-2">Page {feedbackPage} of {totalFeedbackPages}</span>
                    <button 
                      onClick={() => setFeedbackPage(p => Math.min(totalFeedbackPages, p + 1))} 
                      disabled={feedbackPage === totalFeedbackPages} 
                      className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
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