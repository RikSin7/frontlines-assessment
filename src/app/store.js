import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../features/courses/store/coursesSlice';

export const store = configureStore({
 reducer: {
 courses: coursesReducer,
 },
});