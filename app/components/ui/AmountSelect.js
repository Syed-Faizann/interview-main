"use client";
import { useState, useRef, useEffect } from "react";

export default function StatusDropdown({ amount, setAmount }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const options = ["50€", "100€", "250€", "500€"];

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full
                   border border-[#E04C6B] text-sm text-white
                   hover:bg-[#E04C6B]/10 transition whitespace-nowrap"
      >
        {amount}
        <span
          className={`text-xs transition-transform duration-300 ${
            open ? "-rotate-90" : ""
          }`}
        >
          ›
        </span>
      </button>

      {/* Dropdown (opens UP) */}
      <div
        className={`
          absolute bottom-full mb-2
          rounded-xl bg-white text-black
          shadow-lg overflow-hidden z-50
          transition-all duration-300 ease-in-out
          ${open ? "max-h-60 opacity-100 py-1" : "max-h-0 opacity-0 py-0"}
          left-0 sm:left-10 sm:right-0
          lg:left-1/2 lg:-translate-x-1/2
        `}
        style={{
          width: "min(calc(100vw - 3rem), 192px)",
          maxWidth: "192px",
          minWidth: "150px",
        }}
      >
        {options.map((item) => (
          <button
            key={item}
            onClick={() => {
              setAmount(item);
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm
             hover:bg-gray-100 transition whitespace-nowrap
             overflow-hidden text-ellipsis"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
