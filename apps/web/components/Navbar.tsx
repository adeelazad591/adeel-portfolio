"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";

const navLinks = [
  { href: "/#about", number: "01.", label: "About" },
  { href: "/#skills", number: "02.", label: "Skills" },
  { href: "/#experience", number: "03.", label: "Experience" },
  { href: "/#projects", number: "04.", label: "Projects" },
  { href: "/#recommendations", number: "05.", label: "Recommendations" },
  { href: "/#contact", number: "06.", label: "Contact" },
];

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid a hydration mismatch: the real theme is only known client-side.
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="bg-muted text-foreground hover:text-primary flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-colors"
    >
      {mounted && resolvedTheme === "dark" ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/#top"
          className="text-foreground text-xl font-extrabold tracking-tight"
        >
          Adeel<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-primary">{link.number}</span> {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <Link
            href="/resume"
            className="border-primary text-primary hover:bg-primary/10 hidden rounded-full border px-5 py-2 text-sm font-semibold transition-colors sm:inline-block"
          >
            Resume
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-foreground md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-border bg-background flex flex-col gap-1 border-t px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-muted-foreground hover:text-foreground py-2 text-sm transition-colors"
            >
              <span className="text-primary">{link.number}</span> {link.label}
            </Link>
          ))}
          <Link
            href="/resume"
            onClick={closeMenu}
            className="border-primary text-primary mt-2 rounded-full border px-5 py-2 text-center text-sm font-semibold"
          >
            Resume
          </Link>
        </nav>
      )}
    </header>
  );
};
