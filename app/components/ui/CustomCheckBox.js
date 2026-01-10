import React, { useState } from "react";

export default function CustomCheckboxes() {
  const [checkedItems, setCheckedItems] = useState({
    deadlineReminders: false,
    statusUpdates: false,
    achievements: false
  });

  const handleCheckboxChange = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <div className=" rounded-lg p-6 shadow-sm max-w-md">
     <div
  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 mb-4 ${
    checkedItems.deadlineReminders
      ? " border-l-4 border-[#E04C6B]"
      : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
  }`}
  onClick={() => handleCheckboxChange("deadlineReminders")}
>
  <div className="flex items-center justify-center mr-3">
    <div
      className={`relative w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
        checkedItems.deadlineReminders
          ? "bg-[#E04C6B] border-[#F25758]"
          : "border-gray-300 dark:border-[#F25758] "
      }`}
    >
      <input
        type="checkbox"
        checked={checkedItems.deadlineReminders}
        onChange={() => handleCheckboxChange("deadlineReminders")}
        className="sr-only"
      />
      {checkedItems.deadlineReminders && (
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
  </div>

  <span
    className={`text-sm font-semibold transition-colors ${
      checkedItems.deadlineReminders
        ? "text-white dark:[text-blue-400]"
        : "text-gray-800 dark:text-gray-200"
    }`}
  >
    Deadline Reminders
  </span>
</div>

      
      <div className="space-y-4">
        {/* Checkbox 1 */}
        <div 
          className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
            checkedItems.statusUpdates 
              ? ' dark:bg-blue-900/20 border-l-4 border-[#E04C6B]' 
              : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
          }`}
          onClick={() => handleCheckboxChange('statusUpdates')}
        >
          <div className="flex items-center justify-center mr-3">
            <div className={`relative w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              checkedItems.statusUpdates 
                ? 'bg-[#E04C6B] border-[#E04C6B]' 
                : 'border-[#E04C6B] dark:border-[#E04C6B]'
            }`}>
              <input
                type="checkbox"
                checked={checkedItems.statusUpdates}
                onChange={() => handleCheckboxChange('statusUpdates')}
                className="sr-only"
              />
              {checkedItems.statusUpdates && (
                <svg 
                  className="w-3 h-3 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className={`text-sm font-medium transition-colors ${
            checkedItems.statusUpdates 
              ? 'text-white dark:text-white' 
              : 'text-gray-700 dark:text-gray-300'
          }`}>
            Status Updates
          </span>
        </div>

        {/* Checkbox 2 */}
        <div 
          className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
            checkedItems.achievements 
              ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-[#E04C6B]' 
              : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
          }`}
          onClick={() => handleCheckboxChange('achievements')}
        >
          <div className="flex items-center justify-center mr-3">
            <div className={`relative w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              checkedItems.achievements 
                ? 'bg-[#E04C6B] border-[#E04C6B]' 
                : 'border-gray-300 dark:border-[#E04C6B] hover:border-[#F25758]'
            }`}>
              <input
                type="checkbox"
                checked={checkedItems.achievements}
                onChange={() => handleCheckboxChange('achievements')}
                className="sr-only"
              />
              {checkedItems.achievements && (
                <svg 
                  className="w-3 h-3 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className={`text-sm font-medium transition-colors ${
            checkedItems.achievements 
              ? 'text-white dark:text-white' 
              : 'text-gray-700 dark:text-gray-300'
          }`}>
            Achievement Celebrations
          </span>
        </div>
      </div>
    </div>
  );
}