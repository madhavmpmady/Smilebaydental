import React from 'react';

const LearnMore = () => {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Learn More about Smile Bay</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Smile Bay. We offer comprehensive dental care including general dentistry, cosmetic procedures,
          orthodontics, implants and more. Our team focuses on patient comfort and modern techniques to deliver
          lasting results.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Our Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Routine exams & cleanings</li>
          <li>Cosmetic dentistry (veneers, whitening)</li>
          <li>Orthodontics & Invisalign</li>
          <li>Endodontics & root canals</li>
          <li>Dental implants & restorations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Meet the Team</h2>
        <p className="text-gray-700">Our dentists are board-certified and bring years of specialized experience to every patient visit.</p>
      </div>
    </main>
  );
};

export default LearnMore;
