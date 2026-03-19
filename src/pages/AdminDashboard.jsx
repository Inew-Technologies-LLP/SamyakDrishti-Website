import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, RefreshCw, Check, X, Filter } from 'lucide-react';

export default function AdminDashboard() {
  // --- MOCK DATA STATE ---
  const [appointments, setAppointments] = useState([
    {
      id: "1",
      patientName: "Rahul Sharma",
      email: "rahul.s@example.com",
      phone: "9876543210",
      dateTime: "Oct 29, 2025, 02:12 PM",
      reason: "LASIK",
      status: "Pending" 
    },
    {
      id: "2",
      patientName: "Priya Patel",
      email: "priya.p@example.com",
      phone: "9123456789",
      dateTime: "Oct 30, 2025, 10:00 AM",
      reason: "Cataract",
      status: "Accepted"
    },
    {
      id: "3",
      patientName: "Amit Desai",
      email: "amit.d@example.com",
      phone: "9988776655",
      dateTime: "Nov 02, 2025, 04:30 PM",
      reason: "Routine Eye Test",
      status: "Rejected"
    },
    {
      id: "4",
      patientName: "Neha Gupta",
      email: "neha.g@example.com",
      phone: "9876512345",
      dateTime: "Nov 05, 2025, 11:15 AM",
      reason: "Dry Eye Clinic",
      status: "Pending"
    },
    {
      id: "5",
      patientName: "Vikram Singh",
      email: "vikram.s@example.com",
      phone: "9191919191",
      dateTime: "Nov 05, 2025, 03:00 PM",
      reason: "Glaucoma Clinic",
      status: "Accepted"
    }
  ]);

  // --- FILTER STATES ---
  const [statusFilter, setStatusFilter] = useState('All'); // 'All', 'Pending', 'Accepted', 'Rejected'
  const [dateFilter, setDateFilter] = useState(''); // 'YYYY-MM-DD'
  const [serviceFilter, setServiceFilter] = useState('All'); 

  // The 13 Services
  const servicesList = [
    "LASIK", "Cataract", "Refractive Lens Exchange (RLE)", "Routine Eye Test",
    "Dry Eye Clinic", "Glaucoma Clinic", "Retina & Diabetic Retinopathy",
    "Oculoplastic Clinic", "Squint Clinic", "Myopia Clinic", 
    "Keratoconus Clinic", "Cornea Clinic", "Contact Lens & Optometry"
  ];

  // --- DERIVED STATS (Always based on ALL data, not filtered data) ---
  const totalAppointments = appointments.length;
  const pendingAppointments = appointments.filter(app => app.status === "Pending").length;
  const acceptedAppointments = appointments.filter(app => app.status === "Accepted").length;
  const rejectedAppointments = appointments.filter(app => app.status === "Rejected").length;

  // --- HELPER TO MATCH DATE STRINGS ---
  // Converts standard HTML input date "2025-11-05" to match our mock data format "Nov 05, 2025"
  const getFormattedFilterDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month, 10) - 1]} ${day}, ${year}`;
  };

  // --- FILTER THE APPOINTMENTS ---
  const filteredAppointments = appointments.filter(app => {
    // 1. Check Status
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    // 2. Check Service
    const matchesService = serviceFilter === 'All' || app.reason === serviceFilter;
    // 3. Check Date
    const matchesDate = !dateFilter || app.dateTime.includes(getFormattedFilterDate(dateFilter));
    
    return matchesStatus && matchesService && matchesDate;
  });

  // --- HANDLERS ---
  const handleStatusChange = (id, newStatus) => {
    setAppointments(prev => 
      prev.map(app => app.id === id ? { ...app, status: newStatus } : app)
    );
  };

  const clearFilters = () => {
    setStatusFilter('All');
    setDateFilter('');
    setServiceFilter('All');
  };

  // --- CARD STYLING HELPER ---
  const getCardClass = (type) => {
    const isActive = statusFilter === type;
    return `bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between h-[140px] cursor-pointer transition-all duration-200 ${
      isActive ? 'border-2 border-[#1b2a4e] ring-4 ring-[#1b2a4e]/10 transform scale-[1.02]' : 'border border-gray-100 hover:border-blue-300 hover:shadow-md'
    }`;
  };

  return (
    <div className="min-h-screen bg-[#F3F7FB] py-10 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1b2a4e] mb-1">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm">Manage appointment requests</p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm font-medium">mclovinyadav@gmail.com</span>
            <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {/* ================= CLICKABLE STATS CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Total Card */}
          <div className={getCardClass('All')} onClick={() => setStatusFilter('All')}>
            <p className="text-gray-500 font-medium text-sm">Total Appointments</p>
            <p className="text-4xl font-bold text-[#1b2a4e]">{totalAppointments}</p>
          </div>

          {/* Pending Card */}
          <div className={getCardClass('Pending')} onClick={() => setStatusFilter('Pending')}>
            <p className="text-gray-500 font-medium text-sm">Pending</p>
            <p className="text-4xl font-bold text-yellow-500">{pendingAppointments}</p>
          </div>

          {/* Accepted Card */}
          <div className={getCardClass('Accepted')} onClick={() => setStatusFilter('Accepted')}>
            <p className="text-gray-500 font-medium text-sm">Accepted</p>
            <p className="text-4xl font-bold text-green-500">{acceptedAppointments}</p>
          </div>

          {/* Rejected Card */}
          <div className={getCardClass('Rejected')} onClick={() => setStatusFilter('Rejected')}>
            <p className="text-gray-500 font-medium text-sm">Rejected</p>
            <p className="text-4xl font-bold text-red-500">{rejectedAppointments}</p>
          </div>

        </div>

        {/* ================= FILTERS & TABLE SECTION ================= */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
          
          {/* Header & Filter Controls Area */}
          <div className="p-6 border-b border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#1b2a4e] mb-1">
                {statusFilter === 'All' ? 'All Appointments' : `${statusFilter} Appointments`}
              </h2>
              <p className="text-gray-500 text-sm">Manage and review patient requests</p>
            </div>
            
            {/* Filter Inputs */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              
              {/* Service Dropdown */}
              <div className="relative flex-grow lg:flex-grow-0">
                <select 
                  value={serviceFilter}
                  onChange={(e) => setServiceFilter(e.target.value)}
                  className="w-full lg:w-48 appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1b2a4e] cursor-pointer"
                >
                  <option value="All">All Services</option>
                  {servicesList.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                <Filter size={14} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>

              {/* Date Picker */}
              <input 
                type="date" 
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1b2a4e] cursor-pointer flex-grow lg:flex-grow-0"
              />

              {/* Clear Filters Button (Only shows if a filter is active) */}
              {(statusFilter !== 'All' || dateFilter !== '' || serviceFilter !== 'All') && (
                <button 
                  onClick={clearFilters}
                  className="text-sm text-red-500 hover:text-red-700 font-medium px-2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
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
                {/* WE MAP OVER 'filteredAppointments' INSTEAD OF 'appointments' */}
                {filteredAppointments.map((app) => (
                  <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="p-5 text-[#1b2a4e]">{app.patientName}</td>
                    <td className="p-5">{app.email}</td>
                    <td className="p-5">{app.phone}</td>
                    <td className="p-5">{app.dateTime}</td>
                    <td className="p-5 text-gray-500">{app.reason}</td>
                    
                    {/* Status Badge */}
                    <td className="p-5">
                      <span className={`px-3 py-1.5 rounded-md text-[13px] font-semibold ${
                        app.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' : 
                        app.status === 'Accepted' ? 'bg-green-50 text-green-600' : 
                        'bg-red-50 text-red-600'
                      }`}>
                        {app.status}
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="p-5">
                      <div className="flex items-center justify-center gap-3">
                        {app.status === 'Pending' ? (
                          <>
                            <button 
                              onClick={() => handleStatusChange(app.id, 'Accepted')}
                              className="flex items-center gap-1.5 bg-[#00b341] text-white px-3 py-1.5 rounded-md hover:bg-[#009635] transition-colors font-semibold"
                            >
                              <Check size={16} strokeWidth={3} />
                              Accept
                            </button>
                            <button 
                              onClick={() => handleStatusChange(app.id, 'Rejected')}
                              className="flex items-center gap-1.5 bg-[#ff2e2e] text-white px-3 py-1.5 rounded-md hover:bg-[#df2020] transition-colors font-semibold"
                            >
                              <X size={16} strokeWidth={3} />
                              Reject
                            </button>
                          </>
                        ) : (
                          <span className="text-gray-400 italic text-xs">Action taken</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Empty State */}
            {filteredAppointments.length === 0 && (
              <div className="p-12 flex flex-col items-center justify-center text-gray-500">
                <Filter size={32} className="text-gray-300 mb-3" />
                <p className="text-lg font-medium text-gray-600">No appointments found</p>
                <p className="text-sm">Try adjusting your filters or date selection.</p>
              </div>
            )}
          </div>
        </div>

        {/* ================= BACK TO HOME BUTTON ================= */}
        <div className="flex justify-center mt-4">
          <Link to="/" className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}