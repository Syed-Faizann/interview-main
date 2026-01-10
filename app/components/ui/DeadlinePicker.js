"use client"

import { useState } from "react"
import { Calendar, Clock } from "lucide-react"

export default function DeadlinePicker() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  return (
    <div className="mt-4">
      <h2 className="text-sm font-semibold mb-2">Deadline</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Date */}
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Date</label>
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
                px-3 py-2 pr-10
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-[#E04C6B]
                [&::-webkit-calendar-picker-indicator]:opacity-0
              "
            />
            <Calendar
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E04C6B] pointer-events-none"
            />
          </div>
        </div>

        {/* Time */}
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Time</label>
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
                px-3 py-2 pr-10
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-[#E04C6B]
                [&::-webkit-calendar-picker-indicator]:opacity-0
              "
            />
            <Clock
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E04C6B] pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
