import { RefreshCw, WifiOff } from 'lucide-react';

export function CoursesError({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <span className="text-6xl mb-4"><WifiOff /></span>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        Failed to Load Courses
      </h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        {message || 'Something went wrong while fetching courses. Please try again.'}
      </p>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <RefreshCw className="h-4 w-4" />
        Retry
      </button>
    </div>
  );
}