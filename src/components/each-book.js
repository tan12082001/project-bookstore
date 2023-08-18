import PropTypes from 'prop-types';

const EachBook = ({ book, deleteBook }) => (
  <div className="book-outer">
    <div className="book-content">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
    <div className="book-buttons">
      <button type="button" className="delete-book" onClick={() => deleteBook(book.id)}>DELETE</button>
    </div>
  </div>
);

EachBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default EachBook;
