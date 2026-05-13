import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import doctors from "../assets/home/home1.jpg";
import home2 from "../assets/home/home2.png";
import t1 from "../assets/home/testimonial1.png";
import t2 from "../assets/home/testimonial2.png";
import t3 from "../assets/home/testimonial3.png";
import t4 from "../assets/home/testimonial4.png";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage({ onBookClick }) {
  const circleRef = useRef(null);
  const bgRef = useRef(null);
  const visitRef = useRef(null);
  const testimonialRef = useRef(null);
  const cardsRef = useRef([]);

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What to bring before your appointment ?",
      answer: "Please bring previous prescriptions, medical reports, spectacles or contact lenses you currently use."
    },
    {
      question: "Plan your timings",
      answer: "Arrive 10–15 minutes before your appointment so registration and preliminary checks can be completed."
    },
    {
      question: "If dilation is needed, please keep in mind",
      answer: "Dilation may blur vision temporarily. Avoid driving immediately after the appointment."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Kept: The glowing circle blur animation
      gsap.fromTo(
        circleRef.current,
        {
          filter: "blur(10px)",
          opacity: 0.5
        },
        {
          filter: "blur(0px)",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top 100%",
            end: "top 40%",
            scrub: true
          }
        }
      );

      // Kept: The dark background color shift when scrolling to Visit Guide
      ScrollTrigger.create({
        trigger: visitRef.current,
        start: "top 60%",
        onEnter: () => {
          gsap.to(bgRef.current, { backgroundColor: "#11224A", duration: 0.6 });
          gsap.to(cardsRef.current, { backgroundColor: "#ffffff", color: "#000000", duration: 0.6, stagger: 0.1 });
        },
        onLeaveBack: () => {
          gsap.to(bgRef.current, { backgroundColor: "#ffffff", duration: 0.6 });
          gsap.to(cardsRef.current, { backgroundColor: "#162B55", color: "#ffffff", duration: 0.6, stagger: 0.1 });
        }
      });

      // Kept: The white background color revert at Testimonials
      ScrollTrigger.create({
        trigger: testimonialRef.current,
        start: "top 30%",
        onEnter: () => {
          gsap.to(bgRef.current, { backgroundColor: "#ffffff", duration: 0.5 });
        },
        onLeaveBack: () => {
          gsap.to(bgRef.current, { backgroundColor: "#11224A", duration: 0.5 });
        }
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={bgRef} className="w-full pt-16 overflow-x-hidden bg-white transition-colors duration-500">
      
      <div className="relative">
        
        {/* HERO SECTION */}
        <section className="w-full h-[620px] relative bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,white_0%,#F8E0A2_100%)] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className=" mx-auto text-center">
              <h1 className="text-[#1E2B50] text-4xl md:text-6xl lg:text-[7rem] font-semibold font-['Lora'] mb-8">
                Clear Vision, Better Life
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-30 lg:gap-160">
                <p className="max-w-[350px] text-[#1E2B50] font-['Open_Sans'] leading-7 font-normal">
                  Compassionate, transparent care powered by specialist expertise and advanced technology.
                </p>
                <button onClick={onBookClick} className="px-5 py-2 border border-[#1E2B50] rounded-full font-['Lora'] text-sm font-semibold w-fit cursor-pointer hover:bg-[#1E2B50] hover:text-white transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* HERO CIRCLE */}
        <div
          ref={circleRef}
          className="absolute left-1/2 -translate-x-1/2 top-[620px] -translate-y-[50%] lg:-translate-y-[55%] w-[140px] md:w-[250px] h-[140px] md:h-[250px] bg-[#A8D5BA] rounded-full z-10"
        />

        {/* ABOUT */}
        <section className="w-full pt-40 md:pt-45 pb-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex gap-6 mb-6">
                <div className="w-10 h-10 bg-[#1E2B50] rounded-full"></div>
                <div className="w-10 h-10 bg-[#1E2B50] rounded-full"></div>
                <div className="w-10 h-10 bg-[#1E2B50] rounded-full"></div>
              </div>
              <div className="ml-7 text-blue-950 text-3xl md:text-4xl font-bold font-['Lora']">
                About Us
              </div>
            </div>
            <div className="text-black text-lg font-normal font-['Open_Sans'] leading-6 md:w-[537px]">
              Founded in 2005 by Dr. Sujal Shah and Dr. Manisha Shah, Samyak Drishti has been transforming lives through exceptional eye care for over two decades.
            </div>
          </div>
        </section>

      </div>

      {/* ✅ UNIQUE SECTION (MOBILE RESPONSIVE: Image -> Title -> Cards) */}
<section className="w-full py-12 md:py-24 relative overflow-hidden bg-white">
  
  {/* 1. IMAGE SECTION */}
  <div className="relative z-10 h-[240px] sm:h-[350px] md:h-[500px] w-full mb-12 md:mb-24">
    <img 
      src={doctors} 
      alt="Doctors" 
      className="w-full h-full object-cover object-top"
    />
  </div>

  {/* 2. TITLE SECTION */}
  <div className="w-full flex justify-center mb-10 md:mb-16 z-20 relative px-6 text-center">
    <h2 className="text-[28px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-bold font-['Lora'] text-[#132B55] flex flex-wrap justify-center gap-2 md:gap-4 uppercase tracking-tight">
      <span>What</span>
      <span>Makes Us Unique</span>
    </h2>
  </div>

  {/* 3. CARDS GRID */}
  <div className="max-w-[1200px] mx-auto relative w-full px-6">
    {/* 
        Mobile: 1 column (grid-cols-1)
        Tablet+: 2 columns (md:grid-cols-2)
    */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-10">

      {/* CARD 1 */}
      <div 
        ref={(el) => (cardsRef.current[0] = el)} 
        className="text-white bg-[#162B55] w-full min-h-[140px] md:h-[180px] rounded-[20px] flex flex-col items-center justify-center text-center p-6 md:px-10 shadow-xl transition-all duration-500 hover:scale-[1.02]"
      >
        <h3 className="text-[#E6D097] text-[16px] md:text-[20px] font-bold font-['Lora'] mb-2">
          Pioneer in Advanced Technology
        </h3>
        <p className="text-[13px] md:text-[15px] font-['Open_Sans'] leading-relaxed opacity-90">
          We don’t just use the latest technology. We help shape it.
        </p>
      </div>

      {/* CARD 2 */}
      <div 
        ref={(el) => (cardsRef.current[1] = el)} 
        className="text-white bg-[#162B55] w-full min-h-[140px] md:h-[180px] rounded-[20px] flex flex-col items-center justify-center text-center p-6 md:px-10 shadow-xl transition-all duration-500 hover:scale-[1.02]"
      >
        <h3 className="text-[#E6D097] text-[16px] md:text-[20px] font-bold font-['Lora'] mb-2">
          Personalised Precision Care
        </h3>
        <p className="text-[13px] md:text-[15px] font-['Open_Sans'] leading-relaxed opacity-90">
          No two eyes are alike. We use advanced diagnostics for every patient.
        </p>
      </div>

      {/* CARD 3 */}
      <div 
        ref={(el) => (cardsRef.current[2] = el)} 
        className="text-white bg-[#162B55] w-full min-h-[140px] md:h-[180px] rounded-[20px] flex flex-col items-center justify-center text-center p-6 md:px-10 shadow-xl transition-all duration-500 hover:scale-[1.02]"
      >
        <h3 className="text-[#E6D097] text-[16px] md:text-[20px] font-bold font-['Lora'] mb-2">
          Trusted by Experts
        </h3>
        <p className="text-[13px] md:text-[15px] font-['Open_Sans'] leading-relaxed opacity-90">
           Trains other surgeons and company trainers — a "doctor's doctor".
        </p>
      </div>

      {/* CARD 4 */}
      <div 
        ref={(el) => (cardsRef.current[3] = el)} 
        className="text-white bg-[#162B55] w-full min-h-[140px] md:h-[180px] rounded-[20px] flex flex-col items-center justify-center text-center p-6 md:px-10 shadow-xl transition-all duration-500 hover:scale-[1.02]"
      >
        <h3 className="text-[#E6D097] text-[16px] md:text-[20px] font-bold font-['Lora'] mb-2">
          Proven Track Record
        </h3>
        <p className="text-[13px] md:text-[15px] font-['Open_Sans'] leading-relaxed opacity-90">
          First in India to commercially launch SMILE — 6 months before global CZM launch.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* VISIT GUIDE */}
      <section ref={visitRef} className="pt-20 md:pt-24 pb-24 md:pb-30">
        <div className="max-w-[1300px] mx-auto mb-16 md:mb-24 px-6">
          <div className="h-[200px] md:h-[420px] overflow-hidden relative bg-[#11224A] rounded-xl shadow-lg">
            <img 
              src={home2} 
              alt="Doctors" 
              className="w-full h-full object-cover object-[60%_center] md:object-center grayscale"
            />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-32 px-6 md:px-10 items-start">
          <div>
            <div className="text-white text-2xl md:text-3xl font-bold font-['Lora'] leading-10 mb-6 max-w-md">
              Your First Visit To Samyak Drishti: A Complete Guide
            </div>
            <div className="text-white text-base font-['Open_Sans'] leading-6 max-w-md">
              This guide walks you through what to expect during your first appointment so you can arrive prepared and comfortable.
            </div>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-400 pb-3">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <p className="text-white text-sm font-['Open_Sans'] font-semibold">
                    {faq.question}
                  </p>
                  <span className={`text-white text-xl transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                    ⌄
                  </span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-3" : "max-h-0"}`}>
                  <p className="text-gray-300 text-sm font-['Open_Sans'] leading-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialRef} className="py-24 md:py-50">
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[36px] font-['Lora'] font-semibold text-[#132B55]">
            Patient Testimonials
          </h2>
        </div>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          <img src={t1} alt="testimonial" className="w-full md:w-[400px] md:h-[600px] object-cover rounded-xl shadow-md"/>
          <img src={t2} alt="testimonial" className="w-full md:w-[400px] md:h-[600px] object-cover rounded-xl shadow-md"/>
          <img src={t3} alt="testimonial" className="w-full md:w-[400px] md:h-[600px] object-cover rounded-xl shadow-md"/>
          <img src={t4} alt="testimonial" className="w-full md:w-[400px] md:h-[600px] object-cover rounded-xl shadow-md"/>
        </div>
      </section>

    </div>
  );
}