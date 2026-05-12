import { RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function Error({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
      <div className="text-lg mb-2">{message}</div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors mt-2 text-foreground"
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
