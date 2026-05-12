import { cn } from '../utils/cn';

export function Select({ className, options = [], placeholder = 'Select...', value, onChange, ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={cn(
        'rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900',
        'focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500',
        'dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100',
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