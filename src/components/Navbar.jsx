import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "../lib/util";
import { Menu, X } from "lucide-react"; // <-- required

const NavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
  { name: "Education"  , href: "/education"}
];

export const Navbar = () => {
  const [isScroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScroll
          ? "py-3 bg-background/80 backdrop-blur-md shadow-x5"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="/"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ritesh </span> Portfolio
          </span>
        </a>

        {/* desktop version */}
        <div className="hidden md:flex space-x-8">
          {NavItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-foreground/80 hover:text-primary px-4 py-2 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space">
            {NavItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-foreground/80 hover:text-primary px-4 py-2 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
