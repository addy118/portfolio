"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Showcase", href: "/#showcase" },
  { name: "Performance", href: "/#performance" },
  { name: "Blog", href: "/blog" },
  { name: "Installation", href: "/#installation" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        window.location.href = href;
        return;
      }
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-2 right-2 sm:left-4 sm:right-4 md:left-8 md:right-8 lg:left-20 lg:right-20 font-mono z-50 rounded-lg m-2 sm:m-4 my-4 sm:my-6 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#00A6ED]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-lg sm:text-xl font-bold text-[#00A6ED]"
            >
              Aditya Kirti
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }
                  }}
                  className="text-[#F1F0EA] hover:text-[#00A6ED] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex items-baseline space-x-2">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }
                  }}
                  className="text-[#F1F0EA] hover:text-[#00A6ED] px-1 py-1 text-xs font-medium transition-colors duration-200"
                >
                  {item.name === "Installation" ? "Contact" : item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
