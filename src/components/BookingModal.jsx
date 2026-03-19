import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Clock, Globe, ArrowLeft, CheckCircle2 } from 'lucide-react'; // Added CheckCircle2
import logoSymbol from "../assets/logo2.png";

export default function BookingModal({ isOpen, onClose }) {
  // --- MODAL STEP STATE ---
  const [step, setStep] = useState(1); // 1 = Calendar View, 2 = Form View, 3 = Success View

  // --- REAL CALENDAR STATE ---
  const [viewDate, setViewDate] = useState(new Date()); 
  const [selectedDate, setSelectedDate] = useState(null); 
  const [selectedTime, setSelectedTime] = useState(null);
  
  // Custom Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("Select reason");

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    notes: '',
    phone: ''
  });

  // --- RESET STATE ON CLOSE ---
  useEffect(() => {
    if (!isOpen) {
      // Delay state reset slightly to let the fade-out animation finish
      setTimeout(() => {
        setStep(1);
        setViewDate(new Date()); 
        setSelectedDate(null);   
        setSelectedTime(null);   
        setSelectedReason("Select reason"); 
        setIsDropdownOpen(false); 
        setFormData({ fullName: '', email: '', notes: '', phone: '' });
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // 13 Services
  const reasons = [
    "LASIK", "Cataract", "Refractive Lens Exchange (RLE)", "Routine Eye Test",
    "Dry Eye Clinic", "Glaucoma Clinic", "Retina & Diabetic Retinopathy",
    "Oculoplastic Clinic", "Squint Clinic", "Myopia Clinic", 
    "Keratoconus Clinic", "Cornea Clinic", "Contact Lens & Optometry"
  ];

  const timeSlots = ["5:30 PM", "6:30 PM", "7:30 PM", "8:30 PM", "9:30 PM"];

  // --- CALENDAR LOGIC CALCULATIONS ---
  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); 
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handlePrevMonth = () => setViewDate(new Date(currentYear, currentMonth - 1, 1));
  const handleNextMonth = () => setViewDate(new Date(currentYear, currentMonth + 1, 1));
  const monthName = viewDate.toLocaleString('default', { month: 'long' });

  const getFormattedSelectedDate = () => {
    if (!selectedDate) return "";
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${days[selectedDate.getDay()]}, ${selectedDate.getDate()}. ${months[selectedDate.getMonth()]}`;
  };

  const getLongDateString = () => {
    if (!selectedDate) return "";
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${days[selectedDate.getDay()]}, ${months[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`;
  };

  const formatTimeRange = (timeStr) => {
    if (!timeStr) return "";
    const [time, period] = timeStr.split(' ');
    const [hour, minute] = time.split(':');
    let h = parseInt(hour, 10);
    let m = parseInt(minute, 10);
    let endM = m + 20;
    let endH = h;
    let endPeriod = period;
    if (endM >= 60) {
      endM -= 60;
      endH += 1;
      if (endH === 12 && period === 'AM') endPeriod = 'PM';
      if (endH === 12 && period === 'PM') endPeriod = 'AM';
      if (endH > 12) endH -= 12;
    }
    const formatStr = (hr, min, p) => `${hr}:${min.toString().padStart(2, '0')}${p.toLowerCase()}`;
    return `${formatStr(h, m, period)} - ${formatStr(endH, endM, endPeriod)}`;
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear;
  };

  // --- ACTIONS ---
  const handleProceedToForm = () => {
    if (selectedReason === "Select reason") {
      alert("Please select a Reason for the visit before confirming.");
      return;
    }
    setStep(2); // Move to form step
  };

  const handleFinalSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (*)");
      return;
    }
    
    // MOVE TO SUCCESS SCREEN INSTEAD OF CLOSING
    setStep(3); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose}></div>

      {/* DYNAMIC MODAL CONTAINER: Changes width/layout based on the step */}
      <div className={`relative bg-white w-full rounded-2xl overflow-hidden flex shadow-2xl animate-in fade-in zoom-in duration-300 transition-all ${
        step === 3 
          ? 'max-w-[600px] min-h-[500px] flex-col' 
          : 'max-w-[1200px] min-h-[600px] flex-col md:flex-row'
      }`}>
        
        <button onClick={onClose} className="cursor-pointer absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-20 transition-colors">
          <X size={24} />
        </button>

        {/* ================= STEP 1 & 2: TWO PANEL LAYOUT ================= */}
        {step < 3 && (
          <>
            {/* LEFT PANEL */}
            <div className="w-full md:w-[40%] bg-[#E8F4FA] p-8 md:p-10 flex flex-col border-r border-blue-50 relative">
              {step === 2 && (
                <button onClick={() => setStep(1)} className="cursor-pointer absolute top-8 left-8 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-white/50">
                  <ArrowLeft size={20} />
                </button>
              )}

              <div className={`${step === 2 ? 'mt-12' : ''}`}>
                {step === 1 ? (
                  // Step 1: Dropdown Selection
                  <>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-3">
                      Reason for the visit
                    </label>
                    <div className="relative z-30">
                      <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="cursor-pointer w-full bg-white border border-gray-200 rounded-lg px-5 py-4 text-[14px] text-left text-gray-600 flex justify-between items-center shadow-sm hover:border-blue-300 transition-colors"
                      >
                        <span className="truncate pr-4">{selectedReason}</span>
                        {isDropdownOpen ? <ChevronUp className="text-gray-400 flex-shrink-0" size={18} /> : <ChevronDown className="text-gray-400 flex-shrink-0" size={18} />}
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 rounded-lg shadow-xl max-h-[250px] overflow-y-auto">
                          <div className="py-2">
                            {reasons.map((reason, index) => (
                              <button
                                key={index}
                                onClick={() => { setSelectedReason(reason); setIsDropdownOpen(false); }}
                                className="cursor-pointer w-full text-left px-5 py-3 text-[13px] text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                              >
                                {reason}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  // Step 2: Static Summary
                  <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                    <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Reason for the visit</p>
                    <h2 className="text-[20px] font-bold text-[#1b2a4e] mb-2">{selectedReason}</h2>
                  </div>
                )}

                {/* Dynamic Summary */}
                {selectedDate && selectedTime && (
                  <div className="mt-10 space-y-5 text-[13px] text-gray-600 animate-in slide-in-from-left-4 fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">20 min</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="font-medium leading-relaxed">
                        {formatTimeRange(selectedTime)}, <br/>{getLongDateString()}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">India Standard Time</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-full md:w-[60%] p-8 md:p-12 bg-white flex flex-col justify-center">
              {step === 1 ? (
                // Step 1: Calendar
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="flex-grow">
                    <h3 className="text-[20px] font-bold text-[#1b2a4e] mb-8">Select Date and Time</h3>
                    <div className="flex justify-center items-center gap-8 mb-8">
                      <button onClick={handlePrevMonth} className="cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors text-blue-500"><ChevronLeft size={20} /></button>
                      <span className="font-medium text-gray-700 text-[15px] w-32 text-center">{monthName} {currentYear}</span>
                      <button onClick={handleNextMonth} className="cursor-pointer p-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"><ChevronRight size={20} /></button>
                    </div>
                    <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center">
                      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => <div key={d} className="text-[10px] font-bold text-gray-400 mb-2">{d}</div>)}
                      {[...Array(firstDayOfMonth)].map((_, i) => <div key={`empty-${i}`} className="h-10 w-10 mx-auto"></div>)}
                      {[...Array(daysInMonth)].map((_, i) => {
                        const day = i + 1;
                        const dateOfThisButton = new Date(currentYear, currentMonth, day);
                        const isPast = dateOfThisButton < today;
                        return (
                          <button
                            key={day}
                            onClick={() => { if (!isPast) { setSelectedDate(dateOfThisButton); setSelectedTime(null); } }}
                            disabled={isPast}
                            className={`cursor-pointer h-10 w-10 rounded-full text-[14px] transition-all flex items-center justify-center mx-auto ${isSelected(day) ? 'bg-blue-600 text-white shadow-md font-semibold' : isPast ? 'text-gray-200 cursor-not-allowed' : 'hover:bg-blue-50 text-gray-700 font-medium'}`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="hidden lg:block w-px bg-gray-100 my-4"></div>
                  <div className="w-full lg:w-56 flex flex-col gap-2.5 pt-[60px]">
                    {selectedDate ? (
                      <>
                        <p className="text-[12px] font-medium text-gray-600 mb-3">{getFormattedSelectedDate()}</p>
                        <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[300px] pr-1 pb-4">
                          {timeSlots.map(time => {
                            const isThisTimeSelected = selectedTime === time;
                            return (
                              <div key={time} className="flex gap-2 w-full animate-in fade-in duration-200">
                                <button onClick={() => setSelectedTime(time)} className={`cursor-pointer py-3 px-4 rounded-lg text-[14px] font-medium transition-all ${isThisTimeSelected ? 'bg-white text-gray-600 border border-blue-400 w-1/2 shadow-sm' : 'bg-white text-blue-600 border border-blue-200 hover:border-blue-400 w-full'}`}>{time}</button>
                                {isThisTimeSelected && <button onClick={handleProceedToForm} className="cursor-pointer bg-blue-600 text-white py-3 px-4 rounded-lg text-[14px] font-medium transition-all w-1/2 hover:bg-blue-700 shadow-md animate-in slide-in-from-right-4">Confirm</button>}
                              </div>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-start pt-10 text-center text-gray-400"><p className="text-[13px]">Select a date to view available times</p></div>
                    )}
                  </div>
                </div>
              ) : (
                // Step 2: Form
                <div className="flex flex-col h-full max-w-md mx-auto w-full animate-in fade-in slide-in-from-right-8 duration-300 pt-4">
                  <div className="flex items-center gap-4 mb-8">
                    <img src={logoSymbol} alt="Samyak Drishti" className="w-18 h-18 object-contain" />
                    <h2 className="text-xl font-bold text-[#1b2a4e]">Samyak Drishti</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Full Name*</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter full name" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Email Address*</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email address" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Additional notes for the doctor</label>
                      <textarea name="notes" value={formData.notes} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[14px] h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all" placeholder="Any specific concerns..."></textarea>
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Phone Number*</label>
                      <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                        <span className="bg-gray-50 border-r border-gray-300 px-4 py-2.5 text-[14px] text-gray-600 flex items-center justify-center whitespace-nowrap">+91</span>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter Phone Number" className="w-full px-4 py-2.5 text-[14px] focus:outline-none" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button onClick={handleFinalSubmit} className="cursor-pointer bg-blue-600 text-white px-8 py-2.5 rounded-lg text-[14px] font-semibold hover:bg-blue-700 transition-all shadow-md">
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* ================= STEP 3: SUCCESS LAYOUT ================= */}
        {step === 3 && (
          <div className="flex flex-col items-center justify-center p-12 text-center w-full h-full animate-in fade-in zoom-in duration-300">
            
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={48} className="text-green-500" />
            </div>
            
            <h2 className="text-[24px] font-bold text-[#1b2a4e] mb-2">
              Appointment request sent Successfully
            </h2>
            <p className="text-gray-500 text-[14px] mb-10">
              You'll receive your confirmation email shortly
            </p>

            {/* Success Details Card */}
            <div className="bg-[#E8F4FA] border border-blue-100 rounded-2xl p-8 text-left w-full max-w-[380px] shadow-sm">
              <div className="mb-6">
                <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Reason for visit
                </p>
                <p className="text-[18px] font-bold text-[#1b2a4e]">
                  {selectedReason}
                </p>
              </div>

              <div className="space-y-4 text-[13px] text-gray-600">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-gray-500" />
                  <span className="font-medium">20 min</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-gray-500 mt-0.5" />
                  <span className="font-medium leading-relaxed">
                    {formatTimeRange(selectedTime)}, <br/>{getLongDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-gray-500" />
                  <span className="font-medium">India Standard Time</span>
                </div>
              </div>
            </div>

            {/* Done Button (Closes Modal completely) */}
            <button 
              onClick={onClose} 
              className="cursor-pointer mt-10 bg-white border border-gray-300 text-gray-700 px-8 py-2.5 rounded-lg text-[14px] font-semibold hover:bg-gray-50 transition-all"
            >
              Done
            </button>
            
          </div>
        )}

      </div>
    </div>
  );
}