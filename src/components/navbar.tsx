import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { ScribbleUnderline } from "@/components/doodles";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--paper)]/95 px-5 py-2.5 transition-all ${
            scrolled ? "bg-[var(--paper)] shadow-sm" : "shadow-sm"
          }`}
        >
          {/* Brand Logo */}
          <Link to="/" className="group flex items-center gap-1.5">
            <span className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
              {profile.shortName}
              <span className="text-[var(--blue)]">.</span>
            </span>
          </Link>

          {/* Centered Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    active
                      ? "text-[var(--blue)] font-bold"
                      : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  }`}
                >
                  <span>{l.label}</span>
                  {active && (
                    <motion.div
                      layoutId="nav-active-doodle"
                      className="absolute -bottom-1.5 inset-x-0 flex justify-center"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    >
                      <ScribbleUnderline variant="single" height={8} color="var(--blue)" />
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* "Let's talk" Primary CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--blue)] px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Let's talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-lg border border-[var(--line)] bg-[var(--paper-deep)] p-1.5 text-[var(--ink)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 rounded-2xl border border-[var(--line)] bg-[var(--paper-deep)] p-3 shadow-md md:hidden"
            >
              {links.map((l) => {
                const active = location.pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[var(--sky-light)] text-[var(--blue)] font-bold border border-[var(--ink)]"
                        : "text-[var(--ink)] hover:bg-[var(--paper)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <div className="mt-2 pt-2 border-t border-[var(--line)]">
                <Link
                  to="/contact"
                  className="block w-full text-center rounded-xl border border-[var(--line)] bg-[var(--blue)] px-4 py-2 text-sm font-semibold text-white"
                >
                  Let's talk
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
