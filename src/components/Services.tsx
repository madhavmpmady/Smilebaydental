import React, { memo, useState, useEffect, useRef } from 'react';

type Service = {
  id: string;
  image: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: 'general-dentistry',
    image: 'https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg',
    title: 'General Dentistry',
    description:
      'Routine checkups, cleanings, fillings, and preventive treatments to keep your smile healthy and strong.',
  },
  {
    id: 'cosmetic-dentistry',
    image: 'https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg',
    title: 'Cosmetic Dentistry',
    description:
      'Enhance your smile with veneers, bonding, teeth whitening, and complete smile makeover solutions.',
  },
  {
    id: 'orthodontics',
    image: 'https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg',
    title: 'Orthodontics',
    description:
      'Braces and clear aligners used to straighten teeth and correct jaw alignment for a confident smile.',
  },
  {
    id: 'oral-surgery',
    image: 'https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg',
    title: 'Oral Surgery',
    description:
      'Expert tooth extractions, wisdom teeth removal, and minor oral surgical procedures with safe techniques.',
  },
  {
    id: 'pediatric-dentistry',
    image: 'https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg',
    title: 'Pediatric Dentistry',
    description:
      'Gentle, child-friendly dental care to build healthy habits and support lifelong oral wellness.',
  },
  {
    id: 'endodontics',
    image: 'https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg',
    title: 'Endodontics (Root Canal)',
    description:
      'Advanced root canal therapy to eliminate infection, relieve pain, and save your natural teeth.',
  },
  {
    id: 'prosthodontics-implants',
    image: 'https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg',
    title: 'Prosthodontics & Dental Implants',
    description:
      'Crowns, bridges, dentures, and implant solutions that restore natural appearance and function.',
  },
  {
    id: 'teeth-whitening',
    image: 'https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg',
    title: 'Teeth Whitening',
    description:
      'Safe, fast, and effective whitening treatments to brighten your smile and remove stains.',
  },
];

const ServiceCard = memo(function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      role="article"
      aria-labelledby={`service-${service.id}-title`}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 h-full flex flex-col"
    >
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-purple-50 flex items-center justify-center">
              {/* simple tooth SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-purple-600" fill="currentColor" aria-hidden>
                <path d="M12 2c1.1 0 2 .9 2 2 0 .6-.2 1.1-.6 1.5-.4.4-1 .7-1.4 1.1-.4.4-.6.9-.6 1.4 0 .9.6 1.8 1.4 2.2.8.4 1.8.6 2.6.9.8.3 1.4.9 1.4 1.8 0 1.9-1 3.9-2.7 5.4-.8.7-1.9 1.2-3 1.2s-2.2-.5-3-1.2C7 17 6 15 6 13.1c0-.9.6-1.5 1.4-1.8.8-.3 1.8-.5 2.6-.9.8-.4 1.4-1.3 1.4-2.2 0-.5-.2-1-.6-1.4-.4-.4-1-.7-1.4-1.1C10.2 5.1 10 4.6 10 4c0-1.1.9-2 2-2z" />
              </svg>
            </div>
          </div>

          <div>
            <h4 id={`service-${service.id}-title`} className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
              {service.title}
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 p-4 md:p-6 bg-white">
        <a href={`#${service.id}`} className="text-purple-600 font-medium hover:underline inline-block">
          Learn more
        </a>
      </div>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

const Services: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);
  const pausedRef = useRef<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start/stop autoplay when on mobile
  useEffect(() => {
    // clear any existing interval
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!isMobile) {
      setCurrentIndex(0);
      return;
    }

    if (!pausedRef.current) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isMobile]);

  // Pause / resume handlers for touch or hover
  const pauseAutoplay = () => {
    pausedRef.current = true;
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeAutoplay = () => {
    pausedRef.current = false;
    if (!isMobile) return;
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    pauseAutoplay();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Next
      setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    } else if (isRightSwipe) {
      // Prev
      setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    }

    resumeAutoplay();
  };

  return (
    <section
      id="services"
      className={isMobile ? 'bg-gradient-to-br from-purple-50 to-purple-100 py-12' : 'py-20 bg-gray-50'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Treatments</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Dental Services</h3>
          <p className={`text-lg md:text-xl ${isMobile ? 'text-gray-700' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Premium dental care for every smile, crafted with expertise and advanced technology.
          </p>
        </div>

        {/* Mobile: single tile (autoplay) */}
        {isMobile ? (
          <div
            className="w-full"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="transition-all duration-500 ease-out">
              <div key={services[currentIndex].id} className="animate-slideInRight">
                <ServiceCard service={services[currentIndex]} />
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {services.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: 4 columns, 2 rows */
          <div className="grid grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="animate-slideInRight">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Services;
