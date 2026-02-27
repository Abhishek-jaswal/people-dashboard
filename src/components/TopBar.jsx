import { Clock, Bell, Menu, FileText } from "lucide-react";

export default function TopBar({ time, isMobile, onMenuClick }) {
    const formatted = time.toTimeString().slice(0, 8);

    return (
        <div style={{
            background: "#FFFFFF", border: "1px solid #f0ede8",
            padding: `0 ${isMobile ? 14 : 24}px`, height: 56,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexShrink: 0, gap: 10, borderRadius: 16, marginBottom: 0,
        }}>

            {/* Left */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {isMobile && (
                    <button onClick={onMenuClick} style={{
                        background: "#f5f3f0", border: "1px solid #e5e7eb", cursor: "pointer",
                        width: 32, height: 32, borderRadius: 8,
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <Menu size={16} color="#3D3936" />
                    </button>
                )}
                <span style={{ fontSize: 15, fontWeight: 600, color: "#3D3936" }}>People</span>
            </div>

            {/* Right */}
            <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 8 : 12 }}>
                {!isMobile && (
                    <div style={{
                        background: "#f5f3f0", borderRadius: 12, padding: "5px 11px",
                        fontSize: 11, fontWeight: 600, color: "#6b7280", letterSpacing: 0.5,
                    }}>MST</div>
                )}

                <div style={{
                    display: "flex", alignItems: "center", gap: 6,
                    background: "#f5f3f0", borderRadius: 12, padding: "5px 11px",
                }}>
                    <Clock size={13} color="#6b7280" />
                    <span style={{
                        fontSize: isMobile ? 11 : 12, fontWeight: 600,
                        color: "#374151", letterSpacing: 1,
                    }}>{formatted}</span><FileText size={20} color="#6b7280" />
                </div>

                {!isMobile && (
                    <div style={{
                        width: 34, height: 34, borderRadius: 12, background: "#f5f3f0",
                        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                    }}>
                        <Bell size={15} color="#6b7280" />
                    </div>
                )}

                <img
                    src="topbar.jpg"
                    alt="User"
                    style={{
                        width: 36, height: 36, borderRadius: "50%",
                        objectFit: "cover", cursor: "pointer",
                        border: "2px solid #e8e4e0",
                    }}
                />
            </div>
        </div>
    );
}