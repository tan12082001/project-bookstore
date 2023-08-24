import { useSelector } from 'react-redux';
import EachBook from './EachBook';
import AddBook from './AddBookForm';

const BooksList = () => {
  const testbooks = useSelector((state) => state.books.books);
  return (
    <>
      <div className="books-list">
        {testbooks.map((book) => (
          <EachBook key={book.item_id} book={book} />
        ))}
      </div>
      <AddBook />
    </>

  );
};

export default BooksList;
