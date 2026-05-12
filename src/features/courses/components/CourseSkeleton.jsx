import { Card } from '../../../shared/ui/Card';

export function CourseSkeleton() {
  return (
    <Card className="p-6 animate-pulse">
      <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 mb-4" />
      <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2 mb-6" />
      <div className="space-y-3">
        <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded" />
        <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6" />
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-20" />
        <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-16" />
      </div>
    </Card>
  );
}

export function CourseSkeletonGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }, (_, i) => (
        <CourseSkeleton key={i} />
      ))}
    </div>
  );
}