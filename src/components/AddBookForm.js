import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postBook } from '../redux/books/booksSlice';
import Button from './ButtonHandle';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(postBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <div className="add-book-form">
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
          <label htmlFor="book-category">
            <input
              id="book-category"
              type="text"
              placeholder="Book Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
