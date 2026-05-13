import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Clock, Globe, ArrowLeft, CheckCircle2 } from 'lucide-react';
import logoSymbol from "../assets/logo2.png";

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); 
  const [viewDate, setViewDate] = useState(new Date()); 
  const [selectedDate, setSelectedDate] = useState(null); 
  const [selectedTime, setSelectedTime] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("Select reason");

  const [formData, setFormData] = useState({
    fullName: '', email: '', notes: '', phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ NEW: State to hold all appointments from the database
  const [bookedAppointments, setBookedAppointments] = useState([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
      
      // ✅ NEW: Fetch all appointments as soon as the modal opens
      const fetchBookedSlots = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/appointments`);
          if (response.ok) {
            const data = await response.json();
            setBookedAppointments(data);
          }
        } catch (error) {
          console.error("Failed to fetch booked slots:", error);
        }
      };
      fetchBookedSlots();

    } else {
      document.body.style.overflow = 'unset';  
      setTimeout(() => {
        setStep(1);
        setViewDate(new Date()); 
        setSelectedDate(null);   
        setSelectedTime(null);   
        setSelectedReason("Select reason"); 
        setIsDropdownOpen(false); 
        setFormData({ fullName: '', email: '', notes: '', phone: '' });
        setIsSubmitting(false); 
      }, 300);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const reasons = [
    "LASIK", "Cataract", "Refractive Lens Exchange (RLE)", "Routine Eye Test",
    "Dry Eye Clinic", "Glaucoma Clinic", "Retina & Diabetic Retinopathy",
    "Oculoplastic Clinic", "Squint Clinic", "Myopia Clinic", 
    "Keratoconus Clinic", "Cornea Clinic", "Contact Lens & Optometry"
  ];

  const timeSlots = ["5:30 PM", "6:30 PM", "7:30 PM", "8:30 PM", "9:30 PM"];

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

  const handleProceedToForm = () => {
    if (selectedReason === "Select reason") {
      alert("Please select a Reason for the visit before confirming.");
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (*)");
      return;
    }

    setIsSubmitting(true);
    const formattedDateTime = `${getLongDateString()} at ${selectedTime}`;
    const finalReason = formData.notes ? `${selectedReason} (Notes: ${formData.notes})` : selectedReason;

    const appointmentData = {
      patientName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      dateTime: formattedDateTime,
      reason: finalReason
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        setStep(3); 
      } else {
        alert("Something went wrong saving the appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      alert("Failed to connect to the server. Is the backend running?");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 py-8 sm:p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose}></div>

      <div className={`relative bg-white w-full rounded-2xl flex shadow-2xl animate-in fade-in zoom-in duration-300 transition-all max-h-[90vh] overflow-y-auto md:overflow-hidden ${
        step === 3 ? 'max-w-[600px] min-h-[400px] md:min-h-[500px] flex-col' : 'max-w-[1200px] min-h-[500px] md:min-h-[600px] flex-col md:flex-row'
      }`}>
        
        <button onClick={onClose} className="cursor-pointer absolute top-4 right-4 md:top-6 md:right-6 bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-1.5 md:p-0 rounded-full text-gray-400 hover:text-gray-600 z-50 transition-colors shadow-sm md:shadow-none">
          <X size={24} />
        </button>

        {step < 3 && (
          <>
            {/* LEFT PANEL */}
            <div className="w-full md:w-[40%] bg-[#E8F4FA] p-6 md:p-10 flex flex-col border-b md:border-b-0 md:border-r border-blue-50 relative shrink-0">
              {step === 2 && (
                <button onClick={() => setStep(1)} className="cursor-pointer absolute top-4 left-4 md:top-8 md:left-8 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-white/50 z-10">
                  <ArrowLeft size={20} />
                </button>
              )}

              <div className={`${step === 2 ? 'mt-8 md:mt-12' : ''}`}>
                {step === 1 ? (
                  <>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-3">Reason for the visit</label>
                    <div className="relative z-30">
                      <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="cursor-pointer w-full bg-white border border-gray-200 rounded-lg px-4 py-3 md:px-5 md:py-4 text-[13px] md:text-[14px] text-left text-gray-600 flex justify-between items-center shadow-sm hover:border-blue-300 transition-colors"
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
                  <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                    <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Reason for the visit</p>
                    <h2 className="text-[18px] md:text-[20px] font-bold text-[#1b2a4e] mb-2">{selectedReason}</h2>
                  </div>
                )}

                {selectedDate && selectedTime && (
                  <div className="mt-8 md:mt-10 space-y-4 md:space-y-5 text-[13px] text-gray-600 animate-in slide-in-from-left-4 fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">20 min</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="font-medium leading-relaxed">{formatTimeRange(selectedTime)}, <br/>{getLongDateString()}</span>
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
            <div className="w-full md:w-[60%] p-6 md:p-12 bg-white flex flex-col justify-start md:justify-center">
              {step === 1 ? (
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 h-full animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="flex-grow">
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#1b2a4e] mb-6 md:mb-8">Select Date and Time</h3>
                    <div className="flex justify-center items-center gap-4 md:gap-8 mb-6 md:mb-8">
                      <button onClick={handlePrevMonth} className="cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors text-blue-500"><ChevronLeft size={20} /></button>
                      <span className="font-medium text-gray-700 text-[14px] md:text-[15px] w-28 md:w-32 text-center">{monthName} {currentYear}</span>
                      <button onClick={handleNextMonth} className="cursor-pointer p-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"><ChevronRight size={20} /></button>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-y-2 md:gap-y-4 gap-x-1 text-center">
                      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => <div key={d} className="text-[9px] md:text-[10px] font-bold text-gray-400 mb-2">{d}</div>)}
                      {[...Array(firstDayOfMonth)].map((_, i) => <div key={`empty-${i}`} className="h-8 w-8 md:h-10 md:w-10 mx-auto"></div>)}
                      {[...Array(daysInMonth)].map((_, i) => {
                        const day = i + 1;
                        const dateOfThisButton = new Date(currentYear, currentMonth, day);
                        const isPast = dateOfThisButton < today;
                        return (
                          <button
                            key={day}
                            onClick={() => { if (!isPast) { setSelectedDate(dateOfThisButton); setSelectedTime(null); } }}
                            disabled={isPast}
                            className={`cursor-pointer h-9 w-9 md:h-10 md:w-10 rounded-full text-[13px] md:text-[14px] transition-all flex items-center justify-center mx-auto ${isSelected(day) ? 'bg-blue-600 text-white shadow-md font-semibold' : isPast ? 'text-gray-200 cursor-not-allowed' : 'hover:bg-blue-50 text-gray-700 font-medium'}`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="hidden lg:block w-px bg-gray-100 my-4"></div>
                  
                  <div className="w-full lg:w-56 flex flex-col gap-2.5 pt-4 lg:pt-[60px]">
                    {selectedDate ? (
                      <>
                        <p className="text-[12px] font-medium text-gray-600 mb-2 md:mb-3">{getFormattedSelectedDate()}</p>
                        <div className="flex flex-col gap-2.5 md:overflow-y-auto md:max-h-[300px] pr-1 pb-4">
                          {timeSlots.map(time => {
                            const isThisTimeSelected = selectedTime === time;
                            const currentDateTimeStr = `${getLongDateString()} at ${time}`;
                            
                            // ✅ NEW: The logic that checks if the slot is taken!
                            // It checks if the dateTime matches, if the reason matches, AND if the admin Accepted it.
                            const isSlotBooked = bookedAppointments.some(app => 
                              app.dateTime === currentDateTimeStr && 
                              app.reason && app.reason.includes(selectedReason) && 
                              app.status === 'Accepted'
                            );

                            return (
                              <div key={time} className="flex gap-2 w-full animate-in fade-in duration-200">
                                <button 
                                  onClick={() => !isSlotBooked && setSelectedTime(time)} 
                                  disabled={isSlotBooked}
                                  className={`py-2.5 md:py-3 px-3 md:px-4 rounded-lg text-[13px] md:text-[14px] font-medium transition-all ${
                                    isSlotBooked 
                                      ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed' // Style for Booked
                                      : isThisTimeSelected 
                                        ? 'bg-white text-gray-600 border border-blue-400 w-1/2 shadow-sm cursor-pointer' 
                                        : 'bg-white text-blue-600 border border-blue-200 hover:border-blue-400 w-full cursor-pointer'
                                  }`}
                                >
                                  {isSlotBooked ? 'Booked' : time}
                                </button>
                                
                                {isThisTimeSelected && !isSlotBooked && (
                                  <button onClick={handleProceedToForm} className="cursor-pointer bg-blue-600 text-white py-2.5 md:py-3 px-3 md:px-4 rounded-lg text-[13px] md:text-[14px] font-medium transition-all w-1/2 hover:bg-blue-700 shadow-md animate-in slide-in-from-right-4">
                                    Confirm
                                  </button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-start pt-6 md:pt-10 text-center text-gray-400"><p className="text-[13px]">Select a date to view available times</p></div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full max-w-md mx-auto w-full animate-in fade-in slide-in-from-right-8 duration-300">
                  <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <img src={logoSymbol} alt="Samyak Drishti" className="w-14 h-14 md:w-18 md:h-18 object-contain" />
                    <h2 className="text-lg md:text-xl font-bold text-[#1b2a4e]">Samyak Drishti</h2>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <label className="block text-[12px] md:text-[13px] font-semibold text-gray-700 mb-1.5">Full Name*</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter full name" className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-[12px] md:text-[13px] font-semibold text-gray-700 mb-1.5">Email Address*</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email address" className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-[12px] md:text-[13px] font-semibold text-gray-700 mb-1.5">Additional notes for the doctor</label>
                      <textarea name="notes" value={formData.notes} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px] h-16 md:h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all" placeholder="Any specific concerns..."></textarea>
                    </div>
                    <div>
                      <label className="block text-[12px] md:text-[13px] font-semibold text-gray-700 mb-1.5">Phone Number*</label>
                      <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                        <span className="bg-gray-50 border-r border-gray-300 px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px] text-gray-600 flex items-center justify-center whitespace-nowrap">+91</span>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter Phone Number" className="w-full px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px] focus:outline-none" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-8 flex justify-end">
                    <button 
                      onClick={handleFinalSubmit} 
                      disabled={isSubmitting}
                      className={`cursor-pointer text-white px-8 py-2.5 rounded-lg text-[13px] md:text-[14px] font-semibold transition-all shadow-md w-full md:w-auto ${
                        isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Confirm'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center w-full h-full animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <CheckCircle2 size={40} className="text-green-500 md:w-12 md:h-12" />
            </div>
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#1b2a4e] mb-2">Appointment request sent Successfully</h2>
            <p className="text-gray-500 text-[13px] md:text-[14px] mb-8 md:mb-10">Our team will get in touch with you!</p>
            <div className="bg-[#E8F4FA] border border-blue-100 rounded-2xl p-6 md:p-8 text-left w-full max-w-[380px] shadow-sm">
              <div className="mb-5 md:mb-6">
                <p className="text-[11px] md:text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Reason for visit</p>
                <p className="text-[16px] md:text-[18px] font-bold text-[#1b2a4e]">{selectedReason}</p>
              </div>
              <div className="space-y-3 md:space-y-4 text-[12px] md:text-[13px] text-gray-600">
                <div className="flex items-center gap-3"><Clock size={16} className="text-gray-500 md:w-[18px] md:h-[18px]" /><span className="font-medium">20 min</span></div>
                <div className="flex items-start gap-3"><Clock size={16} className="text-gray-500 mt-0.5 md:w-[18px] md:h-[18px]" /><span className="font-medium leading-relaxed">{formatTimeRange(selectedTime)}, <br/>{getLongDateString()}</span></div>
                <div className="flex items-center gap-3"><Globe size={16} className="text-gray-500 md:w-[18px] md:h-[18px]" /><span className="font-medium">India Standard Time</span></div>
              </div>
            </div>
            <button onClick={onClose} className="cursor-pointer mt-8 md:mt-10 bg-white border border-gray-300 text-gray-700 px-8 py-2.5 rounded-lg text-[13px] md:text-[14px] font-semibold hover:bg-gray-50 transition-all w-full md:w-auto">Done</button>
          </div>
        )}
      </div>
    </div>
  );
}