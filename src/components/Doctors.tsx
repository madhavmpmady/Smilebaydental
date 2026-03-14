import React, { memo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { FAQ } from './DoctorVideoFAQ';

export type Doctor = {
  id: string;
  name: string;
  title?: string;
  specialty: string;
  image?: string;
  coverImage?: string;
  bio: string; // short bio
  fullBio?: string;
  qualifications?: string[];
  experience?: string[];
  phone?: string;
  email?: string;
  linkedin?: string;
  location?: string;
  hasProfile?: boolean;
  videoSrc?: string;
  videoPoster?: string;
  faqs?: FAQ[];
};

export const doctors: Doctor[] = [
  {
    id: 'dr-nadia',
    name: 'Dr. Nadia',
    title: 'Chief Dental Surgeon',
    specialty: 'Chief Dental Surgeon',
    image: '/images/dr-sarah-new.png',
    bio: 'Chief Dental Surgeon with extensive experience in comprehensive dental care and clinic management, dedicated to patient comfort and clinical excellence.',
    videoSrc: '/videos/implants.mp4', // Example video
    videoPoster: '/images/dr-video-poster.jpg',
    faqs: [
      {
        id: 'q1',
        question: 'What happens during the first visit?',
        answer: 'During your first visit, we will conduct a comprehensive examination, including X-rays if necessary, to assess your oral health and discuss any concerns you may have.',
        time: 15, // timestamp in seconds to jump to in the video
      },
      {
        id: 'q2',
        question: 'How often should I come for a check-up?',
        answer: 'We recommend visiting us every six months for a routine check-up and cleaning to maintain optimal oral health.',
        time: 45,
      },
    ],
  },
  {
    id: 'Shibu C Anand',
    name: 'Dr. Shibu C Anand',
    title: 'Senior Consultant – Internal Medicine & Pulmonology',
    specialty: 'Internal Medicine, Pulmonology (TB)',
    hasProfile: true,
    image: '/images/dr-shibu-anand-profile.jpg',
    // cover image used in profile hero
    coverImage: '/images/dr-shibu-anand-cover.jpg',
    bio: 'Senior Consultant in Internal Medicine and Pulmonology with extensive public health and clinical experience.',
    fullBio:
      'Dr. Shibu C Anand, MBBS, DTCD, MD (General Medicine), is a highly experienced physician with over 25 years of dedicated service in Kerala Health Services. He is widely respected for his clinical expertise, ethical practice, and patient-centred approach. With a special interest in Tuberculosis and Pulmonology, Dr. Shibu has extensive experience in the diagnosis, treatment, and long-term management of respiratory illnesses, including TB and other pulmonary conditions. He also has broad expertise in Internal Medicine, particularly in the management of hypertension, diabetes mellitus, and other chronic lifestyle-related disorders. Known for his calm demeanor and compassionate care, Dr. Shibu focuses on accurate diagnosis, rational treatment, patient education, and long-term disease control. His decades of public health service give him a strong understanding of community health needs and preventive medicine.',
    qualifications: [
      'MBBS',
      'DTCD (Diploma in Tuberculosis and Chest Diseases)',
      'MD (General Medicine)'
    ],
    videoSrc: '/videos/asthma-triggers.mp4',
    // videoPoster: '/images/dr-shibu-video-poster.jpg', // Optional
    faqs: [
      {
        id: 'nasal-spray',
        question: 'How to use a nasal spray correctly?',
        answer: 'Proper technique ensures the medication reaches the right area. Watch this video for a demonstration.',
        videoSrc: '/videos/nasal-spray-usage.mp4'
      },
      {
        id: 'expert-malayalam',
        question: 'Expert Advice on Asthma (Malayalam)',
        answer: 'Detailed discussion on asthma management in Malayalam.',
        videoSrc: '/videos/asthma-expert-malayalam.mp4'
      }
    ],
    experience: [
      '25+ years in Kerala Health Services',
      'Extensive clinical and public health exposure in tuberculosis control and respiratory medicine'
    ],
    phone: '+91 90200 11223',
    email: 'scanand2001@yahoo.com',
    linkedin: 'https://www.linkedin.com/in/shibu-anand-a8a221395/',
    location: 'Kozhikode, Kerala, India',
  },
  {
    id: 'Dr. Manu Mathew',
    name: 'Dr. Manu Mathew',
    title: 'Senior Consultant, Oral & Maxillofacial Surgeon and Implantologist',
    specialty: 'Oral & Maxillofacial Surgery',
    image: '/images/dr-manu-mathew-profile.jpg',
    coverImage: '/images/dr-manu-mathew-cover.jpg',
    bio: 'Senior consultant specializing in oral and maxillofacial surgery.',
    fullBio:
      'Dr. Manu Mathew is a Senior Consultant in Oral & Maxillofacial Surgery and Implantology with over 15 years of experience. He has led complex implant and reconstructive cases, focusing on patient-centered, minimally invasive techniques and predictable outcomes. Dr. Manu trains junior surgeons and regularly contributes to regional workshops on implantology and oral surgery.',
    qualifications: [
      'BDS, Dental College',
      'MDS (Oral & Maxillofacial Surgery)',
      'Fellowship in Implantology',
    ],
    experience: [
      'Senior Consultant — Smile Bay Dental Clinic (2020–Present)',
      'Consultant Surgeon — City Hospital Oral Surgery Unit (2012–2020)',
      'Clinical Fellow in Implantology (2010–2012)',
    ],
    phone: '+91 98765 43210',
    email: 'manu.mathew@smilebay.example',
    linkedin: 'https://www.linkedin.com/in/manu-mathew',
    location: 'Kozhikode, Kerala, India',
  },
  {
    id: 'dr-james-wilson',
    name: 'Dr. Sherin C Jose',
    title: 'Associate Professor',
    specialty: 'Consultant,Pedodontist',
    image: '/images/dr-sherin-profile.jpg',
    bio: 'Associate Professor specializing in pediatric dentistry at Sree Anjaneya Institute of Dental Sciences / Malabar Medical College.',
    fullBio:
      'Dr. Sherin C Jose is an Associate Professor with expertise in pediatric dentistry. He teaches and practices at Sree Anjaneya Institute of Dental Sciences and Malabar Medical College, focusing on child-friendly techniques, behavioral management, and preventive care. Dr. Sherin is involved in clinical training and community outreach to improve oral health for children.',
  },
  {
    id: 'dr-amanda-lee',
    name: 'Dr. Jose Jacob',
    title: 'Professor',
    specialty: 'Orthodontics and Dentofacial Orthopaedics',
    image: '/images/dr-jose-jacob.jpg',
    bio: 'Professor in the Department of Orthodontics and Dentofacial Orthopaedics at SAIDS Calicut.',
    fullBio:
      'Dr. Jose Jacob, MDS, is a Professor in the Department of Orthodontics and Dentofacial Orthopaedics at SAIDS Calicut. He has extensive experience in orthodontic diagnosis and treatment planning, teaching postgraduate students and contributing to clinical research in dentofacial orthopaedics.',
  },
  {
    id: 'dr-david-kumar',
    name: 'Dr. Deepthi Cherian',
    title: 'Consultant Periodontist & Laser Specialist',
    specialty: 'Periodontics, Laser Dentistry',
    image: '/images/dr-deepthi-cherian.jpg',
    bio: 'Consultant Periodontist and Laser Specialist with expertise in advanced periodontal therapy and soft-tissue laser procedures.',
    fullBio:
      'Dr. Deepthi Cherian is a Consultant Periodontist and Laser Specialist focusing on advanced periodontal therapy and soft-tissue laser procedures that offer precision, comfort, and faster healing. Her practice includes comprehensive periodontal care and a wide range of laser-assisted soft-tissue treatments listed below.',
    experience: [
      'Consultant Periodontist — Smile Bay Dental Clinic (2021–Present)',
      'Senior Periodontics Practitioner — City Dental Centre (2015–2021)',
    ],
    qualifications: ['MDS (Periodontics)'],
    // Treatments performed using LASER
    // Gummy Smile Correction, Depigmentation, Frenectomy, Crown Lengthening, Tongue Tie Release,
    // Operculectomy, Vestibuloplasty, Mucocele Excision, Fibroma Excision, Exposure of Unerupted Tooth,
    // LANAP (Treatment of periodontal disease), LASER Assisted Tooth whitening, TMJ Pain/Ulcers/Lichen Planus
  },
  {
    id: 'dr-binu-nathan',
    name: 'Dr. Binu Nathan',
    title: 'Professor, Educare Institute of Dental Sciences',
    specialty: 'Endodontist and Smile Design Expert',
    image: '/images/dr-binu-nathan.jpg',
    bio: 'Professor at Educare Institute of Dental Sciences, specializing as an Endodontist and Smile Design Expert.',
    fullBio: 'Dr. Binu Nathan is a Professor at Educare Institute of Dental Sciences. With extensive expertise as an Endodontist and Smile Design Expert, he specializes in transforming smiles using advanced aesthetic procedures and providing top-tier endodontic care.',
  },
  {
    id: 'dr-pradeep-samuel',
    name: 'Dr. Pradeep Samuel',
    title: 'Professor, Educare Institute of Dental Sciences',
    specialty: 'Prosthodontist and Implantologist',
    bio: 'Professor at Educare Institute of Dental Sciences, specializing as a Prosthodontist and Implantologist.',
    fullBio: 'Dr. Pradeep Samuel is a Professor at Educare Institute of Dental Sciences. With extensive expertise as a Prosthodontist and Implantologist, he specializes in comprehensive oral rehabilitation and dental implants.',
    image: '/images/dr-pradeep-samuel.jpg',
  }
];



const DoctorCard = memo(function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div
      role="article"
      aria-labelledby={`doctor-${doctor.id}-name`}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 h-full flex flex-col group"
    >
      <div className="relative h-auto aspect-[4/5] md:h-96 md:aspect-auto lg:h-96 overflow-hidden flex-shrink-0 rounded-t-2xl bg-gray-100 flex items-center justify-center">
        {doctor.image ? (
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-top transition-transform duration-300 ease-out hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <User className="w-24 h-24 text-gray-300" />
        )}
      </div>
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <h4 id={`doctor-${doctor.id}-name`} className="text-lg md:text-xl font-bold text-gray-900 mb-1 line-clamp-2">
          {doctor.name}
        </h4>
        <p className="text-purple-600 font-semibold mb-2 md:mb-3 text-sm md:text-base line-clamp-1">
          {doctor.specialty}
        </p>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-4 flex-1 line-clamp-3">
          {doctor.bio}
        </p>
        {doctor.hasProfile && (
          <Link
            to={`/doctor/${doctor.id}`}
            className="text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-1 md:gap-2 mt-auto flex-shrink-0 px-2 py-1 -ml-2 rounded-lg hover:bg-purple-50"
            aria-label={`View profile of ${doctor.name}`}
          >
            <Linkedin className="w-4 md:w-4 h-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">View Profile</span>
          </Link>
        )}
      </div>
    </div>
  );
});

DoctorCard.displayName = 'DoctorCard';

const Doctors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const intervalRef = useRef<number | null>(null);
  const pausedRef = useRef<boolean>(false);
  const [desktopPage, setDesktopPage] = useState<number>(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    pausedRef.current = true;
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
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
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    pausedRef.current = false;
    // Restart interval if needed
    if (!intervalRef.current && isMobile) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
  };

  const itemsPerPage = 4;
  const totalDesktopPages = Math.ceil(doctors.length / itemsPerPage);
  const visibleDoctorsDesktop = doctors.slice(
    desktopPage * itemsPerPage,
    (desktopPage + 1) * itemsPerPage
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play single doctor on mobile (5s), with pause-on-interaction
  useEffect(() => {
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
        setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isMobile]);

  const handlePrev = () => {
    if (isMobile) {
      setDirection('left');
      setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
          setCurrentIndex((p) => (p === doctors.length - 1 ? 0 : p + 1));
        }, 5000);
      }
    } else {
      setDirection('left');
      setDesktopPage((prev) => (prev === 0 ? totalDesktopPages - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (isMobile) {
      setDirection('right');
      setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
          setCurrentIndex((p) => (p === doctors.length - 1 ? 0 : p + 1));
        }, 5000);
      }
    } else {
      setDirection('right');
      setDesktopPage((prev) => (prev === totalDesktopPages - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
            Our Team
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Doctors
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced healthcare professionals dedicated to your wellbeing
          </p>
        </div>

        {/* Carousel container */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* Left arrow button (hidden on mobile) */}
          <button
            onClick={handlePrev}
            className="hidden md:inline-flex flex-shrink-0 p-1.5 md:p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
            aria-label="Previous doctors"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
          </button>

          {/* Mobile: Single autoplay tile */}
          {isMobile && (
            <div
              className="flex-1 w-full"
              onMouseEnter={() => {
                pausedRef.current = true;
                if (intervalRef.current) {
                  window.clearInterval(intervalRef.current);
                  intervalRef.current = null;
                }
              }}
              onMouseLeave={() => {
                pausedRef.current = false;
                if (!intervalRef.current) {
                  intervalRef.current = window.setInterval(() => {
                    setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
                  }, 5000);
                }
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="transition-all duration-500 ease-out">
                <div key={doctors[currentIndex].id} className="animate-slideInRight">
                  {doctors[currentIndex].hasProfile ? (
                    <Link to={`/doctor/${doctors[currentIndex].id}`} className="block h-full group focus:outline-none" aria-label={`Open profile of ${doctors[currentIndex].name}`}>
                      <DoctorCard doctor={doctors[currentIndex]} />
                    </Link>
                  ) : (
                    <DoctorCard doctor={doctors[currentIndex]} />
                  )}
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center items-center gap-2 mt-6">
                {doctors.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Desktop: 4 columns x 2 rows (show all doctors) */}
          {!isMobile && (
            <div className="flex-1">
              <div className="grid grid-cols-4 gap-6 transition-all duration-500 ease-out auto-rows-max">
                {visibleDoctorsDesktop.map((doctor, idx) => (
                  <div
                    key={doctor.id}
                    className={`${direction === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'} h-full`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {doctor.hasProfile ? (
                      <Link to={`/doctor/${doctor.id}`} className="block h-full group focus:outline-none" aria-label={`Open profile of ${doctor.name}`}>
                        <DoctorCard doctor={doctor} />
                      </Link>
                    ) : (
                      <DoctorCard doctor={doctor} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right arrow button (hidden on mobile) */}
          <button
            onClick={handleNext}
            className="hidden md:inline-flex flex-shrink-0 p-1.5 md:p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
            aria-label="Next doctors"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
          </button>
        </div>

        {/* Desktop page indicators: show how many pages (hidden on mobile) */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {Array.from({ length: totalDesktopPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setDesktopPage(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${desktopPage === idx ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
