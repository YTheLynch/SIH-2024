import React, { useState } from 'react';

const MentorCard = () => {
  const [isMentor, setIsMentor] = useState(false);

  const handleMentorshipToggle = () => {
    setIsMentor(!isMentor);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8 text-center">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        Become a Mentor 🌟
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        {isMentor
          ? 'You are now a mentor! Thank you for helping others.'
          : 'Would you like to educate others and become a mentor?'}
      </p>
      <button
        onClick={handleMentorshipToggle}
        className={`px-6 py-3 rounded-lg font-semibold shadow-lg transition ${
          isMentor ? 'bg-green-500 text-white' : 'bg-purple-500 text-white'
        } hover:bg-purple-600`}
      >
        {isMentor ? 'You are a Mentor!' : 'Sign Up as Mentor'}
      </button>
    </div>
  );
};

export default MentorCard;
