import { cn } from '../utils/cn';

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground shadow-sm',
        'focus:border-ring focus:outline-none focus:ring-4 focus:ring-ring/10 transition-all duration-300',
        className
      )}
      {...props}
    />
  );
}