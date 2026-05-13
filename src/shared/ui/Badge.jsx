import { cn } from '../utils/cn';

export function Badge({ children, className, variant = 'default' }) {
 const variants = {
 default: 'bg-muted text-foreground border border-border',
 blue: 'bg-primary-500/10 text-primary-600 border border-primary-500/20',
 green: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
 yellow: 'bg-amber-500/10 text-amber-600 border border-amber-500/20',
 };

 return (
 <span
 className={cn(
 'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ',
 variants[variant],
 className
 )}
 >
 {children}
 </span>
 );
}