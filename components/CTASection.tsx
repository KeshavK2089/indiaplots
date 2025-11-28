"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AuroraButton } from "./ui/AuroraButton";

export function CTASection() {
  return (
    <section className="px-4 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aurora-green via-aurora-blue to-aurora-pink p-px">
          <div className="relative rounded-3xl bg-midnight px-8 py-16 text-center sm:px-16 sm:py-20">
            {/* Glow Effects */}
            <div className="pointer-events-none absolute left-1/4 top-0 h-40 w-40 rounded-full bg-aurora-green/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-aurora-blue/30 blur-3xl" />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
              Ready to Find Your
              <br />
              <span className="text-aurora">Dream Plot?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative mx-auto mt-6 max-w-2xl text-lg text-gray-300"
            >
              Join thousands of Indians who trust IndiaPlots for their land
              investments. AI-verified listings, transparent pricing, and local
              insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <AuroraButton size="lg" className="flex items-center gap-2">
                Start Searching
                <ArrowRight className="h-5 w-5" />
              </AuroraButton>
              <AuroraButton variant="secondary" size="lg" className="text-white">
                List Your Property
              </AuroraButton>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}