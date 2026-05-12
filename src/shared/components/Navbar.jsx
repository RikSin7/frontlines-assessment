import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
                src="/frontlines-logo.png" 
                alt="Frontlines Edutech" 
                className="w-8 h-8" 
            />
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-muted-foreground transition-colors duration-300">
            Frontlines Edutech
          </h1>
          </Link>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}   