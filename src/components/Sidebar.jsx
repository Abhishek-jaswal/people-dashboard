import { ChevronLeft, Settings } from "lucide-react";
import { navItems } from "../data/navItems";

export default function Sidebar({ collapsed, onToggle, activeNav, onNavClick }) {
    return (
        <div style={{
            display: "flex", flexDirection: "column", height: "100%",
            background: "#3D3936", borderRadius: 16, overflow: "hidden",
        }}>
            {/* Logo */}
            {/* // The logo section at the top of the sidebar includes a toggle button that allows users to collapse or expand the sidebar. When the sidebar is collapsed, only the logo icon is shown, and when expanded, the full "CORE" text is displayed alongside the toggle button. The toggle button uses a ChevronLeft icon that rotates based on the collapsed state to indicate the action of collapsing or expanding the sidebar. */}
            <div style={{
                height: 56, display: "flex", alignItems: "center",
                justifyContent: collapsed ? "center" : "space-between",
                padding: collapsed ? "0" : "0 16px",
            }}>
                {!collapsed && (
                    <img src="/logo.png" alt="Logo" style={{ width: 100, height: 26 }} />
                )}
                <button onClick={onToggle} style={{
                    background: "rgba(255,255,255,0.08)", border: "none", cursor: "pointer",
                    width: 28, height: 28, borderRadius: 7,
                    display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                    <ChevronLeft
                        size={13}
                        color="#eaedf1"
                        style={{
                            transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.28s",
                        }}
                    />
                </button>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, padding: "10px 0", overflowY: "auto" }}>
                {navItems.map(({ label, icon: Icon, arrow }) => {
                    const active = activeNav === label;
                    return (
                        <div key={label} onClick={() => onNavClick(label)}
                            title={collapsed ? label : ""}
                            style={{
                                display: "flex", alignItems: "center",
                                justifyContent: collapsed ? "center" : "space-between",
                                padding: collapsed ? "12px 0" : "10px 14px",
                                margin: "4px 8px", borderRadius: 14,
                                cursor: "pointer",
                                background: active ? "#FFFFFF" : "transparent",
                                transition: "all 0.15s",
                            }}>
                            <div style={{ display: "flex", alignItems: "center", gap: collapsed ? 0 : 10 }}>
                                <Icon size={15} color={active ? "#3D3936" : "#FFFFFF"} />
                                {!collapsed && (
                                    <span style={{
                                        fontSize: 12.5, whiteSpace: "nowrap",
                                        fontWeight: active ? 600 : 400,
                                        color: active ? "#3D3936" : "#FFFFFF",
                                    }}>{label}</span>
                                )}
                            </div>

                            {!collapsed && arrow && (
                                <ChevronLeft size={11} color="#6b7280" style={{ transform: "rotate(180deg)" }} />
                            )}
                        </div>
                    );
                })}
            </nav>

            {/* Settings */}
            <div style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                padding: collapsed ? "14px 0" : "14px 16px",
                display: "flex", justifyContent: collapsed ? "center" : "flex-start",
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                    <Settings size={15} color="#9ca3af" />
                    {!collapsed && <span style={{ fontSize: 12.5, color: "#9ca3af" }}>Settings</span>}
                </div>
            </div>
        </div>
    );
}