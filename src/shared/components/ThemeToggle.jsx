import { Moon, Sun } from"lucide-react";
import { useTheme } from"../../features/theme/useTheme";


export default function ThemeToggle() {
 const { theme, toggleTheme } = useTheme();

 return (
 <button
 onClick={toggleTheme}
 className="rounded-lg border border-border bg-card p-2 text-foreground hover:bg-muted"
 >
 {theme ==="dark"? (
 <Sun size={18} />
 ) : (
 <Moon size={18} />
 )}
 </button>
 );
}