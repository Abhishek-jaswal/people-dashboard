import { useState } from "react";
import Avatar from "./Avatar";

/**
 * Card for a single employee.
 * - Blue dashed border  → selected (blue)
 * - Red solid border    → selected (red)
 * - Hover lift effect
 * - Skill dots at the bottom
 */
function EmployeeCard({ emp, selected, onSelect, small }) {
    const [hovered, setHovered] = useState(false);

    const isBlue = selected === "blue";
    const isRed = selected === "red";
    const avatarSize = small ? 54 : 68;

    const borderColor = isBlue
        ? "#4D96FF"
        : isRed
            ? "#FF4D4D"
            : hovered
                ? "#c3d5f8"
                : "#edf0f7";

    const bgColor = isBlue
        ? "rgba(77,150,255,0.05)"
        : isRed
            ? "rgba(255,77,77,0.04)"
            : hovered
                ? "#f7faff"
                : "#fff";

    return (
        <div
            onClick={() => onSelect(emp.id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: bgColor,
                border: `${isBlue || isRed ? 2 : 1.5}px solid ${borderColor}`,
                borderRadius: 13,
                padding: small ? "14px 8px 12px" : "18px 12px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 7,
                cursor: "pointer",
                transition: "all 0.18s",
                position: "relative",
                boxShadow: hovered
                    ? "0 6px 24px rgba(77,150,255,0.1)"
                    : "0 1px 4px rgba(0,0,0,0.04)",
                transform: hovered ? "translateY(-2px)" : "none",
            }}
        >
            {/* Dashed overlay for blue selection */}
            {isBlue && (
                <div
                    style={{
                        position: "absolute",
                        inset: -1,
                        borderRadius: 13,
                        border: "1.5px dashed #4D96FF",
                        pointerEvents: "none",
                    }}
                />
            )}

            {/* Avatar + role icon badge */}
            <div style={{ position: "relative" }}>
                <Avatar id={emp.id} name={emp.name} size={avatarSize} />
                <div
                    style={{
                        position: "absolute",
                        bottom: 1,
                        right: 1,
                        background: "rgba(18,18,30,0.88)",
                        borderRadius: "50%",
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                    }}
                >
                    {emp.icon}
                </div>
            </div>

            {/* Name & role */}
            <div style={{ textAlign: "center" }}>
                <div
                    style={{
                        fontWeight: 600,
                        fontSize: small ? 11.5 : 13,
                        color: "#111827",
                        lineHeight: 1.3,
                    }}
                >
                    {emp.name}
                </div>
                <div style={{ fontSize: small ? 10 : 11.5, color: "#9ca3af", marginTop: 2 }}>
                    {emp.role}
                </div>
            </div>

            {/* Skill dots */}
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
                {emp.dots.map((color, i) => (
                    <div
                        key={i}
                        style={{ width: 7, height: 7, borderRadius: "50%", background: color }}
                    />
                ))}
            </div>
        </div>
    );
}

export default EmployeeCard;
