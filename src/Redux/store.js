import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './Features/filterSlice';

const store = configureStore({
    reducer: { filteredDoctor: filterSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;