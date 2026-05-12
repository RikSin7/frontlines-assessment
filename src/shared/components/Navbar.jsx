import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <h1 className="text-xl font-bold">
          Frontlines Courses
        </h1>

        <ThemeToggle />
      </div>
    </header>
  );
}   