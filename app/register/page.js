import CredentialNavbar from "../components/CredentialNavbar"
import React from 'react'
import Link from "next/link";
export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(169.02deg,_#0F1B26_3.46%,_#161422_23.22%)] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="w-full max-w-5xl rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl mx-auto">
        
        {/* Top Navbar */}
        <CredentialNavbar showLanguage={false} actionText="Login" />

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 text-center">
            Get Started!
          </h1>
          <p className="text-gray-400 mb-6 sm:mb-8 text-center text-sm sm:text-base max-w-2xl">
            Beat procrastination and achieve your goals with a financial boost!
          </p>

          {/* Login Card */}
          <div className="w-full max-w-lg lg:max-w-xl bg-[#211E32] backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8">
            <form className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Darrell Steward"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white text-black outline-none text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="DarrellSteward@gmail.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white text-black outline-none text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1 sm:mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white text-black outline-none text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 sm:py-3 rounded-md bg-gradient-to-r from-[#F25758] to-[#E04C6B] text-white font-semibold hover:opacity-90 transition text-sm sm:text-base"
              >
                Log In
              </button>
            </form>
        <Link href="/forget">
            <div className="mt-4 sm:mt-6 ">
              <p className="text-sm text-purple-500 hover:underline">
                Forgot password?
              </p>
            </div>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
}