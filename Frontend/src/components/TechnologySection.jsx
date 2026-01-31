import React from "react";
import ServiceCard from "./ServiceCard";
import { Code2, Smartphone, Server } from "lucide-react"; // ✅ Added Server icon

const TechnologySection = () => {
  return (
    <section className="bg-base-100 text-black py-20 px-6 relative overflow-hidden">
      {/* Header */}
      <div className="relative text-center mb-16">
        <h2 className=" text-base-content text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          Technology
        </h2>
        <p className="text-base-content text-lg">
          Cutting-edge technical solutions
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <ServiceCard
          title="Website Development"
          description="Responsive, fast, and scalable web applications"
          features={[
            "Custom Web Applications",
            "E-commerce Platforms",
            "CMS Development",
            "Progressive Web Apps",
          ]}
          gradientFrom="from-indigo-500"
          gradientTo="to-purple-600"
          icon={<Code2 className="w-7 h-7" />}
        />

        <ServiceCard
          title="Mobile App Development"
          description="Native and cross-platform mobile solutions"
          features={[
            "iOS Applications",
            "Android Applications",
            "React Native",
            "Flutter Development",
          ]}
          gradientFrom="from-purple-500"
          gradientTo="to-indigo-600"
          icon={<Smartphone className="w-7 h-7" />}
        />

        <ServiceCard
          title="Software Development"
          description="Enterprise software and custom solutions"
          features={[
            "Enterprise Software",
            "API Development",
            "Cloud Solutions",
            "System Integration",
          ]}
          gradientFrom="from-violet-500"
          gradientTo="to-blue-600"
          icon={<Server className="w-7 h-7" />}
        />
      </div>
    </section>
  );
};

export default TechnologySection;
