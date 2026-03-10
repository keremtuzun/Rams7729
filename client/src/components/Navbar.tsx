/* ============================================================
   RAMs 7729 Navbar – Dark Technical Command Center
   Sticky top nav with backdrop blur, gold accents, mobile menu
   ============================================================ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/robot", label: "Robot" },
  { href: "/engineering", label: "Engineering" },
  { href: "/competitions", label: "Competitions" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/outreach", label: "Outreach" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.14_0.008_260/0.95)] backdrop-blur-md border-b border-[oklch(0.28_0.008_260)]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded bg-[oklch(0.82_0.18_85)] flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[oklch(0.1_0.005_260)]" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-[oklch(0.82_0.18_85)] tracking-widest uppercase"
                style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "1.1rem" }}
              >
                RAMs
              </span>
              <span
                className="text-[oklch(0.6_0.01_260)] tracking-widest"
                style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem" }}
              >
                FRC #7729
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-[oklch(0.85_0.005_65)] ${
                  location === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-4 py-1.5 btn-gold rounded text-sm"
            >
              Join the Team
            </Link>
            <button
              className="lg:hidden p-2 text-[oklch(0.85_0.005_65)] hover:text-[oklch(0.82_0.18_85)] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[oklch(0.14_0.008_260/0.98)] backdrop-blur-md border-b border-[oklch(0.28_0.008_260)]">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2.5 rounded text-sm font-semibold uppercase tracking-wider transition-colors ${
                  location === link.href
                    ? "text-[oklch(0.82_0.18_85)] bg-[oklch(0.82_0.18_85/0.08)]"
                    : "text-[oklch(0.75_0.005_65)] hover:text-[oklch(0.82_0.18_85)] hover:bg-[oklch(0.82_0.18_85/0.05)]"
                }`}
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-2 btn-gold rounded text-sm text-center"
            >
              Join the Team
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
