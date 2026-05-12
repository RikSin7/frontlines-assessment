export function filterCourses(courses, filters) {
  const { search, category, instructor } = filters;

  return courses.filter((course) => {
    // Search by course name or description
    if (search) {
      const searchTerm = search.toLowerCase();
      const nameMatch = course.name.toLowerCase().includes(searchTerm);
      const descMatch = course.description.toLowerCase().includes(searchTerm);
      if (!nameMatch && !descMatch) return false;
    }

    // Filter by category
    if (category && course.category !== category) return false;

    // Filter by instructor
    if (instructor && course.instructor !== instructor) return false;

    return true; // This means that the course should be included in the filtered results
  });
}