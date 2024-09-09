'use client';

import React from 'react';
import BlogPostCard from '@/components/BlogPostCard';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'PM Awas Yojana: Affordable Housing for All',
      description: 'A deep dive into the benefits and eligibility criteria of the Pradhan Mantri Awas Yojana (PMAY) scheme aimed at providing affordable housing to the economically weaker sections.',
      imageUrl: '/images/pm-awas-yojana.jpg',
      category: 'Housing',
      readMoreLink: '/blog/pm-awas-yojana',
    },
    {
      id: 2,
      title: 'Ayushman Bharat: Health for All',
      description: 'An overview of the Ayushman Bharat scheme, which aims to provide health coverage to millions of vulnerable Indian citizens.',
      imageUrl: '/images/ayushman-bharat.jpg',
      category: 'Healthcare',
      readMoreLink: '/blog/ayushman-bharat',
    },
    {
      id: 3,
      title: 'Atal Pension Yojana: Ensuring a Secure Future',
      description: 'Learn how the Atal Pension Yojana offers retirement security to the unorganized sector, providing a fixed pension for subscribers.',
      imageUrl: '/images/atal-pension-yojana.jpg',
      category: 'Pension',
      readMoreLink: '/blog/atal-pension-yojana',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 via-red-100 to-red-50 p-10">
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
  );
};

export default BlogPage;
