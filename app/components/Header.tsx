"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="font-bold text-xl tracking-tight text-green-800 shrink-0">
          <Link href="/" onClick={closeMobileMenu}>
            DZ CUTS <span className="font-light text-stone-600">Lawn Care</span>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-stone-600 hover:text-green-800 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CALL BUTTON (Visible on Desktop, and potentially on mobile or handled by menu) */}
        <div className="flex items-center gap-4">
          <a
            href="tel:3211469031"
            className="hidden md:block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full font-medium transition-colors text-sm"
          >
            Call or Text
          </a>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-stone-800 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-40 w-full h-screen bg-white md:hidden animate-in slide-in-from-top-5 fade-in duration-200 overflow-y-auto border-t border-stone-100 shadow-xl">
          <div className="flex flex-col p-4 space-y-6 text-center pb-20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-stone-800 hover:text-green-700"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-stone-100 w-full">
              <a
                href="tel:3211469031"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-bold text-lg transition-colors w-full"
              >
                Call or Text
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
