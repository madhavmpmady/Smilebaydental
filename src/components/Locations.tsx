import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: 'Downtown Medical Center',
      address: '123 Main Street, Suite 400',
      city: 'Austin, TX 78701',
      phone: '(512) 555-0100',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
    },
    {
      name: 'North Austin Clinic',
      address: '456 Research Blvd, Building B',
      city: 'Austin, TX 78758',
      phone: '(512) 555-0200',
      hours: 'Mon-Fri: 8AM-5PM',
    },
    {
      name: 'South Austin Branch',
      address: '789 Congress Avenue, Floor 2',
      city: 'Austin, TX 78704',
      phone: '(512) 555-0300',
      hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-3PM',
    },
    {
      name: 'West Lake Hills Office',
      address: '321 Westlake Drive',
      city: 'Austin, TX 78746',
      phone: '(512) 555-0400',
      hours: 'Mon-Fri: 8AM-5PM',
    },
  ];

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
            Our Locations
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us at Any Location
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Convenient locations throughout the city to serve you better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">{location.name}</h4>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-gray-900 font-medium">{location.address}</p>
                    <p className="text-gray-600">{location.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-purple-600 flex-shrink-0" size={20} />
                  <a href={`tel:${location.phone}`} className="text-gray-900 font-medium hover:text-purple-600 transition-colors">
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-purple-600 flex-shrink-0" size={20} />
                  <p className="text-gray-600">{location.hours}</p>
                </div>
              </div>

              <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                <Navigation size={18} />
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
