import logo from "../assets/logo2.svg";
import phone from "../assets/phone-call.svg";
import mail from "../assets/mail.svg";
import { Link } from "react-router-dom";

export default function Footer({ onBookClick }) {
  return (
    <footer className="w-full mt-24 md:mt-40 relative">

      {/* CTA CARD */}
<div className="max-w-[1350px] mx-auto relative z-10 px-6">

  <div className="bg-[#11224A] rounded-[20px] px-6 md:px-16 py-10 md:py-14 flex justify-between items-center gap-6 text-white">

    {/* LEFT TEXT */}
    <div className="max-w-[200px] md:max-w-[500px]">

      <h2 className="text-[28px] md:text-[40px] font-lora font-bold mb-3">
        Your Vision Matters
      </h2>

     <p className="text-[13px] md:text-[14px] font-openSans mb-6 opacity-80 max-w-[220px] md:max-w-none">
  Schedule a comprehensive consultation with our specialists today
</p>

      <button 
  onClick={onBookClick} 
  className="cursor-pointer bg-[#BFE3C9] text-black px-6 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 hover:scale-110 hover:shadow-[0_0_15px_rgba(191,227,201,0.6)]"
>
  Schedule Consultation
</button>

    </div>

    {/* RIGHT GRAPHIC */}
    <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center">

      {/* TOP SHAPE */}
      <div className="absolute top-0 w-full h-[50%] bg-[#E6CF97] rounded-b-full animate-circle-move"></div>

      {/* BOTTOM SHAPE */}
      <div className="absolute bottom-0 w-full h-[50%] bg-[#E6CF97] rounded-t-full"></div>

    </div>

  </div>

</div>

      {/* FOOTER MAIN */}
      <div className="w-full bg-gradient-to-b from-[#F8E0A2] to-[#A8D5BA] rounded-t-[20px] pt-28 md:pt-32 pb-6 md:pb-3 -mt-20 md:-mt-28">

        <div className="max-w-[1650px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-0 px-6">

          {/* LEFT INFO */}
          <div className="max-w-[380px] lg:ml-20">

            <img src={logo} className="w-[200px] md:w-[180px] mb-6"/>

            <div className="text-black text-sm md:text-base font-normal font-['Open_Sans'] leading-6 mb-10 md:mb-15">
              101, 1st Floor, Sukh Sagar, N S Patkar Marg, Girgaon Chowpatty, Mumbai - 400007
            </div>

            <div className="text-[13px] md:text-[14px] space-y-3">

              {/* FIRST ROW */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">

                {/* PHONE */}
                <div className="flex items-center gap-3">
                  <img src={phone} className="w-4 h-4" />
                  <a href="tel:+912223623937" className="hover:underline">
                    +91-22-23623937
                  </a>
                </div>

                {/* MAIL */}
                <div className="flex items-center gap-3">
                  <img src={mail} className="w-4 h-4" />
                  <a href="mailto:info@samyakdrishti.com" className="hover:underline">
                    info@samyakdrishti.com
                  </a>
                </div>

              </div>

              {/* SECOND PHONE */}
              <div className="flex items-center gap-3">
                <img src={phone} className="w-4 h-4" />
                <a href="tel:+918433723937" className="hover:underline">
                  +91 84337 23937
                </a>
              </div>

            </div>

          </div>


         {/* RIGHT LINKS */}
<div className="flex gap-12 sm:gap-20 lg:gap-24 lg:mr-20 flex-wrap">

  {/* QUICK LINKS */}
  <div>
    <h4 className="font-semibold mb-4 text-[13px]">
      Quick Links
    </h4>

    <ul className="space-y-2 text-[12px]">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/our-team">Our Team</Link></li>
      <li><Link to="/services">Our Services</Link></li>
      <li><Link to="/our-impact">Our Impact</Link></li>
      <li><Link to="/international">International Patients</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  </div>

  {/* SOCIAL */}
  <div>
    <h4 className="font-semibold mb-4 text-[13px]">
      Social
    </h4>

    <ul className="space-y-2 text-[12px]">
      
      <li>
       <a href="https://www.instagram.com/samyakdrishti/" target="_blank" rel="noopener noreferrer">
          Instagram
       </a>
</li>
    </ul>
  </div>

{/* SERVICES */}
<div>
  <h4 className="font-semibold mb-4 text-[13px]">
    Services
  </h4>

  <ul className="space-y-2 text-[12px]">
    {/* Standalone Pages */}
    <li><Link to="/lasik" className="hover:opacity-70 transition-opacity">LASIK</Link></li>
    <li><Link to="/cataract" className="hover:opacity-70 transition-opacity">Cataract</Link></li>
    <li><Link to="/rle" className="hover:opacity-70 transition-opacity">Refractive Lens Exchange (RLE)</Link></li>
    
    {/* Links that pass the activeId state to the Services page */}
    <li><Link to="/services" state={{ activeId: "routine-eye-test" }} className="hover:opacity-70 transition-opacity">Routine Eye Test</Link></li>
    <li><Link to="/services" state={{ activeId: "dry-eye-clinic" }} className="hover:opacity-70 transition-opacity">Dry Eye Clinic</Link></li>
    <li><Link to="/services" state={{ activeId: "glaucoma-clinic" }} className="hover:opacity-70 transition-opacity">Glaucoma Clinic</Link></li>
    <li><Link to="/services" state={{ activeId: "retina-diabetic-retinopathy" }} className="hover:opacity-70 transition-opacity">Retina and Diabetic Retinopathy</Link></li>
    <li><Link to="/services" state={{ activeId: "oculoplastic-clinic" }} className="hover:opacity-70 transition-opacity">Oculoplastic Clinic</Link></li>
    <li><Link to="/services" state={{ activeId: "squint-clinic" }} className="hover:opacity-70 transition-opacity">Squint Clinic</Link></li>
    <li><Link to="/services" state={{ activeId: "myopia-clinic" }} className="hover:opacity-70 transition-opacity">Myopia Clinic</Link></li>
    <li><Link to="/services" state={{ activeId: "keratoconus-clinic" }} className="hover:opacity-70 transition-opacity">Keratoconus Clinic</Link></li>
    <li><Link to="/services" state={{ activeId: "cornea-clinic" }} className="hover:opacity-70 transition-opacity">Cornea Clinic</Link></li>
    <li><Link to="/services" state={{ activeId: "contact-lens-optometry" }} className="hover:opacity-70 transition-opacity">Contact Lens and Optometry Clinic</Link></li>
  </ul>
</div>

</div>

        </div>

      </div>


<style>
{`
@keyframes circleMove {
  0% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-20deg);
  }
}

.animate-circle-move {
  animation: circleMove 1.5s ease-in-out infinite alternate;
  transform-origin: center bottom;
}
`}
</style>

    </footer>
  );
}