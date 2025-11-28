"use client";

import { motion } from "framer-motion";
import { 
  MapPin, Maximize2, Compass, Shield, Eye, Heart, Share2, 
  BadgeCheck, Phone, MessageCircle, ChevronLeft, ChevronRight,
  Calendar, Users, Clock, FileCheck, Droplets, Mountain,
  Car, Train, Building2, GraduationCap, Stethoscope, ShoppingBag
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlotCard } from "@/components/PlotCard";
import { plots, getPlotBySlug, formatPrice, formatArea, Plot } from "@/data/plots";

export default function PlotDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const plot = getPlotBySlug(slug);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  if (!plot) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Plot not found</h1>
          <Link href="/plots" className="mt-4 text-aurora-blue hover:underline">
            ← Back to listings
          </Link>
        </div>
      </div>
    );
  }

  const similarPlots = plots
    .filter(p => p.id !== plot.id && p.location.city === plot.location.city)
    .slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % plot.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + plot.images.length) % plot.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-aurora-blue">Home</Link>
              <span>/</span>
              <Link href="/plots" className="hover:text-aurora-blue">Plots</Link>
              <span>/</span>
              <span className="text-gray-900">{plot.location.city}</span>
            </nav>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative aspect-[16/10]">
                  <img
                    src={plot.images[currentImageIndex]}
                    alt={plot.title}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {plot.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
                    {currentImageIndex + 1} / {plot.images.length}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute right-4 top-4 flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-colors ${
                        isLiked ? "bg-red-500 text-white" : "bg-white text-gray-600"
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg"
                    >
                      <Share2 className="h-5 w-5" />
                    </motion.button>
                  </div>

                  {/* Badges */}
                  <div className="absolute left-4 top-4 flex gap-2">
                    {plot.isFeatured && (
                      <span className="rounded-full bg-gradient-to-r from-aurora-green to-aurora-blue px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                        Featured
                      </span>
                    )}
                    {plot.isVerified && (
                      <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-aurora-green shadow-lg">
                        <BadgeCheck className="h-4 w-4" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                {plot.images.length > 1 && (
                  <div className="flex gap-2 p-4">
                    {plot.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-16 w-24 overflow-hidden rounded-lg transition-all ${
                          index === currentImageIndex 
                            ? "ring-2 ring-aurora-blue" 
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Title & Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 rounded-2xl bg-white p-6 shadow-lg"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full bg-aurora-blue/10 px-3 py-1 text-xs font-semibold text-aurora-blue">
                      {plot.propertyType}
                    </span>
                    <h1 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                      {plot.title}
                    </h1>
                    <div className="mt-3 flex items-center gap-2 text-gray-600">
                      <MapPin className="h-5 w-5 text-aurora-blue" />
                      <span>{plot.location.address}, {plot.location.city}, {plot.location.state} - {plot.location.pincode}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl font-bold text-aurora-blue">
                      {formatPrice(plot.price)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatPrice(plot.pricePerSqft)}/sqft
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="rounded-xl bg-gray-50 p-4 text-center">
                    <Maximize2 className="mx-auto h-6 w-6 text-aurora-blue" />
                    <div className="mt-2 font-semibold text-gray-900">
                      {formatArea(plot.area, plot.areaUnit)}
                    </div>
                    <div className="text-xs text-gray-500">Plot Area</div>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4 text-center">
                    <Compass className="mx-auto h-6 w-6 text-aurora-green" />
                    <div className="mt-2 font-semibold text-gray-900">{plot.features.facing}</div>
                    <div className="text-xs text-gray-500">Facing</div>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4 text-center">
                    <Shield className="mx-auto h-6 w-6 text-aurora-pink" />
                    <div className="mt-2 font-semibold text-gray-900">{plot.features.vastuScore}%</div>
                    <div className="text-xs text-gray-500">Vastu Score</div>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4 text-center">
                    <Car className="mx-auto h-6 w-6 text-purple-500" />
                    <div className="mt-2 font-semibold text-gray-900">{plot.features.roadWidth}</div>
                    <div className="text-xs text-gray-500">Road Width</div>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 rounded-2xl bg-white p-6 shadow-lg"
              >
                <h2 className="font-display text-xl font-semibold text-gray-900">About this Plot</h2>
                <p className="mt-4 leading-relaxed text-gray-600">{plot.description}</p>

                {/* Highlights */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900">Highlights</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {plot.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full bg-aurora-green/10 px-4 py-2 text-sm font-medium text-aurora-green"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Approvals & Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 grid gap-6 sm:grid-cols-2"
              >
                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-gray-900">
                    <FileCheck className="h-5 w-5 text-aurora-green" />
                    Approvals
                  </h3>
                  <div className="mt-4 space-y-3">
                    {plot.features.approvals.map((approval) => (
                      <div key={approval} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aurora-green/10">
                          <BadgeCheck className="h-4 w-4 text-aurora-green" />
                        </div>
                        <span className="text-gray-700">{approval}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-gray-900">
                    <Building2 className="h-5 w-5 text-aurora-blue" />
                    Amenities
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {plot.features.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-28 rounded-2xl bg-white p-6 shadow-lg"
              >
                {/* Seller Info */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-aurora-green to-aurora-blue text-xl font-bold text-white">
                    {plot.seller.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{plot.seller.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{plot.seller.type}</span>
                      {plot.seller.verified && (
                        <BadgeCheck className="h-4 w-4 text-aurora-green" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Usually responds {plot.seller.responseTime.toLowerCase()}</span>
                </div>

                {/* Contact Buttons */}
                <div className="mt-6 space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aurora-green to-aurora-blue py-4 font-semibold text-white shadow-lg"
                  >
                    <Phone className="h-5 w-5" />
                    Contact Seller
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-aurora-blue bg-white py-4 font-semibold text-aurora-blue"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Send Message
                  </motion.button>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-lg font-semibold text-gray-900">
                      <Eye className="h-4 w-4 text-gray-400" />
                      {plot.views.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-lg font-semibold text-gray-900">
                      <Users className="h-4 w-4 text-gray-400" />
                      {plot.inquiries}
                    </div>
                    <div className="text-xs text-gray-500">Inquiries</div>
                  </div>
                </div>

                {/* Posted Date */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Posted on {new Date(plot.postedDate).toLocaleDateString("en-IN", { 
                    day: "numeric", month: "long", year: "numeric" 
                  })}</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Similar Plots */}
          {similarPlots.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="font-display text-2xl font-bold text-gray-900">
                Similar Plots in {plot.location.city}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {similarPlots.map((p, index) => (
                  <PlotCard key={p.id} plot={p} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
