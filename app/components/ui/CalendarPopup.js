"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CalendarPopup({ selected, onSelect }) {
  return (
    <div className="absolute bg-[#1a1d2e] rounded-lg p-4 shadow-lg z-50">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        footer={null}
      />
    </div>
  );
}
