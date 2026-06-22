"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">

            {/* Logo Placeholder */}
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-xs text-white">
                Logo
              </span>
            </div>

            {/* Business Title */}
            <div>
              <h1 className="text-xl font-bold leading-tight">
                M&R Cleaning Services
              </h1>

              <p className="text-sm text-white/90">
                And Handyman
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="hover:text-gray-100 transition">
              Home
            </Link>

            <Link href="/services" className="hover:text-gray-100 transition">
              Services
            </Link>

            <Link href="/about" className="hover:text-gray-100 transition">
              About
            </Link>

            <Link href="/contact" className="hover:text-gray-100 transition">
              Contact Us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#38D1B4] px-4 pb-4">
          <div className="flex flex-col gap-4 font-medium">

            <Link href="/">
              Home
            </Link>

            <Link href="/services">
              Services
            </Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/contact">
              Contact Us
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}