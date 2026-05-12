import { LayoutGrid, List } from 'lucide-react';
import { Button } from '../../../shared/ui/Button';

export function ViewToggle({ viewMode, onViewChange }) {
  return (
    <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
      <Button
        variant={viewMode === 'card' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('card')}
        className="flex items-center gap-1"
      >
        <LayoutGrid className="h-4 w-4" />
        Cards
      </Button>
      <Button
        variant={viewMode === 'table' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('table')}
        className="flex items-center gap-1"
      >
        <List className="h-4 w-4" />
        Table
      </Button>
    </div>
  );
}