import { Stethoscope, Activity, Heart, Baby, Brain, Eye, Bone, Pill } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Dentistry',
      description: 'Routine exams, cleanings, fillings, and preventive care to keep your smile healthy.',
    },
    {
      icon: Heart,
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers to boost your confidence.',
    },
    {
      icon: Brain,
      title: 'Orthodontics',
      description: 'Braces and clear aligners to straighten teeth for improved function and aesthetics.',
    },
    {
      icon: Bone,
      title: 'Oral Surgery',
      description: 'Extractions, wisdom teeth removal, and minor oral surgical procedures.',
    },
    {
      icon: Baby,
      title: 'Pediatric Dentistry',
      description: 'Gentle, child-focused dental care to build lifelong healthy habits.',
    },
    {
      icon: Eye,
      title: 'Endodontics (Root Canal)',
      description: 'Advanced root canal therapy to relieve pain and save teeth.',
    },
    {
      icon: Activity,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement options for natural-looking results.',
    },
    {
      icon: Pill,
      title: 'Teeth Whitening',
      description: 'In-office and take-home whitening solutions for a brighter smile.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
            Treatments
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Dental Care
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A full spectrum of dental services designed to keep your smile healthy and beautiful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
