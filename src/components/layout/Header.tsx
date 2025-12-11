"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAVIGATION_LINKS, COMPANY_NAME } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 shadow-lg border-b border-orange-600/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-white rounded-lg p-2 shadow-md">
              <Image
                src="/apnaconst.png"
                alt="Apna Construction Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 80px, 96px"
              />
            </div>
            <div className="hidden lg:block">
              <div className="text-xl font-bold text-gray-900 drop-shadow-sm font-poppins">{COMPANY_NAME.split(" ")[0]} {COMPANY_NAME.split(" ")[1]}</div>
              <div className="text-xs text-gray-700 drop-shadow-sm font-inter">Construction & Home Solution</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg font-poppins font-semibold text-sm transition-all duration-300 group ${
                    isActive
                      ? "text-orange-600 bg-orange-50/80"
                      : "text-gray-800 hover:text-orange-600 hover:bg-orange-50/50"
                  }`}
                >
                  <span className="relative z-10 tracking-wide">{link.label}</span>
                  
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-600 to-amber-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-2.5 rounded-lg font-poppins font-bold text-sm hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-sm relative overflow-hidden group"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 p-2 drop-shadow-sm hover:bg-orange-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200/50 pt-4 backdrop-blur-sm bg-white/50 rounded-lg">
            <div className="flex flex-col space-y-2">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-poppins font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-orange-600 bg-orange-50 border-l-4 border-orange-600"
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50/80"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-3 rounded-lg font-poppins font-bold text-center mt-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
