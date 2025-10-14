import React from "react";
import ServiceCard from "./ServiceCard";
import { Code2, Smartphone, Server } from "lucide-react"; // ✅ Added Server icon

const CreativeMediaSection = () => {
  return (
    <section className="bg-base-200 text-black py-20 px-6 relative overflow-hidden">
      {/* Header */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          Creative Media
        </h2>
        <p className="text-gray-700 text-lg">
          Visual storytelling and brand experiences
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <ServiceCard
          title="Branding & Identity"
          description="Complete brand identity and visual systems"
          features={[
            "Logo Design",
            "Brand Guidelines",
            "Visual Identity",
            "Brand Strategy",
          ]}
          gradientFrom="from-indigo-500"
          gradientTo="to-purple-600"
          icon={<Code2 className="w-7 h-7" />}
        />

        <ServiceCard
          title="Graphic Design"
          description="Print and digital design solutions"
          features={[
            "Marketing Materials",
            "UI/UX Design",
            "Print Design",
            "Digital Assets",
          ]}
          gradientFrom="from-purple-500"
          gradientTo="to-indigo-600"
          icon={<Smartphone className="w-7 h-7" />}
        />

        <ServiceCard
          title="Video & Animation"
          description="Engaging video content and motion graphics"
          features={[
            "Explainer Videos",
            "Promotional Videos",
            "2D/3D Animation",
            "Video Editing",
          ]}
          gradientFrom="from-violet-500"
          gradientTo="to-blue-600"
          icon={<Server className="w-7 h-7" />}
        />
      </div>
    </section>
  );
};

export default CreativeMediaSection;
