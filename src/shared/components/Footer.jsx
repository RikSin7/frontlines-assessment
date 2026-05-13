export default function Footer() {
 return (
 <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
 <div className="max-w-7xl mx-auto px-6 py-8">
 <div className="flex flex-col md:flex-row justify-between items-center gap-4">
 <div className="text-center md:text-left flex items-center gap-2">
 <p className="text-sm font-medium text-muted-foreground">
 © {new Date().getFullYear()} Frontlines Edutech. All rights reserved.
 </p>
 </div>
 <div className="flex space-x-6 text-sm font-medium">
 <a href="#"className="text-muted-foreground hover:text-primary-600">
 Privacy Policy
 </a>
 <a href="#"className="text-muted-foreground hover:text-primary-600">
 Terms of Service
 </a>
 <a href="#"className="text-muted-foreground hover:text-primary-600">
 Contact
 </a>
 </div>
 </div>
 </div>
 </footer>
 );
}
