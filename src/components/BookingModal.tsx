import React from 'react';
import { X } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
  phone?: string;
  whatsapp?: string;
};

const BookingModal: React.FC<Props> = ({ open, onClose, phone = '+919020011223', whatsapp = '+919020011223' }) => {
  if (!open) return null;

  const waLink = `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Smile Bay, I would like to book an appointment'
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

      <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-md mx-auto p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">Book Appointment</h3>
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose} aria-label="Close booking dialog">
            <X size={20} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mt-2 mb-4">Choose how you'd like to contact us:</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href={`tel:${phone}`} className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200">
            Call Us
          </a>

          <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
