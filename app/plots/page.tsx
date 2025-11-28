"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, SlidersHorizontal, X, MapPin, ChevronDown, 
  Grid3X3, List, ArrowUpDown, Sparkles 
} from "lucide-react";
import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlotCard } from "@/components/PlotCard";
import { plots, filterPlots, Plot } from "@/data/plots";

const cities = ["All Cities", "Bangalore", "Chennai", "Hyderabad", "Pune", "Hosur", "Sri City"];
const propertyTypes = ["All Types", "Residential", "Agricultural", "Commercial", "Industrial", "Farmland"];
const facingOptions = ["Any Facing", "North", "South", "East", "West", "North-East", "North-West", "South-East", "South-West"];
const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under ₹25 Lakhs", min: 0, max: 2500000 },
  { label: "₹25L - ₹50L", min: 2500000, max: 5000000 },
  { label: "₹50L - ₹1 Cr", min: 5000000, max: 10000000 },
  { label: "₹1 Cr - ₹5 Cr", min: 10000000, max: 50000000 },
  { label: "Above ₹5 Cr", min: 50000000, max: Infinity },
];
const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Most Popular", value: "popular" },
  { label: "Vastu Score", value: "vastu" },
];

export default function PlotsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedFacing, setSelectedFacing] = useState("Any Facing");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort plots
  const filteredPlots = useMemo(() => {
    let result = plots.filter((plot) => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          plot.title.toLowerCase().includes(query) ||
          plot.location.city.toLowerCase().includes(query) ||
          plot.location.address.toLowerCase().includes(query) ||
          plot.description.toLowerCase().includes(query) ||
          plot.highlights.some(h => h.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }
      
      // City filter
      if (selectedCity !== "All Cities" && plot.location.city !== selectedCity) {
        return false;
      }
      
      // Property type filter
      if (selectedType !== "All Types" && plot.propertyType !== selectedType) {
        return false;
      }
      
      // Facing filter
      if (selectedFacing !== "Any Facing" && plot.features.facing !== selectedFacing) {
        return false;
      }
      
      // Price range filter
      if (plot.price < selectedPriceRange.min || plot.price > selectedPriceRange.max) {
        return false;
      }
      
      return true;
    });

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        result.sort((a, b) => b.views - a.views);
        break;
      case "vastu":
        result.sort((a, b) => b.features.vastuScore - a.features.vastuScore);
        break;
      case "newest":
      default:
        result.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
    }

    return result;
  }, [searchQuery, selectedCity, selectedType, selectedFacing, selectedPriceRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCity("All Cities");
    setSelectedType("All Types");
    setSelectedFacing("Any Facing");
    setSelectedPriceRange(priceRanges[0]);
  };

  const hasActiveFilters = 
    searchQuery || 
    selectedCity !== "All Cities" || 
    selectedType !== "All Types" || 
    selectedFacing !== "Any Facing" || 
    selectedPriceRange !== priceRanges[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              Explore Plots
            </h1>
            <p className="mt-2 text-gray-500">
              {filteredPlots.length} plots available across India
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 rounded-2xl bg-white p-4 shadow-lg shadow-gray-100/50 ring-1 ring-gray-100"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by location, title, or keywords..."
                  className="w-full rounded-xl bg-gray-50 py-3 pl-12 pr-4 text-gray-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-aurora-blue/20"
                />
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap items-center gap-3">
                {/* City Dropdown */}
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-sm font-medium text-gray-700 outline-none transition-all hover:border-aurora-blue focus:border-aurora-blue focus:ring-2 focus:ring-aurora-blue/20"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Property Type Dropdown */}
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-sm font-medium text-gray-700 outline-none transition-all hover:border-aurora-blue focus:border-aurora-blue focus:ring-2 focus:ring-aurora-blue/20"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>

                {/* More Filters Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                    showFilters 
                      ? "border-aurora-blue bg-aurora-blue/5 text-aurora-blue" 
                      : "border-gray-200 bg-white text-gray-700 hover:border-aurora-blue"
                  }`}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  More Filters
                </motion.button>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={clearFilters}
                    className="flex items-center gap-1.5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
                  >
                    <X className="h-4 w-4" />
                    Clear
                  </motion.button>
                )}
              </div>
            </div>

            {/* Expanded Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 border-t border-gray-100 pt-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Price Range */}
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Price Range
                      </label>
                      <select
                        value={selectedPriceRange.label}
                        onChange={(e) => {
                          const range = priceRanges.find(r => r.label === e.target.value);
                          if (range) setSelectedPriceRange(range);
                        }}
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-700 outline-none focus:border-aurora-blue focus:ring-2 focus:ring-aurora-blue/20"
                      >
                        {priceRanges.map((range) => (
                          <option key={range.label} value={range.label}>{range.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Facing */}
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Facing Direction
                      </label>
                      <select
                        value={selectedFacing}
                        onChange={(e) => setSelectedFacing(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-700 outline-none focus:border-aurora-blue focus:ring-2 focus:ring-aurora-blue/20"
                      >
                        {facingOptions.map((facing) => (
                          <option key={facing} value={facing}>{facing}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Results Header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                Showing <span className="font-semibold text-gray-900">{filteredPlots.length}</span> results
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm text-gray-700 outline-none focus:border-aurora-blue"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <ArrowUpDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>

              {/* View Toggle */}
              <div className="flex rounded-lg border border-gray-200 bg-white p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-md p-2 transition-colors ${
                    viewMode === "grid" ? "bg-aurora-blue text-white" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-md p-2 transition-colors ${
                    viewMode === "list" ? "bg-aurora-blue text-white" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          {filteredPlots.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "sm:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {filteredPlots.map((plot, index) => (
                <PlotCard key={plot.id} plot={plot} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center rounded-2xl bg-white py-20 text-center shadow-lg"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900">No plots found</h3>
              <p className="mt-2 max-w-md text-gray-500">
                Try adjusting your filters or search query to find more plots.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-aurora-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}

          {/* AI Search Suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 rounded-2xl bg-gradient-to-r from-aurora-green/10 via-aurora-blue/10 to-aurora-pink/10 p-8 text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
              <Sparkles className="h-6 w-6 text-aurora-blue" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-gray-900">
              Can&apos;t find what you&apos;re looking for?
            </h3>
            <p className="mt-2 text-gray-600">
              Try our AI-powered search. Just describe your dream plot in natural language.
            </p>
            <button className="mt-6 rounded-xl bg-gradient-to-r from-aurora-green to-aurora-blue px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl">
              Try AI Search
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
