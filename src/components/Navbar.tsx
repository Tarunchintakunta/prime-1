import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Courses", hasMenu: true },
  { label: "Categories", hasMenu: true },
  { label: "For Business", hasMenu: false },
  { label: "Pricing", hasMenu: false },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="px-6 sm:px-8 md:px-28 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12 md:gap-20">
          <a href="#" className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold tracking-tight">Primelearning</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
                {link.hasMenu && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
            Sign In
          </button>
          <button className="bg-foreground text-background rounded-lg text-sm font-semibold px-4 py-2 hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
          >
            <div className="px-6 sm:px-8 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="flex items-center justify-between text-base text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                  {link.hasMenu && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <button className="flex-1 text-sm text-muted-foreground py-2">
                  Sign In
                </button>
                <button className="flex-1 bg-foreground text-background rounded-lg text-sm font-semibold py-2">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
