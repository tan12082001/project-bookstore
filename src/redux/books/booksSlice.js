import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APP_ID = 'vwlhSWvZhDvghxe3UQ4o';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appURL = `${BASE_URL}${APP_ID}/books/`;

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios(appURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const postBook = createAsyncThunk(
  'books/postBook',
  async (newBook, thunkAPI) => {
    try {
      await axios.post(appURL, JSON.stringify(newBook), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = thunkAPI.dispatch(fetchBooks());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${appURL}${id}`, JSON.stringify({ item_id: id }));
      thunkAPI.dispatch(fetchBooks());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const booksReceived = [];
        Object.keys(action.payload).forEach((bookID) => {
          action.payload[bookID][0].id = bookID;
          booksReceived.push(action.payload[bookID][0]);
        });
        state.books = booksReceived;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default booksSlice.reducer;
