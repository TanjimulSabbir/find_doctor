import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './Features/filterSlice';
import authSlice from './Features/authSlice';

const store = configureStore({
    reducer: { filteredDoctor: filterSlice, authInfo: authSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;