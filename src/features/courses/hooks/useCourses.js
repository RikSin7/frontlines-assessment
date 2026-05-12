import { useEffect } from 'react';
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
    setSearch: (search) => dispatch(setSearchFilter(search)),
    setCategory: (category) => dispatch(setCategoryFilter(category)),
    setInstructor: (instructor) => dispatch(setInstructorFilter(instructor)),
    clearAllFilters: () => dispatch(clearFilters()),
    setSort: (sortBy) => dispatch(setSortBy(sortBy)),
    setPage: (page) => dispatch(setCurrentPage(page)),
    setView: (mode) => dispatch(setViewMode(mode)),
    setPageSize: (size) => dispatch(setPageSize(size)),
    refetch: () => dispatch(fetchCourses()),
  };
}