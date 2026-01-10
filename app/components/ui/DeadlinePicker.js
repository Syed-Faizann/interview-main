"use client"

import { useState } from "react"
import { Calendar, Clock } from "lucide-react"

export default function DeadlinePicker() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  return (
    <div className="mt-4">
      <h2 className="text-sm font-semibold mb-2 sm:text-base md:text-lg">Deadline</h2>

      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        {/* Date - Takes full width on mobile, half on larger screens */}
        <div className="w-full sm:flex-1">
          <label className="text-xs text-gray-400 mb-1 block sm:text-sm md:text-base">Date</label>
          <div className="relative">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="
                w-full
                bg-white
                text-black
                rounded-lg
                border
                border-gray-300
                px-4
                py-3
                sm:px-3
                sm:py-2
                md:px-4
                md:py-3
                pr-10
                text-sm
                sm:text-base
                focus:outline-none
                focus:ring-2
                focus:ring-[#E04C6B]
                focus:border-transparent
                [&::-webkit-calendar-picker-indicator]:opacity-0
                hover:border-gray-400
                transition-colors
                duration-200
                min-h-[48px]
                sm:min-h-[44px]
                md:min-h-[48px]
              "
            />
            <Calendar
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-[#E04C6B]
                pointer-events-none
                w-5 h-5
                sm:w-4 sm:h-4
                md:w-5 md:h-5
              "
            />
          </div>
        </div>

        {/* Time - Takes full width on mobile, half on larger screens */}
        <div className="w-full sm:flex-1">
          <label className="text-xs text-gray-400 mb-1 block sm:text-sm md:text-base">Time</label>
          <div className="relative">
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="
                w-full
                bg-white
                text-black
                rounded-lg
                border
                border-gray-300
                px-4
                py-3
                sm:px-3
                sm:py-2
                md:px-4
                md:py-3
                pr-10
                text-sm
                sm:text-base
                focus:outline-none
                focus:ring-2
                focus:ring-[#E04C6B]
                focus:border-transparent
                [&::-webkit-calendar-picker-indicator]:opacity-0
                hover:border-gray-400
                transition-colors
                duration-200
                min-h-[48px]
                sm:min-h-[44px]
                md:min-h-[48px]
              "
            />
            <Clock
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-[#E04C6B]
                pointer-events-none
                w-5 h-5
                sm:w-4 sm:h-4
                md:w-5 md:h-5
              "
            />
          </div>
        </div>
      </div>

      {/* Helper text for mobile users */}
      <p className="text-xs text-gray-500 mt-2 sm:hidden">
        Pick a date and time for your deadline
      </p>
    </div>
  )
}