import { useState } from 'react';
import EachBook from './each-book';

const BooksList = () => {
  const examplebooks = [
    {
      id: 1,
      title: 'Book one',
      author: 'Author one',
    },
    {
      id: 2,
      title: 'Book two',
      author: 'Author two',
    },
    {
      id: 3,
      title: 'Book three',
      author: 'Author three',
    },
  ];
  const [books, setBooks] = useState(examplebooks);
  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id).map((book, index) => ({
      ...book,
      id: index + 1,
    }));
    setBooks(updatedBooks);
  };
  return (
    <div className="books-list">
      {books.map((book) => (
        <EachBook key={book.id} book={book} deleteBook={deleteBook} />
      ))}
    </div>
  );
};

export default BooksList;
