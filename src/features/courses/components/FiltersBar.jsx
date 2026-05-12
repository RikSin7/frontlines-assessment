import { SORT_OPTIONS } from '../../../shared/utils/constants';
import { Select } from '../../../shared/ui/Select';
import { ViewToggle } from './ViewToggle';
import { Badge } from '../../../shared/ui/Badge';

export function FiltersBar({
  totalItems,
  sortBy,
  viewMode,
  filters,
  pageSize,
  onSortChange,
  onViewChange,
  onPageSizeChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4">
      <div className="flex items-center gap-3">
        <Badge variant="default">
          {totalItems} {totalItems === 1 ? 'course' : 'courses'} found
        </Badge>
        {Object.values(filters).some(Boolean) && (
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            (filtered)
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        {/* Page Size Selector */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-600 dark:text-neutral-400">Show:</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="rounded-lg border border-neutral-300 bg-white px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
          >
            <option value={6}>6 per page</option>
            <option value={12}>12 per page</option>
            <option value={24}>24 per page</option>
            <option value={48}>48 per page</option>
          </select>
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-600 dark:text-neutral-400">Sort by:</span>
          <Select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            options={SORT_OPTIONS.map((opt) => opt.value)}
            placeholder="Sort"
            className="w-[160px]"
          />
        </div>

        {/* View Toggle */}
        <ViewToggle viewMode={viewMode} onViewChange={onViewChange} />
      </div>
    </div>
  );
}