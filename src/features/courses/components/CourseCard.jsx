import { Star, Clock, User } from 'lucide-react';
import { Card } from '../../../shared/ui/Card';
import { Badge } from '../../../shared/ui/Badge';
import { memo } from 'react';

export const CourseCard = memo(function CourseCard({ course }) {
  return (
    <Card className="p-6 flex flex-col h-full hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <Badge variant="blue">{course.category}</Badge>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {course.rating}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
        {course.name}
      </h3>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 flex-1">
        {course.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>{course.instructor}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{course.duration}</span>
        </div>
      </div>
    </Card>
  );
});