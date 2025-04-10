"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
    { title: "Gallery", path: "/gallery" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-[#062c37] text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 mr-2">
              <Image
                src="/logo_black.png"
                alt="True Home Electric Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wide">THE</span>
              <span
                className={`text-sm ${
                  isScrolled ? "text-[#062c37]" : "text-[#f2e2c4]"
                }`}
              >
                True Home Electric
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-[#062c37] hover:text-[#d19829]"
                    : "text-white hover:text-[#d19829]"
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                isScrolled
                  ? "bg-[#d19829] text-white hover:bg-[#c08820]"
                  : "bg-white text-[#062c37] hover:bg-[#f2e2c4]"
              }`}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`font-medium py-2 transition-colors ${
                    isScrolled
                      ? "text-[#062c37] hover:text-[#d19829]"
                      : "text-white hover:text-[#d19829]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`px-4 py-2 rounded-md font-medium text-center transition-all ${
                  isScrolled
                    ? "bg-[#d19829] text-white hover:bg-[#c08820]"
                    : "bg-white text-[#062c37] hover:bg-[#f2e2c4]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
