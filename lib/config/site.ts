import type { NavItem, Service, IndustrySolution, TeamMember, Testimonial, BlogPost, JobPosition, FAQItem, TimelineItem, Stat } from "@/lib/types";

export const siteConfig = {
  name: "BITRIX",
  description: "ServiceNow Implementation Partner - We Collaborate to Innovate",
  url: "https://bitrix.com",
  ogImage: "https://bitrix.com/og.jpg",
  links: {
    twitter: "https://twitter.com/bitrix",
    linkedin: "https://linkedin.com/company/bitrix",
    facebook: "https://facebook.com/bitrix",
    instagram: "https://instagram.com/bitrix",
  },
  contact: {
    email: "hr@bitrixsolutions.com",
    phone: "+91 7807629154",

  },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Cybersecurity", href: "/services/cybersecurity"},
      { label: "SAP", href: "/services/sap"},
      { label: "Salesforce", href: "/services/salesforce"},
      { label: "ServiceNow", href: "/services/servicenow"},
      { label: "Website & Application Development", href: "/services/website-application-development"},
    ],
  },
  // {
  //   label: "Solutions",
  //   href: "/solutions",
  //   children: [
  //     { label: "Healthcare", href: "/solutions/healthcare" },
  //     { label: "Financial Services", href: "/solutions/financial" },
  //     { label: "Manufacturing", href: "/solutions/manufacturing" },
  //     { label: "Government", href: "/solutions/government" },
  //   ],
  // },
  { label: "Industries", href: "/industries" },
  { label: "Company", href: "/company" },
  // { label: "About", href: "/about" },
  // { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export const services: Service[] = [
  {
    id: "1",
    title: "ITSM",
    description: "Manage incidents, requests, changes, & problems, automate & streamline IT processes, etc.",
    icon: "settings",
    href: "/services/itsm",
  },
  {
    id: "2",
    title: "SPM",
    description: "Plan, deliver, and track value & drive more customer value faster.",
    icon: "workflow",
    href: "/services/spm",
  },
  {
    id: "3",
    title: "ITOM",
    description: "Analytics & reporting capabilities to identify & resolve issues before they become major..",
    icon: "users",
    href: "/services/itom",
  },
  {
    id: "4",
    title: "GRC",
    description: "Get real-time visibility and control over your organizations's compliance posture.",
    icon: "briefcase",
    href: "/services/grc",
  },
  {
    id: "5",
    title: "ITAM",
    description: "Track and manage hardware & software assets with real-time visibility & automated workflows.",
    icon: "shield",
    href: "/services/itam",
  },
  {
    id: "6",
    title: "HRSD",
    description: "Get everything from onboarding to benefits management to perform evaluations.",
    icon: "code",
    href: "/services/hrsd",
  },
  {
    id: "7",
    title: "CSM",
    description: "Streamline customer service processes, improve communication and collaboration & more.",
    icon: "code",
    href: "/services/csm",
  },
  {
    id: "8",
    title: "SecOps",
    description: "Get flow Designer, pushing report, SecOps efficiency dashboard & MITRE framework.",
    icon: "code",
    href: "/services/secops",
  },
  {
    id: "9",
    title: "Enterprise Integration",
    description: "Achieve fast time to value, lowest TCO, and zero learning curve with low-code automation.",
    icon: "code",
    href: "/services/enterprise-integration",
  },
];

export const industrySolutions: IndustrySolution[] = [
  {
    id: "1",
    title: "Healthcare",
    description: "Digital transformation solutions for healthcare organizations.",
    icon: "heart",
    href: "/solutions/healthcare",
  },
  {
    id: "2",
    title: "Financial Services",
    description: "Secure and compliant solutions for financial institutions.",
    icon: "building",
    href: "/solutions/financial",
  },
  {
    id: "3",
    title: "Manufacturing",
    description: "Streamlined operations for manufacturing excellence.",
    icon: "factory",
    href: "/solutions/manufacturing",
  },
  {
    id: "4",
    title: "Government",
    description: "Efficient solutions for government agencies.",
    icon: "landmark",
    href: "/solutions/government",
  },
  {
    id: "5",
    title: "Education",
    description: "Modern IT solutions for educational institutions.",
    icon: "graduation-cap",
    href: "/solutions/education",
  },
  {
    id: "6",
    title: "Retail",
    description: "Customer-centric solutions for retail businesses.",
    icon: "shopping-cart",
    href: "/solutions/retail",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Smith",
    role: "CEO & Founder",
    image: "/images/team/member-1.jpg",
    bio: "20+ years of experience in IT consulting",
    linkedin: "https://linkedin.com/in/johnsmith",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "CTO",
    image: "/images/team/member-2.jpg",
    bio: "Expert in ServiceNow architecture",
    linkedin: "https://linkedin.com/in/sarahjohnson",
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "VP of Consulting",
    image: "/images/team/member-3.jpg",
    bio: "Led 100+ successful implementations",
    linkedin: "https://linkedin.com/in/michaelchen",
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "Head of Delivery",
    image: "/images/team/member-4.jpg",
    bio: "Certified ServiceNow architect",
    linkedin: "https://linkedin.com/in/emilydavis",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    content: "BITRIX transformed our IT operations completely. Their expertise in ServiceNow implementation is unmatched. We saw 40% improvement in ticket resolution time.",
    author: "Robert Williams",
    role: "CIO",
    company: "TechCorp Industries",
    rating: 5,
  },
  {
    id: "2",
    content: "Working with BITRIX was a game-changer for our organization. Their team understood our needs and delivered beyond expectations.",
    author: "Amanda Foster",
    role: "VP of IT",
    company: "Global Finance Ltd",
    rating: 5,
  },
  {
    id: "3",
    content: "The best ServiceNow partner we've worked with. Professional, knowledgeable, and truly committed to our success.",
    author: "David Martinez",
    role: "IT Director",
    company: "HealthFirst Medical",
    rating: 5,
  },
  {
    id: "4",
    content: "The best ServiceNow partner we've worked with. Professional, knowledgeable, and truly committed to our success.",
    author: "David Martinez",
    role: "IT Director",
    company: "HealthFirst Medical",
    rating: 5,
  },
  {
    id: "5",
    content: "The best ServiceNow partner we've worked with. Professional, knowledgeable, and truly committed to our success.",
    author: "David Martinez",
    role: "IT Director",
    company: "HealthFirst Medical",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of IT Service Management in 2024",
    excerpt: "Discover the emerging trends shaping ITSM and how organizations can prepare for the future.",
    image: "/images/blog/post-1.jpg",
    author: "John Smith",
    date: "2024-01-15",
    category: "ITSM",
    slug: "future-of-itsm-2024",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Best Practices for ServiceNow Implementation",
    excerpt: "Learn the key strategies for successful ServiceNow deployment in your organization.",
    image: "/images/blog/post-2.jpg",
    author: "Sarah Johnson",
    date: "2024-01-10",
    category: "Implementation",
    slug: "servicenow-best-practices",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Digital Transformation: A Complete Guide",
    excerpt: "Everything you need to know about driving digital transformation in your enterprise.",
    image: "/images/blog/post-3.jpg",
    author: "Michael Chen",
    date: "2024-01-05",
    category: "Digital Transformation",
    slug: "digital-transformation-guide",
    readTime: "10 min read",
  },
];

export const jobPositions: JobPosition[] = [
  {
    id: "1",
    title: "Senior ServiceNow Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for an experienced ServiceNow developer to join our growing team.",
    requirements: ["5+ years ServiceNow experience", "CSA certification required", "Strong JavaScript skills"],
    slug: "senior-servicenow-developer",
  },
  {
    id: "2",
    title: "ServiceNow Architect",
    department: "Architecture",
    location: "Remote",
    type: "Full-time",
    description: "Lead the design and implementation of complex ServiceNow solutions.",
    requirements: ["8+ years experience", "CTA certification preferred", "Leadership experience"],
    slug: "servicenow-architect",
  },
  {
    id: "3",
    title: "Business Analyst",
    department: "Consulting",
    location: "New York, NY",
    type: "Full-time",
    description: "Bridge the gap between business needs and technical solutions.",
    requirements: ["3+ years experience", "ServiceNow knowledge", "Excellent communication"],
    slug: "business-analyst",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What is ServiceNow ITSM?",
    answer: "ServiceNow ITSM (IT Service Management) is a cloud-based platform that helps organizations manage and automate their IT service delivery processes, including incident management, problem management, change management, and more.",
  },
  {
    id: "2",
    question: "How long does a typical implementation take?",
    answer: "Implementation timelines vary based on scope and complexity. A basic ITSM implementation typically takes 8-12 weeks, while more comprehensive solutions may take 4-6 months.",
  },
  {
    id: "3",
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, financial services, manufacturing, government, education, and retail. Our solutions are customized to meet industry-specific requirements.",
  },
  {
    id: "4",
    question: "Do you provide training and support?",
    answer: "Yes, we provide comprehensive training programs and ongoing support to ensure your team can effectively use and maintain your ServiceNow implementation.",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2016",
    title: "Company Founded",
    description: "BITRIX was founded with a vision to transform IT service delivery.",
  },
  {
    year: "2017",
    title: "ServiceNow Partnership",
    description: "Became an official ServiceNow implementation partner.",
  },
  {
    year: "2018",
    title: "Rapid Growth",
    description: "Expanded to 50+ employees and 100+ successful implementations.",
  },
  {
    year: "2019",
    title: "Elite Partner Status",
    description: "Achieved ServiceNow Elite Partner status for exceptional delivery.",
  },
];

export const stats: Stat[] = [
  { value: "25", label: "Years Experience", suffix: "+" },
  { value: "10", label: "Countries Served", suffix: "+" },
  { value: "500", label: "Projects Delivered", suffix: "+" },
  { value: "98", label: "Client Satisfaction", suffix: "%" },
];
