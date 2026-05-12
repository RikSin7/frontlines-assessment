import { SORT_OPTIONS } from '../../../shared/utils/constants';
import { Select } from '../../../shared/ui/Select';
import { ViewToggle } from './ViewToggle';
import { Badge } from '../../../shared/ui/Badge';

export function FiltersBar({
  totalItems,
  sortBy,
  viewMode,
  filters,
  onSortChange,
  onViewChange,
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

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-600 dark:text-neutral-400">Sort by:</span>
          <Select
            value={sortBy}
            onChange={onSortChange}
            options={SORT_OPTIONS.map((opt) => opt.value)}
            placeholder="Sort"
            className="w-[160px]"
          />
        </div>
        <ViewToggle viewMode={viewMode} onViewChange={onViewChange} />
      </div>
    </div>
  );
}