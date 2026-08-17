"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

interface NavLinksProps {
  onClick?: () => void;
  showNavLinks: boolean;
}

const NavLinks = ({ onClick, showNavLinks }: NavLinksProps) => {
  const handleResumeDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // Create a download link for the resume PDF
    const link = document.createElement("a");
    link.href = "/cv/Adeel_Azad_Senior_Frontend_Developer_Resume.pdf"; // Place your PDF file in the public folder
    link.download = "Adeel_Azad_Senior_Frontend_Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (onClick) onClick();
  };

  return (
    <>
      {showNavLinks && (
        <>
          <li>
            <a
              href="#about"
              className="hover:text-theme text-white transition-colors duration-300"
              onClick={onClick}
            >
              <span className="text-theme mr-1 font-mono">01.</span>About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-theme text-white transition-colors duration-300"
              onClick={onClick}
            >
              <span className="text-theme mr-1 font-mono">02.</span>Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-theme text-white transition-colors duration-300"
              onClick={onClick}
            >
              <span className="text-theme mr-1 font-mono">03.</span>Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-theme text-white transition-colors duration-300"
              onClick={onClick}
            >
              <span className="text-theme mr-1 font-mono">04.</span>Contact
            </a>
          </li>
        </>
      )}
      <li>
        <button
          onClick={handleResumeDownload}
          className="border-theme text-theme hover:bg-theme/10 rounded border px-4 py-2 font-mono transition-all duration-300"
        >
          Resume
        </button>
      </li>
    </>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Check if we should show navigation links (hide on Projects and Project Detail pages)
  const showNavLinks = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-20 w-full transition-all duration-300 ${
          scrolled ? "bg-navy/90 py-4 shadow-lg backdrop-blur" : "py-6"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-8 md:px-4">
          <Link href="/" className="text-theme">
            <div className="relative">
              {/* Polygon shape with AA text */}
              <div className="bg-navy-lightest/30 flex h-11 w-11 rotate-45 transform items-center justify-center border-2 border-[#64ffda]">
                <span className="-rotate-45 transform text-xl font-extrabold">
                  A
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <NavLinks showNavLinks={showNavLinks} />
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="text-slate-light hover:text-theme relative z-[60] transition-colors md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative flex h-6 w-6 flex-col items-end justify-center space-y-1.5">
              <span className="block h-0.5 w-10 bg-cyan-300"></span>
              <span className="block h-0.5 w-8 bg-cyan-300"></span>
              <span className="block h-0.5 w-6 bg-cyan-300"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Blur Overlay - Now positioned outside header for full page coverage */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden"
          onClick={closeMenu}
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`bg-navy-light fixed right-0 top-0 z-50 h-screen w-3/4 transform shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed right-8 top-8 z-10 flex justify-end">
          <button
            onClick={closeMenu}
            className="text-slate-light hover:text-theme transition-colors"
          >
            <X size={34} />
          </button>
        </div>
        <nav className="fixed top-0 flex h-full w-full items-center justify-center p-4 md:static md:h-auto md:w-auto md:flex-none md:items-start md:justify-start">
          <ul className="flex flex-col items-center space-y-6">
            <NavLinks onClick={closeMenu} showNavLinks={showNavLinks} />
          </ul>
        </nav>
      </div>
    </>
  );
};
