import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import doctors from "../assets/home/home1.jpg";
import home2 from "../assets/home/home2.png";
import t1 from "../assets/home/testimonial1.png";
import t2 from "../assets/home/testimonial2.png";
import t3 from "../assets/home/testimonial3.png";
import t4 from "../assets/home/testimonial4.png";

import Navbar from "../components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage({ onBookClick }) {

const sectionRef = useRef(null);
const imageRef = useRef(null);
const titleRef = useRef(null);
const circleRef = useRef(null);
const bgRef = useRef(null);
const visitRef = useRef(null);
const testimonialRef = useRef(null);
const cardsRef = useRef([]);

const [openIndex, setOpenIndex] = useState(null);

const faqs = [
{
question: "What to bring before your appointment ?",
answer:
"Please bring previous prescriptions, medical reports, spectacles or contact lenses you currently use."
},
{
question: "Plan your timings",
answer:
"Arrive 10–15 minutes before your appointment so registration and preliminary checks can be completed."
},
{
question: "If dilation is needed, please keep in mind",
answer:
"Dilation may blur vision temporarily. Avoid driving immediately after the appointment."
}
];

useEffect(() => {

const ctx = gsap.context(() => {

let endDistance = window.innerWidth < 768 ? "+=1000" : "+=1500";

gsap.to(imageRef.current, {
  xPercent: -120,
  ease: "none",
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top 10%", 
    end: endDistance,
    scrub: true,
    pin: true,
  }
});

gsap.to(titleRef.current, {
xPercent: window.innerWidth < 768 ? -110 : -172,
ease: "none",
scrollTrigger: {
trigger: sectionRef.current,
start: "top 10%",
end: endDistance,
scrub: true
}
});

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

ScrollTrigger.create({
  trigger: visitRef.current,
  start: "top 60%",
  onEnter: () => {
    gsap.to(bgRef.current, {
      backgroundColor: "#11224A",
      duration: 0.6
    });

    gsap.to(cardsRef.current, {
      backgroundColor: "#ffffff",
      color: "#000000",
      duration: 0.6,
      stagger: 0.1
    });
  },

  onLeaveBack: () => {
    gsap.to(bgRef.current, {
      backgroundColor: "#ffffff",
      duration: 0.6
    });

    gsap.to(cardsRef.current, {
      backgroundColor: "#162B55",
      color: "#ffffff",
      duration: 0.6,
      stagger: 0.1
    });
  }
});

ScrollTrigger.create({
trigger: testimonialRef.current,
start: "top 30%",
onEnter: () => {
gsap.to(bgRef.current,{backgroundColor:"#ffffff",duration:0.5});
},
onLeaveBack: () => {
gsap.to(bgRef.current,{backgroundColor:"#11224A",duration:0.5});
}
});

});

return () => ctx.revert();

}, []);

return (

<div ref={bgRef} className="w-full pt-16 overflow-x-hidden bg-white">

<Navbar />

<div className="relative">

     <section className="w-full h-[620px] relative bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,white_0%,#F8E0A2_100%)] overflow-hidden">

  <div className="absolute inset-0 flex items-center justify-center px-6">

    {/* Centered Container */}
    <div className=" mx-auto text-center">

      {/* Heading */}
      <h1 className="text-[#1E2B50] text-4xl md:text-6xl lg:text-9xl font-semibold font-['Lora'] mb-8">
        Clear Vision, Better Life
      </h1>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-30 lg:gap-160">

        {/* Text */}
        <p className="max-w-[350px] text-[#1E2B50] font-['Open_Sans'] leading-7 font-normal">
          Compassionate, transparent care powered by specialist expertise and advanced technology.
        </p>

        {/* Button */}
        <button onClick={onBookClick} className="px-5 py-2 border border-[#1E2B50] rounded-full font-['Lora'] text-sm font-semibold w-fit">
          Schedule Consultation
        </button>

      </div>

    </div>

  </div>

</section>

      {/* ✅ PERFECTLY POSITIONED CIRCLE */}
      <div
        ref={circleRef}
        className="absolute left-1/2 -translate-x-1/2 
                   top-[620px] -translate-y-[50%]  lg:-translate-y-[55%]
                   w-[140px] md:w-[250px] h-[140px] md:h-[250px] 
                   bg-[#A8D5BA] rounded-full z-10"
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

{/* UNIQUE SECTION */}
<section ref={sectionRef} className="w-full py-20 md:py-24  relative overflow-hidden">

<div className="max-w-[1400px] mx-auto px-6 relative">

<div className="absolute top-4 md:top-20 left-1/2 -translate-x-1/2 
                grid grid-cols-2 
                gap-x-20 gap-y-6 
                sm:gap-x-25 sm:gap-y-6 
                md:gap-x-30 md:gap-y-8 
                lg:gap-x-20 lg:gap-y-10 
                z-0">

  {/* CARD 1 */}
  <div ref={(el) => (cardsRef.current[0] = el)} className="text-white bg-[#162B55] ml-[-70px] md:ml-[-140px] sm:ml-0 w-[180px] sm:w-[180px] md:w-[360px] h-[120px] md:h-[170px]  rounded-[20px] flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-10 shadow-xl">
    <h3 className="text-[#E6D097] text-[14px] sm:text-[16px] md:text-[20px] font-bold font-['Lora'] mb-2 md:mb-4">
      Pioneer in Advanced Technology
    </h3>
    <p className="text-[11px] sm:text-[12px] md:text-[15px] font-['Open_Sans'] leading-5 md:leading-6">
      We don’t just use the latest technology. We help shape it. 
    </p>
  </div>

  {/* CARD 2 */}
   <div ref={(el) => (cardsRef.current[1] = el)} className="text-white bg-[#162B55] ml-[-30px] md:mr-[-140px] sm:ml-0 w-[180px] sm:w-[180px] md:w-[360px] h-[120px] md:h-[170px]  rounded-[20px] flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-10 shadow-xl">
    <h3 className="text-[#E6D097] text-[14px] sm:text-[16px] md:text-[20px] font-bold font-['Lora'] mb-2 md:mb-4">
      Personalised Precision Care
    </h3>
    <p className="text-[11px] sm:text-[12px] md:text-[15px] font-['Open_Sans'] leading-5 md:leading-6">
      No two eyes are alike. We use advanced diagnostics. 
    </p>
  </div>

  

  {/* CARD 3 */}
  <div  className="col-span-2 flex justify-center">
    <div ref={(el) => (cardsRef.current[2] = el)} className="text-white bg-[#162B55] w-[185px] sm:w-[180px] md:w-[360px] h-[120px] md:h-[170px]  rounded-[20px] flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-10 shadow-xl">
      <h3 className="text-[#E6D097] text-[14px] sm:text-[16px] md:text-[20px] font-bold font-['Lora'] mb-2 md:mb-4">
        Trusted by Experts
      </h3>
      <p className="  text-[11px] sm:text-[12px] md:text-[15px] font-['Open_Sans'] leading-5 md:leading-6">
         More than 100 doctors have chosen Samyak Drishti for their own LASIK. 
      </p>
    </div>
  </div>

</div>

<div ref={titleRef} className="absolute -top-10 lg:-right-145 right-[-500px] z-20">

<h2 className="text-[40px] md:text-[64px] font-bold font-['Lora'] text-[#132B55] whitespace-nowrap flex gap-4">

<span>WHAT</span>
<span>MAKES US UNIQUE</span>

</h2>

</div>

</div>

<div ref={imageRef} className="relative z-10 h-[280px] md:h-[500px] w-full">

<img src={doctors} alt="Doctors" className="w-full h-full object-cover object-top"/>

</div>

</section>

{/* VISIT GUIDE */}
<section ref={visitRef} className="pt-20 md:pt-24 pb-24 md:pb-30">

<div className="max-w-[1300px] mx-auto mb-16 md:mb-24 px-6">

<div className="h-[260px] md:h-[420px] overflow-hidden relative bg-[#11224A]">

<img 
  src={home2} 
  alt="Doctors" 
  className="w-full h-full object-cover object-right md:object-center grayscale"
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

<p className="text-white text-sm font-['Open_Sans']">
{faq.question}
</p>

<span
className={`text-white text-xl transition-transform duration-300 ${
openIndex === index ? "rotate-180" : ""
}`}
>
⌄
</span>

</div>

<div
className={`overflow-hidden transition-all duration-300 ${
openIndex === index ? "max-h-40 mt-3" : "max-h-0"
}`}
>

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

<img src={t1} alt="testimonial" className="w-full md:w-[400px] md:h-[600px]"/>
<img src={t2} alt="testimonial" className="w-full md:w-[400px] md:h-[600px]"/>
<img src={t3} alt="testimonial" className="w-full md:w-[400px] md:h-[600px]"/>
<img src={t4} alt="testimonial" className="w-full md:w-[400px] md:h-[600px]"/>

</div>

</section>

</div>

);
}