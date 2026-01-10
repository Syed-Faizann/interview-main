import GoalTabs from "../../components/ui/GoalTabs";
import StatusDropdown from "../../components/ui/StatusDropdown";
import DateTimePill from "../../components/ui/DateTimePill";
import CalendarPopup from "../../components/ui/CalendarPopup";
import ProgressCard from "../../components/ui/ProgressCard";
import { MessageCircle, Link, ChevronDown } from "lucide-react";
import NextLink from "next/link";
import React, { useState, useRef, useEffect } from "react";

const cards = [
  {
    task: "Jog 3 km on",
    body: "Body text",
    button: "Submit Proof",
    detail: "View Details",
    icon: <Link size={16} />,
  },
  {
    task: "Jog 3 km on",
    body: "Body text",
    button: "Rejected",
  },
];

const milestones = [
  { text: "jog 3 km on 18 October", butt: "Submit Proof" },
  { text: "Eat low-calorie lunch", butt: "Rejected" },
];

// Rejection Modal Component
function RejectionModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1a1d2e] rounded-xl w-80 md:w-lg p-4 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-2">Reason for Rejection</h2>

        <img
          src="/mnt/data/34b14a9f-0857-49fc-b55d-e4a2f8395878.png"
          alt="Rejection"
          className="w-full h-32 object-cover rounded-md mb-3"
        />

        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur. Facilisis facilisi nisi
          consectetur mattis ultricies mauris sed. Maladseuctas vestibulum
          dictum lorem viverra. Et urna sit feugiat mus nunc. Aliquet amet eu
          sagittis tempus euismod. Non sod urna quis aliquet dignissim.
        </p>

        <button
          className="mt-4 w-full bg-[#E04C6B] py-2 rounded-lg text-sm"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function MyGoals() {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2024-10-18T18:00:00")
  );
  const [openCalendarIndex, setOpenCalendarIndex] = useState(null);
  const [milestonesOpen, setMilestonesOpen] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setOpenCalendarIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="py-4 pt-6 md:pt-8">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome!</h1>
        <p className="text-white/70 text-sm">Stay on track with your goals</p>
      </div>

      {/* My Goals */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">My Goals</h2>
        <NextLink href="/CreateGoal">
          <button className=" bg-gradient-to-r from-[#F25758] to-[#E04C6B] px-5 py-2 rounded-full text-sm w-full md:w-auto">
            + Create New Goal
          </button>
        </NextLink>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="w-full md:w-auto">
          <GoalTabs />
        </div>
        <div className="w-full md:w-auto relative z-40">
          <StatusDropdown />
        </div>
      </div>

      {/* Individual Goals */}
      <h2 className="text-2xl font-bold">Individual Goal</h2>

      {cards.map((item, index) => (
        <div
          key={index}
          className="bg-[#211E32] rounded-xl p-4 space-y-4 relative"
        >
          {/* Title */}
          <div className="pl-3 text-xl flex flex-col md:flex-row md:items-center justify-between gap-3">
            <span>
              {item.task} {selectedDate.toLocaleDateString("en-GB")}
            </span>
            <ProgressCard progress={60} />
          </div>

          {/* Date Pill */}
          <DateTimePill
            date={selectedDate}
            onClick={() =>
              setOpenCalendarIndex(openCalendarIndex === index ? null : index)
            }
          />

          {/* Calendar */}
          {openCalendarIndex === index && (
            <div ref={calendarRef}>
              <CalendarPopup
                selected={selectedDate}
                onSelect={(date) => {
                  if (date) {
                    setSelectedDate(date);
                    setOpenCalendarIndex(null);
                  }
                }}
              />
            </div>
          )}

          <p className="text-[13px] text-gray-400 pl-3">{item.body}</p>

          <div className="pl-3 flex flex-col md:flex-row items-start md:items-center gap-4">
            {item.button === "Rejected" ? (
              <button
                className="bg-[#B32B49] px-4 py-2 rounded-lg flex gap-2 text-sm w-full md:w-auto justify-center"
                onClick={() => setShowRejectionModal(true)}
              >
                <MessageCircle size={16} />
                Rejected
              </button>
            ) : (
              <button className=" bg-gradient-to-r from-[#F25758] to-[#E04C6B] px-4 py-2 rounded-lg text-sm w-full md:w-auto">
                {item.button}
              </button>
            )}

            {item.detail && (
              <span className="text-sm text-gray-400 flex items-center gap-2 cursor-pointer justify-center md:justify-start mt-2 md:mt-0">
                {item.detail}
                {item.icon}
              </span>
            )}
          </div>
        </div>
      ))}

      {/* Milestone Goal */}
      <h2 className="text-2xl font-bold">Milestone Goal</h2>

      <div className="bg-[#211E32] rounded-xl p-4 space-y-4">
        <div className="pl-3 text-xl flex flex-col md:flex-row md:items-center justify-between gap-3 font-bold">
          <span>jog 3 km on 18 October</span>
          <ProgressCard progress={60} />
        </div>

        <div className="bg-[#171428] rounded-xl p-4 space-y-4">
          {/* Header with toggle */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setMilestonesOpen(!milestonesOpen)}
          >
            <h2 className="font-bold text-lg">Milestones</h2>
            <ChevronDown
              className={`transition-transform duration-300 ${
                milestonesOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Smooth animated container */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              milestonesOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            {milestones.map((task, index) => (
              <div key={index} className="bg-[#211E32] rounded-xl p-4 mt-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="pl-3 flex flex-col gap-3 font-bold">
                    <span>{task.text}</span>

                    <DateTimePill
                      date={selectedDate}
                      onClick={() =>
                        setOpenCalendarIndex(
                          openCalendarIndex === `m-${index}`
                            ? null
                            : `m-${index}`
                        )
                      }
                    />

                    {openCalendarIndex === `m-${index}` && (
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

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    {task.butt !== "Rejected" && <ProgressCard progress={60} />}

                    <button
                      className={`px-4 py-2 text-sm w-full md:w-auto ${
                        task.butt === "Rejected"
                          ? "bg-[#B32B49] rounded-lg"
                          : "bg-[#E04C6B] rounded-lg"
                      }`}
                      onClick={() =>
                        task.butt === "Rejected" && setShowRejectionModal(true)
                      }
                    >
                      {task.butt}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional view details link */}
          <span className="text-sm text-gray-400 flex items-center gap-2 cursor-pointer mt-2 justify-center md:justify-start">
            View Details
            <Link />
          </span>
        </div>
      </div>

      {/* Rejection Modal */}
      <RejectionModal
        isOpen={showRejectionModal}
        onClose={() => setShowRejectionModal(false)}
      />
    </>
  );
}
