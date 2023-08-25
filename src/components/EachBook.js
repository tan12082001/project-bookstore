import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';
import Button from './ButtonHandle';
import ExtraContent from './ExtraContent';

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
      <div className="first-part">
        <div className="book-content">
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="author">{author}</p>
        </div>
        <div className="book-buttons">
          <button type="button" className="comments">Comments</button>
          <Button className="delete-book" toAddRemove="Remove" clickHandle={() => dispatch(deleteBook(id))} />
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="second-part">
        <ExtraContent />
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
