export function paginateCourses(courses, page, pageSize) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  return {
    paginatedItems: courses.slice(startIndex, endIndex),
    totalPages: Math.ceil(courses.length / pageSize),
    totalItems: courses.length,
  };
}