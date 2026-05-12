import { cn } from '../utils/cn';

export function Select({ className, options = [], placeholder = 'Select...', value, onChange, ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={cn(
        'w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm cursor-pointer',
        'focus:border-ring focus:outline-none focus:ring-4 focus:ring-ring/10 transition-all duration-200',
        className
      )}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}