import CredentialNavbar from "../components/CredentialNavbar"
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(169.02deg,_#0F1B26_3.46%,_#161422_23.22%)] px-3 sm:px-4 md:px-6 py-4 sm:py-6 lg:py-8">
      <div className="w-full max-w-5xl rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl mx-auto">
        
        {/* Top Navbar */}
        <CredentialNavbar showLanguage={true} actionText="Login" />
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Get Started!
          </h1>
          <p className="text-gray-400 mb-6 sm:mb-8 text-center text-sm sm:text-base max-w-2xl">
            Beat procrastination and achieve your goals with a financial boost!
          </p>

          {/* Login Card */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-[#211E32] backdrop-blur-md rounded-xl p-4 sm:p-5 md:p-6 lg:p-8">
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm text-gray-300 mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Darrell Steward"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white text-black outline-none text-sm sm:text-base"
                />
              </div>

              <div>
            
              </div>

              <button
                type="submit"
                className="w-full py-2 sm:py-3 rounded-md bg-gradient-to-r from-[#F25758] to-[#E04C6B] text-white font-semibold hover:opacity-90 transition text-sm sm:text-base"
              >
                Continue
              </button>
            </form>

          
          </div>
        </div>
      </div>
    </div>
  );
}