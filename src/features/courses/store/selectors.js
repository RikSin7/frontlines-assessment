import { createSelector } from '@reduxjs/toolkit';
import { filterCourses } from '../utils/filterCourses';
import { sortCourses } from '../utils/sortCourses';
import { paginateCourses } from '../utils/paginateCourses';

// Base selectors that simply extract data from Redux Store
export const selectAllCourses = (state) => state.courses.items;
export const selectFilters = (state) => state.courses.filters;
export const selectSortBy = (state) => state.courses.sortBy;
export const selectCurrentPage = (state) => state.courses.currentPage;
export const selectPageSize = (state) => state.courses.pageSize;
export const selectStatus = (state) => state.courses.status;
export const selectError = (state) => state.courses.error;
export const selectViewMode = (state) => state.courses.viewMode;

// Memoized selector for filtered and sorted courses
export const selectFilteredAndSortedCourses = createSelector(
  [selectAllCourses, selectFilters, selectSortBy], // Input selectors
  (courses, filters, sortBy) => { // injects the values from the input selectors into the output function
    const filtered = filterCourses(courses, filters);
    return sortCourses(filtered, sortBy);
  }
);

// Memoized selector for paginated data
export const selectPaginationData = createSelector(
  [selectFilteredAndSortedCourses, selectCurrentPage, selectPageSize],
  (courses, page, pageSize) => {
    return paginateCourses(courses, page, pageSize);
  }
);

// Derived selectors for filter options
export const selectCategories = createSelector(
  [selectAllCourses],
  (courses) => [...new Set(courses.map((c) => c.category))]
);

export const selectInstructors = createSelector(
  [selectAllCourses],
  (courses) => [...new Set(courses.map((c) => c.instructor))]
);