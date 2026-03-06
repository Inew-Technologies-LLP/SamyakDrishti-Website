import banner from "../assets/our_team/banner.jpg";
import layer from "../assets/our_team/layer.png";

import sujal from "../assets/our_team/Dr.Sujal.jpg";
import edu from "../assets/our_team/education.svg";
import i1 from "../assets/our_team/1.png";
import i2 from "../assets/our_team/2.png";
import i3 from "../assets/our_team/3.png";
import i4 from "../assets/our_team/4.jpg";
import i5 from "../assets/our_team/5.png";
import i6 from "../assets/our_team/6.png";
import i7 from "../assets/our_team/7.png";

import manisha from "../assets/our_team/Dr.Manisha.jpg";

import ashish from "../assets/our_team/Dr.Ashish.png";
import kartik from "../assets/our_team/Dr.Kartik.png";
import mitesh from "../assets/our_team/Dr.Mitesh.png";
import rajendra from "../assets/our_team/Dr.Rajendra.png";
import uppal from "../assets/our_team/Dr.Uppal.png";
import akshay from "../assets/our_team/Dr.Akshay.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function OurTeam() {
  return (
    <div className="w-full bg-white overflow-hidden">
        <Navbar />

      {/* HERO BANNER */}
      <section className="relative w-full h-[500px]">

        <img
          src={banner}
          className="w-full h-full object-cover object-top opacity-85"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-6xl font-['Lora'] font-bold tracking-widest">
            Our Team
          </h1>
          <div className="w-40 h-[4px] bg-white/80 mt-6 rounded-full"></div>
        </div>

        {/* bottom layer */}
        <img
          src={layer}
          className="absolute -bottom-1 w-full"
        />

      </section>


     {/* DR SUJAL */}
<section className="w-full px-20 py-20">

  <div className="max-w-[1500px] mx-auto px-6">

    {/* TITLE */}
    <div className="w-[547px] h-10  justify-start text-black text-3xl font-bold font-['Lora'] leading-10 tracking-tight mb-3    ">Dr. Sujal Shah – Medical Director</div>

    {/* divider */}
    <div className="w-full h-[1px] bg-gray-300 mb-10"></div>

    {/* CONTENT */}
<div className="grid grid-cols-2  items-center">

  {/* IMAGE */}
  <img
    src={sujal}
    className="w-[400px] h-[600px] object-cover rounded-[20px]"
  />

  {/* TEXT */}
  <div className="max-w-[730px]">

    <div className="text-black text-base font-normal font-['Open_Sans'] leading-6 tracking-tight">

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

    {/* EDUCATION SECTION */}

    <div className="w-[606px] h-[200px] flex flex-col gap-3 mt-10">

    {/* TITLE */}
    <div className="flex items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter']">
        <img src={edu} className="w-4 h-4" />
        Education & Training
    </div>


    {/* PILLS CONTAINER */}
<div className="relative w-[606px] h-[160px]">

  {/* Pill 1 */}
  <div className="absolute left-0 top-0 flex items-center gap-2 px-3 h-8 
  bg-[linear-gradient(to_right,#F3E7B333,#F3E7B31A)] 
  rounded-full border border-[#F3E7B3]">
    <img src={i1} className="w-5 h-5" />
    <span className="text-gray-700 text-sm font-['Inter']">
      Seth G.S. Medical College & K.E.M. Hospital, Mumbai
    </span>
  </div>

  {/* Pill 2 */}
  <div className="absolute left-0 top-[42px] flex items-center gap-2 px-3 h-8 
  bg-[linear-gradient(to_right,#F3E7B333,#F3E7B31A)] 
  rounded-full border border-[#F3E7B3]">
    <img src={i2} className="w-4 h-3" />
    <span className="text-gray-700 text-sm font-['Inter']">
      Doheny Eye Institute, University of Southern California (USC), Los Angeles
    </span>
  </div>

  {/* Pill 3 */}
  <div className="absolute left-0 top-[84px] flex items-center gap-2 px-3 h-8 
  bg-[linear-gradient(to_right,#F3E7B333,#F3E7B31A)] 
  rounded-full border border-[#F3E7B3]">
    <img src={i3} className="w-5 h-5" />
    <span className="text-gray-700 text-sm font-['Inter']">
      Cleveland Clinic
    </span>
  </div>

  {/* Pill 4 */}
  <div className="absolute left-[158px] top-[84px] flex items-center gap-2 px-3 h-8 
  bg-[linear-gradient(to_right,#F3E7B333,#F3E7B31A)] 
  rounded-full border border-[#F3E7B3]">
    <img src={i4} className="w-5 h-5" />
    <span className="text-gray-700 text-sm font-['Inter']">
      Sankara Nethralaya, Chennai
    </span>
  </div>

  {/* Pill 5 */}
  <div className="absolute left-0 top-[126px] flex items-center gap-2 px-3 h-8 
  bg-[linear-gradient(to_right,#F3E7B333,#F3E7B31A)] 
  rounded-full border border-[#F3E7B3]">
    <img src={i5} className="w-5 h-5" />
    <span className="text-gray-700 text-sm font-['Inter']">
      Jules Stein Eye Institute, University of California, Los Angeles
    </span>
  </div>

</div>

</div>

      </div>

    </div>

  </div>

</section>


      {/* DR MANISHA */}
<section className="w-full px-20 py-20">

  <div className="max-w-[1500px] mx-auto px-6">

    {/* TITLE */}
    <div className="w-[547px] h-10 justify-start text-black text-3xl font-bold font-['Lora'] leading-10 tracking-tight mb-3">
      Dr. Manisha Shah – Medical Director
    </div>

    {/* divider */}
    <div className="w-full h-[1px] bg-gray-300 mb-10"></div>

    {/* CONTENT */}
    <div className="grid grid-cols-2  items-center">

      {/* TEXT LEFT */}
      <div className="max-w-[730px]">

        <div className="text-black text-base font-normal font-['Open_Sans'] leading-6 tracking-tight">

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

        {/* EDUCATION */}
        <div className="w-[606px] flex flex-col gap-3 mt-10">

          <div className="flex items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter']">
            <img src={edu} className="w-4 h-4" />
            Education & Training
          </div>

          <div className="flex gap-3 flex-wrap">

            <div className="flex items-center gap-2 px-3 h-8 bg-[linear-gradient(to_right,#F3E7B333,#F3E7B31A)] rounded-full border border-[#F3E7B3]">
              <img src={i6} className="w-7 h-3" />
              <span className="text-gray-700 text-sm font-['Inter']">
                MBBS – Shivaji University
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 h-8 bg-[linear-gradient(to_right,#F3E7B333,#F3E7B31A)] rounded-full border border-[#F3E7B3]">
              <img src={i7} className="w-5 h-5" />
              <span className="text-gray-700 text-sm font-['Inter']">
                DOMS – Bombay Hospital
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* IMAGE RIGHT */}
  <div className="flex justify-end">
    <img
      src={manisha}
      className="w-[370px] h-[400px] object-cover object-top mr-10 rounded-[20px]"
    />
  </div>

    </div>

  </div>

</section>


      {/* TEAM SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold font-['Lora'] mb-16">
          Our Team of Doctors
        </h2>

        <div className="grid grid-cols-3 gap-16">

          {/* CARD */}
          <DoctorCard
  image={ashish}
  name="Dr. Ashish Ahuja"
  role="Retina Consultant"
  degree="MBBS, DNB (Retina)"
/>

<DoctorCard
  image={kartik}
  name="Dr. Kartik Panikkar"
  role="Glaucoma Consultant"
  degree="MBBS, DNB, FRCS (Edin)"
/>

<DoctorCard
  image={mitesh}
  name="Dr. Mitesh Jain"
  role="Cornea Specialist"
  degree="MBBS, DNB"
/>

<DoctorCard
  image={rajendra}
  name="Mr. Rajendra Pawar"
  role="Ocularist & Optometrist"
  degree="Master of Optometry, Vision Therapist, and Specialist in Contact Lenses"
/>

<DoctorCard
  image={uppal}
  name="Dr. Uppal Gandhi"
  role="Squint & Pediatric Ophthalmology Specialist"
  degree="DNB, Fellowship in Pediatric Ophthalmology, Strabismus, and Neuro-Ophthalmology"
/>

<DoctorCard
  image={akshay}
  name="Dr. Akshay Nair"
  role="Cornea Specialist"
  degree="MBBS, DNB"
/>
        </div>

      </section>
      <Footer />

    </div>
  );
}


/* reusable doctor card */

function DoctorCard({ image, name, role, degree }) {
  return (
    <div className="w-full px-10">

      {/* IMAGE CONTAINER */}
      <div className="h-[320px] w-[360px] bg-gradient-to-b from-white to-[#F8E0A2] flex items-end justify-center overflow-hidden">

        <img
          src={image}
          className="max-h-full object-contain"
        />

      </div>

      {/* TEXT */}
      <div className="mt-6 text-base font-bold font-['Open_Sans']leading-6 tracking-tight">
        {name}
      </div>
      <p className="text-wrap text-black text-xs font-normal font-['Open_Sans'] leading-6 tracking-tight  mt-1">
        {role}
      </p>
      
    <p className="text-wrap  text-black text-xs font-normal font-['Open_Sans'] leading-6 tracking-tight ">
        {degree}
      </p>

      <p className="mt-4 underline cursor-pointer text-xs font-normal font-['Open_Sans']">
        Read More
      </p>

    </div>
  );
}