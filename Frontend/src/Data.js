const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" }, // Fixed typo: "Idustries"
  { name: "Case Studies", path: "/case-studies" },
  { name: "Insights", path: "/insights" }, // Fixed: lowercase path for consistency
  { name: "Contact", path: "/contact" },
  { name: "Get Started", path: "/contact" }
];

const cardsData = [
  {
    title: "End-to-End Solutions",
    description: "Unlike traditional firms, we bridge software development, product design, digital marketing, and data intelligence under one roof for seamless project execution.",
    icon: "🚀"
  },
  {
    title: "Global Vision, Local Excellence",
    description: "Based in Lagos, Nigeria, we deliver globally competitive solutions while understanding local markets and international standards.",
    icon: "🌍"
  },
  {
    title: "Human-Centric Design",
    description: "We create technology that is intuitive, accessible, and impactful, ensuring every solution serves real human needs and drives meaningful results.",
    icon: "🎯"
  },
  {
    title: "Data-Driven Decisions",
    description: "Our solutions are backed by comprehensive data intelligence and analytics, ensuring every strategy is optimized for maximum impact and growth.",
    icon: "📈"
  },
  {
    title: "Rapid Innovation",
    description: "We boldly challenge the status quo to deliver transformative solutions that keep your business ahead of the competition.",
    icon: "⚡"
  },
  {
    title: "True Partnership",
    description: "We believe in shared success with clients, partners, and communities, working as your dedicated allies in achieving unparalleled growth.",
    icon: "🤝" // Added variation selector for proper emoji rendering
  }
];


const processSteps = [
  {
    number: "1",
    title: "Discovery & Strategy",
    description:
      "We deep-dive into your business goals, target audience, and market landscape to craft the perfect digital strategy.",
  },
  {
    number: "2",
    title: "Design & Development",
    description:
      "Our expert team creates stunning designs and robust solutions that bring your vision to life with precision and creativity.",
  },
  {
    number: "3",
    title: "Testing & Optimization",
    description:
      "Rigorous testing and data-driven optimization ensure your solution performs flawlessly across all platforms and scenarios.",
  },
  {
    number: "4",
    title: "Launch & Growth",
    description:
      "We support your successful launch and provide ongoing optimization to ensure continuous growth and market leadership.",
  },
];

const testimonials = [
  {
    text: `"Omnix Labs transformed our online presence completely. Their end-to-end approach saved us time and delivered exceptional results beyond our expectations."`,
    name: "Sarah Johnson",
    role: "CEO, TechStart Nigeria",
  },
  {
    text: `"The team's attention to detail and innovative approach helped us scale from a local business to serving clients across Africa. Truly exceptional service."`,
    name: "Michael Adebayo",
    role: "Founder, GrowthCorp",
  },
  {
    text: `"Working with Omnix Labs was a game-changer. Their data-driven strategies increased our conversion rates by 300% in just three months."`,
    name: "Fatima Al-Hassan",
    role: "Marketing Director, RetailPlus",
  },
];
export { NavLinks, cardsData, processSteps, testimonials };