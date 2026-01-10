'use client'
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Target, Bell, Settings, LogOut } from "lucide-react";

export default function Navbar({ activeView, setActiveView, onLogout }) {
  const menuItems = [
    { icon: <Target size={18} />, label: "My Goals" },
    { icon: <Bell size={18} />, label: "Notifications" },
    { icon: <Settings size={18} />, label: "Settings" },
    { icon: <LogOut size={18} />, label: "Logout" },
  ];

  return (
    <aside className="fixed bottom-0 md:left-6 md:top-1/2 -translate-y-1/2 md:h-[85vh] w-[120px] bg-[#211E32] rounded-2xl flex md:flex-col items-center py-6 shadow-lg">
      
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <Image src={logo} alt="logo" width={100} height={100} className="rounded-full" />
       
      </div>

      {/* Menu */}
      <nav className="flex flex-col items-center gap-8 text-white/70">
      .
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeView === item.label}
            onClick={() =>
              item.label === "Logout"
                ? onLogout()
                : setActiveView(item.label)
            }
          />
        ))}
      </nav>
    </aside>
  );
}

function MenuItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center gap-2 cursor-pointer transition ${
        active ? "text-white" : "text-white/70"
      }`}
    >
      <div
        className={`${
          active
            ? "bg-[#ff5b6a] w-14 h-10 rounded-full flex items-center justify-center"
            : ""
        }`}
      >
        {icon}
      </div>
      <span className="text-xs">{label}</span>
    </div>
  );
}
