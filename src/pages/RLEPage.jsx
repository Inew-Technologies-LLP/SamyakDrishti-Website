import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ==========================================
// DATA: RLE Specific FAQs
// ==========================================
const rleFAQs = [
  { 
    question: "What is Refractive Lens Exchange (RLE)?", 
    answer: "RLE replaces your eye’s natural lens with an artificial one, similar to cataract surgery. It’s an excellent option for people over 40 with high prescriptions, early cataracts, or significant long-sightedness. RLE can also reduce future glaucoma risk." 
  },
  { 
    question: "How do I know if ICL or RLE is right for me instead of laser eye surgery?", 
    answer: "Our specialists will guide you. ICL is often recommended for younger patients with very high short-sightedness. RLE is typically better for those over 40 or with lens changes. Your consultation will determine the safest, most effective option for your eyes." 
  },
  { 
    question: "What exactly is RLE?", 
    answer: "Refractive Lens Exchange is elective surgery where your natural lens is removed and replaced with an artificial intraocular lens (IOL) to correct vision — similar to cataract surgery but done before cataracts develop." 
  },
  { 
    question: "Who is suitable for RLE?", 
    answer: "It’s often recommended for people usually over 40 years old with significant refractive errors, early presbyopia, or when laser vision correction is unsuitable. Your specialist evaluates overall eye health and lifestyle needs." 
  },
  { 
    question: "Will RLE stop future cataracts?", 
    answer: "Yes. Because the natural lens is replaced with an artificial IOL, this removes the risk of cataracts in the treated eye." 
  },
  { 
    question: "How long do results last?", 
    answer: "The lenses used in RLE are permanent and won’t degrade over time. Vision improvement tends to be stable, though other age-related eye changes can still occur." 
  },
  { 
    question: "What are the common risks or side effects of RLE?", 
    answer: "Risks include visual effects such as glare or halos, possible IOL displacement, retinal detachment in select eyes, and other rare complications common to intraocular surgery. Your surgeon will discuss these." 
  },
  { 
    question: "What is an Implantable Contact Lens (ICL)?", 
    answer: "An ICL is a tiny, permanent lens placed inside your eye. It’s ideal for high prescriptions or thin corneas unsuitable for laser surgery. Once implanted, it’s invisible, undetectable, and provides sharp, high-definition vision—even at night." 
  },
  { 
    question: "What is a Phakic IOL?", 
    answer: "A phakic intraocular lens (IOL) is a lens placed inside the eye without removing the natural lens to correct high refractive errors. It works alongside your eye’s own lens to improve focus." 
  },
  { 
    question: "Who is a good candidate for Phakic IOL surgery?", 
    answer: "Ideal candidates have high myopia or hyperopia beyond safe laser correction limits, thin corneas, stable vision, and healthy eye anatomy. Doctors usually assess this with detailed eye measurements." 
  },
  { 
    question: "Will the lens be noticeable or hurt after implantation?", 
    answer: "No. Once placed, the lens is hidden inside the eye and is not felt by the patient after the initial healing period. Any early discomfort is due to surgery, not the lens itself." 
  },
  { 
    question: "Can the Phakic IOL be removed later?", 
    answer: "Yes. Although designed to be long-term, phakic lenses can be surgically removed or exchanged if needed, for example due to changes in prescription or eye conditions." 
  },
  { 
    question: "What are the main risks or side effects?", 
    answer: "Risks include cataract formation, rise in intraocular pressure, and gradual endothelial cell loss (corneal health monitoring is needed). Night vision issues like glare or halos can occur but are usually temporary." 
  },
];

// ==========================================
// 1. HERO SECTION
// ==========================================
const RLEHero = () => (
  <section className="relative w-full h-[300px] md:h-[700px] flex items-center justify-center pt-20">
    <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/rle-hero-bg.JPG')" }}></div>
    <div className="absolute inset-0 bg-black/30"></div> 
    
    {/* Added pb-16 to offset the wave's height so text stays centered */}
    <div className="relative z-10 text-center px-4 w-full mx-auto pb-16">
      <h1 className="text-white drop-shadow-md text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-wide">
        Lens Implant & Refractive Lens<br/>Exchange (RLE)
      </h1>
    </div>

    {/* The SVG Wave Divider (Fills to White) */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 120" 
        className="w-full h-[50px] md:h-[100px] lg:h-[120px]" 
        preserveAspectRatio="none"
      >
        <path 
          className="fill-white" 
          d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </div>
  </section>
);

// ==========================================
// 2. TAB NAVIGATION
// ==========================================
const RLETabs = () => (
  <div className="w-full border-b border-gray-200">
    <div className="max-w-[1400px] mx-auto flex gap-12 px-4">
      <Link to="/lasik" className="py-6 text-gray-500 hover:text-[#1b2a4e] transition-colors font-medium">LASIK</Link>
      <Link to="/cataract" className="py-6 text-gray-500 hover:text-[#1b2a4e] transition-colors font-medium">Cataract</Link>
      <div className="py-6 text-[#1b2a4e] border-t-2 border-[#1b2a4e] font-semibold -mt-[2px]">RLE</div>
    </div>
  </div>
);

// ==========================================
// 3. SPLIT DETAIL SECTION (Intro)
// ==========================================
const RLEIntro = () => (
  <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
    <div className="lg:w-[45%]">
      <img src="/rle-eye.jpg" alt="Patient Exam" className="w-full rounded-2xl shadow-lg object-cover" />
    </div>
    <div className="lg:w-1/2 flex flex-col justify-center">
      <div className="inline-block bg-[#cce5d6] text-[#1b2a4e] px-4 py-1.5 rounded-full text-sm font-base self-start mb-6">
        Lens Implant & Refractive Lens Exchange (RLE)
      </div>
      <p className="text-gray-700 text-medium leading-relaxed mb-8">
        Replaces the eye's natural lens with an artificial intraocular lens (IOL) to correct vision and prevent future cataract development. The surgical technique is the same as modern cataract surgery, performed electively before cataracts form.
      </p>
      
      <h4 className="font-serif font-medium text-[#1b2a4e] text-lg mb-4">Why Choose This Service:</h4>
      <ul className="space-y-4 mb-8">
        {["Quick outpatient procedure with minimal downtime and fast recovery.", "Corrects vision without reshaping the cornea and eliminates the risk of future cataracts."].map((text, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-6 h-6 text-[#2c7a51] mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span className="text-gray-700 pt-[2px]">{text}</span>
          </li>
        ))}
      </ul>

      <div className="bg-[#fcebb6] rounded-xl p-6">
        <h4 className="font-serif font-medium text-[#1b2a4e] mb-2">Best For:</h4>
        <p className="text-gray-800 text-sm">Patients with high refractive errors, thin or irregular corneas, or presbyopia.</p>
      </div>
    </div>
  </div>
);

// ==========================================
// 4. TREATMENT TYPES
// ==========================================
const RLETreatmentTypes = () => (
  // Added the background color, padding, and rounded corners here
  <div className="mb-24 bg-[#F3E7B31A] p-8 md:p-12 rounded-2xl">
    <h2 className="text-3xl font-serif text-[#1b2a4e] mb-10">Treatment Types</h2>
    <div className="space-y-10">
      
      <div className="border-l-[5px] border-[#F8E0A2] pl-6 py-1">
        <h3 className="text-xl font-[550] font-serif text-[#1b2a4e] mb-2">Phakic IOL (Implantable Contact Lens)</h3>
        <p className="text-gray-600 font-opensans leading-relaxed">
          A lens is placed inside the eye without removing the natural lens. Best for higher myopia or hyperopia where laser is not suitable. Requires regular follow-up to monitor eye health.
        </p>
      </div>
      
      <div className="border-l-[5px] border-[#1b2a4e] pl-6 py-1">
        <h3 className="text-xl font-[550] font-serif text-[#1b2a4e] mb-2">Refractive Lens Exchange (RLE)</h3>
        <p className="text-gray-600 font-opensans leading-relaxed">
          Replaces the eye's natural lens with an artificial intraocular lens (IOL) to correct vision and prevent future cataract development. The surgical technique is the same as modern cataract surgery, performed electively before cataracts form.
        </p>
      </div>
      
    </div>
  </div>
);

// ==========================================
// 5. WHAT TO EXPECT
// ==========================================
const RLEWhatToExpect = () => (
  <div className="mb-24">
    
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
      
      {/* 1. PROCEDURE BLOCK */}
      <div className="border-l-[4px] border-[#1b2a4e] pl-6 md:pl-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#1b2a4e] text-white flex items-center justify-center font-bold text-lg shrink-0">1</div>
          <h3 className="text-2xl font-serif text-[#1b2a4e] font-medium">The Procedure</h3>
        </div>
        <p className="text-gray-600 max-w-[400px] leading-relaxed">
          RLE is a day-care procedure performed using anaesthetic drops. A small incision is made, the natural lens is gently removed, and a foldable intraocular lens is implanted. The incision is usually self-sealing and does not require stitches.
        </p>
      </div>

      {/* 2. RECOVERY BLOCK */}
      <div className="border-l-[4px] border-[#F8E0A2] pl-6 md:pl-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#F8E0A2] text-[#1b2a4e] flex items-center justify-center font-bold text-lg shrink-0">2</div>
          <h3 className="text-2xl font-serif text-[#1b2a4e] font-medium">Recovery</h3>
        </div>
        <p className="text-gray-600 max-w-[400px] leading-relaxed">
          Vision often improves within one to two days, with further refinement over several weeks. Most daily activities can be resumed within a few days, while full visual adaptation may take longer.
        </p>
      </div>

    </div>
    
    {/* Stats Divider / What to expect Block */}
    {/* Applied bg-gradient-to-r to fade the background from left to right */}
    <div className="bg-gradient-to-r from-[#F3E7B355] to-transparent p-8 md:p-10 rounded-2xl mb-24">
      <h2 className="text-3xl font-serif text-[#1b2a4e] mb-8">What to expect</h2>
      
      <div className="flex justify-between items-center">
        
        <div className="text-start w-1/3">
          {/* Added leading-none and changed mb-2 to mb-1 to tighten the gap */}
          <div className="text-3xl md:text-4xl font-semibold text-[#1b2a4e] leading-none mb-1">≈20min</div>
          {/* Changed text-sm to text-xs and increased tracking to widest */}
          <div className="text-xs text-gray-500 uppercase tracking-widest">Procedure time</div>
        </div>
        
        <div className="text-start w-1/3">
          <div className="text-3xl md:text-4xl font-semibold text-[#1b2a4e] leading-none mb-1">1-2</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest">Days to improvement</div>
        </div>
        
        <div className="text-start w-1/3">
          <div className="text-3xl md:text-4xl font-semibold text-[#1b2a4e] leading-none mb-1">0</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest">Stitches required</div>
        </div>
        
      </div>
    </div>
  </div>
);

// ==========================================
// 6. LENSES GRID
// ==========================================
const RLELensesGrid = () => (
  <div className="mb-24">
    <h3 className="text-xl font-serif font-semibold text-[#364153] mb-8">
      We offer a range of premium intraocular lenses to suit your vision needs and lifestyle:
    </h3>
    
    {/* Switched to gap-x-6 and gap-y-8 to give the rows a bit more vertical breathing room */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
      {[
        { title: "Monofocal", desc: "Single focal point for clear distance vision. Most patients need reading glasses for near tasks." },
        { title: "Toric", desc: "Corrects astigmatism along with distance vision. Ideal for patients with corneal irregularities." },
        { title: "Enhanced Monofocal / EDOF", desc: "" },
        { title: "Multifocal / Trifocal", desc: "" }
      ].map((lens, i) => (
        // New wrapper div to hold both the card and the line
        <div key={i} className="flex flex-col h-full">
          
          {/* The Main Card (flex-grow ensures cards in the same row are the same height) */}
          <div className="border-[2px] border-[#F8E0A2] rounded-xl p-6 hover:shadow-md transition-shadow relative flex-grow bg-white">
            <h4 className="text-xl font-bold text-[#1b2a4e] mb-2">{lens.title}</h4>
            <p className="text-gray-600 text-sm w-5/6">{lens.desc}</p>
            <img 
              src="/RLE-Icon.svg" 
              alt="Lens Icon" 
              className="w-6 h-6 absolute top-6 right-6 opacity-60" 
            />
          </div>

          {/* The Detached Bottom Line */}
          {/* mt-4 creates the gap, h-[2px] makes the line, bg-gray-200 gives it color */}
          <div className="w-full h-[1px] bg-[#11224A] mt-4"></div>
          
        </div>
      ))}
    </div>

    <div className="bg-[#F3E7B333] p-6 md:p-8 rounded-2xl mt-10">
      <p className="text-sm text-gray-600 italic">
        Your surgeon will recommend the most suitable lens option based on your prescription, lifestyle needs, and eye health during your pre-operative consultation.
      </p>
    </div>
    
  </div>
);

// ==========================================
// 7. BENEFITS & RISKS
// ==========================================
const RLEBenefitsRisks = () => (
  <div className="mb-16">
    
    {/* --- BENEFITS SECTION --- */}
    <div className="flex items-center gap-3 mb-6">
      <svg className="w-8 h-8 text-[#2c7a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
      <h2 className="text-3xl font-serif text-[#1b2a4e]">Benefits</h2>
    </div>

    {/* Benefits: Two Separate Boxes Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      
      {/* Left Column Box */}
      <div className="bg-[#eaf4ed] border-l-[4px] border-[#2c7a51] rounded-r-xl p-6 md:p-8 flex flex-col gap-8">
        <div>
          <h4 className="font-[550] text-[#1b2a4e] mb-1">Reduces dependence on glasses</h4>
          <p className="text-gray-600 font-[400] text-sm">Most patients achieve significant reduction in spectacle dependency.</p>
        </div>
        <div>
          <h4 className="font-[550] text-[#1b2a4e] mb-1">Eliminates future cataracts</h4>
          <p className="text-gray-600 font-[400] text-sm">The artificial lens cannot develop cataracts.</p>
        </div>
      </div>

      {/* Right Column Box */}
      <div className="bg-[#eaf4ed] border-l-[4px] border-[#2c7a51] rounded-r-xl p-6 md:p-8 flex flex-col gap-8">
        <div>
          <h4 className="font-[550] text-[#1b2a4e] mb-1">Wide range of prescriptions</h4>
          <p className="text-gray-600 font-[400] text-sm">Suitable for extreme myopia, hyperopia, and astigmatism.</p>
        </div>
        <div>
          <h4 className="font-[550] text-[#1b2a4e] mb-1">Long-term correction</h4>
          <p className="text-gray-600 font-[400] text-sm">Provides stable vision for decades.</p>
        </div>
      </div>

    </div>


    {/* --- RISKS SECTION --- */}
    <div className="flex items-center gap-3 mb-6">
      <svg className="w-8 h-8 text-[#df8733]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
      <h2 className="text-3xl font-serif text-[#1b2a4e]">Risks and Considerations</h2>
    </div>

    {/* Risks Tinted Box (This one remains a single full-width box as per the reference) */}
    <div className="bg-[#fdf8f0] border-l-[4px] border-[#df8733] rounded-r-xl p-6 md:p-8 mb-10">
      <p className="text-gray-700 text-sm mb-6">
        As with any intraocular surgery, there are potential risks that will be discussed in detail during your pre-operative counselling:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 pl-6">
        <ul className="list-disc marker:text-[#df8733] text-gray-600 text-sm space-y-3">
          <li>Infection (rare)</li>
          <li>Retinal detachment</li>
          <li>Visual effects (glare/halos)</li>
        </ul>
        <ul className="list-disc marker:text-[#df8733] text-gray-600 text-sm space-y-3 mt-3 md:mt-0">
          <li>Raised eye pressure</li>
          <li>Lens displacement</li>
          <li>Inflammation</li>
        </ul>
      </div>
      
      <p className="text-sm text-gray-500 mt-8 italic">
        These complications are uncommon. Your surgeon will ensure you understand all risks and benefits before proceeding.
      </p>
    </div>
    
    {/* CTA Button */}
    <div className="mt-8">
        <button className="cursor-pointer bg-[#b4dfc4] text-[#1b2a4e] font-medium px-8 py-3.5 rounded-full hover:bg-[#9cccae] transition-all duration-300 flex items-center font-normal text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          Book Consultation
        </button>
    </div>
    
  </div>
);

// ==========================================
// ==========================================
// 8. REUSED FAQ COMPONENT
// ==========================================
const ServicesFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    // 1. The outer section is now white with standard page padding
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      
      {/* 2. The inner div is now the "Box" with the blue background, max-width, padding, and rounded corners */}
      <div className="max-w-[1500px] mx-auto bg-[#1b2a4e] rounded-md p-8 md:p-16 shadow-lg">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 text-white">
            <h2 className="text-[#e2d5ad] text-3xl md:text-4xl font-serif mb-4">
              Frequently asked<br />Questions
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Quick answers to common concerns about eye procedures, safety, and recovery.
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/20 pb-4">
                <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center text-left text-white focus:outline-none">
                  <span className="text-base md:text-lg pr-4">{faq.question}</span>
                  <svg className={`w-5 h-5 text-white transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="text-gray-300 text-sm mt-4 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

// ==========================================
// MAIN PAGE COMPONENT (Assembles everything)
// ==========================================
export default function RLEPage() {
  return (
    <main className="w-full bg-white pb-20">
      <RLEHero />
      <RLETabs />
      
      {/* Content wrapper for padding and max-width */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 mt-16">
        <RLEIntro />
        <RLETreatmentTypes />
        <RLEWhatToExpect />
        <RLELensesGrid />
        <RLEBenefitsRisks />
      </div>

      <ServicesFAQ faqs={rleFAQs} />
    </main>
  );
}