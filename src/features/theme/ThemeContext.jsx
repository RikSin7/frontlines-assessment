import {
 createContext,
 useEffect,
 useMemo,
 useState,
} from"react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
 const [theme, setTheme] = useState(() => {
 const savedTheme = localStorage.getItem("theme");
 return savedTheme ? savedTheme : window.matchMedia(
"(prefers-color-scheme: dark)"
 ).matches
 ?"dark"
 :"light";
 });

 useEffect(() => {
 const root = document.documentElement;
 if (theme === 'dark') root.classList.add('dark');
 else root.classList.remove('dark');

 localStorage.setItem('theme', theme);
 }, [theme]);

 const toggleTheme = () => setTheme((prev) => (prev ==="dark"?"light":"dark"));
 const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

 return (
 <ThemeContext.Provider value={value}>
 {children}
 </ThemeContext.Provider>
 );
}

export { ThemeContext };