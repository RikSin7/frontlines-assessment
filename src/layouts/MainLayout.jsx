import { Outlet } from "react-router-dom";

import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 transition-colors">
      
      <nav className="sticky top-0 z-50 w-full">
        <Navbar />
      </nav>

      <main className="flex-1 w-full">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <Outlet />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}