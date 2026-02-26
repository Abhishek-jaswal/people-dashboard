import React, { useState } from 'react'
import {
    Home,
    User,
    Users,

    Settings,
    UserPlus,
    Briefcase,
    ChevronRight,

    UserCircle,

    ChartPie,
} from 'lucide-react'

const navItems = [
    { icon: Home, label: 'Home', id: 'home', active: true },
    { icon: User, label: 'My Info', id: 'myinfo' },
    { icon: Users, label: 'People', id: 'people' },
    { icon: UserCircle, label: 'Team Management', id: 'team', },
    { icon: Briefcase, label: 'Project Setup', id: 'projects' },
    { icon: UserPlus, label: 'Hiring', id: 'hiring' },
    { icon: ChartPie, label: 'Report', id: 'report' },

]

export default function Sidebar({ activeItem, setActiveItem, mobileOpen, onClose }) {
    return (
        <>
            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                style={{
                    width: '280px',
                    minWidth: '280px',
                    height: '992px',
                    maxHeight: 'calc(100vh - 32px)',
                    borderRadius: '20px',
                    background: '#3D3936',
                    position: 'sticky',
                    top: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    zIndex: 30,
                }}
                className={`
          transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : ''}
          max-lg:fixed max-lg:left-4 max-lg:top-4
          ${!mobileOpen ? 'max-lg:-translate-x-[320px]' : 'max-lg:translate-x-0'}
        `}
            >
                {/* Logo / Brand */}
                <div
                    style={{
                        padding: '10px',

                    }}
                >
                    <p>hello   </p>

                </div>

                {/* Nav section */}
                <div
                    style={{
                        padding: '16px 24px',
                        flex: 1,
                        overflowY: 'auto',
                    }}
                >
                    {/* Section label */}


                    {/* Nav items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = (activeItem || 'home') === item.id
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveItem(item.id)
                                        if (onClose) onClose()
                                    }}
                                    className="sidebar-item"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        width: '100%',
                                        padding: '12px 16px',
                                        borderRadius: '12px',
                                        border: 'none',
                                        background: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        position: 'relative',
                                    }}
                                >
                                    <Icon
                                        size={18}
                                        color={isActive ? 'white' : 'rgba(255,255,255,0.5)'}
                                        strokeWidth={isActive ? 2 : 1.5}
                                    />
                                    <span
                                        style={{
                                            color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                                            fontSize: '14px',
                                            fontWeight: isActive ? 600 : 400,
                                            flex: 1,
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                    {item.badge && (
                                        <span
                                            style={{
                                                background: '#FFC83E',
                                                color: '#3D3936',
                                                fontSize: '10px',
                                                fontWeight: 700,
                                                borderRadius: '20px',
                                                padding: '2px 7px',
                                                minWidth: '20px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                    {isActive && (
                                        <ChevronRight size={14} color="#FFFFFF" />
                                    )}
                                </button>
                            )
                        })}
                    </div>


                </div>

                {/* Bottom user profile */}
                <div
                    style={{
                        padding: '10px 24px',
                        margin: '16px',
                        cursor: 'pointer',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderColor: '#FFFFFF1A',
                        borderRadius: '16px',
                    }}
                >
                    <div className="flex items-center gap-3">


                        <button
                            style={{
                                background: 'transparent',


                                padding: '2px',
                                borderRadius: '6px',
                                color: 'rgba(255,255,255,0.4)',
                                gap: '10px',
                            }}
                        >
                            <Settings size={15} /> Settings
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}
