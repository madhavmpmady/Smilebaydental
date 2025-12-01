import React, { useState } from "react";
import { Calendar } from "lucide-react";
import heroImg from "../assets/untitled design.png";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <section
      id="home"
      className=" pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-teal-50 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div className="animate-fade-in z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Bright Smiles,
              <span className="text-purple-600"> Healthy Lives</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Comprehensive dental care for the whole family — cosmetic,
              restorative, and preventive dentistry delivered with gentle,
              compassionate service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setShowBookingModal(true)}
                className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-purple-700 transition-all duration-200 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Calendar size={18} />
                Book Appointment
              </button>

              <button className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold border-2 border-purple-600">
                <a href="/learn-more">Learn More</a>
              </button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative z-0 flex justify-center md:justify-end mt-8 md:mt-0">
            {/* background blob (positioned relative to this right column) */}
            <div className="hidden md:block absolute top-10 right-10 w-56 h-56 bg-purple-200/50 rounded-full blur-3xl -z-10" />

            {/* image wrapper: controls width + ensures image doesn't overflow */}
            <div className="w-full max-w-[800px] flex items-end md:items-end justify-center md:justify-end">
              <img
                src={heroImg}
                alt="Dental professional smiling"
                className={
                  /* Responsive sizing + subtle downward anchor on larger screens */
                  "w-full md:h-[420px] lg:h-[520px] object-cover " +
                  /* smooth translate for 'anchored bottom' feel on md+ */
                  "transform transition-transform duration-500 " +
                  "sm:translate-y-0 md:translate-y-6 lg:translate-y-10 xl:translate-y-16"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <BookingModal open={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </section>
  );
};

export default Hero;
