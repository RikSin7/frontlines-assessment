import { Card } from '../../../shared/ui/Card';

export function CourseSkeleton() {
  return (
    <Card className="p-6 animate-pulse">
      <div className="h-4 bg-muted rounded w-3/4 mb-4" />
      <div className="h-3 bg-muted rounded w-1/2 mb-6" />
      <div className="space-y-3">
        <div className="h-3 bg-muted rounded" />
        <div className="h-3 bg-muted rounded w-5/6" />
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="h-5 bg-muted rounded w-20" />
        <div className="h-5 bg-muted rounded w-16" />
      </div>
    </Card>
  );
}

export function CourseFiltersSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-wrap mb-6">
      <div className="flex-1 min-w-[200px] h-[46px] bg-muted rounded-xl animate-pulse" />
      <div className="min-w-[180px] h-[46px] bg-muted rounded-xl animate-pulse" />
      <div className="min-w-[180px] h-[46px] bg-muted rounded-xl animate-pulse" />
    </div>
  );
}

export function FiltersBarSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 animate-pulse">
      <div className="h-6 w-32 bg-muted rounded-full" />
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        <div className="h-8 w-24 bg-muted rounded-lg" />
        <div className="h-8 w-40 bg-muted rounded-lg" />
        <div className="h-8 w-32 bg-muted rounded-lg" />
      </div>
    </div>
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