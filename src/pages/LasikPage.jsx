import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ==========================================
// DATA: LASIK Specific FAQs
// ==========================================
const lasikFAQs = [
  { 
    question: "What happens during a LASIK evaluation?", 
    answer: "This is a comprehensive eye health check to see if you’re a suitable candidate for any of our laser vision correction options. It takes 1-2 hours and includes detailed scans to map your cornea, measurements of your pupil and prescription, checks for dry eye, and a thorough examination of your retina and overall eye health." 
  },
  { 
    question: "Am I a good candidate for laser eye surgery?", 
    answer: (
      <div className="space-y-3">
        <p>Good candidates generally:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Are over 18 (ideally over 21) with a stable glasses prescription for at least a year.</li>
          <li>Have healthy eyes with no active infections or diseases like keratoconus.</li>
          <li>Have corneas that are thick enough and not excessively dry.</li>
          <li>Are not pregnant or nursing.</li>
        </ul>
        <p>Our specialists will review your individual case and recommend the most suitable procedure—whether LASIK, SMILE, or another option—for your eyes and lifestyle.</p>
      </div>
    )
  },
  { 
    question: "What are the risks?", 
    answer: "While very safe, potential side effects can include temporary dry eyes, glare or halos at night, and under- or over-correction. Serious complications are rare. We will discuss all potential risks of your specific recommended procedure with you in detail during your consultation." 
  },
  { 
    question: "How long does the procedure take?", 
    answer: "The actual laser treatment is very quick. For LASIK and SMILE, it typically takes about 20-30 seconds per eye for the laser step. The entire process, including preparation, usually takes about 30-45 minutes for both eyes." 
  },
  { 
    question: "Is the procedure painful?", 
    answer: "No. We use anaesthetic eye drops to numb your eye completely. You may feel a little pressure, but no pain. You are awake and comfortable throughout." 
  },
  { 
    question: "What is recovery like?", 
    answer: (
      <div className="space-y-3">
        <p>Recovery is typically fast.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Vision often improves within 24 hours.</li>
          <li>You may experience mild dryness, light sensitivity, or fluctuating vision for the first few weeks.</li>
          <li>Most people can return to work within 1-2 days.</li>
        </ul>
        <p>We will provide you with eye drops and clear instructions for aftercare and essential follow-up visits.</p>
      </div>
    )
  },
  { 
    question: "How long will the results last?", 
    answer: "The corneal reshaping from procedures like LASIK and SMILE is permanent. However, your eyes can still change naturally with age. Most notably, after around age 40, you may need reading glasses due to presbyopia, which is why options like PresbyOND are available." 
  },
  { 
    question: "Will I still need glasses after surgery?", 
    answer: "Most patients achieve excellent distance vision and no longer need glasses for driving, sports, or watching TV." 
  },
  { 
    question: "How do I prepare for my evaluation?", 
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>If you wear soft contact lenses, stop wearing them for 1-2 weeks before your assessment (as advised by our team).</li>
        <li>Bring a list of any medications you take.</li>
        <li>Write down any questions you have.</li>
        <li>Arrange transport, as we may need to dilate your pupils during the check.</li>
      </ul>
    )
  }
];

// ==========================================
// 1. HERO SECTION (Updated to match Cataract sizing exactly)
// ==========================================
const LasikHero = () => (
  <section className="relative w-full h-[350px] md:h-[600px] flex items-center justify-center pt-10 md:pt-20">
    <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/lasik-hero-bg.JPG')", backgroundPosition: "top center" }}></div>
    <div className="absolute inset-0 bg-black/40"></div> 
    
    <div className="relative z-10 text-center px-4 w-full mx-auto pb-10 md:pb-16">
      <h1 className="text-white drop-shadow-md text-4xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-wide">
        Lasik
      </h1>
    </div>

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
const LasikTabs = () => (
  <div className="w-full border-b border-gray-200 overflow-x-auto scrollbar-hide">
    <div className="max-w-[1400px] mx-auto flex gap-8 md:gap-12 px-6 whitespace-nowrap">
      <div className="py-4 md:py-6 text-[#1b2a4e] border-t-2 border-[#1b2a4e] font-semibold -mt-[2px] text-sm md:text-base">LASIK</div>
      <Link to="/cataract" className="py-4 md:py-6 text-gray-500 hover:text-[#1b2a4e] transition-colors font-medium text-sm md:text-base">Cataract</Link>
      <Link to="/rle" className="py-4 md:py-6 text-gray-500 hover:text-[#1b2a4e] transition-colors font-medium text-sm md:text-base">RLE</Link>
    </div>
  </div>
);

// ==========================================
// 3. SPLIT DETAIL SECTION (Intro)
// ==========================================
const LasikIntro = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-24 mt-16">
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-10">
        <div className="w-full lg:w-[45%]">
          <img src="/lasik-machine.jpg" alt="LASIK Procedure" className="w-full rounded-2xl shadow-lg object-cover" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="inline-block bg-[#cce5d6] text-[#1b2a4e] px-4 py-1.5 rounded-full text-sm font-base self-start mb-6">
            LASIK
          </div>
          <p className="text-gray-700 font-opensans text-medium leading-relaxed mb-8">
            A group of advanced, personalised procedures that reshape the cornea to reduce or eliminate dependence on glasses or contact lenses.
          </p>
          
          <h4 className="font-serif font-medium text-[#1b2a4e] text-lg mb-4">Why Choose LASIK Evaluation:</h4>
          <ul className="space-y-4 mb-8">
            {[
              "Corrects nearsightedness, farsightedness, astigmatism, and age-related vision changes.", 
              "Offers long-term visual freedom using precise, computer-guided laser technology."
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-6 h-6 text-[#2c7a51] mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-gray-700 font-opensans pt-[2px]">{text}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#fcebb6] rounded-xl p-6">
            <h4 className="font-serif font-medium text-[#1b2a4e] mb-2">Best For:</h4>
            <p className="text-gray-800 font-opensans text-sm">Patients seeking a safe, proven alternative to glasses or contact lenses, where suitability is confirmed through detailed pre-operative screening.</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1500px] bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
        <h4 className="font-serif font-semibold text-[#1b2a4e] text-xl mb-4">How it Works:</h4>
        <div className="text-gray-700 font-opensans mb-4 transition-all duration-300">
          <p className="leading-relaxed">
            The evaluation is the most important step. It determines which option is safest and most likely to meet your goals through advanced diagnostics.
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. TREATMENT TYPES (Detailed List)
// ==========================================
const TreatmentCard = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-serif text-[#1b2a4e] font-[550] mb-6">
        {t.id}. {t.title}
      </h2>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-[500] text-[#1b2a4e] mb-2 font-opensans">What it is:</h4>
          <p className="text-gray-600 font-opensans leading-relaxed">{t.what}</p>
        </div>
        
        <div>
          <h4 className="font-[500] text-[#1b2a4e] mb-2 font-opensans">Why it helps:</h4>
          <p className="text-gray-600 font-opensans leading-relaxed">{t.why}</p>
        </div>

        <div className="bg-[#fcebb6] rounded-xl p-6 mt-6">
          <h4 className="font-serif font-medium text-[#1b2a4e] mb-2">Best for:</h4>
          <p className="text-gray-800 font-opensans text-sm">{t.bestFor}</p>
        </div>

        {t.highlight && (
          <div className="bg-[#A8D5BA] text-[#11224A] rounded-md p-4 text-sm font-medium border border-[#b4dfc4] mt-4">
            {t.highlight}
          </div>
        )}

        {t.readMoreContent && (
          <div className="pt-2">
            {isExpanded && (
              <div className="mt-2 mb-6 space-y-6 animate-fade-in-down border-t border-gray-100 pt-6">
                {t.readMoreContent}
              </div>
            )}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#2c7a51] font-opensans font-semibold text-sm cursor-pointer hover:text-[#1e5438] transition-colors flex items-center gap-1"
            >
              {isExpanded ? "Read less" : "Read more"}
              <svg className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const LasikTypesList = () => {
  const treatments = [
    {
      id: 1,
      title: "Lasik Evaluation",
      what: "A comprehensive assessment to determine your suitability for laser vision correction, ensuring safety and selecting the best procedure for your eyes and lifestyle.",
      why: "A detailed evaluation determines whether laser vision correction is safe for your eyes, using advanced diagnostics to assess corneal structure, tear film, and retinal health, and to match the most suitable procedure to your visual goals and lifestyle.",
      bestFor: "Adults considering laser vision correction who want a safe, personalised treatment plan before surgery.",
    },
    {
      id: 2,
      title: "Standard LASIK",
      what: "A trusted, time-tested laser procedure that reshapes the cornea to correct nearsightedness, farsightedness, and astigmatism with fast recovery.",
      why: "Offers quick functional recovery and long lasting results with over 20 years of proven safety.",
      bestFor: "Most patients with suitable corneas looking to reduce or eliminate dependence on glasses.",
      readMoreContent: (
        <>
          <div>
            <h5 className="font-bold text-[#1b2a4e] mb-2 font-opensans">Procedure & Recovery:</h5>
            <p className="text-gray-600 font-opensans leading-relaxed text-sm">Most laser procedures are day-care surgeries performed with anaesthetic drops. You should not drive yourself home on the day of surgery. Early visual fluctuations and temporary dryness are normal. Strictly avoid eye rubbing during healing.</p>
          </div>
          <div>
            <h5 className="font-bold text-[#1b2a4e] mb-2 font-opensans">Risks & Safety:</h5>
            <p className="text-gray-600 font-opensans leading-relaxed text-sm mb-2">Every procedure has trade-offs. The goal is to minimise risk through careful selection and realistic counselling.</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 font-opensans text-sm marker:text-[#2c7a51]">
              <li>Dry eye symptoms (usually temporary).</li>
              <li>Glare/halos at night (typically improves over time).</li>
              <li>Residual power or regression (may require enhancement in a small proportion).</li>
              <li>Rare risks include infection or ectasia in poorly screened corneas—our thorough screening is designed to minimise this.</li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 3,
      title: "SMILE (Small Incision Lenticule Extraction)",
      what: "A flapless, minimally invasive laser vision correction where a lenticule is created within the cornea and removed through a small incision.",
      why: "Promotes faster healing, maintains stronger corneal biomechanics, and presents a significantly lower risk of dry eye compared to flap-based procedures.",
      bestFor: "Appropriate cases of myopia (with or without astigmatism). Ideal for patients with active lifestyles or where the dry eye profile suggests a benefit over LASIK. Not everyone is a candidate.",
      highlight: "SMILE Pro is offered by Dr Sujal Shah at Sir H.N. Reliance Foundation Hospital, where he leads the Ophthalmology Department.",
      readMoreContent: (
        <>
          <div>
            <h5 className="font-bold text-[#1b2a4e] mb-2 font-opensans">SMILE Pro:</h5>
            <p className="text-gray-600 font-opensans leading-relaxed text-sm">Refers to an advanced SMILE workflow designed for enhanced speed, comfort, and precision on compatible platforms. Suitability is determined by the same rigorous safety checks.</p>
          </div>
          <div>
            <h5 className="font-bold text-[#1b2a4e] mb-2 font-opensans">Recovery & Aftercare:</h5>
            <p className="text-gray-600 font-opensans leading-relaxed text-sm">A day-care procedure performed with anaesthetic drops. Early improvement is common by the next day, with gradual refinement over weeks. Avoid eye rubbing and use prescribed drops diligently. Enhancement procedures are possible if needed.</p>
          </div>
        </>
      )
    },
    {
      id: 4,
      title: "Surface Laser (PRK & TransPRK)",
      what: "Flapless surface procedures where the laser corrects vision by reshaping the cornea's surface, which then heals over several days.",
      why: "Preserves more corneal structure by avoiding a flap, making it a safer option for thinner corneas or certain corneal shapes.",
      bestFor: "Patients with thinner corneas, those in high impact professions, or who prioritise long-term structural integrity over a faster recovery.",
      readMoreContent: (
        <>
          <div>
            <h5 className="font-bold text-[#1b2a4e] mb-3 font-opensans">PRK vs. TransPRK:</h5>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 font-opensans text-sm marker:text-[#2c7a51] mb-3">
              <li><strong className="text-gray-700">PRK/ASA:</strong> The surface epithelium is removed before the laser treatment.</li>
              <li><strong className="text-gray-700">TransPRK:</strong> A 'no-touch' approach where the laser removes the epithelium and performs the correction in one sequence.</li>
            </ul>
            <p className="text-gray-600 font-opensans leading-relaxed text-sm">Both have similar long-term visual potential, with recovery slower than LASIK/SMILE.</p>
          </div>
          <div>
            <h5 className="font-bold text-[#1b2a4e] mb-2 font-opensans">Recovery & Comfort:</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 font-opensans text-sm marker:text-[#2c7a51]">
              <li>Expect 2–4 days of watering, burning, and light sensitivity.</li>
              <li>A bandage contact lens aids comfort.</li>
              <li>Functional vision improves over 1–2 weeks, with fine stability over several months.</li>
              <li>Corneal haze risk is managed with proper post-op medication and UV protection.</li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 5,
      title: "Femto-LASIK",
      what: "An advanced form of LASIK where a femtosecond laser creates the corneal flap with high precision, offering a bladeless experience.",
      why: "Provides maximum accuracy in flap creation, enhanced safety, and is suitable for a broader range of corneal thicknesses.",
      bestFor: "Patients seeking the most precise, bladeless laser vision correction available."
    },
    {
      id: 6,
      title: "PresbyOND",
      what: "A specialised laser treatment for presbyopia (age-related near vision loss) that creates a blended vision zone to improve both near and distance vision.",
      why: "Reduces dependence on reading glasses by providing a wider, more continuous range of clear vision.",
      bestFor: "Individuals over 45 experiencing difficulty with near vision who wish to reduce their reliance on glasses."
    }
  ];

  return (
    <div className="mb-24 space-y-8">
      {treatments.map((t) => (
        <TreatmentCard key={t.id} t={t} />
      ))}
    </div>
  );
};

// ==========================================
// 5. SURGERY GUIDE & CTA
// ==========================================
const LasikSurgeryGuide = () => (
  <div className="mb-24">
    <h2 className="text-3xl font-serif text-[#1b2a4e] mb-10">LASIK / SMILE Surgery Guide</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      
      {/* Column 1 */}
      <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
        <h3 className="text-xl font-serif font-semibold text-[#1b2a4e] mb-6">Day Before</h3>
        <ul className="list-disc marker:text-[#2c7a51] text-gray-600 font-opensans space-y-3 pl-5">
          <li>Stop soft lenses 1 week before (2-3 weeks for rigid lenses)</li>
          <li>No eye makeup or lotions</li>
          <li>Rest well</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
        <h3 className="text-xl font-serif font-semibold text-[#1b2a4e] mb-6">Day of Surgery</h3>
        <ul className="list-disc marker:text-[#2c7a51] text-gray-600 font-opensans space-y-3 pl-5">
          <li>Avoid perfume/cologne</li>
          <li>Procedure takes 10-15 minutes; no pain, just light pressure</li>
          <li>Arrange a ride home</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
        <h3 className="text-xl font-serif font-semibold text-[#1b2a4e] mb-6">Day After</h3>
        <ul className="list-disc marker:text-[#2c7a51] text-gray-600 font-opensans space-y-3 pl-5">
          <li>Most daily activities can resume</li>
          <li>Don't rub eyes or splash water</li>
          <li>Wear protective glasses outdoors</li>
          <li>Attend your 1-day follow-up</li>
        </ul>
      </div>

    </div>

    {/* CTA Button */}
    <div className="mt-12 flex justify-center md:justify-start">
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
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto bg-[#1b2a4e] rounded-md p-8 md:p-16 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 text-white">
            <h2 className="text-[#e2d5ad] text-3xl md:text-4xl font-serif mb-4">
              Frequently asked<br />Questions
            </h2>
            <p className="text-gray-300 font-opensans text-sm leading-relaxed max-w-sm">
              Quick answers to common concerns about eye procedures, safety, and recovery.
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/20 pb-4">
                <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center text-left text-white focus:outline-none">
                  <span className="text-base md:text-lg pr-4 font-opensans">{faq.question}</span>
                  <svg className={`w-5 h-5 text-white transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="text-gray-300 font-opensans text-sm mt-4 leading-relaxed">{faq.answer}</div>
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
export default function LasikPage() {
  return (
    <main className="w-full bg-white pb-20">
      <LasikHero />
      <LasikTabs />
      
      {/* Main Content Wrapper */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        <LasikIntro />
        <LasikTypesList />
        <LasikSurgeryGuide />
      </div>

      <ServicesFAQ faqs={lasikFAQs} />
    </main>
  );
}