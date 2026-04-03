import React from 'react';
import Footer from "../components/Footer";


// ==========================================
// 1. HERO SECTION
// ==========================================
const ContactHero = () => (
  <section className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
    <div 
      className="absolute inset-0 bg-cover bg-center" 
      style={{ backgroundImage: "url('/contact-hero.JPG')" }}>
    </div>
    <div className="absolute inset-0 bg-black/30"></div> 
    
    <div className="relative z-10 text-center px-4 w-full mx-auto pb-16">
      <h1 className="text-white drop-shadow-md text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-wide">
        Contact Us
      </h1>
      <div className="h-[2px] w-1/2 max-w-sm mx-auto bg-white"></div>
    </div>

    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-[50px] md:h-[100px] lg:h-[120px]" preserveAspectRatio="none">
        <path className="fill-white" d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>
  </section>
);

// ==========================================
// 2. GET IN TOUCH & COMPACT FEEDBACK FORM
// ==========================================
const GetInTouchSection = () => {
  const [formData, setFormData] = React.useState({
    serviceUsed: '',
    overallExperience: '',
    waitingTime: '',
    staffInteraction: '',
    concernExplained: ''
  });

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name.replace(/[^a-zA-Z0-9]/g, '').replace(/^\w/, c => c.toLowerCase())]: value
    }));
  };

  const radioGroup = (name, options) => {
    const stateKey = name.replace(/[^a-zA-Z0-9]/g, '').replace(/^\w/, c => c.toLowerCase());
    
    return (
      <div>
        <label className="block text-[#1b2a4e] font-semibold text-[13.5px] mb-1.5 font-opensans">{name}:</label>
        <div className="flex flex-wrap gap-x-5 gap-y-1.5">
          {options.map((opt, i) => {
            const isChecked = formData[stateKey] === opt;
            return (
              <label key={i} className="flex items-center gap-2 text-[13.5px] text-gray-500 cursor-pointer font-opensans hover:text-gray-800 transition-colors">
                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${isChecked ? 'border-[#1b2a4e]' : 'border-gray-400'}`}>
                  {isChecked && <div className="w-[6px] h-[6px] rounded-full bg-[#1b2a4e]"></div>}
                </div>
                <input 
                  type="radio" 
                  name={name} 
                  value={opt}
                  className="hidden" 
                  onChange={() => handleRadioChange(name, opt)}
                  checked={isChecked}
                />
                <span className={isChecked ? 'text-gray-800 font-medium' : ''}>{opt}</span>
              </label>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-24 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
      
      {/* Left Column: Contact Info */}
      <div className="lg:col-span-6 lg:pr-8">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1b2a4e] font-semibold mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-[15px] font-opensans leading-relaxed mb-10 max-w-[550px]">
          We're here to help you achieve visual independence. Whether you're scheduling a consultation, have questions about our procedures, or need support, our team is ready to assist you.
        </p>

        <div className="space-y-4 mb-32 mt-20">
          <div className="flex items-start gap-4">
            <svg className="w-5 h-5 text-[#1b2a4e] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <div className="text-gray-700 text-sm font-opensans space-y-1">
              <p>+91-22-23623937</p>
              <p>+91 84337 23937</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg className="w-5 h-5 text-[#1b2a4e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <p className="text-gray-700 text-sm font-opensans">info@samyakdrishti.com</p>
          </div>
          <div className="flex items-start gap-4">
            <svg className="w-5 h-5 text-[#1b2a4e] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <p className="text-gray-700 text-sm font-opensans max-w-[280px] leading-relaxed">
              101, 1st Floor, Sukh Sagar, N S Patkar Marg, Girgaon Chowpatty, Mumbai - 400007
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#1b2a4e] mb-1.5 font-opensans">Emergency Contact:</h4>
          <p className="text-gray-600 text-[13.5px] font-opensans mb-4">For urgent eye care needs outside regular hours, please call:</p>
          <div className="space-y-2.5">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span className="text-gray-600 font-opensans text-[14px] font-medium">+91 7738273937</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span className="text-gray-600 font-opensans text-[14px] font-medium">+91 72089 03937</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Feedback Form pinned to the right side */}
      <div className="lg:col-span-6 flex justify-end">
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] w-full max-w-[450px] h-max">
          <h3 className="text-[24px] font-serif text-[#16213e] font-medium mb-5">Patient Feedback Form</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-[#1b2a4e] font-semibold text-[13.5px] mb-1.5 font-opensans">Date of Visit:</label>
              <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13.5px] focus:outline-none focus:border-[#1b2a4e] focus:ring-1 focus:ring-[#1b2a4e] font-opensans text-gray-500 transition-colors" />
            </div>
            <div className="space-y-3">
              {radioGroup("Service Used", ["Lasik", "Cataract", "General Eye Check", "Diagnostics", "Other"])}
              {radioGroup("Overall Experience", ["Excellent", "Good", "Fair", "Poor"])}
              {radioGroup("Waiting Time", ["Excellent", "Good", "Fair", "Poor"])}
              {radioGroup("Staff Interaction", ["Excellent", "Good", "Fair", "Poor"])}
              {radioGroup("Was your concern clearly explained?", ["Yes", "Somewhat", "No"])}
            </div>
            <div>
              <label className="block text-[#1b2a4e] font-semibold text-[13.5px] mb-1.5 font-opensans">What worked well?</label>
              <input type="text" placeholder="Share your positive experiences..." className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13.5px] focus:outline-none focus:border-[#1b2a4e] focus:ring-1 focus:ring-[#1b2a4e] font-opensans text-gray-500 transition-colors" />
            </div>
            <div>
              <label className="block text-[#1b2a4e] font-semibold text-[13.5px] mb-1.5 font-opensans">What can we improve?</label>
              <textarea rows="2" placeholder="Help us serve you better..." className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13.5px] focus:outline-none focus:border-[#1b2a4e] focus:ring-1 focus:ring-[#1b2a4e] font-opensans text-gray-500 transition-colors resize-none"></textarea>
            </div>
            <button type="button" className="w-full bg-[#16213e] text-white font-medium py-2.5 rounded-lg hover:bg-[#111827] transition-colors shadow-sm mt-2 text-[14px] font-opensans">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const SpecialityHours = () => {
  const doctors = [
    { 
      name: "Dr. Aashish Ahuja", 
      role: "Retina Consultant",
      qual: "MBBS, DNB (Retina)", 
      time: "Monday, 4:00 PM – 6:00 PM",
      icon: "/retina-icon.png" 
    },
    { 
      name: "Dr. Kartik Panikar", 
      role: "Glaucoma Consultant",
      qual: "MBBS, DNB, FRCS (Edin)", 
      time: "Friday, 3:00 PM – 5:00 PM",
      icon: "/glaucoma-icon.png"
    },
    { 
      name: "Dr. Akshay Nair", 
      role: "Oculoplasty and Orbital Oncology Consultant",
      qual: "DNB, Fellowship (LVPEI), International Council of Ophthalmology Fellow, New York Eye & Ear Infirmary of Mount Sinai, USA", 
      time: "On Call Appointments",
      icon: "/oculoplasty-icon.png"
    },
    { 
      name: "Dr. Mitesh Jain", 
      role: "Cornea Specialist",
      qual: "MBBS, DNB", 
      time: "Friday, 3:00 PM – 4:00 PM",
      icon: "/cornea-icon.png"
    },
    { 
      name: "Dr. Uppal Gandhi", 
      role: "Squint & Pediatric Ophthalmology Specialist",
      qual: "DNB, Fellowship in Pediatric Ophthalmology, Strabismus, and Neuro-Ophthalmology", 
      time: "Thursday & Saturday, 3:00 PM – 5:00 PM",
      icon: "/squint-icon.png",
      //Added a specific scale class just for this icon to bypass the image padding
      iconClass: "scale-140" 
    },
    { 
      name: "Mr. Rajendra Pawar", 
      role: "Ocularist & Optometrist",
      qual: "Master of Optometry, Vision Therapist, and Specialist in Contact Lenses", 
      time: "Tuesday, 3:00 PM – 5:00 PM",
      icon: "/ocularist-icon.png"
    },
  ];

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-serif text-[#1b2a4e] font-semibold mb-10">Speciality Consultation Hours</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-18 gap-y-10">
        {doctors.map((doc, idx) => (
          <div key={idx} className="border border-gray-200 rounded-2xl p-7 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex gap-4 h-full">
            
            {/* The Icon Container */}
            <div className="w-10 h-10 rounded-full bg-[#A8D5BA] flex items-center justify-center shrink-0 overflow-hidden">
              {/* ✅ Applied the optional iconClass here */}
              <img 
                src={doc.icon} 
                alt={doc.role} 
                className={`w-6 h-6 object-contain ${doc.iconClass || ""}`} 
              />
            </div>

            {/* The Text Content */}
            <div className="flex flex-col h-full">
              <h4 className="font-bold text-[#1b2a4e] text-xl mb-0.5">{doc.name}</h4>
              <p className="text-[#A8D5BA] text-sm font-medium font-opensans mb-1">{doc.role}</p>
              <p className="text-[#4A5565] text-[11px] font-opensans leading-relaxed mb-4 flex-grow">
                {doc.qual}
              </p>
              <div className="flex items-center gap-2 text-gray-700 font-medium text-sm font-opensans">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {doc.time}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 4. CONSULTATION TIMINGS
// ==========================================
const ConsultationTimings = () => (
  <div className="mb-24">
    <h2 className="text-3xl font-serif text-[#1b2a4e] font-semibold mb-10">Consultation Timings</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Regular Consultation Box */}
      <div className="rounded-2xl p-8 border border-[#E5E7EB] bg-white">
        {/* Row 1: Icon and Title on the same line */}
        <div className="flex items-center gap-3 mb-5">
          <svg className="w-5 h-5 text-[#A8D5BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 className="text-[24px] font-serif font-normal text-[#1b2a4e]">Regular Consultation Hours</h3>
        </div>
        
        {/* Row 2: Content starts from the same left-point as the symbol above */}
        <div className="space-y-3 text-gray-700 font-opensans text-sm">
          <p><span className="font-bold mr-2 text-[#364153]">Monday – Saturday:</span> 10:00 AM – 7:00 PM</p>
          <p><span className="font-bold mr-2 text-[#364153]">Sunday:</span> Closed</p>
        </div>
      </div>

      {/* Charity Clinic Box */}
      <div className="rounded-2xl p-8 border border-[#E5E7EB] bg-white">
        {/* Row 1: Clock Icon and Title */}
        <div className="flex items-center gap-3 mb-1">
          <svg className="w-5 h-5 text-[#A8D5BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 className="text-[24px] font-serif font-normal text-[#1b2a4e]">Charity Eye Clinic Timings</h3>
        </div>
        
        {/* Row 2: Description and Times aligned to the icon above */}
        <div className="space-y-3 font-opensans text-sm">
          <p className="text-[#a5aab5] text-[13px] mb-4">Charitable services run by Dr. Manisha Shah</p>
          <div className="space-y-3 text-gray-700">
            <p><span className="font-bold mr-2 text-[#364153]">Tuesday & Thursday:</span> 10:00 AM – 1:00 PM</p>
            <p><span className="font-bold mr-2 text-[#364153]">Sunday:</span> Closed</p>
          </div>
        </div>
      </div>

    </div>
  </div>
);

// ==========================================
// 5. GET DIRECTIONS
// ==========================================
const GetDirections = () => (
  <div className="mb-24">
    {/* Heading with Pin Icon */}
    <div className="flex items-center gap-3 mb-10">
      <svg className="w-8 h-8 text-[#e3342f]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
      <h2 className="text-3xl font-serif text-[#1b2a4e] font-semibold">Get Directions</h2>
    </div>

    {/* Live Google Map Area */}
    <div className="w-full h-[450px] rounded-t-2xl overflow-hidden border-x border-t border-[#D1D5DC] shadow-inner relative">
    <iframe
        title="Samyak Drishti Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.439614331923!2d72.81073697595627!3d18.95618285572157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cefa8350e16b%3A0x78d1c76d962a5adf!2sSamyak%20Drishti%20Eye%20Centre!5e0!3m2!1sen!2sin!4v1773137358579!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>

    {/* Landmarks & Transport Container - Matches Reference UI */}
    <div className="bg-[#EFF6FF] rounded-b-2xl p-8 lg:p-10 border-x border-b border-[#D1D5DC] grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Column 1: Nearest Landmarks */}
      <div>
        <h4 className="text-[#1b2a4e] font-bold text-lg mb-3 font-serif">Nearest Landmarks</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1b2a4e] mt-2.5 shrink-0"></div>
            <span className="text-gray-700 font-opensans text-sm leading-relaxed">Girgaon Chowpatty Beach</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1b2a4e] mt-2.5 shrink-0"></div>
            <span className="text-gray-700 font-opensans text-sm leading-relaxed">Charni Road Railway Station (10-minute walk)</span>
          </li>
        </ul>
      </div>

      {/* Column 2: Public Transport - Emoji formatting as per reference */}
      <div>
        <h4 className="text-[#1b2a4e] font-bold text-lg mb-3 font-serif">Public Transport</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-3 text-sm">
            <span className="text-lg leading-none shrink-0">🚆</span>
            <span className="text-gray-700 font-opensans leading-relaxed">
              <strong className="text-[#1b2a4e] font-bold">Local Train:</strong> Charni Road Station (Western Line)
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="text-lg leading-none shrink-0">🚌</span>
            <span className="text-gray-700 font-opensans leading-relaxed">
              <strong className="text-[#1b2a4e] font-bold">Bus:</strong> Multiple BEST bus routes serve Girgaon area
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="text-lg leading-none shrink-0">🚇</span>
            <span className="text-gray-700 font-opensans leading-relaxed">
              <strong className="text-[#1b2a4e] font-bold">Metro:</strong> Grant Road Metro Station (Aqua Line)
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function ContactUsPage() {
  return (
    <main className="w-full bg-white ">
      <ContactHero />
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        <GetInTouchSection />
        <SpecialityHours />
        <ConsultationTimings />
        <GetDirections />
        
      </div>
    </main>
  );
}