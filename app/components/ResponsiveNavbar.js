'use client'
import { Target, Bell, Settings, LogOut } from "lucide-react";

export default function ResponsiveNavbar({
  activeView,
  setActiveView,
  onLogout,      // ✅ add this
}) {
  const menuItems = [
    { icon: <Target size={22} />, label: "My Goals" },
    { icon: <Bell size={22} />, label: "Notifications" },
    { icon: <Settings size={22} />, label: "Settings" },
    { icon: <LogOut size={22} />, label: "Logout" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1a1733] border-t border-white/10 flex justify-around py-3 z-50">
      {menuItems.map((item) => {
        const isActive = activeView === item.label;

        return (
          <button
            key={item.label}
            onClick={() =>
              item.label === "Logout"
                ? onLogout()              // ✅ open modal
                : setActiveView(item.label)
            }
            className={`flex flex-col items-center gap-1 transition ${
              isActive ? "text-[#ff5b6a]" : "text-white/60"
            }`}
          >
            <div
              className={`p-2 rounded-full ${
                isActive ? "bg-[#ff5b6a]/20" : ""
              }`}
            >
              {item.icon}
            </div>
            <span className="text-[11px]">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
