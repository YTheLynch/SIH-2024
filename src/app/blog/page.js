
'use client';

import React from 'react';
import BlogPostCard from '@/components/BlogPostCard';
import { Navbar } from '@/components/Navbar';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'PM Awas Yojana: Affordable Housing for All',
      description: 'A deep dive into the benefits and eligibility criteria of the Pradhan Mantri Awas Yojana (PMAY) scheme aimed at providing affordable housing to the economically weaker sections.',
      imageUrl: '/img/pm-awas-yojana.png',
      category: 'Housing',
      readMoreLink: '/blog/pm-awas-yojana',
    },
    {
      id: 2,
      title: 'Ayushman Bharat: Health for All',
      description: 'An overview of the Ayushman Bharat scheme, which aims to provide health coverage to millions of vulnerable Indian citizens.',
      imageUrl: '/img/ayushman-bharat.png',
      category: 'Healthcare',
      readMoreLink: '/blog/ayushman-bharat',
    },
    {
      id: 3,
      title: 'Atal Pension Yojana: Ensuring a Secure Future',
      description: 'Learn how the Atal Pension Yojana offers retirement security to the unorganized sector, providing a fixed pension for subscribers.',
      imageUrl: '/img/atal-pension-yojana.jpg',
      category: 'Pension',
      readMoreLink: '/blog/atal-pension-yojana',
    },
    {
      id: 4,
      title: 'Digital India: A Step Towards Digital Transformation',
      description: 'An initiative to improve online infrastructure and digital literacy across India, empowering citizens with technology.',
      imageUrl: '/img/digital-india.jpg',
      category: 'Technology',
      readMoreLink: '/blog/digital-india',
    },
    {
      id: 5,
      title: 'Swachh Bharat Mission: Clean India Drive',
      description: 'A national campaign to clean up the streets, roads, and infrastructure of India’s cities and rural areas.',
      imageUrl: '/img/swachh-bharat.png',
      category: 'Sanitation',
      readMoreLink: '/blog/swachh-bharat',
    },
    {
      id: 6,
      title: 'Beti Bachao Beti Padhao: Empowering the Girl Child',
      description: 'An initiative aimed at addressing the issue of declining child sex ratio and empowering the girl child through education.',
      imageUrl: '/img/beti-bachao.jpg',
      category: 'Education',
      readMoreLink: '/blog/beti-bachao-beti-padhao',
    },
    {
      id: 7,
      title: 'Stand-Up India: Boosting Women & SC/ST Entrepreneurs',
      description: 'A scheme that provides loans to women and SC/ST entrepreneurs to promote enterprise and reduce economic disparity.',
      imageUrl: '/img/stand-up-india.jpg',
      category: 'Entrepreneurship',
      readMoreLink: '/blog/stand-up-india',
    },
    {
      id: 8,
      title: 'Startup India: Encouraging Innovation and Growth',
      description: 'A government initiative to promote startups and create an ecosystem that is conducive to growth and innovation.',
      imageUrl: '/img/startup-india.jpg',
      category: 'Entrepreneurship',
      readMoreLink: '/blog/startup-india',
    },
    {
      id: 9,
      title: 'Pradhan Mantri Fasal Bima Yojana: Crop Insurance for Farmers',
      description: 'Learn about the PMFBY, a crop insurance scheme that aims to reduce the financial burden on farmers due to crop loss.',
      imageUrl: '/img/fasal-bima-yojana.jpg',
      category: 'Agriculture',
      readMoreLink: '/blog/fasal-bima-yojana',
    },
    {
      id: 10,
      title: 'Skill India: Bridging the Skills Gap',
      description: 'A campaign aimed at training over 40 crore people in different skills by 2022 to create a skilled workforce.',
      imageUrl: '/img/skill-india.jpg',
      category: 'Skill Development',
      readMoreLink: '/blog/skill-india',
    },
    {
      id: 11,
      title: 'Make in India: Boosting Manufacturing and Investments',
      description: 'The Make in India initiative is aimed at transforming India into a global design and manufacturing hub.',
      imageUrl: '/img/make-in-india.jpg',
      category: 'Manufacturing',
      readMoreLink: '/blog/make-in-india',
    },
    {
      id: 12,
      title: 'Jan Dhan Yojana: Financial Inclusion for All',
      description: 'Pradhan Mantri Jan Dhan Yojana (PMJDY) is a national mission to ensure access to financial services, particularly banking.',
      imageUrl: '/img/jan-dhan-yojana.jpg',
      category: 'Finance',
      readMoreLink: '/blog/jan-dhan-yojana',
    },
    {
      id: 13,
      title: 'Ujjwala Yojana: Clean Cooking Fuel for Rural India',
      description: 'A scheme aimed at providing clean cooking fuel (LPG) to rural households to reduce health hazards due to smoke.',
      imageUrl: '/img/ujjwala-yojana.jpg',
      category: 'Energy',
      readMoreLink: '/blog/ujjwala-yojana',
    },
    {
      id: 14,
      title: 'PM-Kisan: Direct Income Support for Farmers',
      description: 'PM-Kisan provides direct income support to farmers to ensure minimum income guarantees and improve livelihood.',
      imageUrl: '/img/pm-kisan.jpg',
      category: 'Agriculture',
      readMoreLink: '/blog/pm-kisan',
    },
    {
      id: 15,
      title: 'Jal Jeevan Mission: Safe Drinking Water to Every Household',
      description: 'Jal Jeevan Mission aims to provide safe and adequate drinking water through individual tap connections by 2024.',
      imageUrl: '/img/jal-jeevan.jpg',
      category: 'Water',
      readMoreLink: '/blog/jal-jeevan-mission',
    },
    {
      id: 16,
      title: 'Samagra Shiksha: Quality Education for All',
      description: 'A scheme aimed at improving school education quality with an emphasis on inclusivity and gender equality.',
      imageUrl: '/img/samagra-shiksha.jpg',
      category: 'Education',
      readMoreLink: '/blog/samagra-shiksha',
    },
    {
      id: 17,
      title: 'PM Garib Kalyan Yojana: Welfare Measures for the Poor',
      description: 'This scheme provides free food grains to the poor and vulnerable sections to mitigate hardships during the pandemic.',
      imageUrl: '/img/garib-kalyan.jpg',
      category: 'Welfare',
      readMoreLink: '/blog/garib-kalyan-yojana',
    },
    {
      id: 18,
      title: 'National Pension Scheme: Retirement Planning for All',
      description: 'NPS is a government-backed pension scheme aimed at providing retirement income to all Indian citizens.',
      imageUrl: '/img/national-pension.jpg',
      category: 'Pension',
      readMoreLink: '/blog/national-pension-scheme',
    }
  ];

  return (
    <>
<Navbar />
<div className="min-h-screen rounded-md bg-gradient-to-r from-red-50 via-red-100 to-red-50 p-10">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-extrabold text-gray-700 mb-8 text-center">Government Schemes</h1>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Stay informed about the latest government initiatives aimed at improving the lives of citizens.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default BlogPage;
