import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types for content management
export interface ActivityData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  fullDescription: string;
  location: string;
  duration: string;
  impactMetrics: {
    label: string;
    value: string;
    unit: string;
    description: string;
  }[];
}

export interface PillarData {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  objectives: string[];
  achievements: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  colorVariant: "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5" | "custom-purple" | "custom-green";
}

export interface ImpactMetric {
  id: string;
  value: string;
  unit: string;
  label: string;
  description: string;
  progress: number;
  target: string;
  colorVariant: "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5";
}

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface SectionContent {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
}

export interface ContentData {
  hero: HeroContent;
  sections: SectionContent[];
  impactMetrics: ImpactMetric[];
  pillars: PillarData[];
  activities: ActivityData[];
}

// Default content data
const defaultContent: ContentData = {
  hero: {
    title: "Building a Sustainable Future",
    subtitle: "At Bobobox, we're committed to environmental stewardship, social responsibility, and sustainable innovation that creates positive impact for our communities and planet.",
    primaryButtonText: "Download Impact Report",
    secondaryButtonText: "Explore Our Journey"
  },
  sections: [
    {
      id: "carbon-impact",
      title: "Carbon Impact & Offsets",
      subtitle: "Real-time tracking of our environmental impact and carbon reduction initiatives"
    },
    {
      id: "sustainability-usp",
      title: "Why Sustainability Matters",
      subtitle: "At Bobobox, we believe that hospitality can, and should, do more than provide a place to sleep."
    },
    {
      id: "pillars",
      title: "Sustainability pillars",
      subtitle: "To make hospitality better for all, our work needs clear structure and measurable focus. That's where sustainability comes into play."
    },
    {
      id: "products",
      title: "Sustainability by products",
      subtitle: "How our innovative accommodations contribute to environmental goals through design and operations"
    },
    {
      id: "impact-report",
      title: "Impact Report",
      subtitle: "We are dedicated to providing transparent and comprehensive reporting on our sustainability journey."
    },
    {
      id: "activities",
      title: "Latest activity and stories",
      subtitle: "Real stories from our team, communities, and guests showing sustainability in action"
    },
    {
      id: "partners",
      title: "Partnerships & Certifications",
      subtitle: ""
    },
    {
      id: "get-involved",
      title: "Join the Movement",
      subtitle: "Help us create a greener, more responsible future. Take a small action today, because every step counts."
    },
    {
      id: "cta",
      title: "Let's give positive impact!",
      subtitle: "We thank everyone who has taken the time to read our very first published impact report. If you're as passionate about driving change as we are and share a similar vision, let's start a conversation. Together, we can make a real difference!"
    }
  ],
  impactMetrics: [
    {
      id: "carbon-reduced",
      value: "2,847",
      unit: "tons CO₂",
      label: "Carbon Emissions Reduced",
      description: "Total carbon emissions reduced through our sustainability initiatives",
      progress: 95,
      target: "3,000 tons CO₂",
      colorVariant: "chart-1"
    },
    {
      id: "energy-saved",
      value: "125,680",
      unit: "kWh",
      label: "Energy Saved",
      description: "Energy consumption reduced through efficient systems and practices",
      progress: 83,
      target: "150,000 kWh",
      colorVariant: "chart-2"
    },
    {
      id: "water-conserved",
      value: "45,230",
      unit: "liters",
      label: "Water Conservation",
      description: "Water saved through conservation measures and smart management",
      progress: 90,
      target: "50,000 liters",
      colorVariant: "chart-4"
    },
    {
      id: "waste-diverted",
      value: "8,940",
      unit: "kg",
      label: "Waste Diverted",
      description: "Waste diverted from landfills through recycling and composting",
      progress: 89,
      target: "10,000 kg",
      colorVariant: "chart-5"
    }
  ],
  pillars: [
    {
      id: "connected-communities",
      title: "Connected Communities",
      description: "Build meaningful relationships with the places we operate in",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      fullDescription: "Our Connected Communities pillar focuses on creating lasting, positive relationships with local communities where we operate. We believe that true hospitality extends beyond our guests to encompass the entire ecosystem of people, businesses, and organizations in our neighborhoods.",
      objectives: [
        "Achieve 80% local hiring across all properties by 2025",
        "Partner with 50+ local businesses for supply chain integration",
        "Implement community benefit programs in every location",
        "Support local cultural and educational initiatives"
      ],
      achievements: [
        "75% of our workforce is hired locally",
        "Partnership with 35+ local suppliers and vendors",
        "Community investment of $2.5M in local development projects",
        "Supported 12 local cultural festivals and events"
      ],
      metrics: [
        {
          label: "Local Employment Rate",
          value: "75%",
          description: "Percentage of workforce hired from local communities"
        },
        {
          label: "Community Investment",
          value: "$2.5M",
          description: "Total investment in local development projects"
        },
        {
          label: "Local Suppliers",
          value: "35+",
          description: "Number of local businesses in our supply chain"
        }
      ],
      colorVariant: "chart-1"
    },
    {
      id: "sustainable-product",
      title: "Sustainably Sourced & Designed Product",
      description: "Reduce material impact and design with accessibility, circularity, and efficiency in mind",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&h=600&fit=crop",
      fullDescription: "Our commitment to sustainable design goes beyond aesthetics to encompass the entire lifecycle of our products and spaces. We prioritize materials with minimal environmental impact, design for disassembly and reuse, and continuously innovate to improve efficiency.",
      objectives: [
        "Achieve 90% sustainable materials in all new constructions",
        "Implement circular design principles across all product lines",
        "Reduce material waste by 50% through improved design",
        "Achieve carbon neutral construction by 2026"
      ],
      achievements: [
        "85% of materials are sustainably sourced",
        "40% reduction in construction waste through modular design",
        "100% of furniture is designed for disassembly and reuse",
        "30% reduction in material costs through circular design"
      ],
      metrics: [
        {
          label: "Sustainable Materials",
          value: "85%",
          description: "Percentage of materials that are sustainably sourced"
        },
        {
          label: "Waste Reduction",
          value: "40%",
          description: "Reduction in construction waste through design"
        },
        {
          label: "Reusable Components",
          value: "100%",
          description: "Percentage of furniture designed for reuse"
        }
      ],
      colorVariant: "chart-2"
    }
  ],
  activities: [
    {
      id: "mangrove",
      title: "Mangrove Restoration Project",
      subtitle: "Reviving coastal ecosystems by replanting and protecting vital mangrove forests.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
      fullDescription: "Our comprehensive mangrove restoration initiative focuses on rehabilitating degraded coastal ecosystems through community-driven conservation efforts. Working alongside local environmental groups and marine biologists, we've established nurseries, implemented protective measures, and created sustainable livelihoods for coastal communities.",
      location: "Coastal regions of Indonesia",
      duration: "24 months ongoing",
      impactMetrics: [
        {
          label: "Trees Planted",
          value: "12,500",
          unit: "mangrove trees",
          description: "Native mangrove species planted across 15 hectares"
        },
        {
          label: "CO₂ Absorbed",
          value: "850",
          unit: "tons annually",
          description: "Estimated carbon sequestration capacity when fully grown"
        },
        {
          label: "Marine Species",
          value: "45",
          unit: "species protected",
          description: "Fish, crustaceans, and bird species benefiting from restored habitat"
        },
        {
          label: "Community Members",
          value: "320",
          unit: "people involved",
          description: "Local community members engaged in restoration and monitoring"
        }
      ]
    }
  ]
};

// Context
interface ContentContextType {
  content: ContentData;
  updateContent: (updates: Partial<ContentData>) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Provider component
export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(defaultContent);

  const updateContent = (updates: Partial<ContentData>) => {
    setContent(prev => ({ ...prev, ...updates }));
  };

  const resetContent = () => {
    setContent(defaultContent);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

// Hook to use content
export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}