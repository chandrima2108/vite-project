import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BrowseBooks = () => {
  const books = useSelector((state) => state.books) || [];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [displayBooks, setDisplayBooks] = useState([]);
  const categories = ['All', 'Fiction', 'Classic', 'Adventure', 'Historical', 'Epic', 'Fantasy', 'Satire'];

  useEffect(() => {
    updateDisplayBooks();
  }, [books, selectedCategory, search]);

  const updateDisplayBooks = () => {
    let filtered = selectedCategory === 'All'
      ? books
      : books.filter(book => book.category === selectedCategory);

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(book => 
        (book.title && book.title.toLowerCase().includes(searchLower)) || 
        (book.author && book.author.toLowerCase().includes(searchLower))
      );
    }

    setDisplayBooks(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    updateDisplayBooks();
  };

  return (
    <div className="p-6 bg-gray-100">
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mb-6"
      >
        Back to Homepage
      </Link>

      <form onSubmit={handleSearch} className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search by title or author"
          className="flex-grow p-2 border border-gray-300 rounded-l-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
      <div className="mb-6">
        <select 
          value={selectedCategory} 
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
        {displayBooks.map((book) => (
          <li key={book.id} className="bg-gradient-to-br from-blue-100 via-green-100 to-gray-100 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            {book.image && <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />}
            <div className="p-4 bg-white bg-opacity-70">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{book.title || 'Untitled'}</h2>
              <p className="text-gray-700 mb-1">{book.author || 'Unknown Author'}</p>
              <p className="text-sm text-green-600 mb-3">{book.category || 'Uncategorized'}</p>
              <Link
                to={`/books/${book.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                Read more
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;
