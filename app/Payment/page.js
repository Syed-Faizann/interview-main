"use client";

import React, { useState } from "react";
import { ArrowLeft, ChevronDown, } from "lucide-react";
import NextImage from "next/image";
import CustomCheckboxes from "../components/ui/CustomCheckBox";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const language = [
  { name: "Japanese" },
  { name: "Latin" },
  { name: "Spanish" },
  { name: "Mandarin" },
];

const days = [{ name: "Daily" }, { name: "Weekly" }];

export default function Page() {
    const router = useRouter();
  const [selectedProof, setSelectedProof] = useState("English");
  const [selectedRoutine, setSelectedRoutine] = useState("Daily");

  const [languageOpen, setLanguageOpen] = useState(false);
  const [routineOpen, setRoutineOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[linear-gradient(169.02deg,_#0F1B26_3.46%,_#161422_23.22%)] flex flex-col items-center justify-start">
      {/* Header */}
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
            <NextImage
              className="w-24 md:w-30 lg:w-32 rounded-lg cursor-pointer"
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="w-10" /> {/* Spacer for balance */}
        </header>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-3xl mt-3 sm:mt-4 md:mt-6 lg:mt-8 px-3 sm:px-4 md:px-6">
        <div className="bg-[#171428] rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 shadow-[0_10px_30px_-5px_rgba(1,1,1,0.6)] sm:shadow-[0_15px_40px_-8px_rgba(1,1,1,0.7)] md:shadow-[0_20px_50px_-12px_rgba(1,1,1,0.8)] flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="w-full sm:w-2/3 lg:w-3/4">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center sm:text-left">
                Configure Your Account Preferences
              </h1>
              <p className="text-xs sm:text-[13px] md:text-sm text-gray-400 mt-1 sm:mt-2">
                Set your preference to enhance your experience
              </p>
            </div>

            <button className="mt-2 sm:mt-0 bg-gradient-to-r from-[#F25758] to-[#E04C6B] p-2 sm:p-2.5 md:p-3 px-3 sm:px-4 md:px-5 lg:px-6 rounded-md text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer w-full sm:w-auto">
              Update
            </button>
          </div>

          {/* Divider */}
          <div className="border-[#E04C6B] border-1"></div>

          {/* Language Dropdown */}
          <div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Select Your Language</h1>
            <p className="text-xs sm:text-[13px] md:text-sm text-gray-400 mt-1">
              Choose your preferred language for app navigation
            </p>

            <div
              onClick={() => {
                setLanguageOpen(!languageOpen);
                setRoutineOpen(false);
              }}
              className="flex items-center justify-between cursor-pointer p-2 sm:p-2.5 md:p-3 bg-white text-[#FF3B30] rounded-lg mt-2 sm:mt-3"
            >
              <h2 className="font-bold text-sm sm:text-base">{selectedProof}</h2>
              <ChevronDown
                className={`transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                languageOpen
                  ? "max-h-60 opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              }`}
            >
              <div className="rounded-lg border border-gray-200 mt-1 sm:mt-2">
                {language.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedProof(item.name);
                      setLanguageOpen(false);
                    }}
                    className={`bg-white text-black px-3 sm:px-3.5 md:px-4 py-2 sm:py-2.5 md:py-3 cursor-pointer hover:bg-gray-100 transition text-sm sm:text-base ${
                      index === language.length - 1 ? "rounded-b-lg" : ""
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Routine Dropdown */}
          <div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-3 sm:mt-4 md:mt-5">
              Reminder Intervals
            </h1>
            <p className="text-xs sm:text-[13px] md:text-sm text-gray-400 mt-1">
              Adjust how often and what type notifications you receive
            </p>

            <div
              onClick={() => {
                setRoutineOpen(!routineOpen);
                setLanguageOpen(false);
              }}
              className="flex items-center justify-between cursor-pointer p-2 sm:p-2.5 md:p-3 bg-white text-[#FF3B30] rounded-lg mt-2 sm:mt-3"
            >
              <h2 className="font-bold text-sm sm:text-base">{selectedRoutine}</h2>
              <ChevronDown
                className={`transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 ${
                  routineOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                routineOpen
                  ? "max-h-40 opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              }`}
            >
              <div className="rounded-lg border border-gray-200 mt-1 sm:mt-2">
                {days.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedRoutine(item.name);
                      setRoutineOpen(false);
                    }}
                    className={`bg-white text-black px-3 sm:px-3.5 md:px-4 py-2 sm:py-2.5 md:py-3 cursor-pointer hover:bg-gray-100 transition text-sm sm:text-base ${
                      index === days.length - 1 ? "rounded-b-lg" : ""
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Checkboxes */}
          <CustomCheckboxes />

          {/* Payment Method */}
          <div>
            <div className='mb-3 sm:mb-4'>
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-3 sm:mt-4 md:mt-5">
                Add Payment Information
              </h1>
              <p className="text-xs sm:text-[13px] md:text-sm text-gray-400 mt-1">
                Securely store your payment method for goal fees
              </p>
            </div>

            <form action="" className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Jhon Doe"
                className="bg-white w-full p-2 sm:p-2.5 md:p-3 rounded-lg text-black outline-0 text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="J959"
                className="bg-white w-full p-2 sm:p-2.5 md:p-3 rounded-lg text-black outline-0 text-sm sm:text-base"
              />
              <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4 justify-between gap-3 sm:gap-0">
                <input
                  type="text"
                  placeholder="5/27/15"
                  className="bg-white w-full sm:w-[49%] p-2 sm:p-2.5 md:p-3 rounded-lg text-black outline-0 text-sm sm:text-base"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="bg-white w-full sm:w-[49%] p-2 sm:p-2.5 md:p-3 rounded-lg text-black outline-0 text-sm sm:text-base"
                />
              </div>
              <Link href='/NewGoal'>
              <button className="flex-1 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-lg bg-gradient-to-r from-[#F25758] to-[#E04C6B] text-white w-full text-sm sm:text-base">
                Verify Payment Information
              </button>
              </Link>
            </form>
          </div>

          {/* Calendar Sync */}
          <div>
            <div className='mb-3 sm:mb-4'>
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-3 sm:mt-4 md:mt-5">
                Sync With Personal Calendar
              </h1>
              <p className="text-xs sm:text-[13px] md:text-sm text-gray-400 mt-1">
                Authorize the app to access your calendar for deadline reminders
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5'>
              <button className='bg-white text-black p-2 sm:p-2.5 md:p-3 rounded-lg px-3 sm:px-4 md:px-5 font-bold text-sm sm:text-base w-full sm:w-auto'>
                Google Calendar
              </button>
              <button className='bg-white text-black p-2 sm:p-2.5 md:p-3 rounded-lg px-3 sm:px-4 md:px-5 font-bold text-sm sm:text-base w-full sm:w-auto'>
                Sync with Outlook
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}