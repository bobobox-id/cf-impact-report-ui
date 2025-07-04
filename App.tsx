import { useEffect, useState } from "react";
import svgPaths from "./imports/svg-72gzzl99py";
import svgPathsNav from "./imports/svg-riluy3nmsa";
import svgPathsBottom from "./imports/svg-igp1542pho";
import imgLogoBoboboxHorizontalColor from "figma:asset/2434156a655cce205b213c80183cb21735c3cee7.png";
import imgHeroSection from "figma:asset/9692d81aebc6adfdb778f15b509130b1363451bf.png";
import imgImage from "figma:asset/1a34d13a7850ae7ce1a7f0208cb8411ed2b924f3.png";
import imgLogoBobopodHorizontalColor from "figma:asset/42e880a918165d22c5643af6ad23f8897d230eef.png";
import imgImage1 from "figma:asset/763dd6e3d50e1df7a83ff76735d561f1654ead5f.png";
import imgLogoBobocabinHorizontalColor from "figma:asset/97dcf768a92cb461cb8ff7373dd1cbc23e93d036.png";

// Bottom section imports
import imgImpactReportBg from "figma:asset/2cb9d8a44d5934001fb2db73bab26daa797a0a06.png";
import imgReportImage from "figma:asset/b4cb8126f2680898ce6272258a9fc0badb58a57a.png";
import imgStory1 from "figma:asset/7109a9d34da9ad0dbc8f5d92432384997079ee9a.png";
import imgStory2 from "figma:asset/99e34429e149aab195adcbaa9e4cb7a15b8e7ccb.png";
import imgStory3 from "figma:asset/36b86bbfc881053ba9b305189a723200eefad6b9.png";
import imgStory4 from "figma:asset/eb6ec69096fac3bf6a17d5797edaee299a7f5d21.png";
import imgPartner1 from "figma:asset/49225f28882d6dfefdea4c59597b8360c1e3e8ff.png";
import imgPartner2 from "figma:asset/1da7e1aae3ea5a8c82c462c0bd834d8715b22b81.png";
import imgPartner3 from "figma:asset/667a977174fba7ca1a4806c31e074226d4ea7832.png";
import imgPartner4 from "figma:asset/dbfc66f6b200d16a17a3d918dc599ac3da6d4afc.png";
import imgPartner5 from "figma:asset/1c273e31f70d4e95f419417d5c0295713cb6d7fe.png";
import imgPartner6 from "figma:asset/7b695efc6c8783c1dee2698f3dc76cf6f1ce990d.png";
import imgPartner7 from "figma:asset/bb5ef6b9d77bc30f3b1404e65c833f02b5fb9c15.png";
import imgPartner8 from "figma:asset/fdbfffc0b7bfed43c18c17b15ea924b4fbc9e8e0.png";
import imgPartner9 from "figma:asset/2cab846b51560056e3c24aedddddc62d680cd21f.png";
import imgPartner10 from "figma:asset/a3cd99a3447b2f0ad72497f476e20c66b30de947.png";

// Import the new FooterSection component
import FooterSection from "./imports/FooterSection";
import Ellipse from "./imports/Ellipse";
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Carbon Impact image
import imgCarbonImpact from "figma:asset/f98dffaace58e403195cf4b84e2981492b919f15.png";

// CTA Background image
import imgCTABackground from "figma:asset/f101f967131e3cb86340566f4c920c7037b1bbce.png";

// New sustainability background image
import imgSustainabilityBackground from "figma:asset/02b185ec277ee7487a13ace1036f1b06bc4ce5cb.png";

// Import lucide-react icons for line-style icons
import {
  Users,
  RotateCcw,
  Building,
  MapPin,
  Heart,
  Zap,
  Leaf,
  Droplets,
  Trash2,
  FileText,
  X,
  Target,
  Award,
  CheckCircle,
} from "lucide-react";

// Activity data interface
interface ActivityData {
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

// Pillar data interface
interface PillarData {
  id: string;
  icon: React.ReactNode;
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

// Activity data
const activitiesData: ActivityData[] = [
  {
    id: "mangrove",
    title: "Mangrove Restoration Project",
    subtitle: "Reviving coastal ecosystems by replanting and protecting vital mangrove forests.",
    image: imgStory1,
    fullDescription: "Our comprehensive mangrove restoration initiative focuses on rehabilitating degraded coastal ecosystems through community-driven conservation efforts. Working alongside local environmental groups and marine biologists, we've established nurseries, implemented protective measures, and created sustainable livelihoods for coastal communities. This project not only restores critical habitat for marine life but also provides natural protection against coastal erosion and storm surges.",
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
  },
  {
    id: "waste-energy",
    title: "Waste-to-Energy Innovation",
    subtitle: "Turning waste into renewable energy to reduce landfill and carbon footprint.",
    image: imgStory2,
    fullDescription: "Our innovative waste-to-energy program converts organic waste from our properties into clean biogas and compost. Through partnerships with local waste management companies and the installation of anaerobic digesters, we're creating a circular economy model that reduces waste disposal costs while generating renewable energy. The program includes comprehensive staff training and guest education initiatives.",
    location: "Bobobox properties nationwide",
    duration: "18 months active",
    impactMetrics: [
      {
        label: "Waste Processed",
        value: "2,400",
        unit: "kg monthly",
        description: "Organic waste diverted from landfills across all properties"
      },
      {
        label: "Biogas Generated",
        value: "1,200",
        unit: "kWh monthly",
        description: "Clean energy generated from waste conversion process"
      },
      {
        label: "Emissions Reduced",
        value: "180",
        unit: "tons CO₂e",
        description: "Total carbon emissions prevented through waste diversion"
      },
      {
        label: "Cost Savings",
        value: "35%",
        unit: "reduction",
        description: "Decrease in waste disposal costs across all properties"
      }
    ]
  },
  {
    id: "education",
    title: "Educational Outreach Program",
    subtitle: "Inspiring environmental awareness through community learning and youth engagement.",
    image: imgStory3,
    fullDescription: "Our educational outreach program brings sustainability education directly to schools and communities near our properties. Through interactive workshops, environmental science demonstrations, and hands-on conservation activities, we're nurturing the next generation of environmental stewards. The program includes teacher training, educational materials development, and student environmental leadership opportunities.",
    location: "Communities surrounding Bobobox locations",
    duration: "12 months active",
    impactMetrics: [
      {
        label: "Students Reached",
        value: "3,800",
        unit: "students",
        description: "Young learners engaged through our educational programs"
      },
      {
        label: "Schools Partnered",
        value: "25",
        unit: "institutions",
        description: "Educational institutions actively participating in our program"
      },
      {
        label: "Workshops Conducted",
        value: "180",
        unit: "sessions",
        description: "Interactive sustainability workshops delivered to communities"
      },
      {
        label: "Teachers Trained",
        value: "120",
        unit: "educators",
        description: "Teachers equipped with sustainability curriculum and resources"
      }
    ]
  },
  {
    id: "artisan",
    title: "Local Artisan Partnership",
    subtitle: "Empowering communities through sustainable collaboration with local craftsmen.",
    image: imgStory4,
    fullDescription: "Our local artisan partnership program creates sustainable economic opportunities by featuring locally-made, eco-friendly products throughout our properties. We work directly with traditional craftspeople, providing fair trade practices, design collaboration, and market access. This initiative preserves cultural heritage while promoting sustainable materials and production methods.",
    location: "Rural communities across Indonesia",
    duration: "30 months ongoing",
    impactMetrics: [
      {
        label: "Artisan Partners",
        value: "85",
        unit: "craftspeople",
        description: "Local artisans actively partnered with across various regions"
      },
      {
        label: "Income Generated",
        value: "42%",
        unit: "increase",
        description: "Average income increase for participating artisan families"
      },
      {
        label: "Products Featured",
        value: "450",
        unit: "unique items",
        description: "Locally-made products showcased across our properties"
      },
      {
        label: "Sustainable Materials",
        value: "95%",
        unit: "eco-friendly",
        description: "Percentage of products made from sustainable local materials"
      }
    ]
  }
];

// Pillar data
const pillarsData: PillarData[] = [
  {
    id: "connected-communities",
    icon: <Users className="w-6 h-6" />,
    title: "Connected Communities",
    description: "Build meaningful relationships with the places we operate in",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    fullDescription: "Our Connected Communities pillar focuses on creating lasting, positive relationships with local communities where we operate. We believe that true hospitality extends beyond our guests to encompass the entire ecosystem of people, businesses, and organizations in our neighborhoods. Through strategic partnerships, local hiring initiatives, and community investment programs, we ensure that our presence creates shared value and sustainable growth for all stakeholders.",
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
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Sustainably Sourced & Designed Product",
    description: "Reduce material impact and design with accessibility, circularity, and efficiency in mind",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&h=600&fit=crop",
    fullDescription: "Our commitment to sustainable design goes beyond aesthetics to encompass the entire lifecycle of our products and spaces. We prioritize materials with minimal environmental impact, design for disassembly and reuse, and continuously innovate to improve efficiency. Every element of our accommodations is thoughtfully selected to minimize resource consumption while maximizing durability and functionality.",
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
  },
  {
    id: "good-governance",
    icon: <Building className="w-6 h-6" />,
    title: "Good Governance",
    description: "Operate with transparency, accountability, and integrity",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    fullDescription: "Good governance is the foundation of our sustainable business practices. We maintain the highest standards of transparency in our operations, financial reporting, and environmental impact. Our governance framework ensures accountability at every level, from board oversight to operational execution. We believe that ethical business practices and transparent communication are essential for building trust with all stakeholders.",
    objectives: [
      "Achieve 100% compliance with all regulatory requirements",
      "Implement comprehensive ESG reporting framework",
      "Maintain zero tolerance policy for corruption and unethical practices",
      "Achieve B-Corp certification by 2025"
    ],
    achievements: [
      "100% compliance record across all jurisdictions",
      "Published annual ESG reports for 3 consecutive years",
      "Implemented comprehensive ethics and compliance program",
      "Achieved top quartile governance rating from ESG agencies"
    ],
    metrics: [
      {
        label: "Compliance Rate",
        value: "100%",
        description: "Perfect compliance record across all operations"
      },
      {
        label: "ESG Reporting",
        value: "3 Years",
        description: "Consecutive years of comprehensive ESG reporting"
      },
      {
        label: "Ethics Training",
        value: "100%",
        description: "Employees completed ethics and compliance training"
      }
    ],
    colorVariant: "custom-purple"
  },
  {
    id: "responsible-traveler",
    icon: <MapPin className="w-6 h-6" />,
    title: "Responsible Traveler",
    description: "Make responsible choices easy and intuitive for every guest",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    fullDescription: "We empower our guests to make responsible choices that align with their values while traveling. Through intuitive design, clear communication, and seamless integration of sustainable options, we make it easy for travelers to minimize their environmental impact. Our guest experience is designed to educate, inspire, and facilitate responsible behavior without compromising comfort or convenience.",
    objectives: [
      "Achieve 90% guest participation in sustainability programs",
      "Reduce per-guest environmental impact by 30%",
      "Implement carbon offset options for all bookings",
      "Achieve 95% guest satisfaction with sustainability initiatives"
    ],
    achievements: [
      "78% of guests actively participate in our sustainability programs",
      "25% reduction in per-guest water consumption",
      "20% reduction in per-guest energy usage",
      "4.8/5 guest satisfaction rating for sustainability initiatives"
    ],
    metrics: [
      {
        label: "Program Participation",
        value: "78%",
        description: "Guests who actively engage with sustainability programs"
      },
      {
        label: "Water Savings",
        value: "25%",
        description: "Reduction in per-guest water consumption"
      },
      {
        label: "Guest Satisfaction",
        value: "4.8/5",
        description: "Rating for sustainability initiatives"
      }
    ],
    colorVariant: "chart-4"
  },
  {
    id: "environmental-stewardship",
    icon: <Heart className="w-6 h-6" />,
    title: "Environmental Stewardship & Climate Risk",
    description: "Reduce our environmental footprint and prepare for future climate realities",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    fullDescription: "Environmental stewardship is at the heart of everything we do. We are committed to reducing our environmental footprint while building resilience against climate change impacts. Our comprehensive approach includes carbon reduction, biodiversity conservation, and climate risk assessment. We work to not just minimize harm but actively contribute to environmental restoration and protection.",
    objectives: [
      "Achieve net-zero carbon emissions by 2030",
      "Reduce energy consumption by 50% through efficiency measures",
      "Protect and restore 100 hectares of natural habitat",
      "Achieve zero waste to landfill by 2027"
    ],
    achievements: [
      "35% reduction in carbon emissions since 2020",
      "40% reduction in energy consumption through efficiency",
      "Protected 45 hectares of natural habitat through partnerships",
      "Diverted 85% of waste from landfills"
    ],
    metrics: [
      {
        label: "Carbon Reduction",
        value: "35%",
        description: "Decrease in carbon emissions since 2020"
      },
      {
        label: "Energy Efficiency",
        value: "40%",
        description: "Reduction in energy consumption"
      },
      {
        label: "Habitat Protection",
        value: "45 Ha",
        description: "Hectares of natural habitat protected"
      }
    ],
    colorVariant: "chart-5"
  },
  {
    id: "purposeful-workforce",
    icon: <Zap className="w-6 h-6" />,
    title: "Highly Purposeful & Skilled Workforce",
    description: "Support our team with purposeful work, inclusion, and development",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    fullDescription: "Our people are the driving force behind our sustainability mission. We are committed to creating an inclusive, supportive work environment where every team member can thrive and contribute meaningfully to our goals. Through comprehensive training, career development opportunities, and competitive compensation, we ensure our workforce is both highly skilled and deeply engaged with our purpose.",
    objectives: [
      "Achieve 95% employee satisfaction rating",
      "Provide 40+ hours of professional development annually per employee",
      "Achieve gender parity in leadership positions",
      "Maintain employee retention rate above 85%"
    ],
    achievements: [
      "92% employee satisfaction rating",
      "Average 35 hours of professional development per employee",
      "45% of leadership positions held by women",
      "88% employee retention rate"
    ],
    metrics: [
      {
        label: "Employee Satisfaction",
        value: "92%",
        description: "Overall employee satisfaction rating"
      },
      {
        label: "Professional Development",
        value: "35 Hours",
        description: "Average annual training hours per employee"
      },
      {
        label: "Retention Rate",
        value: "88%",
        description: "Employee retention rate"
      }
    ],
    colorVariant: "custom-green"
  }
];

// SVG Components from first file
function FiRrAngleSmallDown() {
  return (
    <div className="relative shrink-0 size-5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="fi-rr-angle-small-down">
          <path
            d={svgPathsNav.p2fe6c400}
            fill="#1E2525"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function FiRrFlowerTulip() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g
          clipPath="url(#clip0_1_10685)"
          id="fi-rr-flower-tulip"
        >
          <path
            d={svgPaths.p3a218a00}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_10685">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrChartHistogram() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g
          clipPath="url(#clip0_1_10696)"
          id="fi-rr-chart-histogram"
        >
          <path
            d={svgPaths.p1d6b2300}
            fill="currentColor"
            id="Vector"
          />
          <path
            d={svgPaths.p2e8d2170}
            fill="currentColor"
            id="Vector_2"
          />
          <path
            d={svgPaths.p2805f100}
            fill="currentColor"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3150fe80}
            fill="currentColor"
            id="Vector_4"
          />
          <path
            d={svgPaths.p65e7140}
            fill="currentColor"
            id="Vector_5"
          />
          <path
            d={svgPaths.p2790ef00}
            fill="currentColor"
            id="Vector_6"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_10696">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrLayoutFluid() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g
          clipPath="url(#clip0_1_10679)"
          id="fi-rr-layout-fluid"
        >
          <path
            d={svgPaths.p13cbe700}
            fill="currentColor"
            id="Vector"
          />
          <path
            d={svgPaths.p2c3681f0}
            fill="currentColor"
            id="Vector_2"
          />
          <path
            d={svgPaths.p111c4c00}
            fill="currentColor"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3a827280}
            fill="currentColor"
            id="Vector_4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_10679">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrThumbsUp() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9689)" id="fi-rr-thumbs-up">
          <path
            d={svgPaths.p1d2b2d00}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9689">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrUsers() {
  return (
    <div className="relative shrink-0 size-10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_9668)" id="fi-rr-users">
          <path
            d={svgPaths.p21c47580}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9668">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrRefresh() {
  return (
    <div className="relative shrink-0 size-10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_10692)" id="fi-rr-refresh">
          <path
            d={svgPaths.p25d12800}
            fill="currentColor"
            id="Vector"
          />
          <path
            d={svgPaths.p26607e20}
            fill="currentColor"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_10692">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrBank() {
  return (
    <div className="relative shrink-0 size-10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_9731)" id="fi-rr-bank">
          <path
            d={svgPaths.p3e947840}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9731">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrMap() {
  return (
    <div className="relative shrink-0 size-10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_9686)" id="fi-rr-map">
          <path
            d={svgPaths.p39327a00}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9686">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrHandHoldingHeart() {
  return (
    <div className="relative shrink-0 size-10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g
          clipPath="url(#clip0_1_9719)"
          id="fi-rr-hand-holding-heart"
        >
          <path
            d={svgPaths.p21107a00}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9719">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrVectorAlt() {
  return (
    <div className="relative shrink-0 size-10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g clipPath="url(#clip0_1_9716)" id="fi-rr-vector-alt">
          <path
            d={svgPaths.p81e2b00}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9716">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrBolt() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9407)" id="fi-rr-bolt">
          <path
            d={svgPaths.p96c95a0}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9407">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrFaucet() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9416)" id="fi-rr-faucet">
          <path
            d={svgPaths.p25e53700}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9416">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrRecycle() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9683)" id="fi-rr-recycle">
          <path
            d={svgPaths.peeef00}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9683">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrLandLayers() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_9676)" id="fi-rr-land-layers">
          <path
            d={svgPaths.p3016ce00}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9676">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrTree() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="fi-rr-tree">
          <path
            d={svgPaths.p3230dd00}
            fill="currentColor"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

// Carbon Impact specific icons
function CO2Icon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g fill="currentColor">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-2 8h4v4h-4V10zm0 6h4v8h-4v-8z" />
        </g>
      </svg>
    </div>
  );
}

function EnergyIcon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g fill="currentColor">
          <path d="M20 2L12 16h6l-2 12 8-14h-6l2-12z" />
        </g>
      </svg>
    </div>
  );
}

function WaterIcon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g fill="currentColor">
          <path d="M16 2c-4 6-8 10-8 14 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4-4-8-8-14z" />
        </g>
      </svg>
    </div>
  );
}

function WasteIcon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g fill="currentColor">
          <path d="M12 2v2H6v4h20V4h-6V2h-8zM8 10v18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10H8zm4 4h2v10h-2V14zm6 0h2v10h-2V14z" />
        </g>
      </svg>
    </div>
  );
}

// Bottom section SVG components
function FiRrDownload() {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_9627)" id="fi-rr-download">
          <path
            d={svgPathsBottom.pee32c70}
            fill="currentColor"
            id="Vector"
          />
          <path
            d={svgPathsBottom.p1f534680}
            fill="currentColor"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9627">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrHomeLocation() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g
          clipPath="url(#clip0_1_9673)"
          id="fi-rr-home-location"
        >
          <path
            d={svgPathsBottom.p19fe9b00}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9673">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrMessagesQuestion() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g
          clipPath="url(#clip0_1_9390)"
          id="fi-rr-messages-question"
        >
          <path
            d={svgPathsBottom.p37d84a00}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9390">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrEnvelope() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_1_9755)" id="fi-rr-envelope">
          <path
            d={svgPathsBottom.p3575be00}
            fill="currentColor"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_9755">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Mouse Scroll Indicator Component
function MouseScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  );
}

// Animated Progress Bar Component
function ProgressBar({
  percentage,
  label,
  progressColor = "bg-primary",
}: {
  percentage: number;
  label: string;
  progressColor?: string;
}) {
  const [animatedPercentage, setAnimatedPercentage] =
    useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500); // Start animation 500ms after component mounts

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground caption">
          Progress
        </span>
        <span className="text-card-foreground caption font-medium">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className={`${progressColor} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
      <p className="text-muted-foreground caption">
        Target: {label}
      </p>
    </div>
  );
}

// Updated Impact Metric Card Component with color variants
function ImpactCard({
  icon,
  value,
  unit,
  label,
  description,
  progress,
  target,
  colorVariant = "chart-1",
}: {
  icon: React.ReactNode;
  value: string;
  unit: string;
  label: string;
  description: string;
  progress: number;
  target: string;
  colorVariant?:
    | "chart-1"
    | "chart-2"
    | "chart-3"
    | "chart-4"
    | "chart-5";
}) {
  const getColorClasses = () => {
    switch (colorVariant) {
      case "chart-1":
        return {
          iconBg: "bg-chart-1/10",
          iconText: "text-chart-1",
          iconBorder: "border-chart-1/20",
          progressBg: "bg-chart-1",
        };
      case "chart-2":
        return {
          iconBg: "bg-chart-2/10",
          iconText: "text-chart-2",
          iconBorder: "border-chart-2/20",
          progressBg: "bg-chart-2",
        };
      case "chart-3":
        return {
          iconBg: "bg-chart-3/10",
          iconText: "text-chart-3",
          iconBorder: "border-chart-3/20",
          progressBg: "bg-chart-3",
        };
      case "chart-4":
        return {
          iconBg: "bg-chart-4/10",
          iconText: "text-chart-4",
          iconBorder: "border-chart-4/20",
          progressBg: "bg-chart-4",
        };
      case "chart-5":
        return {
          iconBg: "bg-chart-5/10",
          iconText: "text-chart-5",
          iconBorder: "border-chart-5/20",
          progressBg: "bg-chart-5",
        };
      default:
        return {
          iconBg: "bg-primary/10",
          iconText: "text-primary",
          iconBorder: "border-primary/20",
          progressBg: "bg-primary",
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className="bg-background rounded-3xl p-6 shadow-sm border border-border min-h-[320px] flex flex-col justify-between">
      <div className="space-y-4 flex-1">
        {/* Icon */}
        <div
          className={`w-12 h-12 ${colors.iconBg} rounded-2xl flex items-center justify-center ${colors.iconText} border ${colors.iconBorder}`}
        >
          {icon}
        </div>

        {/* Value */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-3xl font-bold text-card-foreground">
              {value}
            </span>
            <span className="text-muted-foreground text-sm">
              {unit}
            </span>
          </div>
          <h4 className="text-card-foreground">{label}</h4>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <ProgressBar
          percentage={progress}
          label={target}
          progressColor={colors.progressBg}
        />
      </div>
    </div>
  );
}

// Status Indicator Component
function StatusIndicator({
  status,
  label,
}: {
  status: "live" | "verified" | "updated";
  label: string;
}) {
  const getStatusColor = () => {
    switch (status) {
      case "live":
        return "bg-success text-success-foreground";
      case "verified":
        return "bg-chart-5 text-white";
      case "updated":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-3 h-3 rounded-full ${getStatusColor()}`}
      />
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}

// Updated Carbon Impact & Offsets Section with white background and different colors
function CarbonImpactSection() {
  return (
    <section className="bg-white px-16 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-primary">
            Carbon Impact & Offsets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time tracking of our environmental impact and
            carbon reduction initiatives
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ImpactCard
            icon={<Leaf className="w-6 h-6" />}
            value="2,847"
            unit="tons CO₂"
            label="Carbon Emissions Reduced"
            description="Total carbon emissions reduced through our sustainability initiatives"
            progress={95}
            target="3,000 tons CO₂"
            colorVariant="chart-1"
          />
          <ImpactCard
            icon={<Zap className="w-6 h-6" />}
            value="125,680"
            unit="kWh"
            label="Energy Saved"
            description="Energy consumption reduced through efficient systems and practices"
            progress={83}
            target="150,000 kWh"
            colorVariant="chart-2"
          />
          <ImpactCard
            icon={<Droplets className="w-6 h-6" />}
            value="45,230"
            unit="liters"
            label="Water Conservation"
            description="Water saved through conservation measures and smart management"
            progress={90}
            target="50,000 liters"
            colorVariant="chart-4"
          />
          <ImpactCard
            icon={<Trash2 className="w-6 h-6" />}
            value="8,940"
            unit="kg"
            label="Waste Diverted"
            description="Waste diverted from landfills through recycling and composting"
            progress={89}
            target="10,000 kg"
            colorVariant="chart-5"
          />
        </div>

        {/* Real-Time Impact Tracking */}
        <div className="text-center space-y-6">
          <h3 className="text-card-foreground">
            Real-Time Impact Tracking
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our sustainability metrics are updated continuously
            through IoT sensors, smart meters, and verified
            reporting systems to ensure transparency and
            accuracy in our environmental impact measurement.
          </p>

          {/* Status Indicators */}
          <div className="flex justify-center gap-12 pt-4 flex-wrap">
            <StatusIndicator
              status="live"
              label="Live Data Feed"
            />
            <StatusIndicator
              status="verified"
              label="Third-Party Verified"
            />
            <StatusIndicator
              status="updated"
              label="Updated Hourly"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Navigation Dropdown Component with functional dropdown
function NavDropdown({
  children,
  hasIcon = true,
  links,
}: {
  children: React.ReactNode;
  hasIcon?: boolean;
  links?: Array<{ name: string; href?: string }>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    if (links && links.length > 0) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to allow mouse movement to dropdown
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Nav Item */}
      <div className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-muted/50 rounded-lg transition-colors duration-200">
        <span className="capitalize font-['Source_Serif_4'] font-medium text-[#1e2525] text-[18px] leading-[25.2px]">
          {children}
        </span>
        {hasIcon && (
          <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <FiRrAngleSmallDown />
          </div>
        )}
      </div>

      {/* Dropdown Menu */}
      {links && links.length > 0 && (
        <div 
          className={`absolute top-full left-0 min-w-[200px] bg-background border border-border rounded-lg shadow-lg transition-all duration-200 z-50 ${
            isOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          <div className="py-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href || '#'}
                className="block px-4 py-3 text-card-foreground hover:bg-muted/50 hover:text-primary transition-colors duration-200 text-[16px] font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Navigation menu data
const navigationMenus = {
  ourProducts: [
    { name: "Bobopod", href: "#" },
    { name: "Bobocabin", href: "#" },
    { name: "Boboliving", href: "#" },
    { name: "CRiB", href: "#" },
  ],
  about: [
    { name: "Our Profile", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Privacy Notice", href: "#" },
  ],
  offer: [
    { name: "Promo", href: "#" },
    { name: "Outbound", href: "#" },
    { name: "Company Outing", href: "#" },
    { name: "Room Package", href: "#" },
  ],
};

function Navigation() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-[0px_4px_8px_0px_rgba(161,163,163,0.16)] w-full sticky top-0 z-50 transition-all duration-200">
      <div className="flex items-center justify-between px-[60px] py-5">
        {/* Logo */}
        <div className="h-10 w-[156.635px] relative shrink-0">
          <div
            className="absolute bg-center bg-cover bg-no-repeat inset-0"
            style={{
              backgroundImage: `url('${imgLogoBoboboxHorizontalColor}')`,
            }}
          />
        </div>

        {/* Menu Items */}
        <div className="flex items-center">
          <NavDropdown links={navigationMenus.ourProducts}>
            Our Products
          </NavDropdown>
          <NavDropdown links={navigationMenus.about}>
            About
          </NavDropdown>
          <NavDropdown links={navigationMenus.offer}>
            Offer
          </NavDropdown>
          <NavDropdown hasIcon={false}>
            Partnership
          </NavDropdown>
          <NavDropdown hasIcon={false}>
            Blog
          </NavDropdown>
        </div>

        {/* Book Now Button */}
        <div className="bg-[#eef8f8] border border-primary flex items-center justify-center px-4 h-10 rounded-lg w-[120px] shrink-0 transition-colors duration-200 hover:bg-primary hover:text-primary-foreground cursor-pointer">
          <span className="font-['Work_Sans'] font-medium text-[#008880] text-[14px] leading-[19.6px] transition-colors duration-200 hover:text-white">
            Book now!
          </span>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      className="relative h-[812px] flex items-center justify-center px-16"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(30, 37, 37, 0.36) 0%, rgba(30, 37, 37, 0.36) 100%), url('${imgHeroSection}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl text-center text-white space-y-10">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-white mb-2">
            Building a Sustainable Future
          </h1>
          <p className="text-xl">
            At Bobobox, we're committed to environmental
            stewardship, social responsibility, and sustainable
            innovation that creates positive impact for our
            communities and planet.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-[#006A64]">
            Download Impact Report
          </button>
          <button className="bg-background text-card-foreground border border-border px-6 py-3 rounded-lg hover:bg-[#EDEEEE]">
            Explore Our Journey
          </button>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <MouseScrollIndicator />
    </section>
  );
}

// USP Card Component
function USPCard({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background p-6 rounded-3xl h-48 flex flex-col gap-6">
      <div className="text-primary">{icon}</div>
      <p className="text-card-foreground">{children}</p>
    </div>
  );
}

// Why Sustainability Matters Section with New Background
function SustainabilityUSPSection() {
  return (
    <section 
      className="text-white px-16 py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('${imgSustainabilityBackground}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Title */}
        <div className="text-center space-y-2">
          <h2 className="text-white">
            Why Sustainability Matters
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            At Bobobox, we believe that hospitality can, and
            should, do more than provide a place to sleep.
          </p>
        </div>

        {/* USP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <USPCard icon={<FiRrFlowerTulip />}>
            A stay should benefit the place it happens, not
            burden it
          </USPCard>
          <USPCard icon={<FiRrChartHistogram />}>
            Growth should be thoughtful, not extractive
          </USPCard>
          <USPCard icon={<FiRrLayoutFluid />}>
            Design should create spaces that respect both human
            experience and the ecosystems they exist in.
          </USPCard>
          <USPCard icon={<FiRrThumbsUp />}>
            Hospitality should include more people, share more
            value, and last longer than the transaction.
          </USPCard>
        </div>

        {/* Content */}
        <div className="text-gray-300 max-w-4xl mx-auto space-y-4">
          <p>
            Our commitment to Environmental, Social, and
            Governance (ESG) principles drives every decision we
            make, from the design of our pods to the communities
            we serve. We're not just building accommodations;
            we're crafting a sustainable future for travel that
            benefits travelers, communities, and our planet.
          </p>
          <p>
            This strategic approach to sustainability ensures
            our long-term growth while creating positive impact
            at every touchpoint of the guest experience. It's
            how we're redefining what hospitality means in the
            21st century.
          </p>
        </div>
      </div>
    </section>
  );
}

// Updated Pillar Card Component with color variants and click handler
function PillarCard({
  icon,
  title,
  description,
  colorVariant = "chart-1",
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorVariant?:
    | "chart-1"
    | "chart-2"
    | "chart-3"
    | "chart-4"
    | "chart-5"
    | "custom-purple"
    | "custom-green";
  onClick?: () => void;
}) {
  const getColorClasses = () => {
    switch (colorVariant) {
      case "chart-1":
        return {
          iconBg: "bg-chart-1/10",
          iconText: "text-chart-1",
          iconBorder: "border-chart-1/20",
        };
      case "chart-2":
        return {
          iconBg: "bg-chart-2/10",
          iconText: "text-chart-2",
          iconBorder: "border-chart-2/20",
        };
      case "chart-3":
        return {
          iconBg: "bg-chart-3/10",
          iconText: "text-chart-3",
          iconBorder: "border-chart-3/20",
        };
      case "chart-4":
        return {
          iconBg: "bg-chart-4/10",
          iconText: "text-chart-4",
          iconBorder: "border-chart-4/20",
        };
      case "chart-5":
        return {
          iconBg: "bg-chart-5/10",
          iconText: "text-chart-5",
          iconBorder: "border-chart-5/20",
        };
      case "custom-purple":
        return {
          iconBg: "bg-[#644CC7]/10",
          iconText: "text-[#644CC7]",
          iconBorder: "border-[#644CC7]/20",
        };
      case "custom-green":
        return {
          iconBg: "bg-[#005548]/10",
          iconText: "text-[#005548]",
          iconBorder: "border-[#005548]/20",
        };
      default:
        return {
          iconBg: "bg-primary/10",
          iconText: "text-primary",
          iconBorder: "border-primary/20",
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div 
      className="bg-background border border-border rounded-3xl p-6 shadow-sm h-52 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group relative"
      onClick={onClick}
    >
      <div className="flex gap-6 h-full">
        <div
          className={`w-12 h-12 ${colors.iconBg} rounded-2xl flex items-center justify-center ${colors.iconText} border ${colors.iconBorder} shrink-0 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <div className="space-y-3 flex-1 pr-20">
          <h5 className="text-card-foreground group-hover:text-primary transition-colors duration-300">{title}</h5>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      
      {/* Learn More Button */}
      <button 
        className="absolute bottom-6 right-6 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      >
        Learn More
      </button>
    </div>
  );
}

// Updated Sustainability Pillars Section with Modal Integration
function SustainabilityPillarsSection() {
  const [selectedPillar, setSelectedPillar] = useState<PillarData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePillarClick = (pillar: PillarData) => {
    setSelectedPillar(pillar);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedPillar(null);
    }, 300); // Wait for animation to complete
  };

  return (
    <section className="bg-white px-16 py-20">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-primary">
            Sustainability pillars
          </h2>
          <p className="text-xl text-card-foreground max-w-3xl mx-auto">
            To make hospitality better for all, our work needs
            clear structure and measurable focus. That's where
            sustainability comes into play.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pillarsData.map((pillar) => (
            <PillarCard
              key={pillar.id}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              colorVariant={pillar.colorVariant}
              onClick={() => handlePillarClick(pillar)}
            />
          ))}
        </div>
      </div>

      {/* Pillar Modal */}
      <PillarModal
        pillar={selectedPillar}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

// Badge Component
function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "alternative";
}) {
  const baseClasses = "px-4 py-2 rounded-full border";
  const variantClasses =
    variant === "alternative"
      ? "bg-alternative/10 text-alternative border-alternative/20"
      : "bg-secondary text-primary border-primary";

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {children}
    </span>
  );
}

// Enhanced ESG Point Component with progress bar
function ESGPoint({
  icon,
  label,
  value,
  percentage,
  color = "primary",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  percentage: number;
  color?: "primary" | "alternative";
}) {
  const [animatedPercentage, setAnimatedPercentage] =
    useState(0);

  const colorClasses =
    color === "alternative"
      ? "text-alternative border-l-alternative"
      : "text-primary border-l-primary";

  const progressColor =
    color === "alternative" ? "bg-alternative" : "bg-primary";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div
      className={`bg-background p-6 rounded-3xl border-l-8 ${colorClasses} flex-1`}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div
            className={`w-6 h-6 ${color === "alternative" ? "text-alternative" : "text-primary"}`}
          >
            {icon}
          </div>
          <span className="text-muted-foreground text-sm">
            {label}
          </span>
        </div>
        <div className={`text-4xl ${colorClasses}`}>
          {value}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground caption">
              Progress
            </span>
            <span className="text-card-foreground caption font-medium">
              {percentage}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className={`${progressColor} h-2 rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${animatedPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Product Section Component
function ProductSection({
  title,
  description,
  badges,
  esgPoints,
  achievements,
  image,
  logo,
  reverse = false,
}: {
  title: string;
  description: string;
  badges: Array<{
    text: string;
    variant?: "default" | "alternative";
  }>;
  esgPoints: Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
    percentage: number;
    color?: "primary" | "alternative";
  }>;
  achievements: string[];
  image: string;
  logo: string;
  reverse?: boolean;
}) {
  const content = (
    <div className="flex-1 space-y-6">
      <div>
        <h3>{title}</h3>
        <p className="text-card-foreground">{description}</p>
      </div>

      <div className="flex flex-wrap gap-4">
        {badges.map((badge, index) => (
          <Badge key={index} variant={badge.variant}>
            {badge.text}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {esgPoints.map((point, index) => (
          <ESGPoint key={index} {...point} />
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-card-foreground">{description}</p>
        <div>
          <p className="mb-2">Key Achievements</p>
          <ul className="space-y-1 text-card-foreground">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="flex items-start gap-2"
              >
                <span>•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const imageContent = (
    <div className="flex-1 relative">
      <div className="relative">
        {/* Decorative circle */}
        <div className="absolute -top-9 -left-9 w-16 h-16 opacity-50">
          <Ellipse />
        </div>

        {/* Main image */}
        <div
          className="w-full h-96 rounded-3xl bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />

        {/* Logo overlay */}
        <div className="absolute top-6 left-6 bg-background rounded-full p-[8px]">
          <img
            src={logo}
            alt={`${title} Logo`}
            className="h-8 w-auto"
          />
        </div>

        {/* Decorative dots */}
        <div className="absolute -bottom-9 -right-9 grid grid-cols-7 gap-3 opacity-40">
          {Array.from({ length: 49 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-primary rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`flex gap-16 items-start py-10 ${reverse ? "flex-row-reverse" : ""}`}
    >
      {content}
      {imageContent}
    </div>
  );
}

// Sustainability by Products Section
function SustainabilityByProductsSection() {
  return (
    <section className="bg-[#fafcf7] px-16 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-primary">
            Sustainability by products
          </h2>
          <p className="text-xl text-card-foreground max-w-3xl mx-auto">
            How our innovative accommodations contribute to
            environmental goals through design and operations
          </p>
        </div>

        {/* Products */}
        <div className="space-y-16">
          <ProductSection
            title="Bobopod"
            description="Compact, efficient accommodation pods designed for minimal environmental impact"
            badges={[
              { text: "Energy Efficient" },
              { text: "Space Optimized" },
              { text: "Eco-friendly Materials" },
            ]}
            esgPoints={[
              {
                icon: <FiRrBolt />,
                label: "Energy Efficiency",
                value: "85%",
                percentage: 85,
              },
              {
                icon: <FiRrFaucet />,
                label: "Water Savings",
                value: "60%",
                percentage: 60,
              },
              {
                icon: <FiRrRecycle />,
                label: "Waste Reduction",
                value: "70%",
                percentage: 70,
              },
              {
                icon: <FiRrLandLayers />,
                label: "Land Use Optimization",
                value: "90%",
                percentage: 90,
              },
            ]}
            achievements={[
              "LED lighting systems reduce energy consumption by 85%",
              "Smart water management cuts usage by 60% compared to traditional hotels",
              "Modular design allows for 90% material reusability",
              "Compact footprint minimizes land disruption",
              "Locally sourced materials reduce transportation emissions",
            ]}
            image={imgImage}
            logo={imgLogoBobopodHorizontalColor}
          />

          <ProductSection
            title="Bobocabin"
            description="Sustainable cabin experiences that blend comfort with environmental responsibility"
            badges={[
              {
                text: "Carbon Negative",
                variant: "alternative",
              },
              {
                text: "Renewable Energy",
                variant: "alternative",
              },
              {
                text: "Nature Conversion",
                variant: "alternative",
              },
            ]}
            esgPoints={[
              {
                icon: <FiRrBolt />,
                label: "Renewal Energy",
                value: "85%",
                percentage: 85,
                color: "alternative",
              },
              {
                icon: <FiRrFaucet />,
                label: "Rainwater Harvesting",
                value: "60%",
                percentage: 60,
                color: "alternative",
              },
              {
                icon: <FiRrRecycle />,
                label: "Recycled Materials",
                value: "70%",
                percentage: 70,
                color: "alternative",
              },
              {
                icon: <FiRrTree />,
                label: "Nature Integration",
                value: "90%",
                percentage: 90,
                color: "alternative",
              },
            ]}
            achievements={[
              "100% renewable energy through solar and wind systems",
              "Rainwater harvesting provides 80% of water needs",
              "75% of construction materials are recycled or sustainably sourced",
              "Design integrates with natural forest ecosystems",
              "Carbon-negative operations through forest preservation partnerships",
            ]}
            image={imgImage1}
            logo={imgLogoBobocabinHorizontalColor}
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}

// Impact Report Section
function ImpactReportSection() {
  return (
    <section
      className="px-16 py-20 relative"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(30, 37, 37, 0.36) 0%, rgba(30, 37, 37, 0.36) 100%), url('${imgImpactReportBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-9">
        {/* Section Title */}
        <div className="text-center space-y-2">
          <h2 className="text-white">Impact Report</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are dedicated to providing transparent and
            comprehensive reporting on our sustainability
            journey.
          </p>
        </div>

        <div className="flex gap-9">
          {/* Current Report */}
          <div className="bg-[rgba(30,37,37,0.8)] backdrop-blur-sm border border-gray-600 rounded-3xl p-6 flex-1">
            <div className="space-y-6">
              {/* Report Header */}
              <div className="flex gap-4">
                <div
                  className="w-40 h-40 rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${imgReportImage}')`,
                  }}
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-white mb-1">
                      Annual Impact Report (PDF)
                    </h4>
                    <h3 className="text-white">
                      Delivering Excellence Through Sustainable
                      Practices
                    </h3>
                  </div>
                  <div className="text-sm text-gray-300">
                    <p>Last Updated: 29/06/2025</p>
                    <p className="mt-1">
                      This document is intended solely for the
                      use of the specified recipient.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="border-t border-gray-600 pt-4">
                <h4 className="text-white mb-4">
                  Key Highlights
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        Higher Local Hiring and Supplier
                        Engagement Across Regions
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        95% of Natural Land Retained Through
                        Modular Construction
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        Improving ESG Transparency with Stronger
                        Data Practices
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        Setting a New Standard for Sustainable
                        Stays with Cabin v3.1
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        Guest Uptake of Carbon Offset Feature
                        Signals Behavior Shift
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        Introducing Our First Net Zero-Waste
                        Accommodation: Bobopod Pancoran
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#006A64] p-[16px] px-[262px] py-[18px]">
                <FiRrDownload />
                Download Impact Report
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 w-80">
            {/* Previous Reports */}
            <div className="bg-[rgba(30,37,37,0.8)] backdrop-blur-sm border border-gray-600 rounded-3xl p-6">
              <h4 className="text-white mb-6">
                Previous Reports
              </h4>
              <div className="space-y-6 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h5>2021</h5>
                    <p className="text-sm text-gray-300">
                      Foundation For Change
                    </p>
                  </div>
                  <button className="p-2 hover:bg-gray-700 rounded-lg">
                    <FiRrDownload />
                  </button>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h5>2022</h5>
                    <p className="text-sm text-gray-300">
                      Travel With A Purpose: Our Story Towards
                      Impactful Experience
                    </p>
                  </div>
                  <button className="p-2 hover:bg-gray-700 rounded-lg">
                    <FiRrDownload />
                  </button>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h5>2023</h5>
                    <p className="text-sm text-gray-300">
                      Delivering Excellence Through Sustainable
                      Practices
                    </p>
                  </div>
                  <button className="p-2 hover:bg-gray-700 rounded-lg">
                    <FiRrDownload />
                  </button>
                </div>
              </div>
            </div>

            {/* Policy Links */}
            <div className="bg-[rgba(30,37,37,0.8)] backdrop-blur-sm border border-gray-600 rounded-3xl p-6">
              <div className="space-y-4 text-white">
                <button className="flex items-center gap-2 hover:text-primary">
                  <FileText className="w-4 h-4 text-white" />
                  Environmental Policy
                </button>
                <button className="flex items-center gap-2 hover:text-primary">
                  <FileText className="w-4 h-4 text-white" />
                  Governance Framework
                </button>
                <button className="flex items-center gap-2 hover:text-primary">
                  <FileText className="w-4 h-4 text-white" />
                  Social Responsibility
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Activity Card Component
function ActivityCard({
  activity,
  isMain = false,
  onClick,
}: {
  activity: ActivityData;
  isMain?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${
        isMain ? "w-full h-80" : "h-80"
      } rounded-xl bg-cover bg-center relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
      style={{
        backgroundImage: `linear-gradient(rgba(24, 24, 24, 0) 50%, rgba(24, 24, 24, 0.6) 92%), url('${activity.image}')`,
      }}
      onClick={onClick}
    >
      <div className="absolute bottom-6 left-6 text-white">
        <h5 className={`mb-1 group-hover:text-primary transition-colors ${isMain ? "text-[32px]" : ""}`}>
          {activity.title}
        </h5>
        <p className="text-gray-300 text-[14px]">
          {activity.subtitle}
        </p>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <div className="text-white text-sm">Click to learn more</div>
        </div>
      </div>
    </div>
  );
}

// Simplified Impact Metric Card Component for Modal View
function ModalImpactCard({
  metric,
  index,
}: {
  metric: {
    label: string;
    value: string;
    unit: string;
    description: string;
  };
  index: number;
}) {
  const getColorVariant = () => {
    // Replace red (chart-3) with blue (chart-5) and use professional colors
    const variants = ["chart-1", "chart-2", "chart-5", "chart-4", "chart-5"];
    return variants[index % variants.length] as "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5";
  };

  const colors = getColorVariant();

  return (
    <div className="bg-white border border-border rounded-lg p-4 h-full transition-all duration-200 hover:shadow-md">
      <div className="space-y-3 h-full flex flex-col">
        {/* Value and Unit - Simplified layout */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl font-bold text-${colors}`}>
              {metric.value}
            </span>
            <span className="text-muted-foreground text-sm">
              {metric.unit}
            </span>
          </div>
          
          {/* Simple icon */}
          <div className={`w-8 h-8 rounded-lg bg-${colors}/10 flex items-center justify-center`}>
            <div className={`w-4 h-4 text-${colors}`}>
              {index % 4 === 0 && <Leaf className="w-4 h-4" />}
              {index % 4 === 1 && <Zap className="w-4 h-4" />}
              {index % 4 === 2 && <Users className="w-4 h-4" />}
              {index % 4 === 3 && <Heart className="w-4 h-4" />}
            </div>
          </div>
        </div>
        
        {/* Label - More prominent */}
        <h5 className="text-card-foreground font-medium">
          {metric.label}
        </h5>
        
        {/* Description - Concise */}
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {metric.description}
        </p>
      </div>
    </div>
  );
}

// Modal Overlay Component with Smooth Animations
function ActivityModal({
  activity,
  isOpen,
  onClose,
}: {
  activity: ActivityData | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isClosing, setIsClosing] = useState(false);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match animation duration
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isOpen && !isClosing
          ? 'opacity-100 backdrop-blur-sm bg-black/50'
          : 'opacity-0 backdrop-blur-none bg-black/0'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-6xl max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
          isOpen && !isClosing
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {activity && (
          <>
            {/* Header with close button */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b border-border">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-8">
                  <h3 className="text-primary mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground">
                    Environmental impact metrics and project details
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted/50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Hero Image */}
                <div 
                  className="w-full h-48 rounded-xl bg-cover bg-center shadow-sm"
                  style={{
                    backgroundImage: `url('${activity.image}')`,
                  }}
                />
                
                {/* Project Details - Horizontal Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Project Info */}
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <h4 className="text-primary mb-2">Project Overview</h4>
                      <p className="text-card-foreground leading-relaxed text-sm">
                        {activity.fullDescription}
                      </p>
                    </div>
                    
                    {/* Location and Duration */}
                    <div className="space-y-3">
                      <div className="bg-muted/30 rounded-lg p-3">
                        <p className="text-muted-foreground mb-1 text-xs">Location</p>
                        <p className="text-card-foreground text-sm">{activity.location}</p>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3">
                        <p className="text-muted-foreground mb-1 text-xs">Duration</p>
                        <p className="text-card-foreground text-sm">{activity.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Columns - Impact Metrics */}
                  <div className="lg:col-span-2 space-y-4">
                    <h4 className="text-primary">Impact Metrics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activity.impactMetrics.map((metric, index) => (
                        <ModalImpactCard
                          key={index}
                          metric={metric}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Pillar Modal Component
function PillarModal({
  pillar,
  isOpen,
  onClose,
}: {
  pillar: PillarData | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isClosing, setIsClosing] = useState(false);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match animation duration
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen && !isClosing) return null;

  const getColorClasses = () => {
    if (!pillar) return { iconBg: "bg-primary/10", iconText: "text-primary", iconBorder: "border-primary/20" };
    
    switch (pillar.colorVariant) {
      case "chart-1":
        return {
          iconBg: "bg-chart-1/10",
          iconText: "text-chart-1",
          iconBorder: "border-chart-1/20",
        };
      case "chart-2":
        return {
          iconBg: "bg-chart-2/10",
          iconText: "text-chart-2",
          iconBorder: "border-chart-2/20",
        };
      case "chart-3":
        return {
          iconBg: "bg-chart-3/10",
          iconText: "text-chart-3",
          iconBorder: "border-chart-3/20",
        };
      case "chart-4":
        return {
          iconBg: "bg-chart-4/10",
          iconText: "text-chart-4",
          iconBorder: "border-chart-4/20",
        };
      case "chart-5":
        return {
          iconBg: "bg-chart-5/10",
          iconText: "text-chart-5",
          iconBorder: "border-chart-5/20",
        };
      case "custom-purple":
        return {
          iconBg: "bg-[#644CC7]/10",
          iconText: "text-[#644CC7]",
          iconBorder: "border-[#644CC7]/20",
        };
      case "custom-green":
        return {
          iconBg: "bg-[#005548]/10",
          iconText: "text-[#005548]",
          iconBorder: "border-[#005548]/20",
        };
      default:
        return {
          iconBg: "bg-primary/10",
          iconText: "text-primary",
          iconBorder: "border-primary/20",
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isOpen && !isClosing
          ? 'opacity-100 backdrop-blur-sm bg-black/50'
          : 'opacity-0 backdrop-blur-none bg-black/0'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-6xl max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
          isOpen && !isClosing
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {pillar && (
          <>
            {/* Header with close button */}
            <div className={`bg-gradient-to-r from-${pillar.colorVariant}/5 to-${pillar.colorVariant}/10 p-6 border-b border-border`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1 pr-8">
                  <div className={`w-12 h-12 ${colors.iconBg} rounded-2xl flex items-center justify-center ${colors.iconText} border ${colors.iconBorder} shrink-0`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className={`${colors.iconText} mb-2`}>{pillar.title}</h3>
                    <p className="text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted/50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Hero Image */}
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-sm">
                  <ImageWithFallback
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Description */}
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <h4 className={`${colors.iconText} mb-2`}>Overview</h4>
                      <p className="text-card-foreground leading-relaxed text-sm">
                        {pillar.fullDescription}
                      </p>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="space-y-3">
                      <h5 className={`${colors.iconText} mb-2`}>Key Metrics</h5>
                      {pillar.metrics.map((metric, index) => (
                        <div key={index} className="bg-muted/30 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-muted-foreground text-xs">{metric.label}</p>
                            <p className={`text-lg font-semibold ${colors.iconText}`}>{metric.value}</p>
                          </div>
                          <p className="text-card-foreground text-xs">{metric.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right Columns - Objectives and Achievements */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Objectives */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Target className={`w-5 h-5 ${colors.iconText}`} />
                          <h4 className={`${colors.iconText}`}>Strategic Objectives</h4>
                        </div>
                        <div className="space-y-3">
                          {pillar.objectives.map((objective, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full ${colors.iconBg} border ${colors.iconBorder} mt-2 shrink-0`} />
                              <p className="text-card-foreground text-sm leading-relaxed">{objective}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle className={`w-5 h-5 ${colors.iconText}`} />
                          <h4 className={`${colors.iconText}`}>Key Achievements</h4>
                        </div>
                        <div className="space-y-3">
                          {pillar.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Award className={`w-4 h-4 ${colors.iconText} mt-1 shrink-0`} />
                              <p className="text-card-foreground text-sm leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Updated Latest Activity and Stories Section with Modal
function ActivityAndStoriesSection() {
  const [selectedActivity, setSelectedActivity] = useState<ActivityData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActivityClick = (activity: ActivityData) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedActivity(null);
    }, 300); // Wait for animation to complete
  };

  return (
    <section className="bg-[#f8fcf2] px-16 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-9">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-primary">
            Latest activity and stories
          </h2>
          <p className="text-xl text-card-foreground max-w-2xl mx-auto">
            Real stories from our team, communities, and guests
            showing sustainability in action
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-9">
          {/* Main Story */}
          <ActivityCard
            activity={activitiesData[0]}
            isMain={true}
            onClick={() => handleActivityClick(activitiesData[0])}
          />

          {/* Secondary Stories */}
          <div className="grid grid-cols-3 gap-9">
            {activitiesData.slice(1).map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                onClick={() => handleActivityClick(activity)}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-primary text-primary-foreground px-9 py-3 rounded-lg hover:bg-[#006A64]">
            Explore More Activity
          </button>
        </div>
      </div>

      {/* Activity Modal */}
      <ActivityModal
        activity={selectedActivity}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

// Partners and Certifications Section
function PartnersSection() {
  return (
    <section className="bg-background px-16 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-primary">
            Partnerships & Certifications
          </h2>
        </div>

        <div className="space-y-8 opacity-75">
          {/* First Row */}
          <div className="flex items-center justify-center gap-16">
            <img
              src={imgPartner1}
              alt="Partner"
              className="h-8 object-contain"
            />
            <img
              src={imgPartner2}
              alt="Partner"
              className="h-10 object-contain"
            />
            <img
              src={imgPartner3}
              alt="Partner"
              className="h-9 object-contain"
            />
            <img
              src={imgPartner4}
              alt="Partner"
              className="h-12 object-contain"
            />
            <img
              src={imgPartner5}
              alt="Partner"
              className="h-10 object-contain"
            />
            <img
              src={imgPartner6}
              alt="Partner"
              className="h-10 object-contain"
            />
          </div>

          {/* Second Row */}
          <div className="flex items-center justify-center gap-16">
            <img
              src={imgPartner7}
              alt="Partner"
              className="h-14 object-contain"
            />
            <img
              src={imgPartner8}
              alt="Partner"
              className="h-14 object-contain"
            />
            <img
              src={imgPartner9}
              alt="Partner"
              className="h-14 object-contain"
            />
            <img
              src={imgPartner10}
              alt="Partner"
              className="h-14 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Get Involved Section with Interactive Form and Validation
function GetInvolvedSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Phone validation: only allows digits 0-9
    // Minimum 8 digits, maximum 16 digits
    const phoneRegex = /^\d{8,16}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    // Special handling for phone number - only allow digits
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, ""); // Remove all non-digit characters
      const limitedDigits = digitsOnly.slice(0, 16); // Limit to 16 digits maximum
      setFormData((prev) => ({
        ...prev,
        [name]: limitedDigits,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear errors when user starts typing
    if (name === "email" && errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
    if (name === "phone" && errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "email" && value.trim() !== "") {
      if (!validateEmail(value.trim())) {
        setErrors((prev) => ({
          ...prev,
          email:
            "Please enter a valid email address (e.g., user@example.com)",
        }));
      }
    }

    if (name === "phone" && value.trim() !== "") {
      if (!validatePhone(value.trim())) {
        setErrors((prev) => ({
          ...prev,
          phone:
            "Please enter a valid phone number (8-16 digits only)",
        }));
      }
    }
  };

  // Check if form is valid (required fields filled AND no validation errors)
  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    validateEmail(formData.email.trim()) &&
    validatePhone(formData.phone.trim()) &&
    !errors.email &&
    !errors.phone;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation before submission
    const newErrors = { email: "", phone: "" };

    if (
      formData.email.trim() &&
      !validateEmail(formData.email.trim())
    ) {
      newErrors.email =
        "Please enter a valid email address (e.g., user@example.com)";
    }

    if (
      formData.phone.trim() &&
      !validatePhone(formData.phone.trim())
    ) {
      newErrors.phone =
        "Please enter a valid phone number (8-16 digits only)";
    }

    setErrors(newErrors);

    if (isFormValid && !newErrors.email && !newErrors.phone) {
      // Handle form submission
      console.log("Form submitted:", formData);
      // You could add form submission logic here
    }
  };

  return (
    <section className="bg-[#eef8f8] px-16 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-background rounded-3xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="text-center space-y-2">
              <h3 className="text-[#333333]">
                Join the Movement
              </h3>
              <p className="text-xl text-card-foreground">
                Help us create a greener, more responsible
                future. Take a small action today, because every
                step counts.
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-[#333333]">
                  Full Name{" "}
                  <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-[#c6c6c6] rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[#333333]">
                    Email Address{" "}
                    <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Input your email address"
                    className={`w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring ${
                      errors.email
                        ? "border-blue-600"
                        : "border-[#c6c6c6]"
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="text-blue-600 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-[#333333]">
                    Phone Number{" "}
                    <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Input your phone number"
                    className={`w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring ${
                      errors.phone
                        ? "border-blue-600"
                        : "border-[#c6c6c6]"
                    }`}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={16}
                    required
                  />
                  {errors.phone && (
                    <p className="text-blue-600 text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Feedback Field */}
              <div className="space-y-2">
                <label className="text-[#333333]">
                  Give Us Your Feedback
                </label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  placeholder="Ask questions, propose collaborations, or provide feedback."
                  rows={4}
                  className="w-full px-4 py-2 border border-[#c6c6c6] rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              {/* Incentive Text */}
              <p className="text-card-foreground">
                Get a chance to win reusable kits or discount
                vouchers from our ESG partners by submit the
                pledge form!
              </p>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className={`px-9 py-3 rounded-lg transition-all duration-200 ${
                    isFormValid
                      ? "bg-primary text-primary-foreground hover:bg-[#006A64] cursor-pointer"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                  disabled={!isFormValid}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// CTA Section with Landscape Background
function CTASection() {
  return (
    <section className="bg-background px-16 py-20">
      <div
        className="rounded-3xl overflow-hidden relative"
        style={{
          backgroundImage: `url('${imgCTABackground}')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 text-center py-32 px-16">
          <div className="max-w-4xl mx-auto space-y-9">
            <div className="space-y-3">
              <h2 className="text-[rgba(255,255,255,1)]">
                Let's give positive impact!
              </h2>
              <p className="text-xl text-[rgba(255,255,255,1)] max-w-3xl mx-auto">
                We thank everyone who has taken the time to read
                our very first published impact report. If
                you're as passionate about driving change as we
                are and share a similar vision, let's start a
                conversation. Together, we can make a real
                difference!
              </p>
            </div>
            <button className="bg-primary text-primary-foreground px-9 py-3 rounded-lg hover:bg-[#006A64]">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CarbonImpactSection />
      <SustainabilityUSPSection />
      <SustainabilityPillarsSection />
      <SustainabilityByProductsSection />
      <ImpactReportSection />
      <ActivityAndStoriesSection />
      <PartnersSection />
      <GetInvolvedSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}