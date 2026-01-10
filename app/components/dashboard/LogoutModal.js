"use client";

import { LogOut, X } from "lucide-react";

export default function LogoutModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      
      <div className="relative w-full max-w-md bg-[#1e1b3a] rounded-2xl p-6 text-center shadow-xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/70 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="relative bottom-13 w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff5b6a] flex items-center justify-center">
          <LogOut size={26} className="text-white" />
        </div>

        <h2 className="text-xl font-semibold text-white mb-6">
          Are you sure you want to logout?
        </h2>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-md bg-[#ff5b6a] text-white hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
