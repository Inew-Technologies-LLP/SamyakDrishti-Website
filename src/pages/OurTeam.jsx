import banner from "../assets/our_team/banner.JPG";
import { useState } from "react";

import sujal from "../assets/our_team/Dr.Sujal.JPG";
import edu from "../assets/our_team/education.svg";
import i1 from "../assets/our_team/1.png";
import i2 from "../assets/our_team/2.png";
import i3 from "../assets/our_team/3.png";
import i4 from "../assets/our_team/4.jpg";
import i5 from "../assets/our_team/5.png";
import i6 from "../assets/our_team/6.png";
import i7 from "../assets/our_team/7.png";

import manisha from "../assets/our_team/Dr.Manisha.JPG";

import ashish from "../assets/our_team/Dr.Ashish.png";
import kartik from "../assets/our_team/Dr.Kartik.png";
import mitesh from "../assets/our_team/Dr.Mitesh.png";
import rajendra from "../assets/our_team/Dr.Rajendra.png";
import uppal from "../assets/our_team/Dr.Uppal.png";
import akshay from "../assets/our_team/Dr.Akshay.png";

export default function OurTeam() {
  return (
    <div className="w-full bg-white overflow-hidden">

{/* HERO */}
<section className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center mt-20">
      
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-[position:35%_35%] sm:bg-[position:center_35%]"
    style={{ 
      backgroundImage: `url(${banner})` 
    }} 
  ></div>

  {/* Text Content - Solid Blue Box */}
  <div className="relative z-10 bg-[#1b2a4e] w-[80%] md:w-auto max-w-xl p-5 md:p-8 lg:p-10 ml-4 md:ml-12 lg:ml-24 mt-32 md:mt-40 lg:mt-48 shadow-2xl">
    <h1 className="text-white text-3xl md:text-5xl font-['Lora'] font-bold tracking-wide text-center md:text-left">
      Our Team
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



{/* DR SUJAL */}

<section className="w-full px-6 md:px-20 py-16 md:py-20">

<div className="max-w-[1500px] mx-auto">

<div className="text-black text-2xl md:text-3xl font-bold font-['Lora'] leading-10 tracking-tight mb-3">
Dr. Sujal Shah – Medical Director
</div>

<div className="w-full h-[1px] bg-gray-300 mb-10"></div>

<div className="grid md:grid-cols-2 gap-10 items-center">

<img
src={sujal}
className="w-full max-w-[400px] h-[500px] md:h-[600px] object-cover rounded-[20px]"
/>

<div className="max-w-[730px]">

<div className="text-black text-justify text-sm md:text-base font-normal font-['Open_Sans'] leading-6 tracking-tight">

India's leading vision correction specialist and pioneer in LASIK and SMILE procedures. 
Dr. Shah was the first surgeon in India to perform Wavefront-Optimized LASIK, Presbyond LASIK, and SMILE. 
He has performed more than 60,000 such procedures and has contributed extensively to the field through 
numerous published research papers. Patients trust Dr. Shah for his transparency, exceptional skill, 
integrity, and unwavering commitment to safety and precision in every procedure he performs.

<br /><br />

He also serves as Director of Ophthalmology at Sir H.N. Reliance Foundation Hospital, where his department 
operates at the forefront of eye care with advanced technology like the SMILE Pro. Learn more about 
Dr. Shah's work at{" "}

<span className="underline">
Sir H.N. Reliance Foundation Hospital
</span>

</div>


<div className="flex flex-col gap-3 mt-10">

<div className="flex items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter']">
<img src={edu} className="w-4 h-4"/>
Education & Training
</div>


<div className="flex flex-wrap gap-3">

<Pill icon={i1} text="Seth G.S. Medical College & K.E.M. Hospital, Mumbai"/>
<Pill icon={i2} text="Doheny Eye Institute, University of Southern California (USC), Los Angeles"/>
<Pill icon={i3} text="Cleveland Clinic"/>
<Pill icon={i4} text="Sankara Nethralaya, Chennai"/>
<Pill icon={i5} text="Jules Stein Eye Institute, University of California, Los Angeles"/>

</div>

</div>

</div>

</div>

</div>

</section>



{/* DR MANISHA */}

<section className="w-full px-6 md:px-20 py-16 md:py-20">

<div className="max-w-[1500px] mx-auto">

<div className="text-black text-2xl md:text-3xl font-bold font-['Lora'] leading-10 tracking-tight mb-3">
Dr. Manisha Shah – Medical Director
</div>

<div className="w-full h-[1px] bg-gray-300 mb-10"></div>

<div className="grid md:grid-cols-2 gap-10 items-center">

<div className="max-w-[650px]">

<div className="text-black text-justify text-sm md:text-base font-normal font-['Open_Sans'] leading-6 tracking-tight">

With over 17 years of experience, Dr. Manisha Shah is a highly
skilled ophthalmologist and LASIK specialist with expertise across
the full spectrum of laser vision correction.

Known for her emphasis on transparency, safety, and individualized
care, Dr. Shah embodies the core values of Samyak Drishti Eye Clinic.

<br /><br />

For over 17 years, Dr. Shah has led free eye camps for
underprivileged patients and monks. She actively works with the
Jain Doctors Federation, Lions, Rotary, and other NGOs to expand
access to quality eye care.

</div>


<div className="flex flex-col gap-3 mt-10">

<div className="flex items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter']">
<img src={edu} className="w-4 h-4"/>
Education & Training
</div>

<div className="flex gap-3 flex-wrap">

<Pill icon={i6} text="MBBS – Shivaji University"/>
<Pill icon={i7} text="DOMS – Bombay Hospital"/>

</div>

</div>

</div>


<div className="flex justify-center md:justify-end">

<img
src={manisha}
className="w-full max-w-[370px] h-[360px] md:h-[400px] object-cover object-top rounded-[20px]"
/>

</div>

</div>

</div>

</section>



{/* TEAM */}

<section className="max-w-[1400px] mx-auto px-6 py-20 md:py-24">

<h2 className="text-3xl md:text-4xl font-bold font-['Lora'] mb-16">
Our Team of Doctors
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">

<DoctorCard image={ashish} name="Dr. Ashish Ahuja" role="Retina Consultant" degree="MBBS, DNB (Retina)" description="Vitreo-retina specialist with 14 years of experience, trained at Aravind Eye Hospital, and known for managing complex retinal and uveal diseases."/>

<DoctorCard image={kartik} name="Dr. Kartik Panikkar" role="Glaucoma Consultant" degree="MBBS, DNB, FRCS (Edin)" description="Fellowship-trained in glaucoma at Aravind Eye Hospital, Coimbatore, practising in Mumbai at clinics such as Sir H. N. Reliance Foundation Hospital and more."/>

<DoctorCard image={mitesh} name="Dr. Mitesh Jain" role="Cornea Specialist" degree="MBBS, DNB" description="Dr. Mitesh Jain is a cornea and anterior segment specialist known for performing advanced procedures including corneal transplants, refractive surgery and premium cataract surgeries."/>

<DoctorCard image={rajendra} name="Mr. Rajendra Pawar" role="Ocularist & Optometrist" degree="Master of Optometry, Vision Therapist, and Specialist in Contact Lenses" description="Experienced ocularist and optometrist specialising in vision therapy, prosthetic eye fitting, and advanced contact lens solutions."/>

<DoctorCard image={uppal} name="Dr. Uppal Gandhi" role="Squint & Pediatric Ophthalmology Specialist" degree="DNB, Fellowship in Pediatric Ophthalmology, Strabismus, and Neuro-Ophthalmology" description="Dr Uppal Gandhi focuses on the clinical evaluation and management of squint and paediatric eye conditions, with an emphasis on accurate diagnosis and long-term visual outcomes."/>

<DoctorCard image={akshay} name="Dr. Akshay Nair" role="Cornea Specialist" degree="MBBS, DNB" description="An oculoplastic surgeon and ocular oncologist, Dr. Nair specialises in eyelid, orbit and tear-duct disorders and practices at top hospitals in Mumbai."/>

</div>

</section>


</div>
);
}


/* PILL COMPONENT */

function Pill({ icon, text }) {

  return (

    <div className="flex items-center gap-2 px-5 py-2 bg-[linear-gradient(to_right,#F3E7B333,#F3E7B31A)] rounded-full border border-[#F3E7B3]">

      <img src={icon} className="w-5 h-5" />

      <span className="text-gray-700 text-sm font-['Inter']">
        {text}
      </span>

    </div>

  );

}



/* DOCTOR CARD */

function DoctorCard({ image, name, role, degree, description }) {

const [open,setOpen]=useState(false);

return (

<div className="w-full px-4 md:px-10">

<div className="h-[300px] md:h-[320px] w-full max-w-[360px]  bg-gradient-to-b from-white to-[#F8E0A2] flex items-end justify-center overflow-hidden">

<img src={image} alt={name} className="max-h-full object-contain"/>

</div>


<div className="mt-6 text-base font-bold font-['Open_Sans'] leading-6 tracking-tight">
{name}
</div>

<p className="text-black text-xs font-normal font-['Open_Sans'] leading-6 mt-1">
{role}
</p>

<p className="text-black text-xs font-normal font-['Open_Sans'] leading-6">
{degree}
</p>


{!open && (

<p
onClick={()=>setOpen(true)}
className="mt-4 underline cursor-pointer text-xs font-normal font-['Open_Sans']"
>

Read More

</p>

)}


{open && (

<>

<p className="mt-3 text-xs font-normal font-['Open_Sans'] leading-6 text-black">

{description}

</p>

<p
onClick={()=>setOpen(false)}
className="mt-3 underline cursor-pointer text-xs font-normal font-['Open_Sans']"
>

Read Less

</p>

</>

)}

</div>

);

}