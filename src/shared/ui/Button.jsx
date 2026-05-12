import { cn } from '../utils/cn';

export function Button({ children, className, variant = 'primary', size = 'md', ...props }) {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-600/20 active:scale-[0.98] border border-transparent',
    secondary: 'bg-card text-card-foreground border border-border hover:bg-muted active:scale-[0.98] shadow-sm',
    ghost: 'hover:bg-muted active:scale-[0.98]',
    outline: 'border border-border hover:bg-muted active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm font-medium',
    lg: 'px-6 py-3 text-base font-medium',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}