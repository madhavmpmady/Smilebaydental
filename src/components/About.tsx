import { Award, Users, Heart, Shield } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Award, title: 'Expert Care', description: 'Board-certified specialists' },
    { icon: Users, title: 'Patient Focused', description: 'Personalized treatment plans' },
    { icon: Heart, title: 'Compassionate', description: 'Caring for your wellbeing' },
    { icon: Shield, title: 'Advanced Tech', description: 'State-of-the-art equipment' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/6528851/pexels-photo-6528851.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Dental clinic interior"
              className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
              About Us
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Compassionate Dental Care
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Smile Bay provides modern dental care with a gentle touch. Our experienced
              dentists use the latest techniques and technology to deliver comfortable, long-lasting
              results for every member of your family.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From routine cleanings to advanced restorative and cosmetic treatments, our goal is to help
              you achieve and maintain a healthy, confident smile.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
