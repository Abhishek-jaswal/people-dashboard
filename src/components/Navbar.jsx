import React, { useState } from 'react'
import { Search, Download, SlidersHorizontal, Bell, Grid3X3, List, Menu } from 'lucide-react'

export default function Navbar({ onMenuToggle, viewMode, setViewMode }) {
    const [searchVal, setSearchVal] = useState('')

    return (
        <header
            style={{
                height: '80px',
                borderRadius: '20px',
                background: '#FFFFFF',
                padding: '16px 16px 16px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
            }}
        >
            {/* Left: hamburger (mobile) + search */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Mobile menu button */}
                <button
                    onClick={onMenuToggle}
                    className="lg:hidden"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#3D3936',
                        padding: '4px',
                    }}
                >
                    <Menu size={22} />
                </button>

                {/* Search bar */}
                <div
                    style={{
                        width: '336px',
                        maxWidth: '100%',
                        height: '48px',
                        borderRadius: '40px',
                        border: '1px solid #E5E5E4',
                        padding: '14px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: '#FAFAFA',
                    }}
                >
                    <Search size={16} color="#9E9B98" strokeWidth={2} />
                    <input
                        type="text"
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)}
                        placeholder="Search people, teams..."
                        style={{
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            fontSize: '14px',
                            color: '#3D3936',
                            width: '100%',
                            fontFamily: 'DM Sans, sans-serif',
                        }}
                    />
                </div>
            </div>

            {/* Right: actions */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}
            >
                {/* View toggles */}
                <div
                    style={{
                        display: 'flex',
                        gap: '2px',
                        background: '#F7F7F7',
                        borderRadius: '10px',
                        padding: '4px',
                    }}
                >
                    <button
                        onClick={() => setViewMode('grid')}
                        style={{
                            background: viewMode === 'grid' ? 'white' : 'transparent',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '6px 8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: viewMode === 'grid' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                            transition: 'all 0.15s ease',
                        }}
                    >
                        <Grid3X3 size={16} color={viewMode === 'grid' ? '#3D3936' : '#9E9B98'} />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        style={{
                            background: viewMode === 'list' ? 'white' : 'transparent',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '6px 8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: viewMode === 'list' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                            transition: 'all 0.15s ease',
                        }}
                    >
                        <List size={16} color={viewMode === 'list' ? '#3D3936' : '#9E9B98'} />
                    </button>
                </div>

                {/* Filter */}
                <button
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        border: '1px solid #E5E5E4',
                        background: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => e.target.closest('button').style.background = '#F7F7F7'}
                    onMouseLeave={(e) => e.target.closest('button').style.background = 'white'}
                >
                    <SlidersHorizontal size={18} color="#3D3936" />
                </button>

                {/* Download */}
                <button
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        border: '1px solid #E5E5E4',
                        background: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => e.target.closest('button').style.background = '#F7F7F7'}
                    onMouseLeave={(e) => e.target.closest('button').style.background = 'white'}
                >
                    <Download size={18} color="#3D3936" />
                </button>

                {/* Notifications */}
                <button
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        border: '1px solid #E5E5E4',
                        background: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => e.target.closest('button').style.background = '#F7F7F7'}
                    onMouseLeave={(e) => e.target.closest('button').style.background = 'white'}
                >
                    <Bell size={18} color="#3D3936" />
                    <span
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#FB8C3D',
                            border: '1.5px solid white',
                        }}
                    />
                </button>

                {/* Avatar */}
                <div
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #6194EC, #3D3936)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        flexShrink: 0,
                    }}
                >
                    <span style={{ color: 'white', fontWeight: 700, fontSize: '15px' }}>A</span>
                </div>
            </div>
        </header>
    )
}
