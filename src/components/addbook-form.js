import { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      addBook(title, author);
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-parts">
          <label htmlFor="book-name">
            <input
              id="book-name"
              type="text"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-parts">
          <label htmlFor="book-author">
            <input
              id="book-author"
              type="text"
              placeholder="Book Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-parts">
          <button type="submit" id="add-book">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBook;
