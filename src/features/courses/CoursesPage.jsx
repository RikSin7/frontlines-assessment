import { useCourses } from './hooks/useCourses';
import { CourseFilters } from './components/CourseFilters';
import { FiltersBar } from './components/FiltersBar';
import { CourseCard } from './components/CourseCard';
import { CourseTable } from './components/CourseTable';
import { CourseSkeletonGrid, CourseFiltersSkeleton, FiltersBarSkeleton } from './components/CourseSkeleton';
import { CoursesError } from './components/CoursesError';
import { CoursesEmpty } from './components/CoursesEmpty';
import { CoursePagination } from './components/CoursePagination';

export default function CoursesPage() {
 const {
 courses,
 totalPages,
 totalItems,
 categories,
 instructors,
 status,
 error,
 filters,
 sortBy,
 currentPage,
 viewMode,
 setSearch,
 setCategory,
 setInstructor,
 clearAllFilters,
 setSort,
 setPage,
 setView,
 refetch,
 pageSize,
 setPageSize,
 } = useCourses();


 // Loading State
 if (status === 'loading') {
 return (
 <div className="animate-in fade-in duration-500">
 <h1 className="text-3xl font-bold mb-2 text-foreground">
 Course Directory
 </h1>
 <p className="text-muted-foreground mb-8">
 Explore our curated collection of courses
 </p>
 
 <CourseFiltersSkeleton />
 <FiltersBarSkeleton />
 <CourseSkeletonGrid count={6} />
 </div>
 );
 }

 // Error State
 if (status === 'failed') return <CoursesError message={error} onRetry={refetch} />;

 return (
 <div className=' '>
 <h1 className="text-3xl font-bold mb-2 text-foreground">
 Course Directory
 </h1>
 <p className="text-muted-foreground mb-8">
 Explore our curated collection of courses
 </p>

 {/* Filters Section */}
 <div className="mb-6">
 <CourseFilters
 filters={filters}
 categories={categories}
 instructors={instructors}
 onSearchChange={setSearch}
 onCategoryChange={setCategory}
 onInstructorChange={setInstructor}
 onClearFilters={clearAllFilters}
 />
 </div>

 {/* Results Info & Sort */}
 <FiltersBar
 totalItems={totalItems}
 sortBy={sortBy}
 viewMode={viewMode}
 filters={filters}
 onSortChange={setSort}
 onViewChange={setView}
 onPageSizeChange={setPageSize}
 pageSize={pageSize}
 />

 {/* Empty State */}
 {courses.length === 0 && status === 'succeeded' ? (
 <CoursesEmpty />
 ) : (
 <>
 {/* Course Display */}
 {viewMode === 'card' ? (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {courses.map((course) => (
 <CourseCard key={course.id} course={course} />
 ))}
 </div>
 ) : (
 <CourseTable courses={courses} />
 )}

 {/* Pagination */}
 <CoursePagination
 currentPage={currentPage}
 totalPages={totalPages}
 onPageChange={setPage}
 />
 </>
 )}
 </div>
 );
}