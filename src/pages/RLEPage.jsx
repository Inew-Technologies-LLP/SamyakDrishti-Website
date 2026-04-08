import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

// ==========================================
// DATA: RLE Specific FAQs
// ==========================================
const rleFAQs = [
  { question: "What is Refractive Lens Exchange (RLE)?", answer: "RLE replaces your eye’s natural lens with an artificial one, similar to cataract surgery. It’s an excellent option for people over 40 with high prescriptions, early cataracts, or significant long-sightedness. RLE can also reduce future glaucoma risk." },
  { question: "How do I know if ICL or RLE is right for me instead of laser eye surgery?", answer: "Our specialists will guide you. ICL is often recommended for younger patients with very high short-sightedness. RLE is typically better for those over 40 or with lens changes. Your consultation will determine the safest, most effective option for your eyes." },
  { question: "What exactly is RLE?", answer: "Refractive Lens Exchange is elective surgery where your natural lens is removed and replaced with an artificial intraocular lens (IOL) to correct vision — similar to cataract surgery but done before cataracts develop." },
  { question: "Who is suitable for RLE?", answer: "It’s often recommended for people usually over 40 years old with significant refractive errors, early presbyopia, or when laser vision correction is unsuitable." },
  { question: "Will RLE stop future cataracts?", answer: "Yes. Because the natural lens is replaced with an artificial IOL, this removes the risk of cataracts in the treated eye." },
  { question: "How long do results last?", answer: "The lenses used in RLE are permanent and won’t degrade over time. Vision improvement tends to be stable." },
  { question: "What are the common risks or side effects of RLE?", answer: "Risks include visual effects such as glare or halos, possible IOL displacement, and other rare complications. Your surgeon will discuss these." },
  { question: "What is an Implantable Contact Lens (ICL)?", answer: "An ICL is a tiny, permanent lens placed inside your eye. It’s ideal for high prescriptions or thin corneas unsuitable for laser surgery." },
  { question: "What is a Phakic IOL?", answer: "A phakic intraocular lens (IOL) is a lens placed inside the eye without removing the natural lens to correct high refractive errors." },
  { question: "Who is a good candidate for Phakic IOL surgery?", answer: "Ideal candidates have high myopia or hyperopia beyond safe laser correction limits, thin corneas, and healthy eye anatomy." },
  { question: "Will the lens be noticeable or hurt after implantation?", answer: "No. Once placed, the lens is hidden inside the eye and is not felt by the patient after the initial healing period." },
  { question: "Can the Phakic IOL be removed later?", answer: "Yes. Although designed to be long-term, phakic lenses can be surgically removed or exchanged if needed." },
  { question: "What are the main risks or side effects?", answer: "Risks include cataract formation, rise in intraocular pressure, and night vision issues like glare or halos." },
];

// ==========================================
// 1. HERO SECTION
// ==========================================
const RLEHero = () => ( 
  <section className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center pt-10 md:pt-20 mt-20">
    <div 
      className="absolute inset-0 bg-cover" 
      style={{ 
        backgroundImage: "url('/rle-hero-bg.JPG')", 
        backgroundPosition: "center 20%"}}>
    </div>
    <div className="absolute inset-0 bg-black/30"></div> 
    
    <div className="relative z-10 text-center px-4 w-full mx-auto pb-10 md:pb-16">
      <h1 className="text-white drop-shadow-md text-3xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-wide leading-tight mb-6">
        Lens Implant & Refractive <br className="hidden md:block"/>Lens Exchange (RLE)
      </h1>
      
      <div className="h-[2px] w-1/2 max-w-2xl mx-auto bg-white"></div>
      
    </div>

    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[100px] lg:h-[120px]" preserveAspectRatio="none">
        <path className="fill-white" d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>
  </section>
);

// ==========================================
// 2. TAB NAVIGATION (Mobile Scrollable)
// ==========================================
const RLETabs = () => (
  <div className="w-full border-b border-gray-200 overflow-x-auto scrollbar-hide">
    <div className="max-w-[1400px] mx-auto flex gap-8 md:gap-12 px-6 whitespace-nowrap">
      <Link to="/lasik" className="py-4 md:py-6 text-gray-500 hover:text-[#1b2a4e] transition-colors font-medium text-sm md:text-base">LASIK</Link>
      <Link to="/cataract" className="py-4 md:py-6 text-gray-500 hover:text-[#1b2a4e] transition-colors font-medium text-sm md:text-base">Cataract</Link>
      <div className="py-4 md:py-6 text-[#1b2a4e] border-t-2 border-[#1b2a4e] font-semibold -mt-[2px] text-sm md:text-base">RLE</div>
    </div>
  </div>
);

// ==========================================
// 3. SPLIT DETAIL SECTION
// ==========================================
const RLEIntro = () => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center mb-16 md:mb-24">
    <div className="w-full lg:w-[45%]">
      <img src="/rle-eye.jpg" alt="Patient Exam" className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3] md:aspect-auto" />
    </div>
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
      <div className="inline-block bg-[#cce5d6] text-[#1b2a4e] px-4 py-1.5 rounded-full text-xs md:text-sm font-base self-start mb-6">
        Lens Implant & RLE
      </div>
      <p className="text-gray-700 font-opensans text-sm md:text-base leading-relaxed mb-6">
        Replaces the eye's natural lens with an artificial intraocular lens (IOL) to correct vision and prevent future cataract development. The surgical technique is modern and performed before cataracts form.
      </p>
      
      {/* ✅ UPDATED: Added the left border line and custom dots here */}
      <div className="mb-8 border-l-4 border-[#9cccae] pl-5">
        <h4 className="font-serif font-medium text-[#1b2a4e] text-lg mb-4">Why Choose This Service:</h4>
        
        <ul className="flex flex-col gap-4">
          {[
            "Quick outpatient procedure with fast recovery.", 
            "Eliminates the risk of future cataracts."
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              
              {/* Custom Bullet: outer ring + inner filled dot */}
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#2c7a51] bg-[#A8D5BA] shrink-0 mt-[2px]">
                <div className="w-2 h-2 rounded-full bg-[#11224A]"></div>
              </div>

              <span className="text-gray-700 font-opensans text-sm md:text-base leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#fcebb6] rounded-xl p-5 md:p-6">
        <h4 className="font-serif font-medium text-[#1b2a4e] mb-1">Best For:</h4>
        <p className="text-gray-800 font-opensans text-xs md:text-sm">Patients with high refractive errors, thin corneas, or presbyopia.</p>
      </div>
    </div>
  </div>
);

// ==========================================
// 4. TREATMENT TYPES
// ==========================================
const RLETreatmentTypes = () => (
  <div className="mb-16 md:mb-24 bg-[#F3E7B31A] p-6 md:p-12 rounded-2xl">
    <h2 className="text-2xl md:text-3xl font-serif text-[#1b2a4e] mb-8">Treatment Types</h2>
    <div className="space-y-8 md:space-y-10">
      <div className="border-l-[4px] border-[#F8E0A2] pl-4 md:pl-6 py-1">
        <h3 className="text-lg md:text-xl font-semibold font-serif text-[#1b2a4e] mb-2">Phakic IOL (ICL)</h3>
        <p className="text-gray-600 text-sm md:text-base font-opensans leading-relaxed">
          A lens is placed inside the eye without removing the natural lens. Best for higher myopia or hyperopia where laser is not suitable.
        </p>
      </div>
      <div className="border-l-[4px] border-[#1b2a4e] pl-4 md:pl-6 py-1">
        <h3 className="text-lg md:text-xl font-semibold font-serif text-[#1b2a4e] mb-2">Refractive Lens Exchange (RLE)</h3>
        <p className="text-gray-600 text-sm md:text-base font-opensans leading-relaxed">
          Replaces the natural lens with an artificial IOL to correct vision and prevent cataracts. Same technique as modern cataract surgery.
        </p>
      </div>
    </div>
  </div>
);

// ==========================================
// 5. WHAT TO EXPECT
// ==========================================
const RLEWhatToExpect = () => (
  <div className="mb-16 md:mb-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
      <div className="border-l-[4px] border-[#1b2a4e] pl-5 md:pl-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1b2a4e] text-white flex items-center justify-center font-bold shrink-0">1</div>
          <h3 className="text-xl md:text-2xl font-serif text-[#1b2a4e]">The Procedure</h3>
        </div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          A day-care procedure using anaesthetic drops. A small incision is made, the natural lens is removed, and a foldable IOL is implanted.
        </p>
      </div>
      <div className="border-l-[4px] border-[#F8E0A2] pl-5 md:pl-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F8E0A2] text-[#1b2a4e] flex items-center justify-center font-bold shrink-0">2</div>
          <h3 className="text-xl md:text-2xl font-serif text-[#1b2a4e]">Recovery</h3>
        </div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Vision improves within 1-2 days. Most daily activities can be resumed quickly, while adaptation takes a few weeks.
        </p>
      </div>
    </div>
    
    <div className="bg-gradient-to-r from-[#F3E7B355] to-transparent p-6 md:p-10 rounded-2xl">
      <h2 className="text-2xl md:text-3xl font-serif text-[#1b2a4e] mb-8">What to expect</h2>
      {/* Mobile Stack: flex-col, Desktop: flex-row */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start md:items-center">
        {[
          { val: "≈20min", label: "Procedure time" },
          { val: "1-2", label: "Days to improvement" },
          { val: "0", label: "Stitches required" }
        ].map((item, i) => (
          <div key={i} className="w-full md:w-1/3">
            <div className="text-3xl md:text-4xl font-semibold text-[#1b2a4e] mb-1">{item.val}</div>
            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ==========================================
// 6. LENSES GRID
// ==========================================
const RLELensesGrid = () => (
  <div className="mb-16 md:mb-24">
    <h3 className="text-lg md:text-xl font-serif font-semibold text-[#364153] mb-8 leading-relaxed">
      We offer premium intraocular lenses to suit your vision needs:
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-8">
      {[
        { title: "Monofocal", desc: "Single focal point for distance vision. Reading glasses usually needed for near tasks." },
        { title: "Toric", desc: "Corrects astigmatism along with distance vision. Ideal for corneal irregularities." },
        { title: "Enhanced Monofocal", desc: "Provides extended range of vision compared to standard lenses." },
        { title: "Multifocal / Trifocal", desc: "Designed to provide clear vision at all distances: near, intermediate, and far." }
      ].map((lens, i) => (
        <div key={i} className="flex flex-col h-full">
          <div className="border-[2px] border-[#F8E0A2] rounded-xl p-6 hover:shadow-md transition-shadow relative flex-grow bg-white">
            <h4 className="text-lg md:text-xl font-bold text-[#1b2a4e] mb-2 pr-8">{lens.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{lens.desc}</p>
            <img src="/RLE-Icon.svg" alt="" className="w-5 h-5 absolute top-6 right-6 opacity-40" />
          </div>
          <div className="w-full h-[1px] bg-[#11224A] mt-4 hidden md:block"></div>
        </div>
      ))}
    </div>

    <div className="bg-[#F3E7B333] p-5 md:p-8 rounded-2xl mt-8">
      <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed">
        Your surgeon will recommend the most suitable lens option based on your prescription and lifestyle during your consultation.
      </p>
    </div>
  </div>
);

// ==========================================
// 7. BENEFITS & RISKS
// ==========================================
const RLEBenefitsRisks = ({ onBookClick }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-6">
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#2c7a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      <h2 className="text-2xl md:text-3xl font-serif text-[#1b2a4e]">Benefits</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
      {[
        { t: "Reduces glasses dependence", d: "Most achieve significant reduction in spectacle use." },
        { t: "Wide prescription range", d: "Suitable for extreme myopia and hyperopia." },
        { t: "Eliminates future cataracts", d: "Artificial lenses cannot develop cataracts." },
        { t: "Long-term correction", d: "Provides stable vision for decades." }
      ].map((b, i) => (
        <div key={i} className="bg-[#eaf4ed] border-l-[4px] border-[#2c7a51] rounded-r-xl p-5 md:p-6">
          <h4 className="font-semibold text-[#1b2a4e] text-sm md:text-base mb-1">{b.t}</h4>
          <p className="text-gray-600 text-xs md:text-sm">{b.d}</p>
        </div>
      ))}
    </div>

    <div className="flex items-center gap-3 mb-6">
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#df8733]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      <h2 className="text-2xl md:text-3xl font-serif text-[#1b2a4e]">Risks</h2>
    </div>

    <div className="bg-[#fdf8f0] border-l-[4px] border-[#df8733] rounded-r-xl p-5 md:p-8">
      <p className="text-gray-700 text-sm mb-6">Potential risks discussed during counselling:</p>
      <div className="grid grid-cols-2 gap-4 md:gap-12 pl-4">
        <ul className="list-disc marker:text-[#df8733] text-gray-600 text-xs md:text-sm space-y-2">
          <li>Infection</li>
          <li>Detachment</li>
          <li>Glare/Halos</li>
        </ul>
        <ul className="list-disc marker:text-[#df8733] text-gray-600 text-xs md:text-sm space-y-2">
          <li>Pressure</li>
          <li>Displacement</li>
          <li>Inflammation</li>
        </ul>
      </div>
    </div>

    <div className="mt-10 flex justify-center md:justify-start">
      <button onClick={onBookClick} className="cursor-pointer bg-[#b4dfc4] text-[#1b2a4e] px-8 py-3.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        Book Consultation
      </button>
    </div>
  </div>
);

// ==========================================
// 8. REUSED FAQ COMPONENT (Responsive)
// ==========================================
const ServicesFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    // 1. Added bg-[#1b2a4e] and w-full to make the background span the whole screen
    <section className="bg-[#1b2a4e] w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      
      {/* 2. Removed bg-[#1b2a4e], shadow-lg, rounded-xl, and p-6/p-16 from this wrapper */}
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          
          <div className="lg:col-span-4 text-white">
            <h2 className="text-[#e2d5ad] text-2xl md:text-4xl font-serif mb-4 leading-tight">
              Frequently asked<br className="hidden md:block"/>Questions
            </h2>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-sm">
              Quick answers to common concerns about lens procedures and safety.
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/20 pb-4">
                <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center text-left text-white py-2 focus:outline-none">
                  <span className="text-sm md:text-lg pr-4 font-opensans">{faq.question}</span>
                  <svg className={`w-5 h-5 text-white transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="text-gray-300 text-xs md:text-sm leading-relaxed font-opensans">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default function RLEPage({ onBookClick }) {
  return (
    <main className="w-full bg-white">
      <RLEHero />
      <RLETabs />
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 mt-12 md:mt-16">
        <RLEIntro />
        <RLETreatmentTypes />
        <RLEWhatToExpect />
        <RLELensesGrid />
        <RLEBenefitsRisks onBookClick={onBookClick} />
      </div>
      <ServicesFAQ faqs={rleFAQs} />
    </main>
  );
}