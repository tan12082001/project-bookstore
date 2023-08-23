import { useSelector } from 'react-redux';
import { useState } from 'react';
import EachBook from './each-book';
import AddBook from './addbook-form';

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
  const addBook = (title, author) => {
    const newBook = {
      id: books.length + 1,
      title,
      author,
    };
    setBooks([...books, newBook]);
  };
  const testbooks = useSelector((state) => state.books.ibooks);
  console.log(testbooks);
  return (
    <>
      <div className="books-list">
        {testbooks.map((book) => (
          <EachBook key={book.id} book={book} deleteBook={deleteBook} />
        ))}
      </div>
      <AddBook addBook={addBook} />
    </>

  );
};

export default BooksList;
