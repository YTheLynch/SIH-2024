"use client";
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import SearchItem from '@/components/SearchItem';

const SchemeRecommendationPage = () => {
  const [formData, setFormData] = useState({
    age: '',
    familyIncome: '',
    city: '',
    gender: '',
  });
  const [result, setResult] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isString, setIsString] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      }, 
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    console.log(data)
    if (data.success === 'false') {
      setIsString(true);
      setResult(data.message)
    } else {
      setIsString(false);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/recomm_image.jpg')" }}>
        <form onSubmit={handleSubmit} className="w-full max-w-2xl p-8 bg-white bg-opacity-80 rounded-lg shadow-lg mx-4 md:mx-0 space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Scheme Recommendation Form</h1>
          
          <div className="form-group">
            <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div className="form-group">
            <label htmlFor="familyIncome" className="block text-gray-700 font-semibold mb-2">Family Income</label>
            <input
              type="number"
              id="familyIncome"
              name="familyIncome"
              value={formData.familyIncome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div className="form-group">
            <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:from-red-600 hover:to-red-600 transition duration-300"
          >
            Submit
          </button>

          <Transition
            show={submitted}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="mt-4 text-center text-red-600 font-semibold">
              {isString ? result : (
                <>
                  <p>Recommended schemes based on your criteria:</p>
                  {result.map((scheme, index) => (
                    <SearchItem key={index} name={scheme.scheme} organization={scheme.organization} className="m-6" />
                  ))}
                </>
              )}
            </div>
          </Transition>
        </form>
      </div>
    </>
  );
};

export default SchemeRecommendationPage;
