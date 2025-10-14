import React from "react";
import ServiceCard from "./ServiceCard";
import { Code2, Smartphone, Server } from "lucide-react"; // ✅ Added Server icon

const MarketingSection = () => {
  return (
    <section className="bg-base-200 text-black py-20 px-6 relative overflow-hidden">
      {/* Header */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          Marketing & Strategy
        </h2>
        <p className="text-gray-700 text-lg">
          Data-driven growth and digital marketing
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <ServiceCard
          title="Digital Marketing"
          description="Comprehensive digital marketing campaigns"
          features={[
            "PPC Advertising",
            "Email Marketing",
            "Conversion Optimization",
            "Marketing Automation",
          ]}
          gradientFrom="from-indigo-500"
          gradientTo="to-purple-600"
          icon={<Code2 className="w-7 h-7" />}
        />

        <ServiceCard
          title="Social Media Management"
          description="Social media strategy and management"
          features={[
            "Content Strategy",
            "Community Management",
            "Social Advertising",
            "Influencer Marketing",
          ]}
          gradientFrom="from-purple-500"
          gradientTo="to-indigo-600"
          icon={<Smartphone className="w-7 h-7" />}
        />

        <ServiceCard
          title="Content Creation"
          description="Engaging content that converts"
          features={[
            "Blog Writing",
            "Video Content",
            "Content Strategy",
            "Copywriting",
          ]}
          gradientFrom="from-purple-500"
          gradientTo="to-indigo-600"
          icon={<Smartphone className="w-7 h-7" />}
        />

        <ServiceCard
          title="SEO & Analytics"
          description="Search optimization and data insights"
          features={[
            "Technical SEO",
            "Content SEO",
            "Analytics Setup",
            "Performance Tracking",
          ]}
          gradientFrom="from-violet-500"
          gradientTo="to-blue-600"
          icon={<Server className="w-7 h-7" />}
        />
      </div>
    </section>
  );
};

export default MarketingSection;
