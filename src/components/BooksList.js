import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import EachBook from './EachBook';
import AddBook from './AddBookForm';
import { fetchBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const error = useSelector((state) => state.books.error);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Something went wrong!</span>;
  }

  return (
    <>
      <div className="books-list">
        {books.map((book) => (
          <EachBook key={book.id} book={book} />
        ))}
      </div>
      <AddBook />
    </>

  );
};

export default BooksList;
