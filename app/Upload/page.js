"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, Image } from "lucide-react";
import NextImage from "next/image";
import ProgressCard from "@/app/components/ui/ProgressCard";
import DateTimePill from "@/app/components/ui/DateTimePill";
import CalendarPopup from "@/app/components/ui/CalendarPopup";

import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "../assets/logo.svg";
export default function Page() {

  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(
    new Date("2024-10-18T18:00:00")
  );
  const [openCalendarHeader, setOpenCalendarHeader] = useState(false);
  const [openCalendarIndex, setOpenCalendarIndex] = useState(null);
  const [openProofModal, setOpenProofModal] = useState(false);


  const calendarHeaderRef = useRef(null);
  const calendarRefs = useRef([]);

  // Close calendars on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        calendarHeaderRef.current &&
        !calendarHeaderRef.current.contains(e.target)
      ) {
        setOpenCalendarHeader(false);
      }

      if (
        calendarRefs.current.length > 0 &&
        !calendarRefs.current.some((ref) => ref && ref.contains(e.target))
      ) {
        setOpenCalendarIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(169.02deg,_#0F1B26_3.46%,_#161422_23.22%)] flex flex-col items-center justify-start">
      {/* Header - Made responsive */}
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <header className="flex items-center justify-between py-4 md:py-6">
          <button
            onClick={() => router.back()}
            className="bg-[#E04C6B] rounded-full p-1 md:p-2 hover:opacity-90 transition"
          >
            <ArrowLeft
              size={24}
              className="text-white md:w-6 md:h-6 lg:w-7 lg:h-7"
            />
          </button>
          <Link href="/">
            <Image
              className="w-24 md:w-30 lg:w-32 rounded-lg cursor-pointer"
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="w-10" /> {/* Spacer for balance */}
        </header>
      </div>
     

      {/* Main Content - Made responsive */}
      <main className="w-full max-w-3xl mt-4 sm:mt-6 md:mt-8 bg-[#171428] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(1,1,1,0.8)] flex flex-col gap-4 sm:gap-6">
        {/* Goal Header - Made responsive */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Goal Details
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-400">
              Track your progress and manage your goal settings
            </p>
          </div>
          <button className="bg-[#B32B49] p-2 px-3 rounded-lg cursor-pointer text-sm sm:text-base mt-2 sm:mt-0">
            Get Started
          </button>
        </div>

        {/* Goal Card - Made responsive */}
        <div className="bg-[#211E32] rounded-xl p-4 sm:p-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  Goal Title
                </h1>
                <span className="text-[#C49D00] font-bold bg-[#664F00] p-1 text-xs sm:text-sm rounded-full px-2 sm:px-3 mt-1 sm:mt-0">
                  In progress
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-2">
                Body Text
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <ProgressCard progress={60} />

              {/* Header Date Pill */}
              <div ref={calendarHeaderRef} className="relative">
                <DateTimePill
                  date={selectedDate}
                  onClick={() => setOpenCalendarHeader(!openCalendarHeader)}
                />

                {openCalendarHeader && (
                  <CalendarPopup
                    selected={selectedDate}
                    onSelect={(date) => {
                      if (date) {
                        setSelectedDate(date);
                        setOpenCalendarHeader(false);
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </div>

         

          {/* Commitment Fee - Made responsive */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-6">
            <h1 className="text-base sm:text-lg md:text-xl font-bold">
              Commitment Fee
            </h1>
            <h1 className="text-base sm:text-lg md:text-xl font-bold">
              50€
            </h1>
          </div>

          {/* Proof Type - Made responsive */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-4 sm:mt-6">
            <h1 className="text-base sm:text-lg md:text-xl font-bold">
              Proof Type
            </h1>
            <div className="flex gap-2 items-center mt-1 sm:mt-0">
              <Image
                className="text-red-500 w-4 h-4 sm:w-5 sm:h-5"
                width={20}
                height={20}
              />
              <span className="text-sm sm:text-base">Image</span>
            </div>
          </div>
        </div>
    <button
  onClick={() => setOpenProofModal(true)}
  className="w-full text-sm sm:text-base md:text-lg cursor-pointer bg-gradient-to-r from-[#F25758] to-[#E04C6B] mt-4 p-3 sm:p-4 rounded-xl"
>
  Upload Proof
</button>

{openProofModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
    <div className="bg-[#1C1830] w-[90%] max-w-4xl min-h-8 rounded-2xl p-6 shadow-xl relative">

      {/* Title */}
      <h2 className="text-xl font-bold text-center">
        Submit Proof for <span className="text-[#F25758]">[Goal Title]</span>
      </h2>
      <p className="text-xs text-gray-400 text-center mt-1">
        Upload your proof here.
      </p>

      {/* Upload Box */}
      <div className="mt-6 border-2  border-dashed border-gray-500 rounded-xl p-6 text-center cursor-pointer hover:border-[#F25758] transition">
        <p className="text-sm text-gray-300">
          📤 Photo / Video / Document
        </p>
      </div>

      {/* Notes */}
      <div className="mt-4">
        <label className="text-xs text-gray-400">Leave Note</label>
        <textarea
          rows={5}
          placeholder="Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet..."
          className="w-full mt-1 p-3 rounded-lg bg-white text-black text-sm outline-none resize-none"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setOpenProofModal(false)}
          className="flex-1 py-2 rounded-lg bg-[#2A2640] text-gray-300 hover:bg-[#3A3655]"
        >
          Cancel
        </button>
        <button
          className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#F25758] to-[#E04C6B] text-white"
        >
          Upload Proof
        </button>
      </div>
    </div>
  </div>
)}


      </main>
    </div>
  );
}
