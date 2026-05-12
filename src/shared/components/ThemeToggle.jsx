import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../features/theme/useTheme";


export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-neutral-200 bg-white p-2 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}