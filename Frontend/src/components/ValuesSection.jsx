import React, { useState, useEffect, useRef } from "react";

const stats = [
  { number: 50, label: "Projects Completed" },
  { number: 25, label: "Happy Clients" },
  { number: 6, label: "Core Services" },
  { number: 99, label: "Client Satisfaction" },
];

const ValuesSection = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate counters
  useEffect(() => {
    if (visible) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.number;
        const duration = 1500;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = Math.floor(start);
            return updated;
          });
        }, 16);
      });
    }
  }, [visible]);

  return (
    <div
      ref={sectionRef}
      className="bg-base-100 p-8 rounded-2xl shadow-lg border border-base-300 flex flex-col items-center justify-center"
    >
      <div className="grid grid-cols-2 gap-10 md:gap-16 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-500">
              {counts[i]}+
            </h3>
            <p className="text-sm mt-2 text-base-content/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
