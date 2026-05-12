import { RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function Error({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-neutral-600 dark:text-neutral-300">
      <div className="text-lg mb-2">{message}</div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors mt-2"
        >
          <RefreshCw className="h-4 w-4" />
          Retry
        </button>
      )}
      <Link to="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Back to Courses
        </button>
      </Link>
    </div>
  );
}
