import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../shared/ui/Button";
import { memo } from "react";

export const CoursePagination = memo(function CoursePagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
    
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      
     <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <Button
          key={index}
          variant={
            currentPage === index + 1
              ? "primary"
              : "ghost"
          }
          size="sm"
          onClick={() =>
            onPageChange(index + 1)
          }
          >
            {index + 1}
          </Button>
        )
      )}

    <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
});