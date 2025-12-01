import { useState } from 'react';
import { FileText, ClipboardList, ChevronDown, ChevronUp } from 'lucide-react';

const PatientInfo = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const infoCards = [
    {
      icon: FileText,
      title: 'Pre-Treatment Instructions',
      items: [
        'Eat a light meal unless instructed otherwise by your dentist',
        'Bring your insurance card and a list of medications',
        'Arrive 10–15 minutes early to complete any paperwork',
        'If you have dental anxiety, let us know so we can help you feel comfortable',
      ],
    },
    {
      icon: ClipboardList,
      title: 'Aftercare for Dental Procedures',
      items: [
        'Follow prescribed pain management and antibiotics if provided',
        'Avoid hard or crunchy foods for the first 24–48 hours after extractions',
        'Use cold compresses to reduce swelling when advised',
        'Keep the treatment area clean and follow any special mouthwash instructions',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans. Please contact our office to verify your specific plan coverage and any co-payments required for dental procedures.',
    },
    {
      question: 'How do I schedule an appointment?',
      answer: 'Schedule by calling our office, using the online booking system, or by visiting our clinic. We offer emergency appointments for urgent dental issues.',
    },
    {
      question: 'What should I bring to my first visit?',
      answer: 'Bring a photo ID, insurance information, and any recent dental records or x-rays if available.',
    },
    {
      question: 'Do you provide emergency dental care?',
      answer: 'Yes — we offer same-day or next-available appointments for dental emergencies such as severe pain, swelling, or trauma.',
    },
    {
      question: 'What are your payment options?',
      answer: 'We accept cash, major credit cards, and many insurance plans. We also offer financing options for larger treatments.',
    },
  ];

  return (
    <section id="patient-info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
            Patient Information
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Know
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Important information to prepare for your visit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <card.icon className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">{card.title}</h4>
              </div>
              <ul className="space-y-3">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h4>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="text-purple-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientInfo;
