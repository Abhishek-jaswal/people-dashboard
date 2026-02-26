import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import EmployeeCard from "./components/EmployeeCard";
import Pagination from "./components/Pagination";

import { employees } from "./data/employees";
import { useWindowSize } from "./hooks/useWindowSize";
import { BREAKPOINTS } from "./constants/colors";

function App() {
  const [time, setTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobile] = useState(false);
  const [activeNav, setActiveNav] = useState("People");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({ 1: "blue", 4: "red" });

  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS.mobile;
  const isTablet = width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet;

  /* Live clock */
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  /* Auto-collapse sidebar on tablet */
  useEffect(() => {
    if (isTablet) setSidebarOpen(false);
    else if (!isMobile) setSidebarOpen(true);
  }, [isTablet, isMobile]);

  /* Toggle card selection */
  const handleSelect = (id) => {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = "blue";
      return next;
    });
  };

  /* Filter employees */
  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase())
  );

  /* Responsive grid columns */
  const gridCols = isMobile
    ? "repeat(2, 1fr)"
    : isTablet
      ? sidebarOpen ? "repeat(3, 1fr)" : "repeat(4, 1fr)"
      : width < 1280
        ? sidebarOpen ? "repeat(3, 1fr)" : "repeat(4, 1fr)"
        : sidebarOpen ? "repeat(4, 1fr)" : "repeat(5, 1fr)";

  const smallCards = isMobile || isTablet || (sidebarOpen && width < 1100);
  const desktopSidebarWidth = sidebarOpen ? 260 : 64;

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        background: "#F4F4F0",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        padding: isMobile ? 0 : "10px",
        gap: isMobile ? 0 : "10px",
        boxSizing: "border-box",
      }}
    >
      {/* ── Global styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar       { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #c4b8b0; border-radius: 10px; }
        input::placeholder        { color: #9ca3af; font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* ── Mobile overlay backdrop ── */}
      {isMobile && mobileSidebarOpen && (
        <div
          onClick={() => setMobile(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(61,57,54,0.5)",
            zIndex: 98,
            backdropFilter: "blur(3px)",
          }}
        />
      )}

      {/* ── Desktop sidebar (persistent, collapsible) ── */}
      {!isMobile && (
        <div
          style={{
            width: desktopSidebarWidth,
            flexShrink: 0,
            transition: "width 0.28s cubic-bezier(.4,0,.2,1)",
            overflow: "hidden",
            borderRadius: 16,
          }}
        >
          <Sidebar
            collapsed={!sidebarOpen}
            onToggle={() => setSidebarOpen((v) => !v)}
            activeNav={activeNav}
            onNavClick={setActiveNav}
          />
        </div>
      )}

      {/* ── Mobile sidebar (slide-in drawer) ── */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            width: 240,
            transform: mobileSidebarOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.28s cubic-bezier(.4,0,.2,1)",
            zIndex: 99,
            boxShadow: "4px 0 32px rgba(0,0,0,0.25)",
            borderRadius: "0 16px 16px 0",
            overflow: "hidden",
          }}
        >
          <Sidebar
            collapsed={false}
            onToggle={() => setMobile(false)}
            activeNav={activeNav}
            onNavClick={(label) => { setActiveNav(label); setMobile(false); }}
          />
        </div>
      )}

      {/* ── Main content area ── */}
      <div
        style={{
          flex: 1,
          minWidth: 0,             /* prevents flex child from overflowing */
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRadius: isMobile ? 0 : 16,
        }}
      >
        {/* Top bar */}
        <TopBar
          time={time}
          isMobile={isMobile}
          onMenuClick={() => setMobile((v) => !v)}
        />

        {/* Scrollable content */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: isMobile ? "14px 12px" : "20px 24px",
          }}
        >
          {/* Search + action buttons */}
          <SearchBar value={search} onChange={setSearch} isMobile={isMobile} />




          {/* Employee card grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: gridCols,
              gap: isMobile ? 9 : 12,
            }}
          >
            {filtered.map((emp) => (
              <EmployeeCard
                key={emp.id}
                emp={emp}
                selected={selected[emp.id]}
                onSelect={handleSelect}
                small={smallCards}
              />
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#9ca3af" }}>
              <div style={{ fontSize: 40 }}>🔍</div>
              <div style={{ fontSize: 14, marginTop: 10, fontWeight: 500 }}>
                No employees match your search
              </div>
            </div>
          )}

          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
