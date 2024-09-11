import React from 'react';

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-xl rounded-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-6">
        <div className="text-sm text-blue-500 mb-2">{post.category}</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
        <p className="text-gray-700 text-base mb-6">{post.description}</p>
        <a
          href={post.readMoreLink}
          className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
