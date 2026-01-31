import React, { useRef } from "react";
import { team } from "../Data.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import "../Style.css";

const TeamSection = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainer.current;
    if (container) {
      // Get the width of one card plus gap
      const cardWidth = container.querySelector('div[class*="min-w-"]')?.offsetWidth || 280;
      const gap = 48; // gap-12 = 3rem = 48px
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-base-100 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-base-content">
          Meet Our Team
        </h2>

        <div className="relative">

          {/* Scrollable Container - Centered on desktop, left-aligned on mobile */}
          <div
            ref={scrollContainer}
            className="flex items-stretch md:justify-center overflow-x-auto gap-8 md:gap-16 snap-x snap-mandatory scroll-smooth hide-scrollbar"
          >
            {team.map((member, idx) => (
              <div
                key={idx}
                className="min-w-[280px] md:min-w-[280px] md:max-w-[320px] flex-shrink-0 text-center snap-center flex flex-col items-center justify-between p-6 mt-20"
              >
                {/* Blob + Image */}
                <div className="relative flex justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    className="absolute bottom-0 w-72 h-64 text-purple-500"
                  >
                    <path
                      fill="currentColor"
                      d="M441,312.5Q433,375,382.5,416Q332,457,262.5,456.5Q193,456,133,417.5Q73,379,61.5,312.5Q50,246,68,180.5Q86,115,141.5,77.5Q197,40,263,43Q329,46,385,78.5Q441,111,447.5,178.5Q454,246,441,312.5Z"
                    />
                  </svg>

                  <div className="relative w-56">
                    <img
                      src={member.image || `https://i.pravatar.cc/300?img=${idx + 5}`}
                      alt={member.name}
                      className="relative w-full h-auto object-contain rounded-full -mt-24 z-10 pop-out-image"
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="text-2xl font-extrabold text-base-content tracking-tight">
                  {member.name}
                </div>

                {/* Role */}
                <div className="text-purple-600 dark:text-purple-400 font-semibold text-sm tracking-wide uppercase mt-1">
                  {member.role}
                </div>

                {/* LinkedIn Icon */}
                <div className="mt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
                  >
                    <FaLinkedinIn className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP Arrows - Only show if more than 3 members */}
          {team.length > 3 && (
            <>
              <button
                onClick={() => scroll("left")}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-base-100 shadow-md border border-base-300 rounded-full w-10 h-10 items-center justify-center hover:bg-base-200 transition z-10"
              >
                <ChevronLeft className="w-5 h-5 text-base-content" />
              </button>

              <button
                onClick={() => scroll("right")}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-base-100 shadow-md border border-base-300 rounded-full w-10 h-10 items-center justify-center hover:bg-base-200 transition z-10"
              >
                <ChevronRight className="w-5 h-5 text-base-content" />
              </button>
            </>
          )}

          {/* MOBILE Arrows - Show for scrolling on mobile */}
          {team.length > 1 && (
            <div className="flex md:hidden justify-center gap-6 mt-6">
              <button
                onClick={() => scroll("left")}
                className="bg-base-100 shadow-md border border-base-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-base-200 transition"
              >
                <ChevronLeft className="w-5 h-5 text-base-content" />
              </button>

              <button
                onClick={() => scroll("right")}
                className="bg-base-100 shadow-md border border-base-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-base-200 transition"
              >
                <ChevronRight className="w-5 h-5 text-base-content" />
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;