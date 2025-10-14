
import React, { useRef } from "react";
import { team } from "../Data.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../Style.css";

const TeamSection = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainer.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-white relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 overflow-visible">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Meet Our Team
        </h2>

        <div className="relative overflow-visible">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-200 rounded-full w-10 h-10 items-center justify-center hover:bg-gray-100 transition z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainer}
            className="flex items-stretch overflow-x-auto gap-8 snap-x snap-mandatory scroll-smooth px-2 hide-scrollbar overflow-visible"
          >
            {team.map((member, idx) => (
              <div
                key={idx}
                className="min-w-[250px] flex-shrink-0 text-center snap-center flex flex-col items-center justify-between p-6 mt-20 overflow-visible"
              >
                {/* 👇 Blob + Image */}
                <div className="relative flex justify-center mb-10 overflow-visible">
                  {/* Blob Background (🔹 slightly wider) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    className="absolute bottom-0 w-72 h-64 text-purple-500" // 🔹 increased from w-64 h-64 → w-72 h-72
                  >
                    <path
                      fill="currentColor"
                      d="M441,312.5Q433,375,382.5,416Q332,457,262.5,456.5Q193,456,133,417.5Q73,379,61.5,312.5Q50,246,68,180.5Q86,115,141.5,77.5Q197,40,263,43Q329,46,385,78.5Q441,111,447.5,178.5Q454,246,441,312.5Z"
                    />
                  </svg>

                  {/* Image (FULL SIZE, POPS OUT) */}
                  <div className="relative w-56 overflow-visible">
                    <img
                      src={member.image || `https://i.pravatar.cc/300?img=${idx + 5}`}
                      alt={member.name}
                      className="relative w-full h-auto object-contain rounded-full -mt-24 z-10 pop-out-image"
                    />
                  </div>
                </div>

                {/* Role */}
                <div className="text-purple-600 font-medium text-sm tracking-wide uppercase">
                  {member.role}
                </div>

                {/* Name */}
                <div className="text-2xl font-bold mt-1 text-gray-900">
                  {member.name}
                </div>

                {/* Email */}
                <div className="mt-2 text-pink-500 font-semibold text-sm">
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-200 rounded-full w-10 h-10 items-center justify-center hover:bg-gray-100 transition z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
