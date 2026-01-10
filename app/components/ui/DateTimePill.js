"use client";

import { Calendar as CalendarIcon } from "lucide-react";

export default function DateTimePill({ date, onClick }) {
  const formattedDate = date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex items-center gap-2 px-3 
                 bg-[#1a1d2e] text-[#b9b3ff]
                 rounded-lg text-sm cursor-pointer
                 hover:bg-[#23264a] transition"
    >
      <CalendarIcon size={16} className="text-[#8b7cff]" />
      <span>{formattedDate}</span>
    </button>
    
  );
}
