import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from "../components/Footer";

// ==========================================
// DATA: Default FAQs (Reused from other page)
// ==========================================
const defaultFAQs = [
  { question: "How often should I get an eye check-up?", answer: "Adults should get a routine eye exam once a year. Children, seniors, or people with medical conditions may need more frequent checks." },
  { question: "What should I bring to my appointment?", answer: "Bring your glasses, contact lenses, previous reports, medication list, and any questions you want to discuss." },
  { question: "How do I book an appointment?", answer: "You can call the clinic or schedule a visit online through our website." },
  { question: "Do you use advanced technology for diagnosis?", answer: "Yes. We use advanced imaging and diagnostic equipment to detect issues early and guide accurate treatment." },
  { question: "What symptoms should I not ignore?", answer: "Sudden vision loss, flashes of light, persistent pain, redness, and floaters should be evaluated immediately." },
  { question: "Do you treat children as well as adults?", answer: "Yes. We provide complete eye care for children, adults, and seniors." },
  { question: "Can I get a same-day appointment in an emergency?", answer: "Yes. For urgent symptoms, we accommodate same-day visits whenever possible." },
  { question: "Do you offer second opinions?", answer: "Yes. If you have been advised Lasik, cataract surgery, or another treatment elsewhere, you can visit us for a clear and unbiased second opinion." }
];

// ==========================================
// 1. MAIN HERO COMPONENT
// ==========================================
const MainServiceHero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover"
        style={{ 
          backgroundImage: "url('/Services-main.JPG')",
          backgroundPosition: "center 75%"
        }} 
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div> 

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 w-full mx-auto pb-16">
        <h1 className="text-white drop-shadow-md text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-wide mb-6">
          Vision Correction
        </h1>
        <div className="h-[2px] w-1/2 max-w-2xl mx-auto bg-white"></div>
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
};

// ==========================================
// 2. OUR JOURNEY SECTION
// ==========================================
const JourneySection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const opacity1 = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.05]);

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto">
      {/* Top Header Area */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-[#1b2a4e] text-3xl md:text-4xl font-serif font-[600] mb-6">
          Our Journey with Laser Vision Correction
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Whether you want to read comfortably, drive confidently at night, enjoy screens with ease, or finally live without glasses, our specialists tailor every treatment to your eyes and your lifestyle.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-start">
        {/* Left Column: Text */}
        <div className="lg:w-[530px] text-gray-700 text-[17px] leading-relaxed flex flex-col">
          <div className="flex gap-4 mb-8">
            {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-[#1b2a4e]"></div>)}
          </div>

          <div className="space-y-12">
            <p>
              Laser vision correction is safe, effective, and long-lasting when the right procedure is chosen and the evaluation is thorough. <br/>Between the two of us, we have experienced both PRK and Lasik firsthand. Dr Sujal underwent PRK in 1997 and has enjoyed clear distance vision ever since. Dr Manisha chose Lasik in June 2000, at the age of 30, after years of managing glasses and contact lenses and the constant planning they required.
            </p>
            <p>
              What stands out most for both of us is how effortless life felt after surgery. Returning to work the very next day, seeing clearly without searching for glasses or thinking about lenses, and realizing that everyday moments had simply become easier. It was not one dramatic change, but many small freedoms adding up.
            </p>
            <p>
               Our distance vision remained stable well into our forties. Today, we both use reading glasses due to presbyopia. Given the precision our work demands, we prefer balanced vision over mono-vision, and have chosen not to opt for Presbyond ourselves. That said, many of our patients do choose presbyopia correction options and are very happy with their outcomes.
            </p>
            <p className="font-medium pt-2 text-black">
              BY- Dr. Sujal Shah & Dr. Manisha Shah
            </p>
          </div>

          <div className="flex gap-4 mt-12 justify-end">
            {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-[#1b2a4e]"></div>)}
          </div>
        </div>

        {/* Right Column: Animated Image Container */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end lg:sticky lg:top-24">
          <motion.div 
            style={{ scale }}
            className="relative w-full max-w-[450px] lg:max-w-none lg:w-[450px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* First Image */}
            <motion.img 
              src="/dr-shah-portrait.jpg"
              alt="Dr. Shah Portrait 1" 
              style={{ opacity: opacity1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Second Image */}
            <motion.img 
              src="/dr-shah-action.jpg"
              alt="Dr. Shah Portrait 2" 
              style={{ opacity: opacity2 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. MAIN SERVICES GRID (Cards with Images)
// ==========================================
const MainServicesGrid = () => {
  const navigate = useNavigate(); // 1. Initialize the navigate function

  const cards = [
    { 
      title: "LASIK", 
      desc: "A comprehensive assessment to determine your suitability for laser vision correction, ensuring safety and aligning the best procedure with your lifestyle.", 
      img: "/lasik-machine.jpg",
      path: "/lasik" // path for Lasik
    },
    { 
      title: "Cataract", 
      desc: "Expert cataract care with safe, precise surgery to restore clear vision, with a range of lens options to suit your lifestyle.", 
      img: "/cataract-exam.jpg",
      path: "/cataract" // path for Cataract
    },
    { 
      title: "Refractive Lens Exchange (RLE)", 
      desc: "Replaces the eye's natural lens with an artificial intraocular lens (IOL) to correct vision and prevent future cataract development.", 
      img: "/rle-eye.jpg",
      path: "/rle" //path for RLE
    }
  ];

  return (
    <section className="bg-white pb-24 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto">
      <h2 className="text-[#1b2a4e] text-3xl md:text-4xl font-serif text-center mb-16">
        Comprehensive Eye Care Services
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            onClick={() => navigate(card.path)} // 3. Add the onClick event to the card
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group cursor-pointer"
          >
            {/* Image Top Half */}
            <div className="h-56 overflow-hidden">
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            {/* Text Bottom Half */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-[#1b2a4e] font-serif text-[22px] font-semibold mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {card.desc}
              </p>
              
              <div className="flex items-center text-sm font-medium text-[#1b2a4e] mt-auto">
                Learn More 
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// 4. CTA COMPONENT (Reused)
// ==========================================
const ServicesCTA = ({ onBookClick }) => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto bg-[#1b2a4e] py-24 px-4 text-center">
        <h2 className="text-[#e2d5ad] text-3xl md:text-4xl font-serif mb-4">
          Ready to Start Your Vision Journey?
        </h2>
        <p className="text-gray-300 mb-10 text-base leading-relaxed max-w-2xl mx-auto">
          Book a consultation with our specialists to discover which treatment is right
          for you. We're here to guide you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button onClick={onBookClick} className="cursor-pointer bg-[#a8dcb6] text-[#1b2a4e] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#92ccA2] transition-colors w-full sm:w-auto">
            Book Consultation
          </button>
          <Link to="/contact" className="cursor-pointer bg-transparent border border-white text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. FAQ COMPONENT (Reused)
// ==========================================
const ServicesFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-6 px-4 pt-20 pb-24">
      <div className="max-w-[1500px] mx-auto bg-[#1b2a4e] p-10 md:p-16 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 text-white">
            <h2 className="text-[#e2d5ad] text-3xl md:text-4xl font-serif mb-4">
              Frequently asked<br />Questions
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Quick answers to common concerns about eye procedures, safety, and recovery.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/20 pb-4">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left text-white focus:outline-none"
                  >
                    <span className="text-base md:text-lg pr-4">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 text-white transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="text-gray-300 text-sm mt-4 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. MAIN PAGE COMPONENT 
// ==========================================
export default function MainServicePage({ onBookClick }) {
  return (
    <main className="w-full bg-white">
      <MainServiceHero />
      <JourneySection />
      <MainServicesGrid />
      <ServicesCTA onBookClick={onBookClick} />
      <ServicesFAQ faqs={defaultFAQs} />
    </main>
  );
}