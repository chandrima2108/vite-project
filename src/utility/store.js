// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './bookslice';

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

export default store;
