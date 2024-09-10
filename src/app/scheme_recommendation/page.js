"use client";
import React from 'react';
import FormComponent from '@/components/FormComponent';
import { Navbar } from '@/components/Navbar';

const SchemeRecommendationPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/scheme.jpg')" }}>
        {/* <div className="absolute inset-0 bg-black opacity-50"></div>*/}
        <div className=" inset-0 opacity-50 relative z-10 w-full max-w-2xl p-8 bg-white bg-opacity-40 rounded-3xl shadow-lg mx-4 md:mx-0 space-y-6">
          <FormComponent />
        </div>
      </div>
    </>
  );
};
export default SchemeRecommendationPage;
