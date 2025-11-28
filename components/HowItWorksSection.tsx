"use client";

import { motion } from "framer-motion";
import { Upload, Sparkles, CheckCircle2, HandshakeIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Documents",
    description:
      "Take a photo of your land documents. Our AI reads Patta, Chitta, 7/12 extracts, and more.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Does the Work",
    description:
      "Automatic ownership verification, dimension extraction, and fair market value estimation.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Get Verified Listing",
    description:
      "Your plot goes live with a trust badge, 3D visualization, and AI-written descriptions.",
  },
  {
    number: "04",
    icon: HandshakeIcon,
    title: "Connect & Close",
    description:
      "Receive verified buyer inquiries. Schedule visits, negotiate, and close deals seamlessly.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="sell" className="bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-aurora-green">
            For Sellers
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            List Your Plot in Minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            No more tedious forms. Just upload your documents and photos—AI handles
            the rest.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-aurora-green/50 to-aurora-blue/50 lg:block" />
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Number Badge */}
                  <div className="mb-4 font-display text-5xl font-bold text-aurora">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl">
                    <step.icon className="h-8 w-8 text-aurora-blue" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}