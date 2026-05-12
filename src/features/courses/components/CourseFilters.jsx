import { Search, X } from 'lucide-react';
import { Input } from '../../../shared/ui/Input';
import { Select } from '../../../shared/ui/Select';
import { Button } from '../../../shared/ui/Button';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';
import { useState, useEffect } from 'react';

export function CourseFilters({
  filters,
  categories,
  instructors,
  onSearchChange,
  onCategoryChange,
  onInstructorChange,
  onClearFilters,
}) {
  const [searchInput, setSearchInput] = useState(filters.search);
  const debouncedSearch = useDebouncedSearch(searchInput);

  useEffect(() => {
    onSearchChange(debouncedSearch);
  }, [debouncedSearch, onSearchChange]);

  const hasActiveFilters = filters.search || filters.category || filters.instructor;

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-wrap">
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
        <Input
          type="text"
          placeholder="Search courses..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-10"
        />
      </div>

      <Select
        value={filters.category}
        onChange={onCategoryChange}
        options={categories}
        placeholder="All Categories"
        className="min-w-[180px]"
      />

      <Select
        value={filters.instructor}
        onChange={onInstructorChange}
        options={instructors}
        placeholder="All Instructors"
        className="min-w-[180px]"
      />

      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          className="flex items-center gap-1"
        >
          <X className="h-4 w-4" />
          Clear
        </Button>
      )}
    </div>
  );
}