"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { ArrowLeft, ChevronDown, Delete } from "lucide-react";
import Image from "next/image";
import ConfirmationCheckbox from "../components/ui/ConfirmationCheck";
import logo from "../assets/logo.svg";
import GoalTab from "../components/ui/NewGoal";
import DeadlinePicker from "../components/ui/DeadlinePicker";
import AmountSelect from "../components/ui/AmountSelect";
import ToggleSwitch from "../components/ui/ToggleButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Page() {
    const router = useRouter();
  const [mile, setMile] = useState([
    { name: "MileStone1", icon: <Delete /> },
    { name: "MileStone2", icon: <Delete /> },
    { name: "MileStone3", icon: <Delete /> },
  ]);

  // Main goal states
  const [mainProofOpen, setMainProofOpen] = useState(false);
  const [selectedProof, setSelectedProof] = useState("Milestones");
  const [amount, setAmount] = useState("25€");
  const [goalType, setGoalType] = useState("personal");

  // Milestone dropdown states
  const [mileProofOpen, setMileProofOpen] = useState(
    Array(mile.length).fill(false)
  );
  const [selectedMileProof, setSelectedMileProof] = useState(
    Array(mile.length).fill("Select")
  );

  // Commitment & toggles
  const [syncCalendar, setSyncCalendar] = useState(false);
  const [receiveReminders, setReceiveReminders] = useState(false);

  // Add a state to track which milestone is open
  const [openMileIndex, setOpenMileIndex] = useState(null);

  // Delete milestone
  const handleDeleteMile = (index) => {
    const newMile = [...mile];
    newMile.splice(index, 1);
    setMile(newMile);

    // Close the form if the deleted milestone was open
    if (openMileIndex === index) setOpenMileIndex(null);
  };

  // Options
  const mainOptions = [
    { name: "Photo Upload" },
    { name: "File Upload" },
    { name: "Video Upload" },
    { name: "Text / Link Submission" },
  ];

  const mileOptions = [{ name: "demo1" }, { name: "demo2" }, { name: "demo3" }];

  const check = [
    { text: "Sync with my calendar" },
    { text: "Receive Reminder before the deadline" },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(169.02deg,_#0F1B26_3.46%,_#161422_23.22%)]">
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
            <Image
              className="w-24 md:w-30 lg:w-32 rounded-lg cursor-pointer"
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="w-10" /> {/* Spacer for balance */}
        </header>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-3xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 bg-[#171428] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 shadow-[0_10px_30px_-5px_rgba(1,1,1,0.6)] sm:shadow-[0_15px_40px_-8px_rgba(1,1,1,0.7)] md:shadow-[0_20px_50px_-12px_rgba(1,1,1,0.8)]">
        {/* Main Goal Section */}
        <div>
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">
            Create a New Goal
          </h1>
          <p className="text-xs xs:text-sm text-gray-400 mt-0.5 xs:mt-1">
            What do you want to achieve?
          </p>

          <div className="bg-[#211E32] rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 mt-3 xs:mt-4 sm:mt-5 md:mt-6">
            <h1 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold">
              Selected Goal Type
            </h1>
            <div className="mt-2 xs:mt-3 sm:mt-4">
              <GoalTab goalType={goalType} setGoalType={setGoalType} />
            </div>

            <form className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 space-y-2 xs:space-y-3 sm:space-y-4">
              <div>
                <label className="text-xs xs:text-sm md:text-base text-gray-400">
                  Goal Title
                </label>
                <input
                  type="text"
                  placeholder="Medical Assistant"
                  className="border w-full p-2 xs:p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white text-black text-xs xs:text-sm sm:text-base mt-0.5 xs:mt-1"
                />
              </div>

              <div>
                <label className="text-xs xs:text-sm md:text-base text-gray-400">
                  Goal Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Lorem ipsum dolor sit amet consectetur..."
                  className="border w-full p-2 xs:p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white text-black text-xs xs:text-sm sm:text-base mt-0.5 xs:mt-1"
                />
              </div>

              {/* Proof Requirement Dropdown */}
              <div>
                <label className="text-xs xs:text-sm md:text-base text-gray-400">
                  Proof Requirement
                </label>
                <div
                  onClick={() => setMainProofOpen(!mainProofOpen)}
                  className="flex items-center justify-between cursor-pointer p-2 xs:p-2.5 sm:p-3 bg-white text-red-500 rounded-lg mt-0.5 xs:mt-1"
                >
                  <h2 className="font-bold text-xs xs:text-sm sm:text-base md:text-lg">
                    {selectedProof}
                  </h2>
                  <ChevronDown
                    className={`transition-transform duration-300 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ${
                      mainProofOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Animated Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mainProofOpen
                      ? "max-h-60 opacity-100 scale-100 mt-1"
                      : "max-h-0 opacity-0 scale-95 mt-0"
                  }`}
                >
                  <div className="rounded-lg border border-gray-200">
                    {mainOptions.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedProof(item.name);
                          setMainProofOpen(false);
                        }}
                        className={`bg-white text-black px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-3 cursor-pointer hover:bg-gray-100 text-xs xs:text-sm sm:text-base ${
                          index === 0 ? "rounded-t-lg" : ""
                        } ${
                          index === mainOptions.length - 1 ? "rounded-b-lg" : ""
                        }`}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <DeadlinePicker />
            </form>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6">
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 xs:gap-0">
            <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold">
              Add Milestones (Sub-goals)
            </h1>
            <button className="
              p-2 xs:p-2.5 sm:p-3 md:p-3.5 
              bg-gradient-to-r from-[#F25758] via-[#E04C6B] to-[#FF6B7B] 
              text-white 
              rounded-lg sm:rounded-xl 
              text-sm xs:text-base sm:text-lg md:text-xl
              font-bold 
              hover:opacity-90 transition-all duration-200 
              active:scale-95 
              shadow-lg sm:shadow-xl 
              hover:shadow-xl sm:hover:shadow-2xl
              hover:brightness-110
              w-full xs:w-auto
              min-w-[140px] sm:min-w-[160px]
            ">
              + Add Milestone
            </button>
          </div>

          {mile.map((item, index) => (
            <div
              key={index}
              className="bg-[#211E32] rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 mt-2 xs:mt-3 sm:mt-4 md:mt-5"
            >
              <div className="flex items-center justify-between cursor-pointer">
                <h1
                  className="text-sm xs:text-base sm:text-lg font-bold mb-2 xs:mb-3"
                  onClick={() =>
                    setOpenMileIndex(openMileIndex === index ? null : index)
                  }
                >
                  {item.name}
                </h1>
                <Delete
                  className="text-red-400 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 hover:text-red-500 transition-colors cursor-pointer hover:scale-110 active:scale-95"
                  onClick={() => handleDeleteMile(index)}
                />
              </div>

              {/* Only show the form if this milestone is open */}
              {openMileIndex === index && (
                <form className="flex flex-col space-y-2 xs:space-y-3 pt-2 xs:pt-3">
                  <label className="text-xs xs:text-sm text-gray-400">
                    Sub-goal Title
                  </label>
                  <input
                    type="text"
                    placeholder="Value"
                    className="bg-white p-1.5 xs:p-2 sm:p-2.5 rounded-lg text-black outline-0 text-xs xs:text-sm focus:ring-2 focus:ring-[#E04C6B] focus:border-transparent"
                  />

                  <label className="text-xs xs:text-sm text-gray-400">
                    Set Sub-goal Deadline
                  </label>
                  <DeadlinePicker />

                  <label className="text-xs xs:text-sm text-gray-400 mt-2 xs:mt-3">
                    Goal Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Lorem ipsum dolor sit amet consectetur..."
                    className="bg-white p-1.5 xs:p-2 sm:p-2.5 rounded-lg text-black outline-0 text-xs xs:text-sm focus:ring-2 focus:ring-[#E04C6B] focus:border-transparent"
                  />

                  {/* Milestone Proof Requirement Dropdown */}
                  <div>
                    <label className="text-xs xs:text-sm md:text-base text-gray-400">
                      Proof Requirement
                    </label>
                    <div
                      onClick={() => {
                        const newOpen = [...mileProofOpen];
                        newOpen[index] = !newOpen[index];
                        setMileProofOpen(newOpen);
                      }}
                      className="flex items-center justify-between cursor-pointer p-1.5 xs:p-2 sm:p-2.5 bg-white text-red-500 rounded-lg mt-0.5 xs:mt-1"
                    >
                      <h2 className="font-bold text-xs xs:text-sm sm:text-base md:text-lg">
                        {selectedMileProof[index]}
                      </h2>
                      <ChevronDown
                        className={`transition-transform duration-300 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ${
                          mileProofOpen[index] ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mileProofOpen[index]
                          ? "max-h-40 opacity-100 scale-100 mt-1"
                          : "max-h-0 opacity-0 scale-95 mt-0"
                      }`}
                    >
                      <div className="rounded-lg border border-gray-200">
                        {mileOptions.map((opt, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              const newSelected = [...selectedMileProof];
                              newSelected[index] = opt.name;
                              setSelectedMileProof(newSelected);

                              const newOpen = [...mileProofOpen];
                              newOpen[index] = false;
                              setMileProofOpen(newOpen);
                            }}
                            className={`bg-white text-black px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-3 cursor-pointer hover:bg-gray-100 text-xs xs:text-sm sm:text-base ${
                              idx === 0 ? "rounded-t-lg" : ""
                            } ${
                              idx === mileOptions.length - 1
                                ? "rounded-b-lg"
                                : ""
                            }`}
                          >
                            {opt.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <label className="text-xs xs:text-sm text-gray-400 mt-2 xs:mt-3">
                    Proof Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Lorem ipsum dolor sit amet consectetur..."
                    className="bg-white p-1.5 xs:p-2 sm:p-2.5 rounded-lg text-black outline-0 text-xs xs:text-sm focus:ring-2 focus:ring-[#E04C6B] focus:border-transparent"
                  />
                </form>
              )}
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="bg-[#211E32] rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 mt-3 xs:mt-4 sm:mt-5 md:mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <h1 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold">
              Commitment Fee
            </h1>
            <div className="mt-1 xs:mt-2 sm:mt-0">
              <AmountSelect amount={amount} setAmount={setAmount} />
            </div>
          </div>

          <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 space-y-2 xs:space-y-3 sm:space-y-4">
            {check.map((point, index) => (
              <div key={index} className="flex items-center justify-between">
                <h1 className="text-xs xs:text-sm sm:text-base md:text-lg pr-1 xs:pr-2">
                  {point.text}
                </h1>
                <ToggleSwitch />
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation Checkboxes */}
        <div className="rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 mt-3 xs:mt-4 sm:mt-5 md:mt-6 space-y-2 xs:space-y-3 sm:space-y-4">
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
        <Link href={{ pathname: "/CreateGoal/milestone", query: { amount } }}>
          <button className="w-full mt-4 xs:mt-5 sm:mt-6 md:mt-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#E04C6B] to-[#ff5b6a] text-white font-bold rounded-lg sm:rounded-xl text-sm xs:text-base sm:text-lg">
            Submit Goal ({amount})
          </button>
        </Link>
      </main>
    </div>
  );
}