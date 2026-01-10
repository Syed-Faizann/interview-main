"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import LogoutModal from "./components/dashboard/LogoutModal";
import MyGoals from "./components/dashboard/MyGoals";
import Notifications from "./components/dashboard/Notifications";
import Settings from "./components/dashboard/Settings";
import { useRouter } from "next/navigation";

export default function Home() {
  const [activeView, setActiveView] = useState("My Goals");
  const [showLogout, setShowLogout] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // 🔥 clear auth here
    localStorage.removeItem("token");
    router.push("/login");
  };

  const renderContent = () => {
    switch (activeView) {
      case "Notifications":
        return <Notifications />;
      case "Settings":
        return <Settings />;
      default:
        return <MyGoals />;
    }
  };

  return (
    <>
      {/* Logout Modal */}
      <LogoutModal
        open={showLogout}
        onClose={() => setShowLogout(false)}
        onConfirm={handleLogout}
      />

      {/* Desktop Navbar */}
      <div className="hidden lg:block">
        <Navbar
          activeView={activeView}
          setActiveView={setActiveView}
          onLogout={() => setShowLogout(true)}
        />
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <ResponsiveNavbar
          activeView={activeView}
          setActiveView={setActiveView}
          onLogout={() => setShowLogout(true)}
        />
      </div>

      <main className="min-h-screen bg-[linear-gradient(169.02deg,_#0F1B26_3.46%,_#161422_23.22%)] text-white lg:pl-40 pb-32">
        <section className="max-w-5xl mx-auto py-12 px-4 space-y-8">
          {renderContent()}
        </section>
      </main>
    </>
  );
}
