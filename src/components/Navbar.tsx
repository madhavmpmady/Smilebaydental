import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import BookingModal from './BookingModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  // Force white background on doctor profile pages
  const forceWhite = location.pathname.startsWith('/doctor');

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'Treatments', target: 'services' },
    { name: 'Our Dentists', target: 'doctors' },
    { name: 'Locations', target: 'contact' },
    { name: 'Contact', target: 'contact' },
  ];

  const handleNav = (target: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 sm:mb-[2emnpm] right-0 z-50 transition-all duration-300   ${
        isScrolled || isMobileMenuOpen || forceWhite ? 'bg-white py-[1rem] shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="relative flex items-center w-20">
            <img
              src={logo}
              alt="Smile Bay Logo"
              className="absolute top-1/2 left-0 -translate-y-1/2 w-[12rem] h-32 max-w-none transition-all duration-300"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav((link as any).target)}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                type="button"
              >
                {link.name}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setShowBookingModal(true)}
              className="bg-purple-600 text-white px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
            >
              Book Now
            </button>
          </div>

          <button
            className={`md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-200 ${
              isMobileMenuOpen
                ? 'bg-white text-gray-900 border border-gray-100 shadow-md'
                : 'bg-transparent text-gray-700'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white shadow-sm rounded-b-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNav((link as any).target);
                  }}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium text-left"
                  type="button"
                >
                  {link.name}
                </button>
              ))}
              <button
                className="bg-purple-600 text-white px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium text-center"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowBookingModal(true);
                }}
                type="button"
              >
                Book Now
              </button>
            </div>
          </div>
        )}

        <BookingModal open={showBookingModal} onClose={() => setShowBookingModal(false)} />
      </div>
    </nav>
  );
};

export default Navbar;