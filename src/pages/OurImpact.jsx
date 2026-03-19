import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import banner from "../assets/our_impact/PageBanner.png";
import layer from "../assets/our_impact/Layer.svg";

import icon1 from "../assets/our_impact/icon1.png";
import icon2 from "../assets/our_impact/icon2.png";
import icon3 from "../assets/our_impact/icon3.png";
import icon4 from "../assets/our_impact/icon4.png";
import icon5 from "../assets/our_impact/icon5.png";
import icon6 from "../assets/our_impact/icon6.png";
import icon7 from "../assets/our_impact/icon7.png";
import icon8 from "../assets/our_impact/icon8.png";
import icon9 from "../assets/our_impact/icon9.png";
import icon10 from "../assets/our_impact/icon10.png";
import icon11 from "../assets/our_impact/icon11.png";
import icon12 from "../assets/our_impact/icon12.png";

import dots from "../assets/our_impact/dots.gif";

import img1 from "../assets/our_impact/1.png";
import img2 from "../assets/our_impact/2.png";
import img3 from "../assets/our_impact/3.png";
import img4 from "../assets/our_impact/4.png";
import img5 from "../assets/our_impact/5.png";

gsap.registerPlugin(ScrollTrigger);

export default function OurImpact() {

const sectionRef = useRef(null);
const cardsRef = useRef(null);
const leftRef = useRef(null);
const statsRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {

    ScrollTrigger.matchMedia({

      // Desktop only animation
      "(min-width: 768px)": () => {

        const cards = cardsRef.current;
        const left = leftRef.current;

        const cardsHeight = cards.scrollHeight;
        const leftHeight = left.offsetHeight;

        const scrollDistance = cardsHeight - leftHeight + 35;

        gsap.to(cards, {
          y: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top+=95 top",
            end: `+=${scrollDistance + 250}`,
            scrub: true,
            pin: true,
            anticipatePin: 1
          }
        });

      }

    });

    // Blur animation (works on both mobile & desktop)
    gsap.fromTo(
      statsRef.current.querySelectorAll(".stat-icon"),
      {
        filter: "blur(15px)",
        opacity: 0.5
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: true
        }
      }
    );

  });

  return () => ctx.revert();

}, []);

const stats = [
{icon:icon1,value:"12500+",text:"Jain monks receiving cashless medical care"},
{icon:icon2,value:"600,000+",text:"People covered by insurance"},
{icon:icon3,value:"17+",text:"Years of Dedicated Community Outreach"},
{icon:icon4,value:"2000+",text:"Doctors in Network"},
];

return (
<div className="pt-16">

<Navbar/>

{/* HERO */}

<section className="relative bg-white h-[260px] sm:h-[340px] md:h-[420px]">

<img src={banner} className="w-full h-full object-cover"/>

<img
src={layer}
className="absolute -bottom-1 left-0 w-full pointer-events-none"
/>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

<div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-['Lora'] tracking-widest">
Our Impact
</div>

<div className="w-32 sm:w-40 md:w-48 h-1 mt-4 bg-white/80 rounded-full"></div>

</div>

</section>


{/* STATS */}

<section
ref={statsRef}
className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-12 px-6 md:px-0"
>

{stats.map((item,i)=>(

<div key={i} className="bg-white shadow p-6 rounded-lg text-center">

<img src={item.icon} className="h-10 mx-auto mb-3 stat-icon"/>

<div className="text-2xl font-bold font-['Open_Sans']">
{item.value}
</div>

<div className="text-sm md:text-base font-['Open_Sans']">
{item.text}
</div>

</div>

))}

</section>


{/* COMMUNITY HEALTH */}
<section className="max-w-[1400px] mx-auto py-12 px-6">

<div className="flex flex-col items-center text-center">

<div className="text-blue-950 text-2xl md:text-3xl font-semibold font-['Lora'] leading-10 mb-4">
Community Health Initiatives
</div>

<div className="w-full md:w-[764px] text-gray-600 text-base font-normal font-['Open_Sans'] leading-6 mb-16">
Committed to serving diverse communities through innovative healthcare programs and partnerships
</div>

</div>

<div className="flex flex-col gap-20 md:gap-16">


{/* ROW 1 */}
<div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[145px]">

{/* CARD 1 */}
<div className="w-full max-w-[380px] h-60 md:w-96 md:h-72 px-6 pt-6 pb-px bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-t-[6px] border-emerald-200 flex flex-col">

<div className="flex gap-4">

<img src={icon5} className="w-10 h-10" />

<div>

<div className="text-blue-950 text-base font-medium font-['Lora'] mb-1">
JITO Healthcare Initiative
</div>

<div className="text-blue-950 text-xs font-normal font-['Open_Sans'] opacity-80 mb-3">
Jain International Trade Organization
</div>

<div className="text-gray-600 text-base font-normal font-['Open_Sans'] leading-6">
Conceptualised and serves as a Permanent Trustee of Shraman Arogyam, which provides cashless medical care to 12,500 Jain monks across India.
</div>

</div>

</div>

</div>


{/* IMAGE */}
<img
src={img1}
className="w-full lg:w-[820px] lg:h-[365px] object-cover rounded-xl"
/>

</div>



{/* ROW 2 */}
<div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[145px]">

{/* IMAGE */}
<img
src={img2}
className="order-2 lg:order-1 w-full lg:w-[802px] lg:h-[391px] object-cover rounded-xl"
/>

{/* CARD 2 */}
<div className="order-1 lg:order-2 w-full max-w-[380px] h-60 md:w-96 md:h-72 px-6 pt-6 pb-px bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-t-[6px] border-emerald-200 flex flex-col">

<div className="flex gap-4">

<img src={icon6} className="w-10 h-10" />

<div>

<div className="text-blue-950 text-base font-medium font-['Lora'] mb-1">
Shravak Arogyam
</div>

<div className="text-blue-950 text-xs font-normal font-['Open_Sans'] opacity-80 mb-3">
Jain International Organization (JIO)
</div>

<div className="text-gray-600 text-base font-normal font-['Open_Sans'] leading-6">
As Director, Dr. Sujal Shah conceptualized and led this health insurance initiative covering nearly 600,000 people.
</div>

</div>

</div>

</div>

</div>



{/* ROW 3 */}
<div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[145px]">

{/* CARD 3 */}
<div className="w-full max-w-[380px] h-70 md:w-96 md:h-[340px] px-6 pt-6 pb-px bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-t-[6px] border-emerald-200 flex flex-col">

<div className="flex gap-4">

<img src={icon7} className="w-10 h-10"/>

<div>

<div className="text-blue-950 text-base font-medium font-['Lora'] mb-1">
Medical Coordination
</div>

<div className="text-blue-950 text-xs font-normal font-['Open_Sans'] opacity-80 mb-3">
Samkit Group, Mumbai
</div>

<div className="text-gray-600 text-base font-normal font-['Open_Sans'] leading-6 mb-3">
As Medical Advisor, Dr. Sujal Shah has coordinated medical care for Chauvihar Chhat and Saat Jatra at Palitana and organized large community medical camps at pilgrimage centres.
</div>

<div className="w-fit px-3 py-1 bg-blue-950/5 rounded-full text-blue-950 text-xs font-['Open_Sans']">
10+ Years
</div>

</div>

</div>

</div>


{/* IMAGE */}
<img
src={img3}
className="w-full lg:w-[735px] lg:h-[344px] object-cover rounded-xl"
/>

</div>

</div>

</section>

  {/* MEDICAL ASSOCIATION */}

<section
  ref={sectionRef}
className="max-w-[1200px] mx-auto pt-24 md:pt-40 px-6 pb-20 md:pb-0">

  {/* MAIN WRAPPER */}
<div className="relative flex flex-col lg:flex-row items-start justify-between gap-16 overflow-visible">
  
    {/* LEFT SIDE */}

    <div
      ref={leftRef}
      className="relative z-10 flex flex-col w-full lg:w-[422px]"
    >

      <div className="text-blue-950 text-2xl md:text-3xl font-semibold font-['Lora'] leading-10 mb-4">
        Medical Associations & Leadership
      </div>

      <div className="text-gray-600 text-base font-['Open_Sans'] leading-6 mb-10">
        Collaborating with leading medical organizations to expand healthcare access
      </div>

      {/* IMAGE WRAPPER */}

      <div className="relative w-full lg:w-[422px] overflow-hidden lg:overflow-visible">

        <img
          src={img4}
          className="w-full lg:w-[380px] h-[380px] md:h-[450px] object-cover rounded-xl"
        />

        {/* DOTS */}

        <img
  src={dots}
  className="hidden md:block absolute -right-10 md:-right-17 bottom-0 h-24 md:h-30 rotate-90"
/>

      </div>

    </div>



    {/* RIGHT CARDS */}

    <div
      ref={cardsRef}
      className="relative z-0 w-full lg:w-80 flex flex-col gap-12"
    >

      {/* CARD 1 */}

      <div className="p-5 bg-white rounded-[10px] outline outline-[3px] outline-orange-200 flex gap-4 min-h-[190px]">

        <img src={icon10} className="w-10 h-10" />

        <div>

          <div className="text-blue-950 text-base font-['Lora']">
            Community Partnerships
          </div>

          <div className="text-[#11224A] text-sm opacity-80 font-['Lora'] mb-1">
            Lions Club, Rotary Club & NGOs
          </div>

          <div className="text-gray-600 text-xs font-['Open_Sans'] leading-6">
            Regularly participates in charitable health camps in collaboration with major hospitals and corporations.
          </div>

        </div>

      </div>



      {/* CARD 2 */}

      <div className="p-5 bg-white rounded-[10px] outline outline-[3px] outline-orange-200 flex gap-4 min-h-[190px]">

        <img src={icon8} className="w-10 h-10" />

        <div>

          <div className="text-blue-950 text-base font-['Lora']">
            Medical Advisory Board
          </div>

          <div className="text-[#11224A] text-sm opacity-80 font-['Lora'] mb-1">
            Shri Adinath Nethralay
          </div>

          <div className="text-gray-600 text-xs font-['Open_Sans'] leading-6">
            Member of the Medical Advisory Board, providing expert guidance on eye care services.
          </div>

        </div>

      </div>



      {/* CARD 3 */}

      <div className="p-5 bg-white rounded-[10px] outline outline-[3px] outline-orange-200 flex gap-4 min-h-[190px]">

        <img src={icon10} className="w-10 h-10" />

        <div>

          <div className="text-blue-950 text-base font-['Lora']">
            President & Office Bearer
          </div>

          <div className="text-[#11224A] text-sm opacity-80 font-['Lora'] mb-1">
            Jain Doctors Federation
          </div>

          <div className="text-gray-600 text-xs font-['Open_Sans'] leading-6">
            Coordinates social initiatives and charitable health camps for indigent patients through a network of 2,000 doctors.
          </div>

        </div>

      </div>



      {/* CARD 4 */}

      <div className="p-5 bg-white rounded-[10px] outline outline-[3px] outline-orange-200 flex gap-4 min-h-[190px]">

        <img src={icon11} className="w-10 h-10" />

        <div>

          <div className="text-blue-950 text-base font-['Lora']">
            Executive Committee Member
          </div>

          <div className="text-[#11224A] text-sm opacity-80 font-['Lora'] mb-1">
            Mahavir Group of Hospitals
          </div>

          <div className="text-gray-600 text-xs font-['Open_Sans'] leading-6">
            Serves on the Executive Committee, contributing to strategic healthcare initiatives.
          </div>

        </div>

      </div>

    </div>

  </div>

</section>



{/* OUTREACH */}

<section className="max-w-7xl mx-auto pb-24 md:pb-30 px-6">

<div className="flex flex-col items-center text-center">

<div className="text-blue-950 text-2xl md:text-3xl font-semibold font-['Lora'] leading-10 mb-3">
Outreach and Eye Care Camps
</div>

<div className="w-full md:w-[764px] text-gray-600 text-base font-normal font-['Open_Sans'] leading-6 mb-10">
Bringing quality eye care to underserved communities through dedicated camps and mobile clinics
</div>

</div>


<div className="flex flex-col lg:flex-row gap-8">

{/* CARD 1 */}

<div className="flex-1 px-6 pt-6 pb-4 bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-l-[6px] border-orange-200 flex gap-4">

<img src={icon8} className="w-10 h-10"/>

<div>

<div className="text-blue-950 text-base font-medium font-['Lora']">
Urban Outreach Programs
</div>

<div className="text-blue-950 text-xs opacity-80 font-['Open_Sans'] mb-4">
Shri Shraman Sewa Parivar, Mumbai
</div>

<div className="text-gray-600 text-base font-['Open_Sans'] leading-6 mb-2">
Conducting urban outreach eye camps for monks in Palitana and other pilgrimage centres.
</div>

<div className="w-fit px-3 py-1 bg-blue-950/5 rounded-full text-blue-950 text-xs font-['Open_Sans']">
17 Years
</div>

</div>

</div>



{/* CARD 2 */}

<div className="flex-1 px-6 pt-6 pb-4 bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-l-[6px] border-orange-200 flex gap-4">

<img src={icon8} className="w-10 h-10"/>

<div>

<div className="text-blue-950 text-base font-medium font-['Lora']">
Rural Eye Care Camps
</div>

<div className="text-blue-950 text-xs opacity-80 font-['Open_Sans'] mb-4">
Shri Shankeshwar Parshwanath Medical Centre
</div>

<div className="text-gray-600 text-base font-['Open_Sans'] leading-6 mb-2">
As Medical Director, Dr. Sujal Shah has led free rural eye camps in Shahpur, Parli, and Wada.
</div>

<div className="w-fit px-3 py-1 bg-blue-950/5 rounded-full text-blue-950 text-xs font-['Open_Sans']">
15 Years
</div>

</div>

</div>

</div>

</section>



{/* RECOGNITION */}

<div className="max-w-[400px] md:max-w-[1200px] mx-auto px-6 bg-[#11224A] rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center py-12">
<img
src={icon12}
className="w-14 md:w-16 h-14 md:h-16 opacity-90 mb-6"
/>

<div className="text-white text-2xl md:text-4xl font-medium font-['Lora'] leading-10 mb-4">
Recognition
</div>

<div className="max-w-[618px] text-white text-sm md:text-base font-normal font-['Open_Sans'] leading-8 opacity-90">
Dr. Sujal Shah has been honoured by the Chief Minister of Maharashtra and several organizations for his sustained volunteer work and social service.
</div>

</div>



<section className="max-w-[1250px] mx-auto pt-16 md:pt-20 px-6">

  <img
    src={img5}
    className="w-full h-[220px] md:h-auto object-fit shadow rounded-2xl"
  />

</section>


</div>
);
}