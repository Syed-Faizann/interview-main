'use client'
export default function ProgressCard({ title, progress }) {
  return (
    <div className="w-30 ">
      {/* Title */}
      <p className="mb-4 text-sm text-gray-300">
        {title}
      </p>

      {/* Progress Bar */}
      <div className="h-4 w-full rounded-full bg-[#2f2e45] overflow-hidden">
        <div
          className="h-full rounded-full bg-teal-400 text-xs font-semibold flex items-center justify-center text-black transition-all duration-300"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
