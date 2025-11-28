"use client";

import { motion } from "framer-motion";
import { MapPin, Maximize2, Compass, Shield, Eye, Heart, Share2, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Plot, formatPrice, formatArea } from "@/data/plots";

interface PlotCardProps {
  plot: Plot;
  index?: number;
}

export function PlotCard({ plot, index = 0 }: PlotCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <Link href={`/plots/${plot.slug}`}>
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-100/50 ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-aurora-blue/20">
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={imageError ? fallbackImage : plot.images[0]}
              alt={plot.title}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Top Badges */}
            <div className="absolute left-3 right-3 top-3 flex items-start justify-between">
              <div className="flex flex-wrap gap-2">
                {plot.isFeatured && (
                  <span className="rounded-full bg-gradient-to-r from-aurora-green to-aurora-blue px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    Featured
                  </span>
                )}
                {plot.isVerified && (
                  <span className="flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-aurora-green shadow-lg backdrop-blur-sm">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified
                  </span>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLiked(!isLiked);
                  }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-colors ${
                    isLiked ? "bg-red-500 text-white" : "bg-white/95 text-gray-600 hover:text-red-500"
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault();
                    // Share functionality
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-gray-600 shadow-lg backdrop-blur-sm transition-colors hover:text-aurora-blue"
                >
                  <Share2 className="h-4 w-4" />
                </motion.button>
              </div>
            </div>

            {/* Price Tag */}
            <div className="absolute bottom-3 left-3">
              <div className="rounded-xl bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
                <span className="font-display text-xl font-bold text-gray-900">
                  {formatPrice(plot.price)}
                </span>
                <span className="ml-1 text-xs text-gray-500">
                  ({formatPrice(plot.pricePerSqft)}/sqft)
                </span>
              </div>
            </div>

            {/* Property Type Badge */}
            <div className="absolute bottom-3 right-3">
              <span className="rounded-lg bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                {plot.propertyType}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Title */}
            <h3 className="font-display text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-aurora-blue transition-colors">
              {plot.title}
            </h3>

            {/* Location */}
            <div className="mt-2 flex items-center gap-1.5 text-gray-500">
              <MapPin className="h-4 w-4 flex-shrink-0 text-aurora-blue" />
              <span className="text-sm truncate">
                {plot.location.address}, {plot.location.city}
              </span>
            </div>

            {/* Key Features */}
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Maximize2 className="h-4 w-4 text-gray-400" />
                <span>{formatArea(plot.area, plot.areaUnit)}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Compass className="h-4 w-4 text-gray-400" />
                <span>{plot.features.facing}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-gray-400" />
                <span>Vastu {plot.features.vastuScore}%</span>
              </div>
            </div>

            {/* Highlights Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {plot.highlights.slice(0, 3).map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aurora-blue/10 text-xs font-semibold text-aurora-blue">
                  {plot.seller.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-900">{plot.seller.name}</p>
                  <p className="text-xs text-gray-500">{plot.seller.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Eye className="h-3.5 w-3.5" />
                <span>{plot.views.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
