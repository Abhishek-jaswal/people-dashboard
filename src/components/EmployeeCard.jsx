import { useState } from "react";

export default function EmployeeCard({ emp, selected, onSelect, small }) {
    const [hovered, setHovered] = useState(false);
    const isBlue = selected === "blue";
    const isRed = selected === "red";
    const imgSize = small ? 54 : 68;

    return (
        //  The card's background color changes based on the selected state (blue or red) and also shows a hover effect. 
        <div
            onClick={() => onSelect(emp.id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: isBlue ? "rgba(77,150,255,0.05)" : isRed ? "rgba(255,77,77,0.04)" : hovered ? "#f7faff" : "#fff",
                border: "1px solid #d8d5d577",
                borderRadius: 13,
                padding: small ? "14px 8px 12px" : "18px 12px 14px",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 7,
                cursor: "pointer", transition: "all 0.18s", position: "relative",
                boxShadow: hovered ? "0 6px 24px rgba(77,150,255,0.1)" : "0 1px 4px rgba(0,0,0,0.04)",
                transform: hovered ? "translateY(-2px)" : "none",
            }}>

            {/* Blue  border */}
            {isBlue && (
                <div style={{
                    position: "absolute", inset: -1, borderRadius: 13,
                    border: "1.5px solid #4D96FF", pointerEvents: "none",
                }} />
            )}

            {/* Image */}
            {/* // Note: The image source is generated using the employee ID to ensure each employee has a unique avatar.  */}
            <div>
                <img
                    src={`https://i.pravatar.cc/150?img=${emp.id + 10}`}
                    alt={emp.name}
                    style={{
                        width: imgSize, height: imgSize, borderRadius: "50%",
                        objectFit: "cover", display: "block",
                        border: "2px solid #edf0f7",
                    }}
                />
            </div>

            {/* Name */}
            {/* // Note: The name and role are wrapped in a div with textAlign center to ensure they are centered even if the card width changes due to the small prop. The font sizes also adjust based on the small prop for better readability on smaller cards. */}
            <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 600, fontSize: small ? 11.5 : 13, color: "#111827", lineHeight: 1.3 }}>
                    {emp.name}
                </div>
                <div style={{ fontSize: small ? 10 : 11.5, color: "#9ca3af", marginTop: 2 }}>
                    {emp.role}
                </div>
            </div>

            {/* Skill dots */}
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
                {emp.dots.map((c, i) => (
                    <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
                ))}
            </div>
        </div>
    );
}