import React from "react";
import { Edit } from "lucide-react";
import Link from "next/link";

export default function Settings() {
  return (
    <main className="w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 lg:py-8">
      <div className="bg-[#171428] rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-[0_10px_30px_-5px_rgba(1,1,1,0.6)] sm:shadow-[0_15px_40px_-8px_rgba(1,1,1,0.7)] md:shadow-[0_20px_50px_-12px_rgba(1,1,1,0.8)] flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="w-full sm:w-2/3 lg:w-3/4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
              Account Settings
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              Get your reminders and stay updated.
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Personal Info</h1>
        <div className="bg-[#322F43] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 w-full">
          <form action="" className="flex flex-col">
            <label htmlFor="" className="mb-2 sm:mb-3 text-gray-400 text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              placeholder="Jane Croper"
              className="bg-white p-2 sm:p-3 md:p-4 rounded-lg text-black outline-0 text-sm sm:text-base"
            />
            <label htmlFor="" className="mb-2 sm:mb-3 mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              placeholder="demo@gmail.com"
              className="bg-white p-2 sm:p-3 md:p-4 rounded-lg text-black outline-0 text-sm sm:text-base"
            />
            <div className="mb-2 sm:mb-3 mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
              <label htmlFor="" className="text-gray-400 text-sm sm:text-base">
                Password
              </label>
              <Link href="/forget">
                <button className="cursor-pointer text-red-500 text-xs sm:text-sm text-right sm:text-left">
                  Forget Password?
                </button>
              </Link>
            </div>
            <input
              type="password"
              placeholder="•••••••••••••••••••"
              className="bg-white p-2 sm:p-3 md:p-4 rounded-lg text-black outline-0 text-sm sm:text-base"
            />
          </form>
        </div>
        
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Payment Info</h1>

        <div className="bg-[#322F43] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 w-full">
          <form action="">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Card Details</h1>
            <input
              type="password"
              placeholder="•••••• ••••• ••••• ••••• 234"
              className="text-black bg-white w-full p-3 sm:p-4 md:p-5 rounded-lg mt-3 sm:mt-4 outline-0 text-sm sm:text-base"
            />
          </form>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4">
            <button className="flex gap-1 sm:gap-2 items-center justify-center text-xs sm:text-sm bg-[#171428] p-2 sm:p-3 px-3 sm:px-4 md:px-6 rounded-lg">
              <span>
                <Edit className="text-red-600 w-3 h-3 sm:w-4 sm:h-4" />
              </span>
              Edit
            </button>
            <button className="bg-[#d12b4f] p-2 sm:p-3 px-3 sm:px-4 md:px-6 rounded-lg text-xs sm:text-sm">
              Delete
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center sm:text-left">
            Configure Your Account preferences
          </h1>
          <Link href="/Payment">
          <button className="bg-gradient-to-r from-[#F25758] to-[#E04C6B] p-2 sm:p-3 px-4 sm:px-6 rounded-md text-sm sm:text-base whitespace-nowrap cursor-pointer">
            Configure
          </button>
          </Link>
        </div>
      </div>
    </main>
  );
}