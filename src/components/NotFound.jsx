import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
