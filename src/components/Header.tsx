import { motion } from "motion/react";
import { Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-8 mix-blend-difference"
    >
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/zero_station_logo.png" 
            alt="Zero Station Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-display font-black tracking-tighter uppercase hidden sm:block">
            Zero <span className="font-light">Station</span>
          </span>
        </a>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#" className="hover:opacity-60 transition-opacity">Shows</a>
        <a href="#" className="hover:opacity-60 transition-opacity">News</a>
        <a href="#" className="hover:opacity-60 transition-opacity">About</a>
        <a href="#" className="hover:opacity-60 transition-opacity">Contact</a>
      </nav>

      <div className="flex items-center gap-6">
        <button className="hover:opacity-60 transition-opacity">
          <Search size={20} />
        </button>
        <button className="hover:opacity-60 transition-opacity">
          <Menu size={20} />
        </button>
      </div>
    </motion.header>
  );
}
