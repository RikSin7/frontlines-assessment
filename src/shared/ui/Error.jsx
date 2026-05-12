import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default function Error({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center animate-in fade-in duration-500">
      <div className="h-16 w-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 ring-8 ring-red-500/5">
        <AlertTriangle className="h-8 w-8 text-red-500" />
      </div>
      
      <h3 className="text-2xl font-bold text-foreground mb-3">
        Oops! Something went wrong
      </h3>
      
      <p className="text-muted-foreground mb-8 max-w-md">
        {message || "We encountered an unexpected error. Please try again or return to the homepage."}
      </p>
      
      <div className="flex items-center gap-4 flex-wrap justify-center">
        {onRetry && (
          <Button onClick={onRetry} variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
        )}
        <Link to="/">
          <Button variant="primary" className="gap-2">
            <Home className="h-4 w-4" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
