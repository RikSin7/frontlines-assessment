import { Search, X } from 'lucide-react';
import { Input } from '../../../shared/ui/Input';
import { Select } from '../../../shared/ui/Select';
import { Button } from '../../../shared/ui/Button';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';
import { useState, useEffect, memo } from 'react';

export const CourseFilters = memo(function CourseFilters({
 filters,
 categories,
 instructors,
 onSearchChange,
 onCategoryChange,
 onInstructorChange,
 onClearFilters,
}) {
 const [searchInput, setSearchInput] = useState(filters.search || '');
 const debouncedSearch = useDebouncedSearch(searchInput);

 useEffect(() => {
 onSearchChange(debouncedSearch);
 }, [debouncedSearch, onSearchChange]);

 useEffect(() => {
 setSearchInput(filters.search || '');
 }, [filters.search]);

 const hasActiveFilters = filters.search || filters.category || filters.instructor;

 return (
 <div className="flex flex-col md:flex-row gap-4 items-center w-full">
 <div className="relative w-full md:flex-1">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
 <Input
 type="text"
 placeholder="Search courses..."
 value={searchInput}
 onChange={(e) => setSearchInput(e.target.value)}
 className="pl-10 w-full"
 />
 </div>

 <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
 <Select
 value={filters.category}
 onChange={(e) => onCategoryChange(e.target.value)}
 options={categories}
 placeholder="All Categories"
 className="w-full sm:w-[180px]"
 />

 <Select
 value={filters.instructor}
 onChange={(e) => onInstructorChange(e.target.value)}
 options={instructors}
 placeholder="All Instructors"
 className="w-full sm:w-[180px]"
 />

 {hasActiveFilters && (
 <Button
 variant="outline"
 onClick={onClearFilters}
 className="flex items-center gap-2 w-full sm:w-auto justify-center"
 >
 <X className="h-4 w-4"/>
 Clear
 </Button>
 )}
 </div>
 </div>
 );
});
