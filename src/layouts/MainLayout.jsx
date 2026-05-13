import { Outlet } from"react-router-dom";

import Navbar from"../shared/components/Navbar";
import Footer from"../shared/components/Footer";

export default function MainLayout() {
 return (
 <div className="min-h-screen flex flex-col">
 
 <Navbar />

 <main className="flex-1 w-full">
 <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
 <Outlet />
 </div>
 </main>

 <Footer />
 </div>
 );
}