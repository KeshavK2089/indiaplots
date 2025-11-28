"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Brain,
  Globe2,
  Compass,
  FileCheck,
  Mic2,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI Document Verification",
    description:
      "Upload your Patta, Chitta, or EC. Our AI instantly verifies ownership, extracts details, and flags discrepancies.",
    color: "aurora-green",
    stats: "2.5M+ documents verified",
  },
  {
    icon: Brain,
    title: "Smart Natural Search",
    description:
      'Just type "Plot near Bangalore airport, under 50L, facing East" and let AI find your perfect match.',
    color: "aurora-blue",
    stats: "98% search accuracy",
  },
  {
    icon: Compass,
    title: "Vastu Compliance Score",
    description:
      "Every listing includes a Vastu score. Filter by facing direction, plot shape, and traditional guidelines.",
    color: "aurora-pink",
    stats: "Traditional meets tech",
  },
  {
    icon: Globe2,
    title: "Hyper-Local Insights",
    description:
      "Water table depth, soil type, development potential, and upcoming infrastructure—all at your fingertips.",
    color: "purple-500",
    stats: "500+ data points",
  },
  {
    icon: FileCheck,
    title: "Instant Valuations",
    description:
      "AI analyzes nearby transactions, development trends, and market data to suggest fair market value.",
    color: "cyan-500",
    stats: "±5% price accuracy",
  },
  {
    icon: Mic2,
    title: "Vernacular Voice Search",
    description:
      "Search in Hindi, Tamil, Telugu, Kannada, or English. Just speak naturally and find plots your way.",
    color: "amber-500",
    stats: "12 languages supported",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai-tools" className="relative overflow-hidden px-4 py-24 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-aurora-blue/5 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-aurora-green/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-aurora-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-aurora-blue">
            AI-Powered Features
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Real Estate, <span className="text-aurora">Reimagined</span>
            <br />for India
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-500">
            Built from the ground up to understand Indian land records, languages,
            and cultural preferences. No Western platform can match this.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-lg shadow-gray-100/50 ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-aurora-blue/20">
                {/* Hover gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-aurora-green/5 via-transparent to-aurora-blue/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-${feature.color} to-${feature.color}/70 shadow-lg`}
                  style={{
                    background: feature.color === "aurora-green" 
                      ? "linear-gradient(135deg, #00C805 0%, #00a004 100%)"
                      : feature.color === "aurora-blue"
                      ? "linear-gradient(135deg, #006AFF 0%, #0055cc 100%)"
                      : feature.color === "aurora-pink"
                      ? "linear-gradient(135deg, #FF9F9F 0%, #ff7f7f 100%)"
                      : feature.color === "purple-500"
                      ? "linear-gradient(135deg, #8B5CF6 0%, #7c3aed 100%)"
                      : feature.color === "cyan-500"
                      ? "linear-gradient(135deg, #06B6D4 0%, #0891b2 100%)"
                      : "linear-gradient(135deg, #F59E0B 0%, #d97706 100%)"
                  }}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative font-display text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-gray-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats badge */}
                <div className="relative mt-6 flex items-center justify-between">
                  <span className="text-xs font-medium text-aurora-blue">
                    {feature.stats}
                  </span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-colors group-hover:bg-aurora-blue group-hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500">
            Want to see these features in action?{" "}
            <a href="#" className="font-medium text-aurora-blue hover:underline">
              Watch the demo →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}