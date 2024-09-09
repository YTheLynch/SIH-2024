import React from 'react';

const CertificateCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8 text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Congratulations! 🎉
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        You are eligible for a monetary fund and an official certificate.
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition">
        Download Your Certificate
      </button>
    </div>
  );
};

export default CertificateCard;
