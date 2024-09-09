'use client';

import React, { useState } from 'react';
import CertificateCard from '@/components/CertificateCard';
import MentorCard from '@/components/MentorCard';
import { Navbar } from '@/components/Navbar';

const RewardsPage = () => {
  const [investmentAmount, setInvestmentAmount] = useState(250000);
  const [isEligible, setIsEligible] = useState();
  

  const eligibilityThreshold = 50000;

  const handleInvestmentChange = () => {
    if (investmentAmount >= eligibilityThreshold) { 
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r bg-[#EdEdEd] p-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
              Rewards Program
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Invest in our program and get rewarded! Earn certificates and become a mentor to help others on their journey.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className='mb-5'>
                {`You have currently invested Rs. ${investmentAmount}`}
              </p>
          
              <button
                className={`px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition 
                  bg-green-500 hover:bg-green-600 cursor-pointer
                }`}
                onClick={handleInvestmentChange}
              >
                Check Eligibility
              </button>
            </div>

            {isEligible ? (
              <>
                <CertificateCard />
                <MentorCard />
                <div className="mt-8 space-x-4">
                  <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
                    Download Certificate
                  </button>
                  <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
                    Share on Social Media
                  </button>
                  <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition">
                    Apply for Mentor Program
                  </button>
                </div>
              </>
            ) : (
              (isEligible === false) ?
            (
              <p className="text-red-500 text-lg font-semibold mt-6">
                You are not eligible for rewards yet. Please invest more to qualify.
              </p>
            ) : (
              <div></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardsPage;
