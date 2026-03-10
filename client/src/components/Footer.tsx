/* ============================================================
   RAMs 7729 Footer – Dark Technical Command Center
   ============================================================ */

import { Link } from "wouter";
import { Github, Instagram, Youtube, Zap, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.11_0.008_260)] border-t border-[oklch(0.28_0.008_260)]">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded bg-[oklch(0.82_0.18_85)] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[oklch(0.1_0.005_260)]" />
              </div>
              <div>
                <div
                  className="font-bold text-[oklch(0.82_0.18_85)] tracking-widest uppercase leading-none"
                  style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "1.1rem" }}
                >
                  RAMs 7729
                </div>
                <div
                  className="text-[oklch(0.5_0.01_260)] tracking-widest"
                  style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem" }}
                >
                  FIRST Robotics Competition
                </div>
              </div>
            </div>
            <p className="text-[oklch(0.6_0.01_260)] text-sm leading-relaxed max-w-xs">
              Student-driven robotics team from Koç School, Istanbul, Turkey. Designing, building,
              and programming competition robots since 2019.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com/rams7729"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-[oklch(0.28_0.008_260)] flex items-center justify-center text-[oklch(0.6_0.01_260)] hover:text-[oklch(0.82_0.18_85)] hover:border-[oklch(0.82_0.18_85/0.5)] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-[oklch(0.28_0.008_260)] flex items-center justify-center text-[oklch(0.6_0.01_260)] hover:text-[oklch(0.82_0.18_85)] hover:border-[oklch(0.82_0.18_85/0.5)] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/rams-7729"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-[oklch(0.28_0.008_260)] flex items-center justify-center text-[oklch(0.6_0.01_260)] hover:text-[oklch(0.82_0.18_85)] hover:border-[oklch(0.82_0.18_85/0.5)] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[oklch(0.82_0.18_85)] text-xs tracking-[0.15em] uppercase mb-4"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About the Team" },
                { href: "/robot", label: "Our Robot" },
                { href: "/engineering", label: "Engineering" },
                { href: "/competitions", label: "Competitions" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[oklch(0.6_0.01_260)] hover:text-[oklch(0.82_0.18_85)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4
              className="text-[oklch(0.82_0.18_85)] text-xs tracking-[0.15em] uppercase mb-4"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Community
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/sponsors", label: "Sponsors" },
                { href: "/outreach", label: "Outreach" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[oklch(0.6_0.01_260)] hover:text-[oklch(0.82_0.18_85)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.thebluealliance.com/team/7729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[oklch(0.6_0.01_260)] hover:text-[oklch(0.82_0.18_85)] text-sm transition-colors flex items-center gap-1"
                >
                  The Blue Alliance <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.firstinspires.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[oklch(0.6_0.01_260)] hover:text-[oklch(0.82_0.18_85)] text-sm transition-colors flex items-center gap-1"
                >
                  FIRST Inspires <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[oklch(0.22_0.008_260)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[oklch(0.45_0.008_260)] text-xs"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            © 2025 RAMs 7729 · Koç School · Istanbul, Türkiye
          </p>
          <p
            className="text-[oklch(0.45_0.008_260)] text-xs"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            FIRST® Robotics Competition Team #7729
          </p>
        </div>
      </div>
    </footer>
  );
}
