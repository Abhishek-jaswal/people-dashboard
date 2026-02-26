import { navItems } from "../data/employees";

/**
 * Sidebar component.
 *
 * Props:
 *   collapsed       – desktop: icon-only mode
 *   onToggle        – called when the ◀ arrow is clicked
 *   activeNav       – currently selected nav label
 *   onNavClick      – called with label when a nav item is clicked
 */
function Sidebar({ collapsed, onToggle, activeNav, onNavClick }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#3D3936",
        borderRadius: "16px",

      }}
    >
      {/* ── Logo row ── */}
      <div
        style={{
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          padding: collapsed ? "0" : "0 16px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          flexShrink: 0,
        }}
      >
        {!collapsed && (
          <span
            style={{ fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: 3 }}
          >
            CORE
          </span>
        )}

        {/* Toggle arrow button */}
        <button
          onClick={onToggle}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "none",
            cursor: "pointer",
            width: 28,
            height: 28,
            borderRadius: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#9ca3af",
              fontSize: 12,
              display: "block",
              transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.28s",
            }}
          >
            ◀
          </span>
        </button>
      </div>

      {/* ── Nav links ── */}
      <nav style={{ flex: 1, padding: "10px 0", overflowY: "auto" }}>
        {navItems.map((item) => {
          const active = activeNav === item.label;
          return (
            <div
              key={item.label}
              onClick={() => onNavClick(item.label)}
              title={collapsed ? item.label : ""}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "space-between",
                padding: collapsed ? "12px 0" : "10px 16px",
                margin: "8px 8px",
                borderRadius: "16px",
                cursor: "pointer",
                background: active ? "#FFFFFF" : "transparent",
                transition: "all 0.15s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: collapsed ? 0 : 10,
                }}
              >
                <span style={{ fontSize: 15 }}>{item.icon}</span>
                {!collapsed && (
                  <span
                    style={{
                      fontSize: 12.5,
                      whiteSpace: "nowrap",
                      fontWeight: active ? 500 : 400,
                      color: active ? "#3D3936" : "#FFFFFF",

                    }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
              {!collapsed && item.arrow && (
                <span style={{ color: "#6b7280", fontSize: 11 }}>›</span>
              )}
            </div>
          );
        })}
      </nav>

      {/* ── Settings ── */}
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.07)",
          padding: collapsed ? "14px 0" : "14px 16px",
          display: "flex",
          justifyContent: collapsed ? "center" : "flex-start",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
          <span style={{ fontSize: 15 }}>⚙️</span>
          {!collapsed && (
            <span style={{ fontSize: 12.5, color: "#9ca3af" }}>Settings</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
