"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./icons/Logo";

const navLinks = [
  { 
    name: "Buy", 
    href: "#buy",
    submenu: ["Residential Plots", "Agricultural Land", "Commercial Sites", "Farmhouses"]
  },
  { 
    name: "Sell", 
    href: "#sell",
    submenu: ["List Your Property", "Get Valuation", "Seller Dashboard"]
  },
  { 
    name: "AI Tools", 
    href: "#ai-tools",
    submenu: ["Document Verification", "Price Estimator", "Vastu Analysis", "Legal Check"]
  },
  { name: "About", href: "#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0.7)", "rgba(255,255,255,0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        style={{ backgroundColor: navBackground }}
        className={`mx-auto mt-4 max-w-7xl rounded-2xl backdrop-blur-xl transition-shadow duration-300 ${
          hasScrolled ? "shadow-lg shadow-gray-200/50" : "shadow-md shadow-gray-100/50"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <Logo size={36} />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={link.href}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === link.name ? "rotate-180" : ""
                    }`} />
                  )}
                </motion.a>

                {/* Dropdown Menu */}
                {link.submenu && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-xl bg-white p-2 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100"
                  >
                    {link.submenu.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gradient-to-r hover:from-aurora-green/5 hover:to-aurora-blue/5 hover:text-gray-900"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              Log in
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 10px 40px rgba(0, 106, 255, 0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-aurora-green to-aurora-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-aurora-blue/20 transition-all"
            >
              <span className="relative z-10">List Your Plot</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2.5 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-100 px-6 pb-6 lg:hidden"
          >
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="my-3 border-gray-100" />
              <button className="rounded-lg px-4 py-3 text-left text-base font-medium text-gray-700 transition-colors hover:bg-gray-50">
                Log in
              </button>
              <button className="mt-2 rounded-xl bg-gradient-to-r from-aurora-green to-aurora-blue px-4 py-3 text-center text-base font-semibold text-white shadow-lg">
                List Your Plot
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}