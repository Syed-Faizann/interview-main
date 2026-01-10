"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, Image } from "lucide-react";
import NextImage from "next/image";
import ProgressCard from "@/app/components/ui/ProgressCard";
import DateTimePill from "@/app/components/ui/DateTimePill";
import CalendarPopup from "@/app/components/ui/CalendarPopup";
import logo from "../../assets/logo.png";
import Link from "next/link";
import logo2 from "../../assets/logo.svg";
import { useRouter } from "next/navigation";
// import CommitmentFee from "@/app/components/ui/CommitmentFee";

const goals = [
  {
    heading: "Sub-goal 1",
    para: "Submit proof by October 19th, 6:00 AM",
    task: "In Progress",
    btn: "Upload Proof",
    scale: <ProgressCard progress={80} />,
  },
  {
    heading: "Sub-goal 2",
    para: "Submit proof by October 19th, 6:00 AM",
    task: "Pending",
    btn: "Upload Proof",
    scale: <ProgressCard progress={40} />,
  },
  {
    heading: "Sub-goal 3",
    para: "Submit proof by October 19th, 6:00 AM",
    task: "Pending",
    btn: "Upload Proof",
    scale: <ProgressCard progress={60} />,
  },
];

export default function Page() {
  const router = useRouter();
 
  const [selectedDate, setSelectedDate] = useState(
    new Date("2024-10-18T18:00:00")
  );
  const [openCalendarHeader, setOpenCalendarHeader] = useState(false);
  const [openCalendarIndex, setOpenCalendarIndex] = useState(null);

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
                <NextImage
                  className="w-24 md:w-30 lg:w-32 rounded-lg cursor-pointer"
                  src={logo2}
                  alt="logo"
                />
              </Link>
              <div className="w-10" /> {/* Spacer for balance */}
            </header>
          </div>

      {/* Main Content - Made responsive */}
      <main className="w-full max-w-3xl mt-4 sm:mt-6 md:mt-8 bg-[#322F43] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(1,1,1,0.8)] flex flex-col gap-4 sm:gap-6">
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
        <div className="bg-[#171428] rounded-xl p-4 sm:p-6 w-full">
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

          {/* Milestones - Made responsive */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-6 sm:mt-8">
            Milestones
          </h1>
          {goals.map((item, index) => (
            <div
              key={index}
              className="bg-[#211E32] rounded-xl p-4 sm:p-6 mt-4 w-full"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-base sm:text-lg md:text-xl font-semibold pl-0 sm:pl-3">
                    {item.heading}
                  </h1>
                  <div
                    ref={(el) => (calendarRefs.current[index] = el)}
                    className="relative mt-2 sm:mt-0"
                  >
                    <DateTimePill
                      date={selectedDate}
                      onClick={() =>
                        setOpenCalendarIndex(
                          openCalendarIndex === index ? null : index
                        )
                      }
                    />

                    {openCalendarIndex === index && (
                      <CalendarPopup
                        selected={selectedDate}
                        onSelect={(date) => {
                          if (date) {
                            setSelectedDate(date);
                            setOpenCalendarIndex(null);
                          }
                        }}
                      />
                    )}
                  </div>
                  <p className="pl-0 sm:pl-3 text-xs sm:text-sm md:text-base text-gray-300 mt-2">
                    {item.para}
                  </p>
                </div>

                <span
                  className={`font-bold p-1 text-xs sm:text-sm rounded-full px-2 sm:px-3 mt-2 sm:mt-0 ${
                    item.task === "In Progress"
                      ? "text-[#C49D00] bg-[#664F00]"
                      : "bg-gray-500 text-gray-300"
                  }`}
                >
                  {item.task}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4">
                <div className="w-full sm:w-auto">{item.scale}</div>

                <button
                  className={`p-2 sm:p-3 rounded-lg text-xs sm:text-sm cursor-pointer w-full sm:w-auto text-center ${
                    item.task === "In Progress"
                      ? "bg-gradient-to-r from-[#F25758] to-[#E04C6B] text-white"
                      : "bg-[#3F3C50] text-gray-300"
                  }`}
                >
                  {item.btn}
                </button>
              </div>
            </div>
          ))}

          {/* Commitment Fee - Made responsive */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-6">
            <h1 className="text-base sm:text-lg md:text-xl font-bold">
              Commitment Fee
            </h1>
            <h1 className="text-base sm:text-lg md:text-xl font-bold">
              50€
            </h1>
            {/* <CommitmentFee/> */}
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
<Link href={'/Upload'}>
        <button className="w-full text-sm sm:text-base md:text-lg cursor-pointer bg-gradient-to-r from-[#F25758] to-[#E04C6B] mt-4 p-3 sm:p-4 rounded-xl">
          Upload Proof (Entire Goal)
        </button>
</Link>
      </main>
    </div>
  );
}
