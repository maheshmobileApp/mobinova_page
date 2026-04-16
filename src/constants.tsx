import React from "react";
import { Clock, Target, Users, BadgeCheck } from "lucide-react";
import { FaAndroid, FaApple, FaGlobe, FaCode, FaPaintBrush, FaTools } from "react-icons/fa";

// ── Company ────────────────────────────────────────────────
export const COMPANY = {
    name: "Mobinova Tech Solutions",
    email: "mobinova@gmail.com",
    phone: "+91 9638527410",
    address: "123 Tech Street, Hi-tech City, Hyderabad, India",
    tagline: "Trusted IT Solutions Partner",
    description:
        "We design and develop high-performance mobile apps and web solutions that help businesses scale, innovate, and succeed.",
    heroHeading: {
        line1: "Building",
        highlight1: "Digital",
        highlight2: "Products",
        line2: "That Drive Growth",
    },
    features: ["✔ Android & iOS Apps", "✔ Custom Web Solutions", "✔ Scalable Architecture"],
};

// ── Nav ────────────────────────────────────────────────────
export type MenuItem = {
    label: string;
    path: string;
};

export const NAV_ITEMS: MenuItem[] = [
    { label: "Home", path: "/" },
    { label: "Services", path: "#services" },
    { label: "About", path: "#about" },
    { label: "Contact", path: "#contact" },
];

// ── Services ───────────────────────────────────────────────
export type Service = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

export const SERVICES: Service[] = [
    {
        title: "Android Development",
        description: "High-performance native Android apps using Kotlin, Jetpack Compose, and modern architecture patterns.",
        icon: <FaAndroid size={22} />,
    },
    {
        title: "iOS Development",
        description: "Premium iOS applications built with Swift and SwiftUI, optimized for every Apple device.",
        icon: <FaApple size={22} />,
    },
    {
        title: "Web Development",
        description: "Responsive, fast-loading websites and web apps using React, Next.js, and modern frameworks.",
        icon: <FaGlobe size={22} />,
    },
    {
        title: "Cross-Platform Apps",
        description: "Cost-effective multi-platform solutions with React Native and Flutter for iOS and Android.",
        icon: <FaCode size={22} />,
    },
    {
        title: "UI/UX Design",
        description: "Research-backed interface design that maximizes user engagement and business conversions.",
        icon: <FaPaintBrush size={22} />,
    },
    {
        title: "Maintenance & Support",
        description: "24/7 monitoring, bug fixes, performance tuning, and feature updates for your live products.",
        icon: <FaTools size={22} />,
    },
];

// ── How We Work ────────────────────────────────────────────
export type Step = {
    title: string;
    description: string;
};

export const HOW_WE_WORK_STEPS: Step[] = [
    {
        title: "Discovery",
        description: "We analyze your requirements, goals, and target audience to define the project scope.",
    },
    {
        title: "Design",
        description: "We create wireframes and prototypes to visualize the product before development begins.",
    },
    {
        title: "Development",
        description: "Our engineers build the product using modern technologies and best practices.",
    },
    {
        title: "Delivery",
        description: "We deploy, test, and hand over the product with full documentation and support.",
    },
];

export const ABOUT_US_SECTIONS = [
    "Agile Methodology",
    "ISO Certified",
    "24/7 Support",
    "NDA Protected",
]

export type AboutStat = {
    icon: React.ReactNode;
    value: string;
    label: string;
};

export const ABOUT_STATS: AboutStat[] = [
    { icon: <Clock className="mx-auto text-blue-600 mb-2" />, value: "5+", label: "Years in Business" },
    { icon: <Target className="mx-auto text-blue-600 mb-2" />, value: "20+", label: "Projects Delivered" },
    { icon: <Users className="mx-auto text-blue-600 mb-2" />, value: "20+", label: "Happy Clients" },
    { icon: <BadgeCheck className="mx-auto text-blue-600 mb-2" />, value: "99%", label: "Client Retention" },
];

// ✅ Type
export type TechCategory = {
  title: string;
  items: string[];
};

export const TECH_STACK: TechCategory[] = [
  {
    title: "MOBILE",
    items: ["Kotlin", "Swift", "React Native", "Flutter"],
  },
  {
    title: "FRONTEND",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    items: ["Node.js", "Python", "Java", ".NET"],
  },
  {
    title: "CLOUD & DEVOPS",
    items: ["AWS", "Azure", "Docker", "CI/CD"],
  },
];

export const TERMS_OF_SERVICE = {
  lastUpdated: "January 2025",
  sections: [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using the services provided by Mobinova Tech Solutions, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services."
    },
    {
      title: "2. Services",
      content: "Mobinova Tech Solutions provides mobile app development, web development, UI/UX design, and related IT services. We reserve the right to modify or discontinue any service at any time without prior notice."
    },
    {
      title: "3. Client Responsibilities",
      content: "Clients are responsible for providing accurate project requirements, timely feedback, and necessary assets. Delays caused by the client may affect project timelines and costs."
    },
    {
      title: "4. Payment Terms",
      content: "Payment schedules are defined in individual project agreements. All invoices are due within 15 days of issuance. Late payments may incur a 2% monthly interest charge."
    },
    {
      title: "5. Intellectual Property",
      content: "Upon full payment, the client owns the final deliverables. Mobinova Tech Solutions retains the right to showcase the work in its portfolio unless otherwise agreed in writing."
    },
    {
      title: "6. Confidentiality",
      content: "We treat all client information as confidential. We do not share, sell, or disclose any client data to third parties without explicit consent, except as required by law."
    },
    {
      title: "7. Limitation of Liability",
      content: "Mobinova Tech Solutions is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service."
    },
    {
      title: "8. Termination",
      content: "Either party may terminate a project engagement with 14 days written notice. Work completed up to the termination date will be billed accordingly."
    },
    {
      title: "9. Governing Law",
      content: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana."
    },
    {
      title: "10. Changes to Terms",
      content: "We reserve the right to update these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the new terms."
    },
  ]
};

export const PRIVACY_POLICY = {
  lastUpdated: "January 2025",
  sections: [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide..."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information..."
    }
  ]
};

export const PROJECTS = [
  {
    name: "WhatsApp Clone",
    link: "https://web.whatsapp.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
  },
  {
    name: "Spotify Music",
    link: "https://spotify.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
  },
  {
    name: "Amazon Shopping",
    link: "https://amazon.in",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    name: "Instagram Lite",
    link: "https://instagram.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
  },
  {
    name: "Flipkart Store",
    link: "https://flipkart.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flipkart_logo.png"
  },
  {
    name: "Google Maps UI",
    link: "https://maps.google.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Google_Maps_icon.svg"
  },
  {
    name: "YouTube Studio",
    link: "https://youtube.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
  }
];

export type Review = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export const initialReviews: Review[] = [
  {
    name: "Ravi Kumar",
    role: "Startup Founder",
    text: "Mobinova delivered our app perfectly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Business Owner",
    text: "Very professional team. Great communication and support.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Entrepreneur",
    text: "They built our website and mobile app flawlessly.",
    rating: 4,
  },
];
