import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link} from 'react-router-dom';


const BookDetailsPage = () => {
  const books = useSelector(state => state.books);
  const { bookId } = useParams();
  const book = books.find(book => book.id === parseInt(bookId));

 

  if (!book) {
    return <h2 className="text-2xl font-bold text-center mt-8 text-red-600">Book not found</h2>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <img src={book.image} alt={book.title} />
      <h1 className="text-3xl font-bold mb-2 text-gray-800">{book.title}</h1>
      <h2 className="text-xl font-semibold mb-4 text-gray-600">{book.author}</h2>
      <p className="text-gray-700 mb-4">{book.description}</p>
      <p className="text-lg font-medium mb-6">Rating: <span className="text-yellow-500">{book.rating}</span></p>
      <div className="flex justify-between items-center">
       
        
        <Link
          to="/browse"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back to Browse
        </Link>
      </div>
    </div>
  );
};

export default BookDetailsPage;
