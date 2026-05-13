import { cn } from '../utils/cn';

export function Card({ children, className, ...props }) {
 return (
 <div
 className={cn(
 'bg-card text-card-foreground rounded-2xl border border-border shadow-sm hover:shadow-xl hover:shadow-muted-foreground/10 hover:-translate-y-1 ',
 className
 )}
 {...props}
 >
 {children}
 </div>
 );
}