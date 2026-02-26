import React, { useState } from "react";
import {

    Bell,
    Menu,
    RefreshCw,
    Clock,
} from "lucide-react";

export default function Navbar({ onMenuToggle, viewMode, setViewMode }) {
    const [searchVal, setSearchVal] = useState("");

    return (
        <header
            className="w-full"
            style={{
                height: "80px",
                borderRadius: "20px",
                background: "#FFFFFF",
                padding: "0px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #E5E5E4",
            }}
        >
            {/* LEFT */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    flex: 1,
                }}
            >


                {/* Title */}
                <h2
                    style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        color: "#3D3936"
                    }}
                >
                    People
                </h2>


            </div>



            {/* RIGHT */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                }}
            >
                <span style={{
                    color: "#3D3936", fontSize: "14px"
                    , borderRadius: "16px", border: "1px solid #E5E5E4", padding: "10px 12px"
                }}>MST</span>
                {/* Time + MST (hide on mobile) */}
                <div className="hidden md:flex" style={{ alignItems: "center", gap: "10px", borderRadius: "16px", border: "1px solid #E5E5E4", padding: "10px 12px" }}>

                    <Clock size={18} color="#444" style={{ marginRight: "8px", }} />
                    <span style={{ fontSize: "14px" }}>02:03:02</span>
                </div>

                {/* Notification */}
                <button
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        border: "1px solid #E5E5E4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "white",
                        position: "relative",
                    }}
                >
                    <Bell size={18} color="#3D3936" />
                    <span
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "8px",
                            height: "8px",
                            background: "#FB8C3D",
                            borderRadius: "50%",
                            border: "1.5px solid white",
                        }}
                    />
                </button>

                {/* Avatar */}
                <img
                    src="https://i.pravatar.cc/300"
                    alt="avatar"
                    style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        cursor: "pointer",
                    }}
                />
            </div>
        </header>
    );
}