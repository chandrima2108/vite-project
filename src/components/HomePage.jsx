// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
 
  const categories = ['Fiction', 'Classic', 'Adventure', 'Historical', 'Epic', 'Fantasy', 'Satire'];
  const PopularBooks=[{
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "category": "Fiction",
    "description": "A novel about the serious issues of rape and racial inequality.",
    "rating": 4.8,
    "image": "https://media.glamour.com/photos/56e1f3c562b398fa64cbd310/master/w_1280%2Cc_limit/entertainment-2016-02-07-main.jpg"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "category": "Fiction",
    "description": "A novel that presents a dystopian future under a totalitarian regime.",
    "rating": 4.7,
    "image": "https://www.historynet.com/wp-content/uploads/2022/05/1984-by-George-Orwell-book-cover.jpeg"
  },
  {
    "id": 3,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "category": "Classic",
    "description": "A novel about the American dream and the roaring twenties.",
    "rating": 4.5,
    "image": "https://usercontent2.hubstatic.com/6921909_f520.jpg"
  }]
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="bg-blue-600 shadow-md mb-8">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center h-16 space-x-6">
            <li><Link to="/" className="text-white hover:text-blue-200 font-medium">Home</Link></li>
            <li><Link to="/browse" className="text-white hover:text-blue-200 font-medium">Browse Books</Link></li>
            <li><Link to="/add-book" className="text-white hover:text-blue-200 font-medium">Add Book</Link></li>
          </ul>
        </div>
      </nav>
      <h1 className="text-4xl font-bold mb-6">Welcome to the Online Library</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Book Categories</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <li className="bg-gray-100 rounded-lg p-3 text-center">
          <Link to="/browse" className="text-blue-600 hover:text-blue-800">All Books</Link>
        </li>
        {categories.map(category => (
          <li key={category} className="bg-gray-100 rounded-lg p-3 text-center">
            <Link to={`/browse/${category.toLowerCase()}`} className="text-blue-600 hover:text-blue-800">{category}</Link>
          </li>
        ))}
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PopularBooks.map((book) => (
          <li key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <p className="text-sm text-gray-500">{book.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{book.rating}</span>
                </div>
                <Link
              to={`/books/${book.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Read more
            </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
