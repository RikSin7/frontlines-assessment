import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "../../../shared/ui/Button";
import { memo, useMemo } from "react";

export const CoursePagination = memo(function CoursePagination({
  currentPage,
  totalPages,
  onPageChange,
}) {

  const maxVisiblePages = 5;
  const pages = useMemo(() => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const items = [1];
    
    if (currentPage > 3) items.push("...");
    
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      items.push(i);
    }
    
    if (currentPage < totalPages - 2) items.push("...");
    
    items.push(totalPages);
    
    return items;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;


  return (
    <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="hidden sm:inline-flex"
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {pages.map((page, i) =>
        page === "..." ? (
          <span key={`dots-${i}`} className="px-2 text-muted-foreground">
            ...
          </span>
        ) : (
          <Button
            key={page}
            variant={currentPage === page ? "primary" : "ghost"}
            size="sm"
            onClick={() => onPageChange(page)}
          >
            {page}
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

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="hidden sm:inline-flex"
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>

    </div>
  );
});