import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ==========================================
// DATA: Cataract Specific FAQs
// ==========================================
const cataractFAQs = [
  { 
    question: "What is a cataract?", 
    answer: "A cataract is the clouding of your natural lens that causes blurred or dim vision." 
  },
  { 
    question: "What types of lens implants (IOLs) are available?", 
    answer: (
      <div className="space-y-3">
        <p>The right lens for you depends on your lifestyle and vision goals. We offer a full range:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Monofocal Lenses:</strong> Provide clear vision at one set distance (usually far). You will need glasses for computer use and reading.</li>
          <li><strong>Toric Lenses:</strong> Correct astigmatism as well as cataracts, providing clearer distance vision and reducing dependence on glasses for distance.</li>
          <li><strong>Multifocal & Trifocal Lenses:</strong> These advanced lenses have built-in zones to provide clear vision at multiple distances (far, intermediate, and near), greatly reducing the need for glasses for most activities.</li>
          <li><strong>Extended Depth of Focus (EDOF) Lenses:</strong> The latest technology, offering a smooth, continuous range of vision from far to intermediate/near with minimal visual side effects like glare or halos. They are excellent for driving, screen use, and hobbies, though reading very fine print may still require glasses.</li>
        </ul>
      </div>
    ) 
  },
  { 
    question: "When do I need cataract surgery?", 
    answer: "Surgery is recommended when cataracts begin to interfere with your daily life—affecting your ability to drive, read, enjoy hobbies, or feel safe navigating your surroundings. If stronger glasses no longer help, it’s usually time to discuss your options." 
  },
  { 
    question: "Is cataract surgery safe?", 
    answer: "Yes. Cataract surgery is one of the safest and most successful eye procedures. Complications are rare." 
  },
  { 
    question: "What happens during surgery?", 
    answer: "Modern cataract surgery is quick and highly effective. We use ultrasound energy to gently break up the cloudy lens, which is then removed through a tiny incision. A new, clear artificial lens (called an intraocular lens or IOL) is implanted in its place." 
  },
  { 
    question: "How long does cataract surgery take?", 
    answer: "The procedure usually takes 10 to 15 minutes per eye and is done as a day-care visit." 
  },
  { 
    question: "What is recovery like after surgery?", 
    answer: "Recovery is usually straightforward. You can go home the same day. Vision improves over several days to weeks. You'll use medicated eye drops for a few weeks, avoid strenuous activity and getting water in your eye initially, and attend follow-up appointments. Most people resume normal activities within a few days." 
  },
  { 
    question: "When can I resume normal activities?", 
    answer: "Light activities are usually possible the next day. Avoid eye rubbing, swimming, and dusty environments for one to two weeks. Swimming, gym and dusty exposure are restricted for a period depending on healing." 
  },
  { 
    question: "Do I still need glasses after cataract surgery?", 
    answer: "This depends on the lens you choose. Monofocal lenses often require reading glasses. Multifocal and toric lenses reduce the need for glasses for many daily tasks." 
  },
  { 
    question: "What is a 'secondary cataract'?", 
    answer: "Sometimes, months or years after surgery, the thin capsule that holds your new lens can become cloudy, causing vision to blur again. This is not the cataract returning. It's easily fixed with a quick, painless laser procedure called a YAG capsulotomy, which restores clear vision in minutes." 
  },
  { 
    question: "How do I prepare for surgery?", 
    answer: "We will guide you through every step, which includes a comprehensive eye scan to measure your eye and select the perfect lens power, a review of your medical history, and instructions on any medications to adjust. Please arrange for someone to drive you home after the procedure." 
  },
  { 
    question: "Is FLACS better than standard phaco?", 
    answer: "Not necessarily for everyone. Both are excellent. FLACS is most useful when it adds precision for a particular eye or premium lens plan." 
  },
  { 
    question: "Will a premium lens guarantee no glasses?", 
    answer: "No. Premium lenses can reduce dependence, but outcomes vary and some people still use glasses for specific tasks or lighting conditions." 
  },
  { 
    question: "Will premium lenses affect night driving?", 
    answer: "Some premium optics can increase halos/glare. Careful selection and counselling are important, especially for frequent night drivers." 
  }
];

// ==========================================
// 1. HERO SECTION
// ==========================================
const CataractHero = () => (
  // Adjusted pt-20 to pt-10 md:pt-20 for mobile header
  <section className="relative w-full h-[350px] md:h-[600px] flex items-center justify-center pt-10 md:pt-20">
    {/* Replace with your actual cataract hero background image */}
    <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/cataract-hero-bg.JPG')", backgroundPosition: "center center" }}></div>
    <div className="absolute inset-0 bg-black/40"></div> 
    
    {/* Adjusted pb-16 to pb-10 md:pb-16 for mobile */}
    <div className="relative z-10 text-center px-4 w-full mx-auto pb-10 md:pb-16">
      {/* Scaled text-5xl to text-4xl on mobile */}
      <h1 className="text-white drop-shadow-md text-4xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-wide">
        Cataract
      </h1>
    </div>

    {/* The SVG Wave Divider */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[100px] lg:h-[120px]" preserveAspectRatio="none">
        <path className="fill-white" d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>
  </section>
);

// ==========================================
// 2. TAB NAVIGATION
// ==========================================
const CataractTabs = () => (
  // Added overflow-x-auto to make tabs scrollable on small devices
  <div className="w-full border-b border-gray-200 overflow-x-auto scrollbar-hide">
    <div className="max-w-[1400px] mx-auto flex gap-8 md:gap-12 px-6 whitespace-nowrap">
      <Link to="/lasik" className="py-4 md:py-6 text-gray-500 hover:text-[#1b2a4e] transition-colors font-medium text-sm md:text-base">LASIK</Link>
      <div className="py-4 md:py-6 text-[#1b2a4e] border-t-2 border-[#1b2a4e] font-semibold -mt-[2px] text-sm md:text-base">Cataract</div>
      <Link to="/rle" className="py-4 md:py-6 text-gray-500 hover:text-[#1b2a4e] transition-colors font-medium text-sm md:text-base">RLE</Link>
    </div>
  </div>
);

// ==========================================
// 3. SPLIT DETAIL SECTION (Intro)
// ==========================================
const CataractIntro = () => {
  // 1. Add state to track if the text is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-16 md:mb-24 mt-10 md:mt-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-10">
        {/* Added w-full for mobile stacking */}
        <div className="w-full lg:w-[45%]">
          <img src="/cataract-exam.jpg" alt="Cataract Exam" className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3] md:aspect-auto" />
        </div>
        {/* Added w-full for mobile stacking */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="inline-block bg-[#cce5d6] text-[#1b2a4e] px-4 py-1.5 rounded-full text-xs md:text-sm font-base self-start mb-6">
            Cataract
          </div>
          <p className="text-gray-700 font-opensans text-sm md:text-base leading-relaxed mb-6 md:mb-8">
            Expert cataract care with safe, precise surgery to restore clear vision, with a range of lens options to suit your lifestyle.
          </p>
          
          <h4 className="font-serif font-medium text-[#1b2a4e] text-lg mb-4">Why Choose This Service:</h4>
          <ul className="space-y-3 md:space-y-4 mb-8">
            {["Quick, day-care procedure with fast recovery", "Proven success rate with experienced surgeons"].map((text, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2c7a51] mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-gray-700 font-opensans text-sm md:text-base pt-[2px]">{text}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#fcebb6] rounded-xl p-5 md:p-6">
            <h4 className="font-serif font-medium text-[#1b2a4e] mb-1 md:mb-2">Best For:</h4>
            <p className="text-gray-800 font-opensans text-xs md:text-sm">Adults with cloudy or blurred vision, glare, or difficulty driving at night.</p>
          </div>
        </div>
      </div>
      
      {/* "How it Works" sub-section */}
      <div className="max-w-[1400px] bg-gray-50 p-5 md:p-8 rounded-2xl border border-gray-100">
        <h4 className="font-serif font-semibold text-[#1b2a4e] text-lg md:text-xl mb-4">How it Works:</h4>
        
        <div className="text-gray-700 font-opensans text-sm md:text-base mb-4 transition-all duration-300">
          <p className="leading-relaxed">
            Modern cataract surgery is also refractive surgery. The goal is not only to remove the cataract, but to match the lens choice to your lifestyle (distance, intermediate and near vision){!isExpanded && "..."}
          </p>

          {/* 2. Conditionally render the rest of the text based on isExpanded state */}
          {isExpanded && (
            <div className="mt-6 space-y-6 animate-fade-in-down">
              <p className="leading-relaxed">
                At Samyak Drishti, patients can choose between two advanced options:<br/>
                <span className="font-semibold text-[#1b2a4e]">Micro-Incision Cataract Surgery (MICS)</span> and <span className="font-semibold text-[#1b2a4e]">Femtosecond Laser-Assisted Cataract Surgery (FLACS)</span> at Sir HN Reliance Foundation Hospital for patients who prefer the highest level of precision available today.
              </p>

              <div>
                <h5 className="font-serif font-medium text-[#1b2a4e] text-base md:text-lg mb-2 md:mb-3">Aftercare essentials:</h5>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#2c7a51]">
                  <li>Do not rub the operated eye. Use drops exactly as prescribed.</li>
                  <li>Avoid water splashes into the eye, dusty environments and swimming for the advised period.</li>
                  <li>Seek urgent care for severe pain, sudden vision drop, increasing redness or discharge.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        {/* 3. The Toggle Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#2c7a51] font-opensans font-semibold text-sm cursor-pointer hover:text-[#1e5438] transition-colors flex items-center gap-1"
        >
          {isExpanded ? "Read less" : "Read more"}
          <svg className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </div>

    </div>
  );
};

// ==========================================
// 4. TREATMENT TYPES (Detailed List)
// ==========================================
const CataractTypesList = () => {
  const treatments = [
    {
      id: 1,
      title: "Cataract Evaluation",
      what: "A detailed eye assessment to confirm cataract diagnosis and plan safe, accurate cataract surgery based on eye health and visual needs.",
      why: "A comprehensive eye examination confirms the presence and severity of cataracts, evaluates retinal and overall eye health, and enables precise measurements for accurate surgical planning and lens selection.",
      bestFor: "Individuals experiencing vision changes such as blur, glare, or difficulty with night driving, who may be considering cataract surgery"
    },
    {
      id: 2,
      title: "Micro-Incision Cataract Surgery",
      what: "A modern small-incision cataract procedure where ultrasound breaks the cloudy lens, which is removed and replaced with a clear intraocular lens (IOL). It is usually a day-care surgery under anaesthetic drops.",
      why: "Quick procedure, very small incision, fast healing, and excellent visual outcomes with a wide range of lens options, including monofocal, multifocal, and toric lenses for astigmatism.",
      bestFor: "Patients looking for safe, reliable cataract surgery with customizable lens choices."
    },
    {
      id: 3,
      title: "Femtosecond Laser-Assisted Cataract Surgery (FLACS)",
      what: "A more automated, laser-guided version of cataract surgery that increases accuracy by reducing manual steps. The laser creates precise incisions and a highly accurate lens opening, preparing the cataract for gentler removal and better placement of premium lenses.",
      why: "Technology allows for higher precision, reduced energy used inside the eye, better stability for premium lenses, and smoother recovery for many patients.",
      bestFor: "Patients choosing premium lenses, those with complex cataracts, anyone with lower corneal cell counts, or those preferring a bladeless, technology-led approach.",
      highlight: "Femtosecond Laser-Assisted Cataract Surgery (FLACS) is offered by Dr Sujal Shah at Sir H.N. Reliance Foundation Hospital."
    },
    {
      id: 4,
      title: "Image Guided Cataract Surgery",
      what: "Image Guided Cataract Surgery uses advanced pre-operative imaging and real-time digital guidance to help your surgeon perform each step of cataract surgery with exceptional precision. High-resolution images of your eye are captured before surgery and integrated into surgical planning and intra-operative overlays, allowing exact placement of incisions and intraocular lenses (IOLs).",
      whyList: [
        "Enhanced accuracy and consistency in surgical steps, including precise incisions and lens alignment.",
        "Better planning for toric and premium lenses with minimised manual marking errors.",
        "Customised, eye-specific mapping that supports improved refractive outcomes.",
        "Real-time guidance during surgery for incisions and IOL positioning."
      ],
      bestFor: "Patients choosing advanced lens options such as toric or multifocal IOLs, those with astigmatism, and anyone who wants the highest level of precision and predictability in cataract surgery.",
      highlight: "Image Guided Cataract Surgery is offered by Dr Sujal Shah at Sir H.N. Reliance Foundation Hospital."
    }
  ];

  return (
    <div className="mb-16 md:mb-24 space-y-6 md:space-y-8">
      {treatments.map((t) => (
        <div key={t.id} className="border border-gray-200 rounded-2xl p-5 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl md:text-2xl font-serif text-[#1b2a4e] font-[550] mb-4 md:mb-6">
            {t.id}. {t.title}
          </h2>
          
          <div className="space-y-4 md:space-y-6">
            <div>
              <h4 className="font-[500] text-[#1b2a4e] mb-1 md:mb-2 font-opensans text-sm md:text-base">What it is:</h4>
              <p className="text-gray-600 font-opensans text-sm md:text-base leading-relaxed">{t.what}</p>
            </div>
            
            <div>
              <h4 className="font-[500] text-[#1b2a4e] mb-1 md:mb-2 font-opensans text-sm md:text-base">Why it helps:</h4>
              {t.why ? (
                <p className="text-gray-600 font-opensans text-sm md:text-base leading-relaxed">{t.why}</p>
              ) : (
                <ul className="list-disc text-gray-600 font-opensans text-sm md:text-base pl-5 space-y-2">
                  {t.whyList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-[#F8E0A2] rounded-xl p-4 md:p-6 mt-4 md:mt-6">
              <h4 className="font-serif font-medium text-[#1b2a4e] mb-1 md:mb-2 text-sm md:text-base">Best for:</h4>
              <p className="text-gray-800 font-opensans text-xs md:text-sm">{t.bestFor}</p>
            </div>

            {t.highlight && (
              <div className="bg-[#A8D5BA] text-[#11224A] rounded-md p-3 md:p-4 text-xs md:text-sm font-medium border border-[#b4dfc4] mt-4">
                {t.highlight}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// ==========================================
// 5. SURGERY GUIDE & CTA
// ==========================================
const CataractSurgeryGuide = () => (
  <div className="mb-16 md:mb-24">
    <h2 className="text-2xl md:text-3xl font-serif text-[#1b2a4e] mb-8 md:mb-10 font-semibold">Cataract Surgery Guide</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      
      {/* Column 1 */}
      <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
        <h3 className="text-lg md:text-xl font-serif font-semibold text-[#1b2a4e] mb-4 md:mb-6">Day Before</h3>
        <ul className="list-disc marker:text-[#2c7a51] text-gray-600 font-opensans text-sm md:text-base space-y-2 md:space-y-3 pl-5">
          <li>Continue regular medications (unless told otherwise)</li>
          <li>Use prescribed antibiotic drops if given</li>
          <li>Wash hair/face; avoid heavy meals unless instructed</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
        <h3 className="text-lg md:text-xl font-serif font-semibold text-[#1b2a4e] mb-4 md:mb-6">Day of Surgery</h3>
        <ul className="list-disc marker:text-[#2c7a51] text-gray-600 font-opensans text-sm md:text-base space-y-2 md:space-y-3 pl-5">
          <li>Arrive early for dilation</li>
          <li>Surgery done with anaesthetic drops; no pain</li>
          <li>Go home the same day with a protective shield</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
        <h3 className="text-lg md:text-xl font-serif font-semibold text-[#1b2a4e] mb-4 md:mb-6">Day After</h3>
        <ul className="list-disc marker:text-[#2c7a51] text-gray-600 font-opensans text-sm md:text-base space-y-2 md:space-y-3 pl-5">
          <li>Vision may be slightly blurry or bright</li>
          <li>Avoid rubbing or getting water in the eye</li>
          <li>Follow the exact eye drop schedule provided</li>
        </ul>
      </div>

    </div>

    {/* CTA Button: Added flex justify-center for mobile */}
    <div className="mt-10 flex justify-center md:justify-start">
      <button className="cursor-pointer bg-[#b4dfc4] text-[#1b2a4e] font-medium px-8 py-3.5 rounded-full hover:bg-[#9cccae] transition-all duration-300 flex items-center text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        Book Consultation
      </button>
    </div>
  </div>
);

// ==========================================
// 6. REUSED FAQ COMPONENT
// ==========================================
const ServicesFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto bg-[#1b2a4e] rounded-md p-6 md:p-16 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-4 text-white">
            <h2 className="text-[#e2d5ad] text-2xl md:text-4xl font-serif mb-4 leading-tight">
              Frequently asked<br className="hidden md:block" />Questions
            </h2>
            <p className="text-gray-300 font-opensans text-xs md:text-sm leading-relaxed max-w-sm">
              Quick answers to common concerns about eye procedures, safety, and recovery.
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/20 pb-4">
                <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center text-left text-white focus:outline-none py-2">
                  <span className="text-sm md:text-lg pr-4 font-opensans">{faq.question}</span>
                  <svg className={`w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="text-gray-300 font-opensans text-xs md:text-sm mt-2 leading-relaxed">{faq.answer}</div>
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
// MAIN PAGE COMPONENT
// ==========================================
export default function CataractPage() {
  return (
    <main className="w-full bg-white pb-10 md:pb-20">
      <CataractHero />
      <CataractTabs />
      
      {/* Main Content Wrapper */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        <CataractIntro />
        <CataractTypesList />
        <CataractSurgeryGuide />
      </div>
 
      <ServicesFAQ faqs={cataractFAQs} />
    </main>
  );
}