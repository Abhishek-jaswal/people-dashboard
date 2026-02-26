import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

export default function App() {
  const [activeItem, setActiveItem] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')

  return (
    /* Full viewport wrapper */
    <div
      style={{
        minHeight: '100vh',
        background: '#F7F7F7',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      {/* Desktop layout: max-width 1440px centered */}
      <div
        style={{
          maxWidth: '1408px',
          margin: '0 auto',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start',
          minHeight: 'calc(100vh - 32px)',
        }}
      >
        {/* ─── SIDEBAR ─── */}
        <Sidebar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          mobileOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* ─── RIGHT COLUMN ─── */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            minWidth: 0,
            minHeight: 'calc(100vh - 32px)',
          }}
        >
          {/* Navbar */}
          <Navbar
            onMenuToggle={() => setMobileMenuOpen(true)}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />

          {/* Main panel */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
            <MainContent viewMode={viewMode} />
          </div>
        </div>
      </div>
    </div>
  )
}
