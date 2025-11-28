"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Sparkles, ArrowRight, MapPin, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";

const quickFilters = [
  { label: "Bangalore", icon: MapPin },
  { label: "Chennai", icon: MapPin },
  { label: "Hyderabad", icon: MapPin },
  { label: "Under ₹50L", icon: TrendingUp },
  { label: "Vastu Compliant", icon: Shield },
];

const stats = [
  { value: "50K+", label: "Verified Plots", suffix: "" },
  { value: "28", label: "States Covered", suffix: "" },
  { value: "99", label: "Document Accuracy", suffix: "%" },
  { value: "24/7", label: "AI Support", suffix: "" },
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full border border-aurora-green/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -left-32 -bottom-32 h-[400px] w-[400px] rounded-full border border-aurora-blue/10"
        />
      </div>

      <motion.div style={{ opacity, scale }} className="relative z-10 w-full max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aurora-green/10 via-aurora-blue/10 to-aurora-pink/10 px-4 py-2 ring-1 ring-aurora-blue/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora-green" />
            </span>
            <span className="text-sm font-medium text-gray-700">
              AI-Powered Real Estate for India
            </span>
            <Sparkles className="h-4 w-4 text-aurora-blue" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Perfect
            <br />
            <span className="text-aurora">Plot of Land</span>
            <br />
            <span className="text-gray-400">Across India</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-500 sm:text-xl"
        >
          The intelligent way to buy and sell land. AI-verified documents,
          Vastu-compliant filters, and hyper-local insights in your language.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <div
            className={`relative mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white p-2 shadow-2xl transition-all duration-300 ${
              isFocused 
                ? "shadow-aurora-blue/20 ring-2 ring-aurora-blue/30" 
                : "shadow-gray-200/60"
            }`}
          >
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <Search className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors ${
                  isFocused ? "text-aurora-blue" : "text-gray-300"
                }`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder='Try "2 acre farm near Bangalore airport, under 80L"'
                  className="w-full rounded-xl bg-gray-50/80 py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 outline-none transition-all focus:bg-white"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aurora-green to-aurora-blue px-8 py-4 font-semibold text-white shadow-lg shadow-aurora-blue/25 transition-all hover:shadow-xl hover:shadow-aurora-blue/30"
              >
                Search
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Search suggestions hint */}
            <div className="mt-2 flex items-center gap-2 px-2 pb-1">
              <span className="text-xs text-gray-400">Popular:</span>
              <span className="text-xs text-aurora-blue cursor-pointer hover:underline">Farmland near highways</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-aurora-blue cursor-pointer hover:underline">DTCP approved plots</span>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {quickFilters.map((filter, index) => (
              <motion.button
                key={filter.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-md shadow-gray-100 ring-1 ring-gray-100 transition-all hover:shadow-lg hover:ring-aurora-blue/20"
              >
                <filter.icon className="h-3.5 w-3.5 text-gray-400" />
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="relative text-center"
            >
              <div className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                <span className="text-aurora">{stat.value}</span>
                <span className="text-aurora-blue">{stat.suffix}</span>
              </div>
              <div className="mt-2 text-sm font-medium text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-300"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
            <div className="h-10 w-6 rounded-full border-2 border-gray-200 p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-aurora-blue"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}