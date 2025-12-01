import { Linkedin } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Prosthodontist',
      image: 'https://images.pexels.com/photos/19131217/pexels-photo-19131217.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in restorative dentistry and dental prosthetics, offering natural-looking crowns and bridges.',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Oral Surgeon',
      image: 'https://images.pexels.com/photos/19131217/pexels-photo-19131217.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experienced in extractions, implants, and minor oral surgeries with patient-focused care.',
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatric Dentist',
      image: 'https://images.pexels.com/photos/19131217/pexels-photo-19131217.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specializes in gentle dental care for children, building positive experiences early on.',
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Endodontist',
      image: 'https://images.pexels.com/photos/19131217/pexels-photo-19131217.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Provides advanced root canal treatments and endodontic care to save and preserve teeth.',
    },
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h4>
                <p className="text-purple-600 font-semibold mb-3">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{doctor.bio}</p>
                <button className="text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2">
                  <Linkedin size={18} />
                  <span className="text-sm font-medium">View Profile</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
