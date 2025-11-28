import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IndiaPlots - AI-Powered Real Estate Platform for India",
  description:
    "Find your perfect plot of land across India. AI-verified documents, Vastu-compliant filters, instant valuations, and hyper-local insights in 12 Indian languages.",
  keywords: [
    "real estate India",
    "land for sale",
    "plots India",
    "agricultural land",
    "DTCP approved plots",
    "Vastu compliant land",
    "AI real estate",
    "property verification",
    "Bangalore plots",
    "Chennai land",
    "Hyderabad plots",
  ],
  authors: [{ name: "IndiaPlots Technologies" }],
  creator: "IndiaPlots",
  publisher: "IndiaPlots Technologies Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://indiaplots.com",
    siteName: "IndiaPlots",
    title: "IndiaPlots - AI-Powered Real Estate Platform for India",
    description:
      "Find your perfect plot of land across India. AI-verified documents and Vastu-compliant filters.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IndiaPlots - AI-Powered Real Estate Platform",
    description:
      "Find your perfect plot of land across India with AI-powered search and verification.",
    creator: "@indiaplots",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#006AFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}