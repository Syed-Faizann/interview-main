// components/ui/CustomCheckbox.jsx
'use client'
import React, { useState } from 'react';

export default function ConfirmationCheck({ 
  label, 
  checked = false, 
  onChange,
  description = "",
  ...props 
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheck = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
  };
  

  return (
    <div 
      className="flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200"
      onClick={handleCheck}
      {...props}
    >
      {/* Custom Checkbox */}
      <div className="relative flex-shrink-0 mt-0.5">
        {/* Outer circle/border */}
        <div className={`w-6 h-6 rounded-lg border-2 transition-all duration-200 flex items-center justify-center
          ${isChecked 
            ? 'border-[#E04C6B] bg-[#E04C6B]/10' 
            : 'border-white/20 bg-white/5 hover:border-white/40'
          }`}
        >
          {/* Inner checkmark */}
          {isChecked && (
            <div className="relative">
              {/* Checkmark line 1 */}
              <div className="absolute w-3 h-[2px] bg-[#E04C6B] rotate-45 -translate-x-[3px] translate-y-[1px] rounded-full" />
              {/* Checkmark line 2 */}
              <div className="absolute w-[10px] h-[2px] bg-[#E04C6B] -rotate-45 translate-x-[2px] -translate-y-[1px] rounded-full" />
            </div>
          )}
          
          {/* Glow effect when checked */}
          {isChecked && (
            <div className="absolute inset-0 bg-[#E04C6B]/20 rounded-lg blur-sm" />
          )}
        </div>
        
        {/* Ripple animation on click */}
        {isChecked && (
          <div className="absolute inset-0 animate-ping bg-[#E04C6B]/10 rounded-lg" />
        )}
      </div>

      {/* Label and Description */}
      <div className="flex-1">
        <span className={`font-medium transition-colors duration-200 ${isChecked ? 'text-white' : 'text-white/80'}`}>
          {label}
        </span>
        
        {description && (
          <p className="text-sm text-white/60 mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Alternative: Simple version without animations
export function SimpleCustomCheckbox({ label, checked = false, onChange, description = "" }) {
  return (
    <label className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-white/5 transition">
      {/* Custom Checkbox */}
      <div className="relative flex-shrink-0 mt-0.5">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange && onChange(e.target.checked)}
          className="sr-only" // Hide the default checkbox
        />
        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition
          ${checked 
            ? 'border-[#E04C6B] bg-[#E04C6B]' 
            : 'border-white/30 bg-transparent'
          }`}
        >
          {checked && (
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      
      <div>
        <span className={`font-medium ${checked ? 'text-white' : 'text-white/80'}`}>
          {label}
        </span>
        {description && (
          <p className="text-sm text-white/60 mt-1">
            {description}
          </p>
        )}
      </div>
    </label>
  );
}