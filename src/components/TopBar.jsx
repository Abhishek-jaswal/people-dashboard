/**
 * Top navigation bar.
 * Shows page title, time, timezone badge, and user avatar.
 * On mobile it renders a hamburger menu button.
 */
function TopBar({ time, isMobile, onMenuClick }) {
    const formatted = time.toTimeString().slice(0, 8);

    return (
        <div
            style={{
                background: "#FFFFFF",
                border: "1px solid #f0ede8",
                padding: `0 ${isMobile ? 14 : 24}px`,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
                gap: 10,
                borderRadius: "16px ",
            }}
        >
            {/* Left — hamburger (mobile only) + page title */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

                <span style={{ fontSize: 15, fontWeight: 600, color: "#3D3936" }}>
                    People
                </span>
            </div>

            {/* Right — timezone, clock, avatar */}
            <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 8 : 14 }}>

                {/* Timezone badge — hidden on mobile */}
                {!isMobile && (
                    <div
                        style={{
                            background: "#f5f3f0",
                            borderRadius: "16px",
                            padding: "5px 11px",
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#6b7280",
                            letterSpacing: 0.5,
                        }}
                    >
                        MST
                    </div>
                )}

                {/* Live clock */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        background: "#f5f3f0",
                        borderRadius: "16px",
                        padding: "5px 11px",
                    }}
                >
                    <span style={{ fontSize: 13 }}>🕐</span>
                    <span
                        style={{
                            fontSize: isMobile ? 11 : 12,
                            fontWeight: 600,
                            color: "#374151",
                            letterSpacing: 1,
                            fontFamily: "'DM Sans', monospace",
                        }}
                    >
                        {formatted}
                    </span>
                </div>

                {/* Bell icon */}
                {!isMobile && (
                    <div
                        style={{
                            width: 34,
                            height: 34,
                            borderRadius: "16px",
                            background: "#f5f3f0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 15,
                            cursor: "pointer",
                        }}
                    >
                        🔔
                    </div>
                )}

                {/* User avatar — fixed: was a broken <img>, now a proper <div> */}
                <div
                    style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #3D3936, #7a6f68)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        color: "#fff",
                        fontWeight: 700,
                        flexShrink: 0,
                        cursor: "pointer",
                        border: "2px solid #e8e4e0",
                    }}
                >
                    A
                </div>
            </div>
        </div>
    );
}

export default TopBar;
