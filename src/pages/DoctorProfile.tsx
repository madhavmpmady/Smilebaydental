import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctors, Doctor } from '../components/Doctors';
import { Phone, Mail, Calendar, MapPin, Linkedin, ArrowLeft } from 'lucide-react';
import DoctorVideoFAQ from '../components/DoctorVideoFAQ';
// Videos will be shown as three separate players below

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const doctor: Doctor | undefined = doctors.find((d) => d.id === id);

  // Prevent the page from auto-scrolling to any anchor (e.g., #contact in footer)
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, left: 0 });

    // If URL has a hash (e.g., #contact), remove it to avoid browser jumping to footer
    if (window.location.hash) {
      // Use history.replaceState to remove hash without navigating
      const { origin, pathname, search } = window.location;
      const newUrl = `${origin}${pathname}${search}`;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  if (!doctor) {
    return (
      <div className="py-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Doctor not found</h2>
          <p className="mb-6">We couldn't find the doctor you're looking for.</p>
          <Link to="/" className="text-purple-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white doctor-profile">
      {/* Hero / banner */}
      <div
        className="doctor-hero relative h-48 md:h-72 lg:h-96 bg-gray-200"
        style={{
          backgroundImage: `url(${doctor.coverImage ?? doctor.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/60 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center md:justify-start text-center md:text-left">
          <div className="text-white">
            <nav className="text-sm mb-2 opacity-90">
              <Link to="/" className="inline-flex items-center gap-2 hover:underline">
                <ArrowLeft className="w-4 h-4" /> Back to home
              </Link>
            </nav>
            <h1 className="text-xl md:text-4xl font-bold">{doctor.name}</h1>
            <p className="mt-2 text-sm md:text-base text-purple-200 font-semibold">{doctor.specialty}</p>
          </div>
        </div>
      </div>

      {/* Profile card overlapping the hero */}
      <section className="doctor-profile-card -mt-8 md:-mt-12 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left / Main */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
              <div className="doctor-avatar w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-white shadow-md flex-shrink-0 mx-auto md:mx-0">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-gray-900">{doctor.name}</h2>
                {doctor.title && <p className="text-sm text-gray-600 mt-1">{doctor.title}</p>}
                <p className="text-purple-600 font-semibold mt-1">{doctor.specialty}</p>
                <p className="text-sm text-gray-600 mt-2 max-w-2xl">{doctor.bio}</p>

                <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-center gap-3">
                  <a href={`mailto:contact@smilebay.example?subject=Appointment with ${encodeURIComponent(doctor.name)}`} className="inline-flex items-center gap-2 px-3 py-3 border rounded-lg text-sm w-full sm:w-auto justify-center">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-3 py-3 border rounded-lg text-sm w-full sm:w-auto justify-center">
                    <Linkedin className="w-4 h-4" /> Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-700 leading-relaxed">{doctor.fullBio || doctor.bio}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualifications</h3>
                {doctor.qualifications ? (
                  <ul className="list-disc pl-5 text-gray-700">
                    {doctor.qualifications.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">Information coming soon.</p>
                )}
              </div>


            </div>
          </div>

          {/* Right / Sidebar */}
          <aside id="doctor-contact" className="space-y-6 lg:sticky lg:top-28">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
              <div className="mt-3 text-sm text-gray-700 space-y-2">
                {doctor.phone ? (
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-purple-600" /><a className="text-sm text-gray-700" href={`tel:${doctor.phone}`}>{doctor.phone}</a></div>
                ) : null}
                {doctor.email ? (
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-purple-600" /><a className="text-sm text-gray-700" href={`mailto:${doctor.email}`}>{doctor.email}</a></div>
                ) : null}
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-purple-600 mt-0.5" /><span>{doctor.location ?? 'Smile Bay Clinic'}</span></div>
              </div>
              <div className="mt-4 flex gap-3">
                {doctor.linkedin && (
                  <a href={doctor.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg text-sm text-purple-600">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* Clinic Hours removed by request */}

            <div className="bg-white p-4 rounded-lg border">
              <h4 className="text-sm font-semibold text-gray-900">Location</h4>
              <div className="mt-3 rounded-xl overflow-hidden shadow-md">
                <iframe
                  title="Smile Bay location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4198152757494!2d75.85102007490204!3d11.23049628894724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bc5da6ff913%3A0x4c4e90facdc7be33!2sSmile%20Bay%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1764422457572!5m2!1sen!2sin"
                  className="w-full h-40 border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Doctor-specific Video & FAQ (if available) */}
      {doctor.videoSrc && (
        <DoctorVideoFAQ
          videoSrc={doctor.videoSrc}
          poster={doctor.videoPoster}
          faqs={doctor.faqs || []}
        />
      )}

      {/* Videos: three separate players (each independent) - ONLY for Dentists (hide for Dr. Shibu) */}
      {doctor.id !== 'Shibu C Anand' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20 video-section">
          <h3 className="text-xl font-semibold mb-4">Educational videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow">
                <video
                  src="/videos/implants.mp4"
                  poster="/images/dr-video-poster.jpg"
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4 className="mt-3 font-medium">Dental Implants</h4>
              <p className="text-sm text-gray-600">Overview of implant procedure and recovery.</p>
            </div>

            <div>
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow">
                <video
                  src="/videos/crowns.mp4"
                  poster="/images/dr-video-poster.jpg"
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4 className="mt-3 font-medium">Crowns & Restorations</h4>
              <p className="text-sm text-gray-600">How crowns are placed and how long they last.</p>
            </div>

            <div>
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow">
                <video
                  src="/videos/pediatrics.mp4"
                  poster="/images/dr-video-poster.jpg"
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4 className="mt-3 font-medium">Pediatric Dentistry</h4>
              <p className="text-sm text-gray-600">Techniques and tips for treating children.</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default DoctorProfile;
