'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function GoalTab() {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef(null);
  const [highlightStyle, setHighlightStyle] = useState({});
  const [loading, setLoading] = useState(false);

  const tabs = [
    { label: "Individual Goal", href: "/CreateGoal" },
    { label: "Milestone Goal", href: "/CreateGoal/milestone" },
  ];

  // Sliding highlight
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeTab = Array.from(container.children).find(
      (child) => child.dataset.href === pathname
    );

    if (activeTab) {
      setHighlightStyle({
        width: `${activeTab.offsetWidth}px`,
        left: `${activeTab.offsetLeft}px`,
      });
    }
  }, [pathname]);

  // Handle click with loading
  const handleClick = (href) => {
    if (href === pathname) return; // do nothing if already active
    setLoading(true);
    router.push(href);
  };

  return (
    <div className="relative inline-flex bg-[#3D3148] rounded-full p-1 w-full md:w-auto" ref={containerRef}>
      {/* Sliding highlight */}
      <div
        className="absolute left-0 h-[calc(100%-0.25rem)] bg-[#E04C6B] rounded-full transition-all duration-300"
        style={highlightStyle}
      />

      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <button
            key={tab.href}
            data-href={tab.href}
            onClick={() => handleClick(tab.href)}
            className={`relative px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base rounded-full transition-colors duration-300 z-10 flex items-center justify-center
              ${isActive ? "text-white font-semibold" : "text-white/70 hover:text-white"}
            `}
            disabled={loading}
          >
            {tab.label}
            {loading && !isActive && (
              <span className="ml-2 w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
          </button>
        );
      })}
    </div>
  );
}
