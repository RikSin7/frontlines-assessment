import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import coursesData from '../data/courses.json';
import { PAGE_SIZE } from '../../../shared/utils/constants';

// Simulate API call with mock Courses data
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return coursesData.courses;
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    filters: {
      search: '',
      category: '',
      instructor: '',
    },
    sortBy: 'name-asc',
    currentPage: 1,
    pageSize: PAGE_SIZE,
    viewMode: 'card', // 'card' | 'table'
  },
  reducers: {
    setSearchFilter: (state, action) => {
      state.filters.search = action.payload;
      state.currentPage = 1; // Reset to first page on filter change
    },
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
      state.currentPage = 1;
    },
    setInstructorFilter: (state, action) => {
      state.filters.instructor = action.payload;
      state.currentPage = 1;
    },
    clearFilters: (state) => {
      state.filters = { search: '', category: '', instructor: '' };
      state.currentPage = 1;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        // console.log(state.items)
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch courses';
      });
  },
});

export const {
  setSearchFilter,
  setCategoryFilter,
  setInstructorFilter,
  clearFilters,
  setSortBy,
  setCurrentPage,
  setViewMode,
} = coursesSlice.actions;

export default coursesSlice.reducer;