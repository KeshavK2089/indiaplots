"use client";

import { motion } from "framer-motion";
import { Logo } from "./icons/Logo";

const footerLinks = {
  Product: ["Search Plots", "List Property", "AI Verification", "Pricing", "Mobile App"],
  Company: ["About Us", "Careers", "Press Kit", "Contact", "Partners"],
  Resources: ["Help Center", "Blog", "Guides", "API Docs", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-aurora-green/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-aurora-blue/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo size={40} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-gray-500">
              India&apos;s most trusted AI-powered platform for buying and selling land. 
              Verified listings, transparent pricing, and local insights.
            </p>
            
            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xs font-medium text-gray-500 transition-colors hover:bg-gradient-to-r hover:from-aurora-green hover:to-aurora-blue hover:text-white"
                >
                  {social.name[0]}
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-aurora-green" />
                <span className="text-xs font-medium text-gray-600">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-aurora-blue" />
                <span className="text-xs font-medium text-gray-600">RERA Compliant</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-900">
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-aurora-blue"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-aurora-green/5 via-aurora-blue/5 to-aurora-pink/5 p-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="font-display text-lg font-semibold text-gray-900">
                Stay updated with IndiaPlots
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Get the latest listings and market insights delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full gap-3 sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-aurora-blue focus:ring-2 focus:ring-aurora-blue/20 sm:w-64"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0 rounded-xl bg-gradient-to-r from-aurora-green to-aurora-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-aurora-blue/20"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} IndiaPlots Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-400">Made with 🇮🇳 in India</span>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-xs text-gray-400">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}