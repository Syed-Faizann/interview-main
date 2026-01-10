'use client'
import { useState, useRef, useEffect } from "react";

export default function GoalTabs() {
  const [active, setActive] = useState("Individual Goal");
  const [highlightStyle, setHighlightStyle] = useState({});
  const containerRef = useRef(null);

  const tabs = ["Individual Goal", "Milestone Goal"];

  // Update highlight position whenever active changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeButton = Array.from(container.children).find(
      (child) => child.textContent === active
    );

    if (activeButton) {
      setHighlightStyle({
        width: `${activeButton.offsetWidth}px`,
        left: `${activeButton.offsetLeft}px`,
      });
    }
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center bg-[#1a1d2e] rounded-full p-1"
    >
      {/* Animated sliding background */}
      <div
        className="absolute top-1 left-0 h-[calc(100%-0.25rem)] bg-[#E04C6B] rounded-full transition-all duration-300"
        style={highlightStyle}
      />

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`relative px-4 py-1.5 text-sm rounded-full transition-colors duration-300 ${
            active === tab ? "text-white z-10" : "text-white/70 hover:text-white z-10"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
