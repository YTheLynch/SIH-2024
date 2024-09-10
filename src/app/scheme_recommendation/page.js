"use client";

import React from 'react';
import FormComponent from '@/components/FormComponent';
import { Navbar } from '@/components/Navbar';
const SchemeRecommendationPage = () => {
  return (

    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-100 to-red-200">
        
        <FormComponent />
      </div>
    </>
  );
};

export default SchemeRecommendationPage;
