import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './Features/filterSlice';

const store = configureStore({
    reducer: { filteredDoctor: filterSlice }
});

export default store;