import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';
import Button from './button-handle';

const AddBook = () => {
  const dispatch = useDispatch();
  const booksnumber = useSelector((state) => state.books.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      const newBook = {
        item_id: `item${booksnumber.length + 1}`,
        title,
        author,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
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
          <Button className="add-book" toAddRemove="ADD BOOK" clickHandle={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
