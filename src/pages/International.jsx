import banner from "../assets/international/banner.JPG";
import globe from "../assets/international/globe.svg";

import loc from "../assets/international/2.svg";
import phone from "../assets/international/3.svg";
import mail from "../assets/international/4.svg";
import hotel from "../assets/international/8.svg";
import calendar1 from "../assets/international/6.svg";
import calendar2 from "../assets/international/9.svg";
import icon from "../assets/international/7.svg";
import worldmap from "../assets/international/worldmap.png";

import Navbar from "../components/Navbar";

export default function InternationalPatients() {
  return (
    <div className="w-full pt-16 overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[300px]  md:h-[550px] w-full">

        <img
          src={banner}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">

          <div className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-bold font-['Lora'] tracking-widest">
            International Patients
          </div>

          <div className="w-32 sm:w-60 md:w-120 h-[4px] bg-white/80 mt-2 rounded-full"></div>

        </div>

        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-[50px] md:h-[100px] lg:h-[120px]" preserveAspectRatio="none">
        <path className="fill-white" d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>

      </section>



      {/* JOURNEY SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

          <div>

            <div className="flex items-center gap-2 bg-[#A8D5BA] text-[#007A55] text-xs px-3 py-1 rounded-full inline-flex mb-4">

              <img
                src={globe}
                className="w-3 h-3 "
              />

              <span>
                Serving patients from 40+ countries
              </span>

            </div>

            <div className="w-full lg:w-[506px] text-neutral-950 text-2xl sm:text-3xl md:text-4xl font-bold font-['Lora'] leading-[38px] md:leading-[48px] tracking-tight mb-4">
              Your Journey to Better Vision Starts Here
            </div>

            <div className="w-full lg:w-[450px] text-gray-600 text-sm sm:text-lg md:text-base font-normal font-['Open_Sans'] leading-7">
              World-class eye care in the heart of Mumbai with personalized support for international patients
            </div>

          </div>


          {/* STATS */}
          <div className="flex items-start pt-4 lg:pt-15 gap-6">

            {/* ITEM 1 */}
            <div className="flex flex-col items-center w-29 gap-1">
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-950 ">
                15+
              </h3>
              <p className="text-sm text-gray-600 font-['Inter']">
                Years of Experience
              </p>
            </div>

            <div className="w-px h-14 bg-gray-300"></div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center w-24 gap-1">
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-950 ">
                10,000+
              </h3>
              <p className="text-sm text-gray-600 font-['Inter']">
                Surgeries
              </p>
            </div>

            <div className="w-px h-14 bg-gray-300"></div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center w-20 gap-1">
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-950 ">
                40+
              </h3>
              <p className="text-sm text-gray-600 font-['Inter']">
                Countries
              </p>
            </div>

          </div>

        </div>


        {/* WORLD MAP */}

        <div className="mt-16 relative overflow-x-auto md:overflow-visible">

  <div className="relative min-w-[1200px] md:min-w-0 flex justify-start md:justify-center">

  <img
    src={worldmap}
    className="w-[1200px] md:w-full max-w-none md:max-w-[1200px] opacity-70"
  />

  {/* INDIA */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[400px] left-[65%]" />

  {/* UAE REGION */}
<div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[380px] left-[58%]" /> {/* Dubai */}
<div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[375px] left-[58.5%]" /> {/* Abu Dhabi */}
<div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[385px] left-[59%]" /> {/* Sharjah */}
<div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[375px] left-[59.5%]" /> {/* Qatar */}
<div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[365px] left-[58.5%]" /> {/* Bahrain */}
<div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[388px] left-[60%]" /> {/* Oman */}
<div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[383px] left-[57%]" /> {/* Saudi Arabia */}
<div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[356px] left-[58%]" /> {/* Kuwait */}

  {/* ASIA */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[385px] left-[73%]" /> {/* Hongkong */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[380px] left-[76.5%]" /> {/* Taiwan */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[395px] left-[71%]" /> {/* Thailand */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[440px] left-[71.5%]" /> {/* Singapore */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[447px] left-[74%]" /> {/* Indonesia */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[427px] left-[66%]" /> {/* Sri Lanka */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[373px] left-[66%]" /> {/* Nepal */}

  {/* EUROPE */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[295px] left-[48%]" /> {/* Belgium */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[280px] left-[45.5%]" /> {/* United Kingdom */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[333px] left-[45%]" /> {/* Portugal */}

  {/* AFRICA */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[420px] left-[52%]" /> {/* Nigeria */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[460px] left-[55%]" /> {/* Kenya */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[480px] left-[56%]" /> {/* Tanzania */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[500px] left-[54%]" /> {/* Zambia */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[520px] left-[55%]" /> {/* Zimbabwe */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[470px] left-[53%]" /> {/* Uganda */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[440px] left-[54%]" /> {/* Ethiopia */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[480px] left-[52%]" /> {/* Malawi */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[500px] left-[52%]" /> {/* Mozambique */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[530px] left-[57%]" /> {/* South Africa */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[510px] left-[58%]" /> {/* Mauritius */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[490px] left-[57%]" /> {/* Zanzibar */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[430px] left-[50%]" /> {/* Senegal */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[450px] left-[51%]" /> {/* Burundi */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[420px] left-[55%]" /> {/* Libya */}

  {/* AMERICAS */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[310px] left-[25%]" /> {/* USA */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[220px] left-[18%]" /> {/* Canada */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[480px] left-[32%]" /> {/* Bolivia */}

  {/* OCEANIA */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[500px] left-[85%]" /> {/* Australia */}

  {/* MIDDLE EAST EXTRA */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[350px] left-[64%]" /> {/* Iraq */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[340px] left-[63%]" /> {/* Israel */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[345px] left-[66%]" /> {/* Syria */}
  <div className="absolute w-1.5 h-1.5 bg-black rounded-full patient-dot top-[360px] left-[67%]" /> {/* Yemen */}

</div>

</div>

      </section>

          {/* WHY CHOOSE */}
<section className="max-w-[1300px] md:h-[270px] mx-auto bg-gray-50 py-8 px-6">

  <div className="max-w-[1300px] mx-auto">

    {/* TITLE */}
    <h3 className="text-center text-gray-900 text-2xl md:text-3xl font-semibold font-['Lora'] leading-9 tracking-tight mb-8">
      Why Choose Samyak Drishti
    </h3>

    {/* CARDS */}
    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-50">

      {/* CARD 1 */}
      <div className="w-full md:w-[510px] h-auto md:h-[140px] bg-white rounded-2xl border border-blue-950 border-l-4 p-6 flex gap-4">

        <img src={icon} className="w-6 h-6 mt-1" />

        <div>
          <h4 className="text-neutral-950 text-lg md:text-xl font-normal font-['Open_Sans'] leading-7 mb-3">
            Globally Recognized Expertise
          </h4>

          <p className="text-gray-500 text-[13px] font-normal font-['Open_Sans'] leading-6">
            Led by Dr. Sujal Shah and Dr. Manisha Shah, among India's leading
            refractive and cataract surgeons with extensive international
            training and recognition.
          </p>
        </div>

      </div>


      {/* CARD 2 */}
      <div className="w-full md:w-[510px] h-auto md:h-[140px] bg-white rounded-2xl border border-blue-950 border-l-4 p-6 flex gap-4">

        <img src={icon} className="w-6 h-6 mt-1" />

        <div>
          <h4 className="text-neutral-950 text-lg md:text-xl font-normal font-['Open_Sans'] leading-7 mb-3">
            Cutting-Edge Technology
          </h4>

          <p className="text-gray-500 text-[13px] font-normal font-['Open_Sans'] leading-6">
            Equipped with advanced VisuMax femtosecond and excimer laser
            platforms used in leading international centers worldwide.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>



{/* VISIT CLINIC */}
<section className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">

  <div className="text-center text-neutral-950 text-2xl md:text-3xl font-semibold font-['Lora'] leading-10 tracking-tight mb-12 md:mb-16">
    Visit Our Clinic
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

    {/* INFO */}

    <div>

      <div className="text-neutral-950 text-[18px] md:text-[21px] font-semibold font-['Open_Sans'] leading-8 tracking-tight mb-6">
        Samyak Drishti Eye Clinic
      </div>

      <div className="space-y-3 text-sm">

        <div className="flex gap-3">
          <img src={loc} className="w-4" />
          <p>
            101, 1st Floor, Sukh Sagar, N S Patkar Marg,<br />
            Girgaon Chowpatty, Mumbai - 400007
          </p>
        </div>

        <div className="flex gap-3">
          <img src={phone} className="w-4" />
          <a href="tel:+912223609044" className="hover:underline">
            +91 22 2360 9044
          </a>
        </div>

        <div className="flex gap-3">
          <img src={phone} className="w-4" />
          <a href="tel:+918433723937" className="hover:underline">
            +91 84337 23937
          </a>
        </div>

        <div className="flex gap-3">
          <img src={mail} className="w-4" />
          <a href="mailto:info@samyakdrishti.com" className="hover:underline">
            info@samyakdrishti.com
          </a>
        </div>

      </div>


      {/* LOCATION INFO */}

      <div className="mt-8 bg-[#F0FDFA] p-4 rounded-xl">

        <div className="w-full md:w-[544px] text-gray-700 text-[13px] font-normal font-['Open_Sans'] leading-6">
          📍 Conveniently located in South Mumbai, easily accessible from 
          Chhatrapati Shivaji Maharaj International Airport 
          (approximately 45 minutes by car).
        </div>

        <a
          href="https://maps.google.com/?q=Samyak+Drishti+Eye+Clinic+Mumbai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 bg-[#A8D5BA] hover:bg-[#A8D5BA] text-white text-[13px] px-4 py-2 rounded-md font-semibold transition"
        >
          Open in Google Maps
        </a>

      </div>

    </div>


    {/* MAP BOX */}

    <div className="bg-white rounded-lg shadow-md h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7546.879457392052!2d72.80378469357909!3d18.956177799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cefa8350e16b%3A0x78d1c76d962a5adf!2sSamyak%20Drishti%20Eye%20Centre!5e0!3m2!1sen!2sin!4v1773153564244!5m2!1sen!2sin"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>

    </div>

  </div>

</section>


  {/* HOTELS */}

<section className="max-w-[1400px] md:h-[380px] bg-[#F9FAFB] mx-auto px-6 py-8 pb-20 md:pb-24">

  <div className="text-center text-gray-900 text-2xl md:text-3xl font-semibold font-['Lora'] leading-9 tracking-tight mb-3">
    Nearby Hotels
  </div>

  <div className="text-center text-gray-600 text-sm md:text-base font-normal font-['Open_Sans'] leading-6 mb-10">
    We've listed a few hotels close to the clinic for your convenience during your stay
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

    {/* CARD 1 */}
    <div className="bg-white rounded-2xl border border-black/10 p-6 flex flex-col gap-6">

      <div>
        <div className="flex items-center gap-2 mb-3">
          <img src={hotel} className="w-5 h-5"/>
          <p className="text-[15px] font-['Open_Sans'] font-normal text-neutral-950">
            The Royal Castle
          </p>
        </div>

        <div className="text-[#F3E7B3] text-lg">★★</div>
      </div>

      <div>
        <span className="bg-gray-100 text-xs px-3 py-1 rounded-lg">
          5–10 minutes
        </span>

        <div className="w-full md:w-56 text-gray-600 text-sm font-normal font-['Open_Sans'] leading-5 mt-3">
          Comfortable, mid-range stay near Cumballa Hill.
        </div>
      </div>

    </div>


    {/* CARD 2 */}
    <div className="bg-white rounded-2xl border border-black/10 p-6 flex flex-col gap-6">

      <div>
        <div className="flex items-center gap-2 mb-3">
          <img src={hotel} className="w-5 h-5"/>
          <p className="text-[15px] font-['Open_Sans'] font-normal text-neutral-950">
            The Shalimar
          </p>
        </div>

        <div className="text-[#F3E7B3] text-lg">★★★★</div>
      </div>

      <div>
        <span className="bg-gray-100 text-xs px-3 py-1 rounded-lg">
          5–10 minutes
        </span>

        <div className="w-full md:w-56 text-gray-600 text-sm font-normal font-['Open_Sans'] leading-5 mt-3">
          Modern amenities and easy access to major attractions.
        </div>
      </div>

    </div>


    {/* CARD 3 */}
    <div className="bg-white rounded-2xl border border-black/10 p-6 flex flex-col gap-6">

      <div>
        <div className="flex items-center gap-2 mb-3">
          <img src={hotel} className="w-5 h-5"/>
          <p className="text-[15px] font-['Open_Sans'] font-normal text-neutral-950">
            Courtyard by Marriott
          </p>
        </div>

        <div className="text-[#F3E7B3] text-lg">★★★★★</div>
      </div>

      <div>
        <span className="bg-gray-100 text-xs px-3 py-1 rounded-lg">
          Airport Location
        </span>

        <div className="w-full md:w-60 text-gray-600 text-sm font-normal font-['Open_Sans'] leading-5 mt-3">
          Premium stays with sea-facing views and concierge support.
        </div>
      </div>

    </div>


    {/* CARD 4 */}
    <div className="bg-white rounded-2xl border border-black/10 p-6 flex flex-col gap-6">

      <div>
        <div className="flex items-center gap-2 mb-2">
          <img src={hotel} className="w-5 h-5"/>
          <p className="text-[15px] font-['Open_Sans'] font-normal text-neutral-950">
            InterContinental Marine Drive
          </p>
        </div>

        <div className="text-[#F3E7B3] text-lg">★★★★★</div>
      </div>

      <div>
        <span className="bg-gray-100 text-xs px-3 py-1 rounded-lg">
          IHG Premium
        </span>

        <div className="w-full md:w-60 text-gray-600 text-sm font-normal font-['Open_Sans'] leading-5 mt-3">
          Premium stays with sea-facing views and concierge support.
        </div>
      </div>

    </div>

  </div>

</section>



{/* EXPLORE MUMBAI */}

<section className="max-w-[1200px] mx-auto py-16 px-6">

  <div className="text-center text-neutral-950 text-2xl md:text-3xl font-semibold font-['Lora'] mb-3">
    Explore Mumbai
  </div>

  <div className="text-center text-gray-600 text-sm md:text-base font-normal font-['Open_Sans'] mb-10">
    Make the most of your visit with these local experiences
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-50">

    {/* HERITAGE */}
    <div className="flex flex-col gap-6">

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-amber-100 rounded-[10px] flex items-center justify-center text-2xl">
          🏛️
        </div>
        <h4 className="text-[18px] md:text-[21px] font-normal font-['Open_Sans']">
          Heritage
        </h4>
      </div>

      <div className="flex flex-col gap-4">

        <div className="pl-5 border-l-4 border-[#F8E0A2]">
          <p className="text-[13px] font-['Open_Sans']">Gateway of India</p>
          <p className="text-xs text-gray-600">Iconic waterfront arch in Colaba</p>
        </div>

        <div className="pl-5 border-l-4 border-[#F8E0A2]">
          <p className="text-[13px] font-['Open_Sans']">Taj Mahal Palace Hotel</p>
          <p className="text-xs text-gray-600">Historic luxury and high tea</p>
        </div>

        <div className="pl-5 border-l-4 border-[#F8E0A2]">
          <p className="text-[13px] font-['Open_Sans']">Kala Ghoda</p>
          <p className="text-xs text-gray-600">Arts and culture district</p>
        </div>

      </div>

    </div>


    {/* CULTURE */}
    <div className="flex flex-col gap-6">

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-red-100 rounded-[10px] flex items-center justify-center text-2xl">
          🎭
        </div>
        <h4 className="text-[18px] md:text-[21px] font-normal font-['Open_Sans']">
          Culture
        </h4>
      </div>

      <div className="flex flex-col gap-4">

        <div className="pl-5 border-l-4 border-[#F1B2A9]">
          <p className="text-[13px] font-['Open_Sans']">CSMVS Museum</p>
          <p className="text-xs text-gray-600">Premier museum in Fort</p>
        </div>

        <div className="pl-5 border-l-4 border-[#F1B2A9]">
          <p className="text-[13px] font-['Open_Sans']">Dr. Bhau Daji Lad Museum</p>
          <p className="text-xs text-gray-600">Mumbai's heritage in Byculla</p>
        </div>

        <div className="pl-5 border-l-4 border-[#F1B2A9]">
          <p className="text-[13px] font-['Open_Sans']">NMACC</p>
          <p className="text-xs text-gray-600">World-class theatre in BKC</p>
        </div>

      </div>

    </div>


    {/* NATURE */}
    <div className="flex flex-col gap-6">

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-100 rounded-[10px] flex items-center justify-center text-2xl">
          🌊
        </div>
        <h4 className="text-[18px] md:text-[21px] font-normal font-['Open_Sans']">
          Nature
        </h4>
      </div>

      <div className="flex flex-col gap-4">

        <div className="pl-5 border-l-4 border-[#A8D5BA]">
          <p className="text-[13px] font-['Open_Sans']">Marine Drive</p>
          <p className="text-xs text-gray-600">The Queen's Necklace at sunset</p>
        </div>

        <div className="pl-5 border-l-4 border-[#A8D5BA]">
          <p className="text-[13px] font-['Open_Sans']">Malabar Hill Walkway</p>
          <p className="text-xs text-gray-600">Peaceful path with sea views</p>
        </div>

        <div className="pl-5 border-l-4 border-[#A8D5BA]">
          <p className="text-[13px] font-['Open_Sans']">Elephanta Caves</p>
          <p className="text-xs text-gray-600">UNESCO site via ferry</p>
        </div>

        <div className="pl-5 border-l-4 border-[#A8D5BA]">
          <p className="text-[13px] font-['Open_Sans']">Coastal Road Walkway</p>
          <p className="text-xs text-gray-600">Beach side scenic walk</p>
        </div>

      </div>

    </div>

  </div>

</section>



{/* STAY DURATION */}

<section className="max-w-[1300px] mx-auto pt-20 px-6">

<div className="text-center text-neutral-950 text-2xl md:text-3xl font-semibold font-['Lora'] mb-3">
Plan Your Stay Duration
</div>

<div className="text-center text-gray-600 text-base font-normal font-['Open_Sans'] mb-10">
Recommended minimum stay in Mumbai for international patients
</div>

<div className="space-y-4">

{[
{
title:"Cataract Surgery",
desc:"Pre-op evaluation, surgery, and initial recovery",
time:"~7 days",
bg:"from-emerald-50",
border:"border-[#A8D5BA]"
},
{
title:"Retina Surgery",
desc:"Extended monitoring for retinal procedures",
time:"~10 days",
bg:"from-yellow-50",
border:"border-[#F8E0A2]"
},
{
title:"Cornea & Glaucoma Surgery",
desc:"Comprehensive post-surgical care and monitoring",
time:"~14 days",
bg:"from-emerald-50",
border:"border-[#A8D5BA]"
},
{
title:"Oculoplasty Procedures",
desc:"Cosmetic and reconstructive eye procedures",
time:"~7 days",
bg:"from-yellow-50",
border:"border-[#F8E0A2]"
},
{
title:"LASIK / Laser Vision Correction",
desc:"Quick procedure with follow-up monitoring",
time:"~5 days",
bg:"from-emerald-50",
border:"border-[#A8D5BA]"
}
].map((item,i)=>(

<div
key={i}
className={`flex flex-col md:flex-row md:items-center gap-4 px-6 py-5 rounded-2xl border-l-4 ${item.border} bg-gradient-to-r ${item.bg} to-white`}
>

<img
src={item.border === "border-[#F8E0A2]" ? calendar2 : calendar1}
className="w-6 h-6"
/>

<div className="flex-1">
<p className="text-[16px] font-normal font-['Open_Sans'] text-neutral-950">
{item.title}
</p>

<p className="text-sm text-gray-600 font-['Open_Sans']">
{item.desc}
</p>
</div>

<span className="text-2xl text-blue-950 font-['Open_Sans']">
{item.time}
</span>

</div>

))}

</div>

</section>



<style>
{`
@keyframes pulseDot {
0% { transform: scale(1); opacity: 1; }
50% { transform: scale(1.5); }
100% { transform: scale(1); opacity: 1; }
}

.patient-dot {
animation: pulseDot 2s ease-in-out infinite;
}
`}
</style>


    </div>
  );
}