import React from "react";
// import Image from "next/image";
import {
    Home,
    User,
    Users,
    Settings,
    UserPlus,
    Briefcase,
    UserCircle,
    ChartPie,
} from "lucide-react";

// Navigation items
const navItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: User, label: "My Info", id: "myinfo", badge: "›" },
    { icon: Users, label: "People", id: "people" },
    { icon: UserCircle, label: "Team Management", id: "team", badge: "›" },
    { icon: Briefcase, label: "Project Setup", id: "projects", badge: "›" },
    { icon: UserPlus, label: "Hiring", id: "hiring" },
    { icon: ChartPie, label: "Report", id: "report" },
];

export default function Sidebar({
    activeItem,
    setActiveItem,
    mobileOpen,
    onClose,
}) {
    return (
        <>
            {/* ====== MOBILE OVERLAY ====== */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* ====== SIDEBAR WRAPPER ====== */}
            <aside
                className={`
          fixed z-30
          lg:static
          transition-all duration-300
          ${mobileOpen ? "translate-x-0" : "max-lg:-translate-x-[320px]"}
        `}
                style={{
                    width: "280px",
                    minWidth: "280px",
                    height: "992px",
                    maxHeight: "calc(100vh - 32px)",
                    background: "#3D3936",
                    borderRadius: "20px",
                    top: "16px",
                    left: "16px",
                    paddingTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                }}
            >
                {/* ====== LOGO TOP ====== */}
                <div style={{ paddingLeft: "20px", paddingBottom: "20px" }}>
                    {/* <Image
                        src="/logo.png"
                        alt="Logo"
                        width={95}
                        height={40}
                        style={{ objectFit: "contain" }}
                    /> */}
                    he
                </div>

                {/* ====== NAVIGATION LIST ====== */}
                <div
                    style={{
                        padding: "0 20px",
                        flex: 1,
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                    }}
                >
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveItem(item.id);
                                    if (onClose) onClose();
                                }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    padding: "12px 16px",
                                    gap: "12px",
                                    borderRadius: "12px",
                                    background: isActive ? "#FFF" : "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                {/* Left Icon */}
                                <Icon
                                    size={18}
                                    color={
                                        isActive ? "rgba(12,12,12,0.6)" : "rgba(255,255,255,0.5)"
                                    }
                                    strokeWidth={isActive ? 2 : 1.5}
                                />

                                {/* Label */}
                                <span
                                    style={{
                                        flex: 1,
                                        fontSize: "14px",
                                        fontWeight: isActive ? 600 : 400,
                                        color: isActive ? "rgba(12,12,12,0.6)" : "#ffffff80",
                                    }}
                                >
                                    {item.label}
                                </span>

                                {/* Right Arrow (badge) */}
                                {item.badge && (
                                    <span
                                        style={{
                                            color: "#ffffff80",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.badge}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* ====== SETTINGS SECTION (BOTTOM) ====== */}
                <div
                    style={{
                        padding: "10px 20px",
                        margin: "16px",
                        borderRadius: "16px",
                        border: "1px solid #FFFFFF1A",
                    }}
                >
                    <button
                        className="flex items-center gap-3"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                        <Settings size={16} />
                        <span>Settings</span>
                    </button>
                </div>
            </aside>
        </>
    );
}