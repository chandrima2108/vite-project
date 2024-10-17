import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utility/store';
import HomePage from './components/HomePage';
import BrowseBooks from './Components/BrowseBooks';
import BookDetails from './components/BookDetails';
import AddBooks from './Components/AddBook';
import NotFound from './components/NotFound';
import { useParams } from 'react-router-dom';
import BookCategories from './components/BookCategories';
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/browse", element: <BrowseBooks /> },
    { path: "/browse/:categoryid", element: <BookCategories /> },
    { path: "/books/:bookId", element: <BookDetails /> },
    { path: "/add-book", element: <AddBooks /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
