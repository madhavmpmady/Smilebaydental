import { useState } from 'react';
import { Calendar } from 'lucide-react';
import heroImg from '../assets/hero-bg.png';
import BookingModal from './BookingModal';

const Hero = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 md:pb-20 bg-gradient-to-br from-purple-50 via-white to-teal-50 overflow-hidden md:h-[90vh] "
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center md:mt-[50px]">
          {/* LEFT: Text */}
          <div className="animate-fade-in z-20">
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
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>

              <button className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold border-2 border-purple-600">
                <a href="/learn-more">Learn More</a>
              </button>
            </div>
          </div>

          {/* RIGHT: Image placeholder for grid alignment (md+) */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* Mobile-focused anchored image: absolutely positioned bottom-right */}
      <div className="max-md:hidden md:absolute md:bottom-0 md:right-0 w-[70%] sm:w-[60%] md:w-[45%] lg:w-[40%] xl:w-[35%] z-0 pointer-events-none">
        <img
          src={heroImg}
          alt="Dental professional smiling"
          className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
        />
      </div>

      <div className="md:hidden w-full h-full max-w-[800px] flex items-end md:items-end justify-center md:justify-end">
        <img
          src={heroImg}
          alt="Dental professional smiling"
          className={
            'w-full md:w-8/12 object-cover transform transition-transform duration-500 sm:translate-y-0 md:translate-y-6 lg:translate-y-10 xl:translate-y-16'
          }
        />
      </div>

      <BookingModal open={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </section>
  );
};

export default Hero;
