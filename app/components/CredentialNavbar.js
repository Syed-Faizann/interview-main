"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../assets/logo.svg";
import england from "../assets/England.svg";
import germany from "../assets/Germany.svg";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
export default function CredentialNavbar({
  showLanguage = true,
  actionText = "Register",
}) {
  const [open, setOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState({
    name: "English",
    flag: england,
  });

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#211E32] rounded-xl">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link href="/">
        <Image src={logo} alt="Logo" width={90} height={90} />
        </Link>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4 relative">
        
        {/* Action Button */}
        {/* Action Button */}
<Link href={actionText === "Register" ? "/register" : "/login"}>
  <button className="px-4 py-2 rounded-md bg-gradient-to-r from-[#F25758] to-[#E04C6B] text-white text-sm">
    {actionText}
  </button>
</Link>


        {/* Language Selector */}
        {showLanguage && (
          <>
            <Image
              src={selectedLang.flag}
              alt={selectedLang.name}
              width={30}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center text-white"
            >
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute right-0 top-14 w-36 bg-[#1b1b2d] rounded-md shadow-lg overflow-hidden z-50">
                <button
                  onClick={() =>
                    handleSelect({ name: "English", flag: england })
                  }
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-white/10 text-white"
                >
                  <Image src={england} width={24} alt="English" />
                  English
                </button>

                <button
                  onClick={() =>
                    handleSelect({ name: "German", flag: germany })
                  }
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-white/10 text-white"
                >
                  <Image src={germany} width={24} alt="German" />
                  German
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
