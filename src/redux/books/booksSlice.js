import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ibooks: [
    {
      id: 99,
      title: 'tanu',
      author: 'lover',
    },
    {
      id: 100,
      title: 'dekku',
      author: 'mine',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload).map((book, index) => ({
        ...book,
        id: index + 1,
      }));
    },
  },
});

console.log(booksSlice);

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
