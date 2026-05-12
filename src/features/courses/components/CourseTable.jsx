import { Star } from 'lucide-react';
import { Badge } from '../../../shared/ui/Badge';

export function CourseTable({ courses }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="text-left px-6 py-3 font-semibold text-foreground">
              Course Name
            </th>
            <th className="text-left px-6 py-3 font-semibold text-foreground">
              Instructor
            </th>
            <th className="text-left px-6 py-3 font-semibold text-foreground">
              Category
            </th>
            <th className="text-left px-6 py-3 font-semibold text-foreground">
              Duration
            </th>
            <th className="text-left px-6 py-3 font-semibold text-foreground">
              Rating
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {courses.map((course) => (
            <tr
              key={course.id}
              className="bg-card hover:bg-muted/50 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="font-medium text-foreground">
                  {course.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {course.description}
                </div>
              </td>
              <td className="px-6 py-4 text-muted-foreground">
                {course.instructor}
              </td>
              <td className="px-6 py-4">
                <Badge variant="blue">{course.category}</Badge>
              </td>
              <td className="px-6 py-4 text-muted-foreground">
                {course.duration}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-foreground">
                    {course.rating}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}