'use client'
import { useState } from 'react'

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`
        relative inline-flex h-7 w-13 items-center rounded-full
        transition-colors duration-300
        ${enabled ? 'bg-red-500' : 'bg-gray-300'}
      `}
      aria-pressed={enabled}
    >
      <span
        className={`
          inline-block h-5 w-5 transform rounded-full bg-white
          transition-transform duration-300
          ${enabled ? 'translate-x-6' : 'translate-x-1'}
        `}
      />
    </button>
  )
}
