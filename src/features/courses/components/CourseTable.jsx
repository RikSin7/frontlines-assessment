import { Star } from 'lucide-react';
import { Badge } from '../../../shared/ui/Badge';

export function CourseTable({ courses }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
      <table className="w-full text-sm">
        <thead className="bg-neutral-50 dark:bg-neutral-800">
          <tr>
            <th className="text-left px-6 py-3 font-semibold text-neutral-600 dark:text-neutral-300">
              Course Name
            </th>
            <th className="text-left px-6 py-3 font-semibold text-neutral-600 dark:text-neutral-300">
              Instructor
            </th>
            <th className="text-left px-6 py-3 font-semibold text-neutral-600 dark:text-neutral-300">
              Category
            </th>
            <th className="text-left px-6 py-3 font-semibold text-neutral-600 dark:text-neutral-300">
              Duration
            </th>
            <th className="text-left px-6 py-3 font-semibold text-neutral-600 dark:text-neutral-300">
              Rating
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
          {courses.map((course) => (
            <tr
              key={course.id}
              className="bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="font-medium text-neutral-900 dark:text-neutral-100">
                  {course.name}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {course.description}
                </div>
              </td>
              <td className="px-6 py-4 text-neutral-600 dark:text-neutral-300">
                {course.instructor}
              </td>
              <td className="px-6 py-4">
                <Badge variant="blue">{course.category}</Badge>
              </td>
              <td className="px-6 py-4 text-neutral-600 dark:text-neutral-300">
                {course.duration}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
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