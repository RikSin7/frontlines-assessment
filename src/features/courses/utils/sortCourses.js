export function sortCourses(courses, sortBy) {
 const sorted = [...courses]; // copy of the array to avoid mutating the original array

 switch (sortBy) {
 case 'name-asc':
 return sorted.sort((a, b) => a.name.localeCompare(b.name)); // This means that if a.name is alphabetically before b.name, a.name will be placed before b.name, resulting in ascending order.
 case 'name-desc':
 return sorted.sort((a, b) => b.name.localeCompare(a.name));
 case 'rating-desc':
 return sorted.sort((a, b) => b.rating - a.rating);
 case 'rating-asc':
 return sorted.sort((a, b) => a.rating - b.rating);
 case 'duration-asc':
 return sorted.sort((a, b) => {
 const aWeeks = parseInt(a.duration);
 const bWeeks = parseInt(b.duration);
 return aWeeks - bWeeks;
 });
 case 'duration-desc':
 return sorted.sort((a, b) => {
 const aWeeks = parseInt(a.duration);
 const bWeeks = parseInt(b.duration);
 return bWeeks - aWeeks; // This means that if bWeeks is greater than aWeeks, bWeeks - aWeeks will be positive, and b will be placed before a, resulting in descending order.
 });
 default:
 return sorted; // original unsorted array
 }
}