export interface Plot {
  id: string;
  title: string;
  slug: string;
  price: number;
  pricePerSqft: number;
  area: number;
  areaUnit: "sqft" | "cents" | "acres" | "guntha";
  location: {
    address: string;
    city: string;
    state: string;
    pincode: string;
    coordinates: { lat: number; lng: number };
  };
  features: {
    facing: "North" | "South" | "East" | "West" | "North-East" | "North-West" | "South-East" | "South-West";
    roadWidth: string;
    approvals: string[];
    amenities: string[];
    vastuScore: number;
  };
  seller: {
    name: string;
    type: "Owner" | "Agent" | "Builder";
    verified: boolean;
    responseTime: string;
  };
  images: string[];
  description: string;
  highlights: string[];
  postedDate: string;
  views: number;
  inquiries: number;
  isFeatured: boolean;
  isVerified: boolean;
  propertyType: "Residential" | "Agricultural" | "Commercial" | "Industrial" | "Farmland";
}

export const plots: Plot[] = [
  {
    id: "1",
    title: "Premium DTCP Approved Plot in Sarjapur Road",
    slug: "premium-dtcp-plot-sarjapur-road",
    price: 4500000,
    pricePerSqft: 3750,
    area: 1200,
    areaUnit: "sqft",
    location: {
      address: "Near Wipro Corporate Office, Sarjapur Road",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560035",
      coordinates: { lat: 12.9082, lng: 77.6849 },
    },
    features: {
      facing: "East",
      roadWidth: "40 feet",
      approvals: ["DTCP", "RERA", "Panchayat"],
      amenities: ["Gated Community", "24/7 Security", "Underground Electricity", "Water Connection", "Park"],
      vastuScore: 92,
    },
    seller: {
      name: "Ramesh Properties",
      type: "Agent",
      verified: true,
      responseTime: "Within 1 hour",
    },
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&h=600&fit=crop",
    ],
    description: "Excellent investment opportunity in the rapidly developing Sarjapur Road corridor. This DTCP approved plot comes with all necessary approvals and is located in a gated community with premium amenities. Perfect for building your dream home or investment purposes.",
    highlights: ["Corner Plot", "Near IT Corridor", "Metro Connectivity Soon", "Schools Nearby"],
    postedDate: "2025-05-20",
    views: 1250,
    inquiries: 45,
    isFeatured: true,
    isVerified: true,
    propertyType: "Residential",
  },
  {
    id: "2",
    title: "5 Acre Agricultural Land with Mango Orchard",
    slug: "5-acre-agricultural-land-mango-orchard",
    price: 12500000,
    pricePerSqft: 57,
    area: 5,
    areaUnit: "acres",
    location: {
      address: "Kanakapura Road, Near Bannerghatta",
      city: "Bangalore Rural",
      state: "Karnataka",
      pincode: "560083",
      coordinates: { lat: 12.7892, lng: 77.5674 },
    },
    features: {
      facing: "North-East",
      roadWidth: "20 feet",
      approvals: ["Panchayat", "Agriculture Conversion Available"],
      amenities: ["Bore Well", "Electricity", "Compound Wall", "Mango Trees (200+)", "Caretaker Shed"],
      vastuScore: 88,
    },
    seller: {
      name: "Venkatesh Kumar",
      type: "Owner",
      verified: true,
      responseTime: "Within 24 hours",
    },
    images: [
      "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
    ],
    description: "Beautiful 5-acre agricultural land with a well-established mango orchard of 200+ trees. The property has excellent water supply with 2 bore wells and is fully fenced. Ideal for farming, weekend getaway, or farmhouse construction.",
    highlights: ["200+ Mango Trees", "2 Bore Wells", "Fully Fenced", "20 mins from NICE Road"],
    postedDate: "2025-05-18",
    views: 890,
    inquiries: 28,
    isFeatured: true,
    isVerified: true,
    propertyType: "Agricultural",
  },
  {
    id: "3",
    title: "Commercial Plot on OMR IT Expressway",
    slug: "commercial-plot-omr-expressway",
    price: 25000000,
    pricePerSqft: 12500,
    area: 2000,
    areaUnit: "sqft",
    location: {
      address: "OMR Phase 2, Near Siruseri IT Park",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "603103",
      coordinates: { lat: 12.8231, lng: 80.2198 },
    },
    features: {
      facing: "South",
      roadWidth: "100 feet (OMR Main Road)",
      approvals: ["CMDA", "RERA", "Commercial Zoning"],
      amenities: ["Main Road Frontage", "High Visibility", "All Utilities Available"],
      vastuScore: 78,
    },
    seller: {
      name: "Chennai Realtors Pvt Ltd",
      type: "Agent",
      verified: true,
      responseTime: "Within 2 hours",
    },
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    ],
    description: "Prime commercial plot on the Old Mahabalipuram Road (OMR) IT Expressway with 100 feet road frontage. Located near major IT parks including Siruseri and Navalur. Ideal for IT office building, showroom, or commercial complex.",
    highlights: ["100ft Road Frontage", "Near IT Parks", "High ROI Potential", "Ready for Construction"],
    postedDate: "2025-05-15",
    views: 2100,
    inquiries: 67,
    isFeatured: true,
    isVerified: true,
    propertyType: "Commercial",
  },
  {
    id: "4",
    title: "Budget-Friendly Plot in Hosur",
    slug: "budget-friendly-plot-hosur",
    price: 1800000,
    pricePerSqft: 2000,
    area: 900,
    areaUnit: "sqft",
    location: {
      address: "SIPCOT Area, Hosur",
      city: "Hosur",
      state: "Tamil Nadu",
      pincode: "635126",
      coordinates: { lat: 12.7364, lng: 77.8253 },
    },
    features: {
      facing: "West",
      roadWidth: "30 feet",
      approvals: ["DTCP", "Panchayat"],
      amenities: ["Street Lights", "Drainage", "Water Supply"],
      vastuScore: 75,
    },
    seller: {
      name: "Lakshmi Devi",
      type: "Owner",
      verified: true,
      responseTime: "Within 4 hours",
    },
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    ],
    description: "Affordable DTCP approved residential plot in the upcoming SIPCOT industrial area of Hosur. With multiple factories and companies setting up here, this is an excellent investment opportunity for rental income or self-use.",
    highlights: ["Under 20L", "Near Industrial Area", "Good Rental Demand", "40 mins to Electronic City"],
    postedDate: "2025-05-22",
    views: 650,
    inquiries: 22,
    isFeatured: false,
    isVerified: true,
    propertyType: "Residential",
  },
  {
    id: "5",
    title: "Vastu-Perfect Corner Plot in Kompally",
    slug: "vastu-perfect-corner-plot-kompally",
    price: 6200000,
    pricePerSqft: 4133,
    area: 1500,
    areaUnit: "sqft",
    location: {
      address: "Kompally, Near ORR Exit",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500014",
      coordinates: { lat: 17.5326, lng: 78.4871 },
    },
    features: {
      facing: "North-East",
      roadWidth: "40 feet + 30 feet (Corner)",
      approvals: ["HMDA", "RERA"],
      amenities: ["Gated Community", "Club House", "Swimming Pool", "Children's Play Area", "Temple"],
      vastuScore: 98,
    },
    seller: {
      name: "Sai Constructions",
      type: "Builder",
      verified: true,
      responseTime: "Immediate",
    },
    images: [
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    ],
    description: "Rare North-East facing corner plot with 98% Vastu compliance score. Located in a premium gated community with world-class amenities. The community has its own temple, club house with swimming pool, and 24/7 security.",
    highlights: ["98% Vastu Score", "Corner Plot", "Premium Gated Community", "Near ORR"],
    postedDate: "2025-05-19",
    views: 1890,
    inquiries: 56,
    isFeatured: true,
    isVerified: true,
    propertyType: "Residential",
  },
  {
    id: "6",
    title: "10 Guntha Farmland near Pune",
    slug: "10-guntha-farmland-pune",
    price: 3500000,
    pricePerSqft: 32,
    area: 10,
    areaUnit: "guntha",
    location: {
      address: "Mulshi Road, Near Lavasa",
      city: "Pune",
      state: "Maharashtra",
      pincode: "412108",
      coordinates: { lat: 18.4088, lng: 73.5068 },
    },
    features: {
      facing: "South-East",
      roadWidth: "15 feet",
      approvals: ["7/12 Clear", "NA Possible"],
      amenities: ["Natural Stream", "Mountain View", "Fruit Trees"],
      vastuScore: 82,
    },
    seller: {
      name: "Patil Family Trust",
      type: "Owner",
      verified: true,
      responseTime: "Within 24 hours",
    },
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&h=600&fit=crop",
    ],
    description: "Scenic 10 guntha farmland in the picturesque Mulshi region near Pune. The property features a natural stream, stunning mountain views, and existing fruit trees. Perfect for a weekend farmhouse or eco-retreat.",
    highlights: ["Mountain Views", "Natural Stream", "Near Lavasa", "Peaceful Location"],
    postedDate: "2025-05-21",
    views: 720,
    inquiries: 18,
    isFeatured: false,
    isVerified: true,
    propertyType: "Farmland",
  },
  {
    id: "7",
    title: "Industrial Plot in Sri City",
    slug: "industrial-plot-sri-city",
    price: 45000000,
    pricePerSqft: 1800,
    area: 25000,
    areaUnit: "sqft",
    location: {
      address: "Sri City Industrial Zone",
      city: "Sri City",
      state: "Andhra Pradesh",
      pincode: "517646",
      coordinates: { lat: 13.5531, lng: 80.0108 },
    },
    features: {
      facing: "North",
      roadWidth: "60 feet",
      approvals: ["Industrial Zoning", "Environmental Clearance", "APIIC"],
      amenities: ["Power Substation Access", "Water Supply", "Effluent Treatment Nearby", "Rail Connectivity"],
      vastuScore: 70,
    },
    seller: {
      name: "Industrial Lands India",
      type: "Agent",
      verified: true,
      responseTime: "Within 2 hours",
    },
    images: [
      "https://images.unsplash.com/photo-1553246969-7dcb4259a87e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    ],
    description: "Large industrial plot in the prestigious Sri City integrated business city. All clearances in place including environmental. Near Kia Motors plant with excellent road and rail connectivity to Chennai and Bangalore.",
    highlights: ["All Clearances Ready", "Near Kia Motors", "Rail Connectivity", "SEZ Benefits"],
    postedDate: "2025-05-10",
    views: 430,
    inquiries: 12,
    isFeatured: false,
    isVerified: true,
    propertyType: "Industrial",
  },
  {
    id: "8",
    title: "Sea-Facing Plot in ECR Chennai",
    slug: "sea-facing-plot-ecr-chennai",
    price: 35000000,
    pricePerSqft: 17500,
    area: 2000,
    areaUnit: "sqft",
    location: {
      address: "ECR, Near Mahabalipuram",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "603104",
      coordinates: { lat: 12.6269, lng: 80.1929 },
    },
    features: {
      facing: "East",
      roadWidth: "ECR Main Road",
      approvals: ["CMDA", "CRZ Compliant"],
      amenities: ["Beach Access", "Sea View", "ECR Frontage"],
      vastuScore: 95,
    },
    seller: {
      name: "Coastal Properties Chennai",
      type: "Agent",
      verified: true,
      responseTime: "Within 1 hour",
    },
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
    ],
    description: "Rare sea-facing plot on the East Coast Road with direct beach access. CRZ compliant and perfect for a beach house or boutique resort. Stunning sunrise views and cool sea breeze year-round.",
    highlights: ["Sea Facing", "Beach Access", "CRZ Compliant", "Sunrise Views"],
    postedDate: "2025-05-08",
    views: 3200,
    inquiries: 89,
    isFeatured: true,
    isVerified: true,
    propertyType: "Residential",
  },
];

// Helper functions
export function formatPrice(price: number): string {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} L`;
  }
  return `₹${price.toLocaleString("en-IN")}`;
}

export function formatArea(area: number, unit: string): string {
  return `${area.toLocaleString("en-IN")} ${unit}`;
}

export function getPlotBySlug(slug: string): Plot | undefined {
  return plots.find((plot) => plot.slug === slug);
}

export function getPlotById(id: string): Plot | undefined {
  return plots.find((plot) => plot.id === id);
}

export function getFeaturedPlots(): Plot[] {
  return plots.filter((plot) => plot.isFeatured);
}

export function filterPlots(filters: {
  city?: string;
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  facing?: string;
}): Plot[] {
  return plots.filter((plot) => {
    if (filters.city && plot.location.city.toLowerCase() !== filters.city.toLowerCase()) {
      return false;
    }
    if (filters.propertyType && plot.propertyType !== filters.propertyType) {
      return false;
    }
    if (filters.minPrice && plot.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && plot.price > filters.maxPrice) {
      return false;
    }
    if (filters.facing && plot.features.facing !== filters.facing) {
      return false;
    }
    return true;
  });
}
