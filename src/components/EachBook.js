import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';
import Button from './ButtonHandle';

const EachBook = ({ book }) => {
  const {
    title,
    author,
    category,
    id,
  } = book;
  const dispatch = useDispatch();
  return (
    <div className="book-outer">
      <div className="book-content">
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{category}</p>
      </div>
      <div className="book-buttons">
        <Button className="delete-book" toAddRemove="DELETE" clickHandle={() => dispatch(deleteBook(id))} />
      </div>
    </div>
  );
};

EachBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default EachBook;
