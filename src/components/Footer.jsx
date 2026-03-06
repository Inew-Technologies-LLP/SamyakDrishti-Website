import logo from "../assets/logo2.png";
import gif from "../assets/gif.svg";
import phone from "../assets/phone-call.svg";
import mail from "../assets/mail.svg";

export default function Footer() {
  return (
    <footer className="w-full mt-40 relative">

      {/* CTA CARD */}
      <div className="max-w-[1350px] mx-auto relative z-10">

        <div className="bg-[#11224A] rounded-[20px] px-16 py-14 flex justify-between items-center text-white">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[40px] font-lora font-bold mb-3">
              Your Vision Matters
            </h2>

            <p className="text-[14px] font-openSans mb-6 opacity-80">
              Schedule a comprehensive consultation with our specialists today
            </p>

            <button className="bg-[#BFE3C9] text-black px-6 py-2 rounded-full text-[14px] font-semibold">
              Schedule Consultation
            </button>
          </div>

         {/* RIGHT GRAPHIC */}
<div className="relative w-[120px] h-[120px] flex items-center justify-center">

  {/* TOP SHAPE (ANIMATED) */}
  <div className="absolute top-0 w-[120px] h-[60px] bg-[#E6CF97] rounded-b-full animate-circle-move"></div>

  {/* BOTTOM SHAPE */}
  <div className="absolute bottom-0 w-[120px] h-[60px] bg-[#E6CF97] rounded-t-full"></div>

</div>
          

        </div>

      </div>


      {/* FOOTER MAIN */}
      <div className="w-full bg-gradient-to-b from-[#F8E0A2] to-[#A8D5BA] rounded-t-[20px] pt-32 pb-3 -mt-28">

        <div className="max-w-[1650px] mx-auto flex justify-between">

          {/* LEFT INFO */}
          <div className="max-w-[360px] ml-20">

            <img src={logo} className="w-[180px] mb-6"/>

            <div className="w-56 justify-start text-black text-base font-normal font-['Open_Sans'] leading-6 mb-15">101, 1st Floor, Sukh Sagar, N S Patkar Marg, Girgaon Chowpatty, Mumbai - 400007</div>

            <div className="text-[14px] space-y-2">

            {/* FIRST ROW */}
            <div className="flex items-center gap-10">

              {/* PHONE */}
              <div className="flex items-center gap-3">
                <img src={phone} className="w-4 h-4" />
                <span>+91-22-23623937</span>
              </div>

              {/* MAIL */}
              <div className="flex items-center gap-3">
                <img src={mail} className="w-4 h-4" />
                <span>info@samyakdrishti.com</span>
              </div>

            </div>

            {/* SECOND PHONE */}
            <div className="flex items-center gap-3">
              <img src={phone} className="w-4 h-4" />
              <span>+91 84337 23937</span>
            </div>

          </div>

          </div>


          {/* RIGHT LINKS */}
          <div className="flex gap-24 mr-20">

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-semibold mb-4 text-[13px]">
                Quick Links
              </h4>

              <ul className="space-y-2 text-[12px]">
                <li>Home</li>
                <li>Our Team</li>
                <li>Our Services</li>
                <li>Our Impact</li>
                <li>International Patients</li>
                <li>Contact Us</li>
              </ul>
            </div>


            {/* SOCIAL */}
            <div>
              <h4 className="font-semibold mb-4 text-[13px]">
                Social
              </h4>

              <ul className="space-y-2 text-[12px]">
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>


            {/* SERVICES */}
            <div>
              <h4 className="font-semibold mb-4 text-[13px]">
                Services
              </h4>

              <ul className="space-y-2 text-[12px]">

                <li>LASIK</li>
                <li>Cataract</li>
                <li>Routine Eye Test</li>
                <li>Dry Eye Clinic</li>
                <li>Glaucoma Clinic</li>
                <li>Retina and Diabetic Retinopathy</li>
                <li>Oculoplastic Clinic</li>
                <li>Squint Clinic</li>
                <li>Myopia Clinic</li>
                <li>Keratoconus Clinic</li>
                <li>Cornea Clinic</li>
                <li>Contact Lens and Optometry Clinic</li>

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

