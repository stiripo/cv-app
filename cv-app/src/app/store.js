import { educationReducer } from '../features/education/educationSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        education: educationReducer,
    },
})