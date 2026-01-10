"use client";

import React, { useState } from "react";

const cards = [
  {
    heading: "Goal Rejected",
    subHeading: "Goal details",
    hours: "1 hour left",
    btn: "View comment",
  },
  {
    heading: "Goal in Review",
    subHeading: "Goal details",
    hours: "1 hour ago",
    btn: "View comment",
  },
  {
    heading: "Goal Approved",
    subHeading: `Goal Congratulation Your goal "Complete Tax Return" was successfully completed and verified`,
    hours: "2 days ago",
    btn: "View comment",
  },
];

export default function Notifications() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);

  const handleClearAll = () => {
    setShowConfirm(true);
  };

  const handleConfirmYes = () => {
    setShowConfirm(false);
    setShowDeleted(true);
  };

  const handleClose = () => {
    setShowConfirm(false);
    setShowDeleted(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
        <div className="bg-[#171428] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_25px_60px_-15px_rgba(1,1,1,0.8)] flex flex-col gap-6 sm:gap-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="w-full sm:w-2/3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Notifications
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Get your reminders and stay updated.
              </p>
            </div>
            <button
              onClick={handleClearAll}
              className="
                text-sm sm:text-base
                text-gray-300 hover:text-white
                transition-all duration-300 ease-in-out
                hover:bg-gradient-to-r from-[#F25758] to-[#E04C6B]
                transform hover:translate-y-0.5
                p-2 px-4 rounded-lg
                w-full sm:w-auto text-center
              "
            >
              Clear All Notifications
            </button>
          </div>

          {/* Cards Container */}
          <div className="space-y-4 sm:space-y-6">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-[#322F43] rounded-xl p-4 sm:p-6 w-full transition-transform hover:scale-[1.01] hover:shadow-lg"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
                  <div className="w-full lg:w-3/4">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                      {item.heading}
                    </h1>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed">
                      {item.subHeading}
                    </p>
                    <p
                      className={`text-sm sm:text-base font-medium ${
                        item.heading === "Goal Rejected"
                          ? "text-red-500"
                          : item.heading === "Goal Approved"
                          ? "text-green-500"
                          : "text-purple-400"
                      }`}
                    >
                      {item.hours}
                    </p>
                  </div>

                  <button className="w-full lg:w-auto bg-gradient-to-r from-[#F25758] to-[#E04C6B] text-white font-medium py-2 px-4 sm:px-6 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base text-center">
                    {item.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Confirm Modal */}
      {showConfirm && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-[#322F43] rounded-2xl w-full max-w-md">
              {/* Modal Content */}
              <div className="p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold text-white text-center mb-6">
                  Are you sure?
                </h2>

                {/* Warning Message */}
                <p className="text-gray-300 text-center text-base mb-8">
                  There will be <span className="font-bold">No refund</span> of the processing fee or milestone fees already paid.
                </p>

                {/* Buttons Container */}
                <div className="flex gap-4">
                  {/* No Button */}
                  <button
                    onClick={handleClose}
                    className="flex-1 bg-[#3F3C50] text-white font-semibold py-3 rounded-xl hover:bg-[#4A475C] transition-colors"
                  >
                    No
                  </button>

                  {/* Yes Button */}
                  <button
                    onClick={handleConfirmYes}
                    className="flex-1 bg-gradient-to-r from-[#F25758] to-[#E04C6B] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Deleted Modal */}
      {showDeleted && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-[#322F43] rounded-2xl w-full max-w-md">
              {/* Modal Content */}
              <div className="p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold text-white text-center mb-6">
                  Your goal has been deleted
                </h2>

                {/* OK Button */}
                <div className="flex justify-center">
                  <button
                    onClick={handleClose}
                    className="w-full max-w-xs bg-gradient-to-r from-[#F25758] to-[#E04C6B] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}