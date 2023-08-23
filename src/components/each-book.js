import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import Button from './button-handle';

const EachBook = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-outer">
      <div className="book-content">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <div className="book-buttons">
        <Button className="delete-book" toAddRemove="DELETE" clickHandle={() => dispatch(removeBook(book.item_id))} />
      </div>
    </div>
  );
};

EachBook.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default EachBook;
