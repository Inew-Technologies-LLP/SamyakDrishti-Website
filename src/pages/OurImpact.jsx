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

import img1 from "../assets/our_impact/1.png";
import img2 from "../assets/our_impact/2.png";
import img3 from "../assets/our_impact/3.png";
import img4 from "../assets/our_impact/4.png";
import img5 from "../assets/our_impact/5.png";

export default function OurImpact() {

  const stats = [
    {icon:icon1,value:"12500+",text:"Jain monks receiving cashless medical care"},
    {icon:icon2,value:"600,000+",text:"People covered by insurance"},
    {icon:icon3,value:"17+",text:"Years of Dedicated Community Outreach"},
    {icon:icon4,value:"2000+",text:"Doctors in Network"},
  ];

  return (
    <div>

      <Navbar/>

      {/* HERO */}
      <section className="relative bg-white h-[420px]">

  {/* Banner Image */}
  <img src={banner} className="w-full h-full object-cover"/>

  {/* Bottom Layer */}
  <img
  src={layer}
  className="absolute -bottom-1 left-0 w-full pointer-events-none"
/>
  {/* Centered Heading */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center mb-16">

    <div className="text-white text-7xl font-bold font-['Lora'] leading-[72px] tracking-widest">
      Our Impact
    </div>

    <div className="w-48 h-1 mt-4 bg-white/80 rounded-full"></div>

  </div>

</section>


      {/* STATS */}
      <section className="max-w-6xl mx-auto grid grid-cols-4 gap-6 py-14">

        {stats.map((item,i)=>(
  <div key={i} className="bg-white shadow p-6 rounded-lg text-center">
    
    <img src={item.icon} className="h-10 mx-auto mb-3"/>

    <div className="text-center justify-start text-black text-2xl font-bold font-['Open_Sans'] leading-10">{item.value}</div>

    <div className="w-45  mx-auto text-center text-black text-base font-normal font-['Open_Sans'] leading-6">
      {item.text}
    </div>

  </div>
))}

      </section>


    {/* COMMUNITY HEALTH */}
<section className="max-w-[1400px] mx-auto py-12">

<div className="flex flex-col items-center text-center">

  <div className="text-blue-950 text-3xl font-semibold font-['Lora'] leading-10 mb-4">
    Community Health Initiatives
  </div>

  <div className="w-[764px] text-gray-600 text-base font-normal font-['Open_Sans'] leading-6 mb-16">
    Committed to serving diverse communities through innovative healthcare programs and partnerships
  </div>

</div>
<div className="flex flex-col gap-16">

  {/* ROW 1 */}
  <div className="flex items-center gap-[145px]">

    {/* CARD 1 */}
    <div className="w-96 h-72 px-6 pt-6 pb-px bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-t-[6px] border-emerald-200 inline-flex flex-col justify-start items-start">
    
    <div className="self-stretch h-48 inline-flex justify-start items-start gap-4">
        
        {/* ICON */}
            <img src={icon5} className="w-10 h-10" />

        <div className="flex-1 h-48 inline-flex flex-col justify-start items-start gap-1">
            
            <div className="self-stretch h-6 relative">
                <div className="left-0 top-[-0.50px] absolute justify-start text-blue-950 text-base font-medium font-['Lora'] leading-6">
                    JITO Healthcare Initiative
                </div>
            </div>

            <div className="self-stretch h-10 relative opacity-80">
                <div className="w-56 left-0 top-[-7px] absolute justify-start text-blue-950 text-xs font-normal font-['Open_Sans'] leading-5">
                    Jain International Trade Organization
                </div>
            </div>

            <div className="self-stretch h-28 relative">
                <div className="w-56 h-36 left-0 top-[-1px] absolute justify-start text-gray-600 text-lg font-normal font-['Open_Sans'] leading-6">
                    Conceptualised and serves as a Permanent Trustee of Shraman Arogyam, which provides cashless medical care to 12,500 Jain monks across India.
                </div>
            </div>

        </div>

    </div>

</div>

    {/* IMAGE 1 */}
    <img
      src={img1}
      className="w-[820px] h-[365px]  object-cover rounded-xl"
    />

  </div>


  {/* ROW 2 */}
  <div className="flex items-center gap-[145px]">

    {/* IMAGE 2 */}
    <img
      src={img2}
      className="w-[802px] h-[391px] object-cover rounded-xl"
    />

    {/* CARD 2 */}
   <div className="w-96 h-72 px-6 pt-6 pb-px bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-t-[6px] border-emerald-200 inline-flex flex-col justify-start items-start">
    
    <div className="self-stretch h-40 inline-flex justify-start items-start gap-4">
        
        {/* ICON */}
            <img src={icon6} className="w-10 h-10" />

        <div className="flex-1 h-40 inline-flex flex-col justify-start items-start gap-1">
            
            <div className="self-stretch h-6 relative">
                <div className="left-0 top-[-0.50px] absolute justify-start text-blue-950 text-base font-medium font-['Lora'] leading-6">
                    Shravak Arogyam
                </div>
            </div>

            <div className="self-stretch h-10 relative opacity-80">
                <div className="w-52 left-0 top-[-8px] absolute justify-start text-blue-950 text-xs font-normal font-['Open_Sans'] leading-5">
                    Jain International Organization (JIO)
                </div>
            </div>

            <div className="self-stretch h-24 relative">
                <div className="w-52 left-0 top-[-0.50px] absolute justify-start text-gray-600 text-lg font-normal font-['Open_Sans'] leading-6">
                    As Director, Dr. Sujal Shah conceptualized and led this health insurance initiative covering nearly 600,000 people.
                </div>
            </div>

        </div>

    </div>

</div>

  </div>


  {/* ROW 3 */}
  <div className="flex items-center gap-[145px]">

    {/* CARD 3 */}
    <div className="w-96 h-85 px-6 pt-6 pb-px bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-t-[6px] border-emerald-200 inline-flex flex-col justify-start items-start">
    
    <div className="self-stretch h-56 inline-flex justify-start items-start gap-4">
        
        {/* ICON */}
        <div className="w-12 h-12 bg-blue-950/10 rounded-[10px] flex justify-center items-center">
            <img src={icon7} className="w-6 h-6" />
        </div>

        <div className="flex-1 h-56 relative">
            
            <div className="w-52 h-6 left-0 top-0 absolute">
                <div className="left-0 top-[-0.50px] absolute justify-start text-blue-950 text-base font-medium font-['Lora'] leading-6">
                    Medical Coordination
                </div>
            </div>

            <div className="w-52 h-5 left-0 top-[28px] absolute opacity-80">
                <div className="left-0 top-[-7px] absolute justify-start text-blue-950 text-xs font-normal font-['Open_Sans'] leading-5">
                    Samkit Group, Mumbai
                </div>
            </div>

            <div className="w-52 h-36 left-0 top-[56px] absolute">
                <div className="w-56 left-0 top-[-1px] absolute justify-start text-gray-600 text-lg font-normal font-['Open_Sans'] leading-6">
                    As Medical Advisor, Dr. Sujal Shah has coordinated medical care for Chauvihar Chhat and Saat Jatra at Palitana and organized large community medical camps at pilgrimage centres.
                </div>
            </div>

            <div className="w-20 h-6 left-0 top-[277px] absolute bg-blue-950/5 rounded-full">
                <div className="left-[12px] top-[3.50px] absolute justify-start text-blue-950 text-xs font-normal font-['Open_Sans'] leading-4">
                    10+ Years
                </div>
            </div>

        </div>

    </div>

</div>

    {/* IMAGE 3 */}
    <img
      src={img3}
      className="w-[735px] h-[344px] object-cover rounded-xl"
    />

  </div>

</div>


     {/* MEDICAL ASSOCIATION */}
<section className="max-w-[1200px] mx-auto py-50">

  <div className="flex items-start justify-between">

    {/* LEFT SIDE */}
    <div className="flex flex-col w-[422px]">

      <div className="text-blue-950 text-3xl font-semibold font-['Lora'] leading-10 mb-4">
        Medical Associations & Leadership
      </div>

      <div className="text-gray-600 text-base font-normal font-['Open_Sans'] leading-6 mb-10">
        Collaborating with leading medical organizations to expand healthcare access
      </div>

      {/* IMAGE */}
      <img
        src={img4}
        className="w-[422px] h-[515px] object-cover rounded-xl"
      />

    </div>


    {/* RIGHT SIDE CARDS */}
    <div className="w-80 h-[1066px] relative rounded-[10px]">

      {/* CARD 1 */}
      <div className="h-56 p-9 left-0 top-0 absolute bg-white rounded-[10px] outline outline-[3px] outline-offset-[-3px] outline-orange-200 inline-flex flex-col">
        <div className="w-72 inline-flex gap-4">

          <img src={icon10} className="w-10 h-10"/>

          <div className="flex flex-col gap-1">
            <div className="text-blue-950 text-base font-normal font-['Lora']">
              Community Partnerships
            </div>

            <div className="text-blue-950 text-sm opacity-80 font-['Lora']">
              Lions Club, Rotary Club & NGOs
            </div>

            <div className="text-gray-600 text-sm font-['Open_Sans'] leading-6">
              Regularly participates in charitable health camps in collaboration with major hospitals and corporations.
            </div>
          </div>

        </div>
      </div>


      {/* CARD 2 */}
      <div className="h-56 p-9 left-0 top-[274px] absolute bg-white rounded-[10px] outline outline-[3px] outline-offset-[-3px] outline-orange-200 inline-flex flex-col">
        <div className="w-72 inline-flex gap-4">

          <img src={icon8} className="w-10 h-10"/>

          <div className="flex flex-col gap-1">

            <div className="text-blue-950 text-base font-normal font-['Lora']">
              Medical Advisory Board
            </div>

            <div className="text-blue-950 text-sm opacity-80 font-['Lora']">
              Shri Adinath Nethralay, Veerayatan, Palitana
            </div>

            <div className="text-gray-600 text-sm font-['Open_Sans'] leading-6">
              Member of the Medical Advisory Board, providing expert guidance on eye care services.
            </div>

          </div>

        </div>
      </div>


      {/* CARD 3 */}
      <div className="p-9 left-0 top-[554px] absolute bg-white rounded-[10px] outline outline-[3px] outline-offset-[-3px] outline-orange-200 inline-flex flex-col">

        <div className="w-72 inline-flex gap-4">

          <img src={icon10} className="w-10 h-10"/>

          <div className="flex flex-col gap-1">

            <div className="text-blue-950 text-base font-normal font-['Lora']">
              President & Office Bearer
            </div>

            <div className="text-blue-950 text-sm opacity-80 font-['Lora']">
              Jain Doctors Federation, Mumbai
            </div>

            <div className="text-gray-600 text-sm font-['Open_Sans'] leading-6">
              Coordinates social initiatives and charitable health camps for indigent patients through a network of 2,000 doctors.
            </div>

          </div>

        </div>

      </div>


      {/* CARD 4 */}
      <div className="p-9 left-[2px] top-[828px] absolute bg-white rounded-[10px] outline outline-[3px] outline-offset-[-3px] outline-orange-200 inline-flex flex-col">

        <div className="w-72 inline-flex gap-4">

          <img src={icon11} className="w-10 h-10"/>

          <div className="flex flex-col gap-1">

            <div className="text-blue-950 text-base font-normal font-['Lora']">
              Executive Committee Member
            </div>

            <div className="text-blue-950 text-sm opacity-80 font-['Lora']">
              Shree Mahavir Group of Hospitals, Surat
            </div>

            <div className="text-gray-600 text-sm font-['Open_Sans'] leading-6">
              Serves on the Executive Committee, contributing to strategic healthcare initiatives.
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

</section>

      {/* OUTREACH */}
      <section className="max-w-7xl mx-auto pb-30">

     <div className="flex flex-col items-center text-center">

  <div className="text-blue-950 text-3xl font-semibold font-['Lora'] leading-10 mb-3">
    Outreach and Eye Care Camps
  </div>

  <div className="w-[764px] text-gray-600 text-base font-normal font-['Open_Sans'] leading-6 mb-10">
    Bringing quality eye care to underserved communities through dedicated camps and mobile clinics
  </div>

</div>
        <div className="max-w-[1600px] mx-auto flex gap-8">

    {/* CARD 1 */}
    <div className="w-[818px] flex-1 px-6 pt-6 pb-4 bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-l-[6px] border-orange-200 flex gap-4">

        <img src={icon8} className="w-10 h-10"/>

        <div className="flex flex-col ">

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
    <div className="w-[818px] flex-1 px-6 pt-6 pb-4 bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-l-[6px] border-orange-200 flex gap-4">

        <img src={icon8} className="w-10 h-10"/>

        <div className="flex flex-col ">

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
<div className="max-w-[1200px] mx-auto h-80 bg-gradient-to-b from-blue-950 to-cyan-900 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center px-10 ">

    {/* ICON */}
    <img
      src={icon12}
      className="w-16 h-16 opacity-90 mb-6"
    />

    {/* HEADING */}
    <div className="text-white text-4xl font-medium font-['Lora'] leading-10 mb-4">
        Recognition
    </div>

    {/* DESCRIPTION */}
    <div className="max-w-[875px] text-white text-xl font-normal font-['Open_Sans'] leading-8 opacity-90">
        Dr. Sujal Shah has been honoured by the Chief Minister of Maharashtra and several organizations for his sustained volunteer work and social service.
    </div>

</div>
 <section className="max-w-[1200px]  mx-auto pt-20">
        <img src={img5} className="w-full shadow rounded-2xl "/>
      </section>


      <Footer/>

    </div>
  );
}