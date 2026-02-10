import logo from '../assets/logo white.svg';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Doctors', href: '#doctors' },
    // { name: 'Locations', href: '#locations' },
    { name: 'Patient Resources', href: '#patient-info' },
    { name: 'Careers', href: '#' },
  ];

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Orthodontics',
    'Oral Surgery',
    'Pediatric Dentistry',
    'Dental Implants',
  ];
  

  return (
    <footer id="contact" className="bg-[#c084fc] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} alt="Smile Bay Logo" className="w-50 h-50" />
            </div>
            <p className="text-white leading-relaxed mb-6">
              Compassionate dentistry with modern technology — preventive, restorative and cosmetic care for the whole family.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                        className="text-white hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-white hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-white" />
                <span className="text-white">
                  Kodal Nadakkavu, Kozhikode,<br />
                   Pantheeramkavu, Kerala 673019
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-white" />
                <a href="tel:5125550100" className="text-white hover:text-white transition-colors">
                  +91 9020011223
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-white" />
                <a href="mailto:info@motherdentalclinic.com" className="text-white hover:text-white transition-colors">
                  nadiark@yahoo.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-sm font-semibold text-white">Office Hours</p>
                <p className="text-sm text-white">Mon - Sat: 10:00 AM - 7:00 PM</p>
          
                <p className="text-sm text-white">Sun: Closed</p>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-bold text-lg mb-3">Map</h4>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  title="Smile Bay location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4198152757494!2d75.85102007490204!3d11.23049628894724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bc5da6ff913%3A0x4c4e90facdc7be33!2sSmile%20Bay%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1764422457572!5m2!1sen!2sin"
                  className="w-full h-40 border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: '#9a65f8' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              &copy; 2025 Smile Bay. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
