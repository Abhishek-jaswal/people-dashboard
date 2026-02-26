import { avatarColors } from "../constants/colors";

/**
 * Circular avatar showing initials with a gradient background.
 * Each employee gets a unique gradient based on their id.
 */
function Avatar({ id, name, size = 70 }) {
    const [bg1, bg2] = avatarColors[(id - 1) % avatarColors.length];
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2);

    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${bg1}, ${bg2})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: size * 0.27,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: 1,
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {initials}
            {/* subtle shadow at bottom for depth */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "35%",
                    background: "rgba(0,0,0,0.15)",
                }}
            />
        </div>
    );
}

export default Avatar;
