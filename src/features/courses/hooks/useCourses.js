import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCourses,
  setSearchFilter,
  setCategoryFilter,
  setInstructorFilter,
  clearFilters,
  setSortBy,
  setCurrentPage,
  setViewMode,
  setPageSize,
} from '../store/coursesSlice';
import {
  selectPaginationData,
  selectStatus,
  selectError,
  selectFilters,
  selectSortBy,
  selectCurrentPage,
  selectCategories,
  selectInstructors,
  selectViewMode,
  selectPageSize,
} from '../store/selectors';

export function useCourses() {
  const dispatch = useDispatch();
  const { paginatedItems, totalPages, totalItems } = useSelector(selectPaginationData);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const sortBy = useSelector(selectSortBy);
  const currentPage = useSelector(selectCurrentPage);
  const categories = useSelector(selectCategories);
  const instructors = useSelector(selectInstructors);
  const viewMode = useSelector(selectViewMode);
  const pageSize = useSelector(selectPageSize);

  // Fetch courses on mount
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  return {
    // Data
    courses: paginatedItems,
    totalPages,
    totalItems,
    categories,
    instructors,

    // State
    status,
    error,
    filters,
    sortBy,
    currentPage,
    viewMode,
    pageSize,

    // Actions
    setSearch: useCallback((search) => dispatch(setSearchFilter(search)), [dispatch]),
    setCategory: useCallback((category) => dispatch(setCategoryFilter(category)), [dispatch]),
    setInstructor: useCallback((instructor) => dispatch(setInstructorFilter(instructor)), [dispatch]),
    clearAllFilters: useCallback(() => dispatch(clearFilters()), [dispatch]),
    setSort: useCallback((sortBy) => dispatch(setSortBy(sortBy)), [dispatch]),
    setPage: useCallback((page) => dispatch(setCurrentPage(page)), [dispatch]),
    setView: useCallback((mode) => dispatch(setViewMode(mode)), [dispatch]),
    setPageSize: useCallback((size) => dispatch(setPageSize(size)), [dispatch]),
    refetch: useCallback(() => dispatch(fetchCourses()), [dispatch]),
  };
}