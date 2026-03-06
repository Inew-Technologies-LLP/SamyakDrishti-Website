import doctors from "../assets/home/home1.jpg";
import home2 from "../assets/home/home2.png";
import t1 from "../assets/home/testimonial1.png";
import t2 from "../assets/home/testimonial2.png";
import t3 from "../assets/home/testimonial3.png";
import t4 from "../assets/home/testimonial4.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {

  return (
    <div className="w-full overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="w-full h-[668px] relative bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,white_0%,#F8E0A2_100%)] overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="max-w-4xl text-[#1E2B50] text-6xl md:text-7xl font-semibold font-['Lora'] mb-6">
            Clear Vision, Better Life
          </h1>

         <div className="flex items-start justify-between max-w-3xl gap-13">

  <p className="max-w-md text-left text-[#1E2B50] font-['Open_Sans'] leading-7">
    Compassionate, transparent care powered by specialist expertise and advanced technology.
  </p>

  <button className="px-8 py-3 border border-[#1E2B50] rounded-full font-['Lora'] font-bold">
    Schedule Consultation
  </button>

</div>

        </div>
        
      </section>
      {/* Circle element */} <div className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] bg-[#8FB7A2] rounded-full"></div>


      {/* ABOUT */}
      <section className="w-full pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          <div>
            <div className="flex gap-6 mb-6">
              <div className="w-10 h-10 bg-[#1E2B50] rounded-full"></div>
              <div className="w-10 h-10 bg-[#1E2B50] rounded-full"></div>
              <div className="w-10 h-10 bg-[#1E2B50] rounded-full"></div>
            </div>

            <div className="ml-7 text-blue-950 text-4xl font-bold font-['Lora']">
              About Us
            </div>
          </div>

          <div className="w-[537px] text-black text-lg font-normal font-['Open_Sans'] leading-6">
            Founded in 2005 by Dr. Sujal Shah and Dr. Manisha Shah, Samyak Drishti has been transforming lives through exceptional eye care for over two decades. We specialize in laser vision correction and advanced treatments that help you experience life without the hassle of glasses or contact lenses.
          </div>

        </div>
      </section>


      {/* DOCTOR IMAGE + CARDS */}
      <section className="w-full py-20 bg-white">

        <div className="w-full px-6">

          {/* IMAGE */}
          <div className="mb-20 w-full h-[500px] overflow-hidden">
            <img
              src={doctors}
              alt="Doctors"
              className="w-full h-full object-top"
            />
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-20 justify-items-center">

            <div className="w-[384px] h-[208px] bg-[#162B55] rounded-[20px] flex flex-col items-center justify-center text-center px-10">
              <h3 className="text-[#E6D097] text-[20px] font-bold font-['Lora'] mb-6">
                Pioneer in Advanced Technology
              </h3>
              <p className="text-white text-[16px] font-['Open_Sans'] leading-6">
                We don’t just use the latest technology. We help shape it. Every procedure we offer is refined and proven before it reaches you.
              </p>
            </div>

            <div className="w-[384px] h-[208px] bg-[#162B55] rounded-[20px] flex flex-col items-center justify-center text-center px-10">
              <h3 className="text-[#E6D097] text-[20px] font-bold font-['Lora'] mb-6">
                Pioneer in Advanced Technology
              </h3>
              <p className="text-white text-[16px] font-['Open_Sans'] leading-6">
                We don’t just use the latest technology. We help shape it. Every procedure we offer is refined and proven before it reaches you.
              </p>
            </div>

          </div>

          <div className="flex justify-center mt-20">
            <div className="w-[384px] h-[208px] bg-[#162B55] rounded-[20px] flex flex-col items-center justify-center text-center px-10">
              <h3 className="text-[#E6D097] text-[20px] font-bold font-['Lora'] mb-6">
                Pioneer in Advanced Technology
              </h3>
              <p className="text-white text-[16px] font-['Open_Sans'] leading-6">
                We don’t just use the latest technology. We help shape it. Every procedure we offer is refined and proven before it reaches you.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* VISIT GUIDE */}
      <section className="bg-[#132B55] pt-24 pb-32">

        <div className="max-w-[1500px] mx-auto mb-24">
          <div className="h-[420px] overflow-hidden">
            <img
              src={home2}
              alt="Doctors"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-32 px-10 items-start">

          <div>
            <div className="w-72 text-white text-3xl font-bold font-['Lora'] leading-10 mb-6">
              Your First Visit to Samyak Drishti: A Complete Guide
            </div>

            <div className="w-96 text-white text-lg font-['Open_Sans'] leading-6">
              This guide walks you through what to expect during your first appointment so you can arrive prepared and comfortable.
            </div>
          </div>

          <div className="space-y-10">

            <div className="border-b border-gray-400 pb-4 flex justify-between items-center">
              <p className="text-white text-[18px] font-['Open_Sans']">
                What to Bring before your appointment ?
              </p>
              <span className="text-white text-xl">⌄</span>
            </div>

            <div className="border-b border-gray-400 pb-4 flex justify-between items-center">
              <p className="text-white text-[18px] font-['Open_Sans']">
                Plan your Timings
              </p>
              <span className="text-white text-xl">⌄</span>
            </div>

            <div className="border-b border-gray-400 pb-4 flex justify-between items-center">
              <p className="text-white text-[18px] font-['Open_Sans']">
                If dilation is needed, please keep in mind
              </p>
              <span className="text-white text-xl">⌄</span>
            </div>

          </div>

        </div>

      </section>


      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">

        <div className="text-center mb-16">
          <h2 className="text-[36px] font-['Lora'] font-semibold text-[#132B55]">
            Patient Testimonials
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto grid grid-cols-2 gap-12">

          <img src={t1} alt="testimonial" className="w-[400px] h-[600px]" />
          <img src={t2} alt="testimonial" className="w-[400px] h-[600px]" />
          <img src={t3} alt="testimonial" className="w-[400px] h-[600px]" />
          <img src={t4} alt="testimonial" className="w-[400px] h-[600px]" />

        </div>

      </section>

      <Footer />

    </div>
  );
}