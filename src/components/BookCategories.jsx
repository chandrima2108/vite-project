import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function BookCategories() {
  const books = useSelector(state => state.books);
  const { categoryid } = useParams();

  const filteredBooks = books.filter(book => book.category.toLowerCase() === categoryid.toLowerCase());

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{categoryid} Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map(book => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 mr-1">★</span>
                <span>{book.rating}</span>
              </div>
              <p className="text-gray-700 mb-4 line-clamp-3">{book.description}</p>
              <Link 
                to={`/books/${book.id}`} 
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCategories;
