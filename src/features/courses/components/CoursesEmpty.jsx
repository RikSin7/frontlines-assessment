import { BookOpen } from"lucide-react";

export function CoursesEmpty() {
 return (
 <div className="flex flex-col items-center justify-center py-16 text-center">
 <span className="text-6xl mb-4"><BookOpen /></span>
 <h3 className="text-xl font-semibold text-foreground mb-2">
 No Courses Found
 </h3>
 <p className="text-muted-foreground">
 Try adjusting your filters or search terms.
 </p>
 </div>
 );
}