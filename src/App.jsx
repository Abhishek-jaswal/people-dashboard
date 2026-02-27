import { useState, useEffect } from "react";
import { Search, X, Download, Zap, Plus, Grid2X2, AlignJustify, ArrowUpDown, ChevronRight } from "lucide-react";

import TopBar from "./components/TopBar";
import EmployeeCard from "./components/EmployeeCard";
import { employees } from "./data/employees";

import useWindowSize from "./hooks/useWindowSize";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [time, setTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("People");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({ 1: "blue", 4: "red" });

  const width = useWindowSize();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (isTablet) setSidebarOpen(false);
    else if (!isMobile) setSidebarOpen(true);
  }, [isTablet, isMobile]);

  const handleSelect = (id) => {
    setSelected(prev => {
      const n = { ...prev };
      if (n[id]) delete n[id];
      else n[id] = "blue";
      return n;
    });
  };

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.role.toLowerCase().includes(search.toLowerCase())
  );

  const gridCols = isMobile
    ? "repeat(2, 1fr)"
    : isTablet
      ? sidebarOpen ? "repeat(3,1fr)" : "repeat(4,1fr)"
      : width < 1280
        ? sidebarOpen ? "repeat(3,1fr)" : "repeat(4,1fr)"
        : sidebarOpen ? "repeat(4,1fr)" : "repeat(5,1fr)";

  const smallCards = isMobile || isTablet || (sidebarOpen && width < 1100);
  const sidebarW = sidebarOpen ? 260 : 64;

  const allBtns = [
    { icon: Download, tip: "Download" },
    { icon: Zap, tip: "Filter" },
    { icon: Plus, tip: "Add" },
    { icon: Grid2X2, tip: "Grid", active: true },
    { icon: AlignJustify, tip: "List" },
    { icon: ArrowUpDown, tip: "Sort" },
  ];

  const buttons = isMobile ? allBtns.slice(0, 3) : allBtns;

  return (
    <div style={{
      display: "flex", height: "100vh", width: "100vw",
      background: "#FFFFFF", overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
      padding: isMobile ? 0 : "10px",
      gap: isMobile ? 0 : "10px",
      boxSizing: "border-box",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e0; border-radius: 10px; }
        input::placeholder { color: #c4b8b0; font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* Mobile overlay  */}
      {/* // This overlay div is conditionally rendered when the mobile sidebar is open. It covers the entire screen with a semi-transparent background to focus the user's attention on the sidebar and prevent interaction with the underlying content. The backdropFilter property adds a blur effect to the background, enhancing the visual separation between the sidebar and the main content. Clicking on this overlay will close the mobile sidebar by setting mobileOpen to false. */}

      {isMobile && mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(61,57,54,0.5)",
            zIndex: 98,
            backdropFilter: "blur(3px)",
          }}
        />
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <div style={{
          width: sidebarW,
          flexShrink: 0,
          borderRadius: 16,
          transition: "width 0.28s cubic-bezier(.4,0,.2,1)",
          overflow: "hidden",
        }}>
          <Sidebar
            collapsed={!sidebarOpen}
            onToggle={() => setSidebarOpen(v => !v)}
            activeNav={activeNav}
            onNavClick={setActiveNav}
          />
        </div>
      )}

      {/* Mobile Sidebar Drawer */}
      {/* // This div is responsible for rendering the sidebar in mobile view. It is positioned fixed to cover the entire height of the screen and has a width of 240px.  */}
      {isMobile && (
        <div style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          width: 240,
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.28s cubic-bezier(.4,0,.2,1)",
          zIndex: 99,
          boxShadow: "4px 0 32px rgba(0,0,0,0.25)",
          borderRadius: "0 16px 16px 0",
          overflow: "hidden",
        }}>
          <Sidebar
            collapsed={false}
            onToggle={() => setMobileOpen(false)}
            activeNav={activeNav}
            onNavClick={(l) => {
              setActiveNav(l);
              setMobileOpen(false);
            }}
          />
        </div>
      )}

      {/* Main Content */}
      <div style={{
        flex: 1, minWidth: 0,
        display: "flex", flexDirection: "column",
        overflow: "hidden", gap: "10px",
      }}>
        <TopBar time={time} isMobile={isMobile} onMenuClick={() => setMobileOpen(v => !v)} />

        {/* Scrollable body */}
        <div style={{
          flex: 1, overflowY: "auto",
          background: "#fff", borderRadius: 16,
          padding: isMobile ? "14px 12px" : "20px 24px",
        }}>

          {/* Search Bar + Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            <div style={{
              flex: 1, minWidth: 160, background: "#FFFFFF",
              border: "1.5px solid #ede9e4", borderRadius: 14,
              display: "flex", alignItems: "center",
              padding: "9px 13px", gap: 8,
            }}>
              <Search size={14} color="#c4b8b0" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={isMobile ? "Search employees…" : "Search by Employee Name or Number"}
                style={{
                  border: "none", outline: "none",
                  fontSize: 13, color: "#374151",
                  background: "transparent", flex: 1, minWidth: 0,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
              {search && (
                <X size={13} color="#9ca3af" style={{ cursor: "pointer" }} onClick={() => setSearch("")} />
              )}
            </div>

            <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
              {buttons.map(({ icon: Icon, tip, active }) => (
                <button key={tip} title={tip} style={{
                  width: 36, height: 36, borderRadius: 12,
                  background: active ? "#3D3936" : "#fafafa",
                  border: "1.5px solid #ede9e4",
                  color: active ? "#fff" : "#6b7280",
                  fontSize: 13, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.15s",
                }}>
                  <Icon size={14} color={active ? "#fff" : "#6b7280"} />
                </button>
              ))}
            </div>
          </div>

          {/* Employee Grid */}
          <div style={{ display: "grid", gridTemplateColumns: gridCols, gap: isMobile ? 9 : 12 }}>
            {filtered.map(emp => (
              <EmployeeCard
                key={emp.id}
                emp={emp}
                selected={selected[emp.id]}
                onSelect={handleSelect}
                small={smallCards}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#9ca3af" }}>
              <Search size={40} color="#9ca3af" />
              <div style={{ fontSize: 14, marginTop: 10, fontWeight: 500 }}>No employees match your search</div>
            </div>
          )}

          {/* Pagination */}
          <div style={{
            display: "flex", alignItems: "center",
            gap: 10, flexWrap: "wrap",
            marginTop: 24, paddingTop: 16,
            borderTop: "1px solid #f0ede8",
          }}>
            <span style={{ fontSize: 12, color: "#9ca3af" }}>Rows per page:</span>
            <select style={{
              border: "1.5px solid #ede9e4", borderRadius: 7,
              padding: "5px 10px", fontSize: 12,
              color: "#374151", background: "#fafafa",
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer", outline: "none",
            }}>
              <option>100</option>
              <option>50</option>
              <option>25</option>
            </select>

            <span style={{ fontSize: 12, color: "#9ca3af" }}>1–100 of 500</span>

            <div style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
              {[ChevronRight, ChevronRight].map((Icon, i) => (
                <button key={i} style={{
                  width: 30, height: 30, borderRadius: 7,
                  border: "1.5px solid #ede9e4",
                  background: "#fafafa",
                  cursor: "pointer", color: "#6b7280",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.15s",
                }}>
                  <Icon
                    size={14}
                    color="#6b7280"
                    style={{ transform: i === 1 ? "rotate(180deg)" : "none" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}