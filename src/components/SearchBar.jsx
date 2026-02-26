/**
 * Search input + action buttons row.
 * On mobile only 3 action buttons are shown to save space.
 */
function SearchBar({ value, onChange, isMobile }) {
    const allButtons = [
        { icon: "⬇", tip: "Download" },
        { icon: "⚡", tip: "Filter" },
        { icon: "＋", tip: "Add" },
        { icon: "⊞", tip: "Grid", active: true },
        { icon: "≡", tip: "List" },
        { icon: "↑", tip: "Sort" },
    ];

    const buttons = isMobile ? allButtons.slice(0, 3) : allButtons;

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
                flexWrap: "wrap",
            }}
        >
            {/* Search input */}
            <div
                style={{
                    flex: 1,
                    minWidth: 160,
                    background: "#FFFFFF",
                    border: "1.5px solid #ede9e4",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    padding: "9px 13px",
                    gap: 8,
                }}
            >
                <span style={{ color: "#c4b8b0", fontSize: 14, flexShrink: 0 }}>Search</span>
                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={
                        isMobile ? "Search employees…" : "Search by Employee Name or Number"
                    }
                    style={{
                        border: "none",
                        outline: "none",
                        fontSize: 13,
                        color: "#c4b8b0",
                        background: "transparent",
                        flex: 1,
                        fontFamily: "'DM Sans', sans-serif",
                        minWidth: 0,
                    }}
                />
                {value && (
                    <span
                        onClick={() => onChange("")}
                        style={{
                            cursor: "pointer",
                            color: "#9ca3af",
                            fontSize: 13,
                            lineHeight: 1,
                            flexShrink: 0,
                        }}
                    >
                        ✕
                    </span>
                )}
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                {buttons.map((btn) => (
                    <button
                        key={btn.tip}
                        title={btn.tip}
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: "16px",
                            background: btn.active ? "#3D3936" : "#fafafa",
                            border: "1.5px solid #ede9e4",
                            color: btn.active ? "#fff" : "#6b7280",
                            fontSize: 13,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.15s",
                            flexShrink: 0,
                        }}
                    >
                        {btn.icon}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
