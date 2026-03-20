import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-modified.png";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#workflow" },
  { label: "Testimonials", href: "#testimonials" },
];

interface NavbarProps {
  isVisible?: boolean;
}

const Navbar = ({ isVisible = true }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      aria-hidden={!isVisible}
      style={{ transitionDuration: "400ms" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 lg:px-24 transition-[opacity,background-color,padding,border-color,box-shadow,backdrop-filter]",
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
          : "py-3 sm:py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="https://mapmind.online" className="flex items-center gap-2.5 group shrink-0">
          <img
            src={logo}
            alt="MapMind logo"
            className="w-8 sm:w-9 h-8 sm:h-9 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-base sm:text-lg font-bold tracking-tight">MapMind</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Button size="sm" className="hidden md:inline-flex text-sm px-6" asChild>
          <a href="https://mapmind.online">Get Started</a>
        </Button>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 animate-in slide-in-from-top-2">
          <div className="py-4 px-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="w-full text-sm" asChild>
              <a href="https://mapmind.online">Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
