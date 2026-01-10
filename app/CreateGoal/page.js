"use client";
import React, { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Image from "next/image";
import ConfirmationCheckbox from "../components/ui/ConfirmationCheck";
import logo from "../assets/logo.png";
import GoalTab from "../components/ui/GoalUi/GoalTab";
import DeadlinePicker from "../components/ui/DeadlinePicker";
import AmountSelect from "../components/ui/AmountSelect";
import ToggleSwitch from "../components/ui/ToggleButton";
import Link from "next/link";
import logo2 from "../assets/logo.svg";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedProof, setSelectedProof] = useState("Milestones");
  const [amount, setAmount] = useState("25€");
  const [goalType, setGoalType] = useState("personal");

  // Add these missing state variables
  const [syncCalendar, setSyncCalendar] = useState(false);
  const [receiveReminders, setReceiveReminders] = useState(false);

  const options = [
    { name: "Photo Upload" },
    { name: "File Upload" },
    { name: "Video Upload" },
    { name: "Text / Link Submission" },
  ];

  const check = [
    { text: "Sync with my calendar" },
    { text: "Receive Reminder before the deadline" },
  ];

  const [confirmations, setConfirmations] = useState({
    effort: false,
    measurable: false,
  });

  return (
    <div className="min-h-screen bg-[linear-gradient(169.02deg,_#0F1B26_3.46%,_#161422_23.22%)]">
      {/* Responsive header container */}
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
              src={logo2}
              alt="logo"
            />
          </Link>
          <div className="w-10" /> {/* Spacer for balance */}
        </header>
      </div>

      {/* Responsive main content */}
      <main
        className="
        w-full max-w-3xl mx-auto 
        px-4 sm:px-6 md:px-8 lg:px-20 
        mt-8 sm:mt-10 md:mt-12 lg:mt-14
        bg-[#171428] rounded-2xl p-4 md:p-6
        shadow-[0_25px_60px_-15px_rgba(1,1,1,0.8)]
      "
      >
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Create a New Goal
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            What do you want to achieve?
          </p>
        </div>

        {/* Goal Type Section */}
        <div className="bg-[#211E32] rounded-xl p-4 md:p-6 mt-4 md:mt-6">
          <h1 className="text-base sm:text-lg md:text-xl font-bold">
            Selected Goal Type
          </h1>

          <div className="mt-3 md:mt-4">
            <GoalTab goalType={goalType} setGoalType={setGoalType} />
          </div>
          <div className="mt-4">
            <form className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              {/* Goal Title */}
              <div>
                <label className="text-xs sm:text-sm md:text-base text-gray-400">
                  Goal Title
                </label>
                <input
                  type="text"
                  placeholder="Medical Assistant"
                  className="border w-full p-2 sm:p-3 rounded-xl bg-white text-black text-sm sm:text-base mt-1"
                />
              </div>

              {/* Goal Description */}
              <div>
                <label className="text-xs sm:text-sm md:text-base text-gray-400">
                  Goal Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis ipsam quasi quo hic distinctio in unde dignissimos delectus ipsum!"
                  className="border w-full p-2 sm:p-3 rounded-xl bg-white text-black text-sm sm:text-base mt-1"
                />
              </div>

              {/* Proof Requirement */}
              <div>
                <label className="text-xs sm:text-sm md:text-base text-gray-400">
                  Proof Requirement
                </label>

                {/* Toggle */}
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-between cursor-pointer p-2 sm:p-3
                         bg-white text-red-500 rounded-lg mt-1"
                >
                  <h2 className="font-bold text-sm sm:text-base md:text-lg">
                    {selectedProof}
                  </h2>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown Options */}
                {open && (
                  <div className="overflow-hidden rounded-lg border border-gray-200 mt-1">
                    {options.map((item, index) => {
                      const isFirst = item.name === "Photo Upload";
                      const isLast = index === options.length - 1;

                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedProof(item.name);
                            setOpen(false);
                          }}
                          className={`bg-white text-black px-3 sm:px-4 py-2 sm:py-3 cursor-pointer
                          hover:bg-gray-100 transition text-sm sm:text-base
                          ${isFirst ? "rounded-t-lg" : ""}
                          ${isLast ? "rounded-b-lg" : ""}
                        `}
                        >
                          {item.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* P Description */}
              <div>
                <label className="text-xs sm:text-sm md:text-base text-gray-400">
                  Goal Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis ipsam quasi quo hic distinctio in unde dignissimos delectus ipsum!"
                  className="border w-full p-2 sm:p-3 rounded-xl bg-white text-black text-sm sm:text-base mt-1"
                />
              </div>

              <DeadlinePicker />
            </form>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="bg-[#211E32] rounded-xl p-4 md:p-6 mt-4 md:mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-base sm:text-lg md:text-xl font-bold">
              Commitment Fee
            </h1>
            <div className="mt-2 sm:mt-0">
              <AmountSelect amount={amount} setAmount={setAmount} />
            </div>
          </div>

          <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
            {check.map((point, index) => (
              <div key={index} className="flex items-center justify-between">
                <h1 className="text-sm sm:text-base md:text-lg pr-2">
                  {point.text}
                </h1>
                <ToggleSwitch />
              </div>
            ))}
          </div>
        </div>

        {/* Custom Checkboxes */}
        <div className="rounded-xl p-4 md:p-6 mt-4 md:mt-6 space-y-3 md:space-y-4">
          <ConfirmationCheckbox
            label="Sync with my calendar"
            description="Automatically add deadline to your calendar"
            checked={syncCalendar}
            onChange={setSyncCalendar}
          />

          <ConfirmationCheckbox
            label="Receive reminders before the deadline"
            description="Get notifications as deadline approaches"
            checked={receiveReminders}
            onChange={setReceiveReminders}
          />
        </div>

        {/* Submit Button */}
        <Link
          href={{
            pathname: "/CreateGoal/milestone",
            query: { amount },
          }}
        >
          <button
            type="button"
            className="w-full mt-6 py-3 bg-gradient-to-r from-[#E04C6B] to-[#ff5b6a] text-white font-bold rounded-xl"
          >
            Submit Goal ({amount})
          </button>
        </Link>
      </main>
    </div>
  );
}
