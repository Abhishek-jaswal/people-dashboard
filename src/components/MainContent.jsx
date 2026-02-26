import React, { useState, useMemo } from 'react'
import ProfileCard from './ProfileCard'
import Pagination from './Pagination'

const ALL_PEOPLE = [
    { id: 1, name: 'Ethan Lee', role: 'Product Designer', statusIndex: 0, score: 92 },
    { id: 2, name: 'Sara Mitchell', role: 'Frontend Engineer', statusIndex: 1, score: 87 },
    { id: 3, name: 'James Carter', role: 'Data Scientist', statusIndex: 2, score: 76 },
    { id: 4, name: 'Priya Sharma', role: 'UX Researcher', statusIndex: 3, score: 81 },
    { id: 5, name: 'Tom Wilson', role: 'Backend Engineer', statusIndex: 1, score: 94 },
    { id: 6, name: 'Mei Chen', role: 'Product Manager', statusIndex: 0, score: 88 },
    { id: 7, name: 'Lucas Silva', role: 'DevOps Engineer', statusIndex: 2, score: 73 },
    { id: 8, name: 'Ava Johnson', role: 'Marketing Lead', statusIndex: 3, score: 85 },
    { id: 9, name: 'Noah Brown', role: 'Full Stack Dev', statusIndex: 0, score: 90 },
    { id: 10, name: 'Sofia Garcia', role: 'Content Strategist', statusIndex: 1, score: 78 },
    { id: 11, name: 'Liam Davis', role: 'Security Engineer', statusIndex: 3, score: 82 },
    { id: 12, name: 'Emma Martinez', role: 'QA Engineer', statusIndex: 2, score: 69 },
    { id: 13, name: 'Oliver Taylor', role: 'iOS Developer', statusIndex: 0, score: 95 },
    { id: 14, name: 'Isabella White', role: 'Android Developer', statusIndex: 1, score: 91 },
    { id: 15, name: 'William Harris', role: 'Blockchain Dev', statusIndex: 2, score: 67 },
    { id: 16, name: 'Mia Jackson', role: 'Business Analyst', statusIndex: 3, score: 84 },
    { id: 17, name: 'Jayden Lee', role: 'Cloud Architect', statusIndex: 0, score: 89 },
    { id: 18, name: 'Charlotte Hall', role: 'Scrum Master', statusIndex: 1, score: 77 },
    { id: 19, name: 'Elijah Young', role: 'Tech Lead', statusIndex: 2, score: 93 },
    { id: 20, name: 'Amelia King', role: 'AI/ML Engineer', statusIndex: 3, score: 86 },
    { id: 21, name: 'Henry Wright', role: 'CTO', statusIndex: 0, score: 98 },
    { id: 22, name: 'Evelyn Scott', role: 'VP Engineering', statusIndex: 1, score: 96 },
    { id: 23, name: 'Alexander Green', role: 'Site Reliability', statusIndex: 2, score: 71 },
    { id: 24, name: 'Abigail Adams', role: 'Design Systems', statusIndex: 0, score: 83 },
]

const FILTER_TABS = ['All', 'Available', 'In Office', 'Remote', 'Busy']
const STATUS_COLORS = ['#FFC83E', '#70D32E', '#6194EC', '#FB8C3D']

export default function MainContent({ viewMode }) {
    const [activeFilter, setActiveFilter] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(8)

    const filtered = useMemo(() => {
        if (activeFilter === 'All') return ALL_PEOPLE
        const idx = FILTER_TABS.indexOf(activeFilter) - 1
        return ALL_PEOPLE.filter((p) => p.statusIndex === idx)
    }, [activeFilter])

    const totalPages = Math.ceil(filtered.length / perPage)
    const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage)

    const handleFilterChange = (tab) => {
        setActiveFilter(tab)
        setCurrentPage(1)
    }

    return (
        <main
            style={{
                borderRadius: '20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                overflow: 'hidden',
                minHeight: 0,
            }}
        >
            {/* Header bar inside main */}
            <div
                style={{
                    padding: '24px 24px 0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}
            >
                {/* Filter tabs */}
                <div
                    style={{
                        display: 'flex',
                        gap: '4px',
                        background: '#F7F7F7',
                        borderRadius: '12px',
                        padding: '4px',
                        flexWrap: 'wrap',
                    }}
                >
                    {FILTER_TABS.map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => handleFilterChange(tab)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '6px 14px',
                                borderRadius: '8px',
                                border: 'none',
                                background: activeFilter === tab ? 'white' : 'transparent',
                                color: activeFilter === tab ? '#3D3936' : '#9E9B98',
                                fontSize: '13px',
                                fontWeight: activeFilter === tab ? 600 : 400,
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                boxShadow: activeFilter === tab ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                                fontFamily: 'DM Sans, sans-serif',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {i > 0 && (
                                <span
                                    style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: STATUS_COLORS[i - 1],
                                        flexShrink: 0,
                                    }}
                                />
                            )}
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Count badge */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <span
                        style={{
                            fontSize: '13px',
                            color: '#9E9B98',
                        }}
                    >
                        Showing
                    </span>
                    <span
                        style={{
                            background: '#3D3936',
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: 700,
                            borderRadius: '20px',
                            padding: '3px 10px',
                        }}
                    >
                        {filtered.length}
                    </span>
                    <span style={{ fontSize: '13px', color: '#9E9B98' }}>people</span>
                </div>
            </div>

            {/* Grid area - scrollable */}
            <div
                style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '24px',
                }}
            >
                {viewMode === 'grid' ? (
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '24px',
                        }}
                    >
                        {paginated.map((person, i) => (
                            <ProfileCard
                                key={person.id}
                                person={person}
                                index={(currentPage - 1) * perPage + i}
                            />
                        ))}
                    </div>
                ) : (
                    /* List view */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {paginated.map((person, i) => {
                            const statusColor = STATUS_COLORS[person.statusIndex ?? (i % 4)]
                            const gradients = [
                                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                                'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
                                'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                                'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                            ]
                            const initials = person.name.split(' ').map(n => n[0]).join('').slice(0, 2)
                            return (
                                <div
                                    key={person.id}
                                    className="card-hover"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        padding: '12px 16px',
                                        borderRadius: '12px',
                                        border: '1px solid #E5E5E4',
                                        background: 'white',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '50%',
                                            background: gradients[(i) % gradients.length],
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <span style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>
                                            {initials}
                                        </span>
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <p
                                            className="font-brother"
                                            style={{ fontSize: '14px', fontWeight: 500, color: '#3D3936', letterSpacing: '-0.02em' }}
                                        >
                                            {person.name}
                                        </p>
                                        <p style={{ fontSize: '12px', color: '#9E9B98' }}>{person.role}</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <div
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: statusColor,
                                            }}
                                        />
                                        <span style={{ fontSize: '12px', color: '#9E9B98' }}>
                                            {['Available', 'In Office', 'Remote', 'Busy'][person.statusIndex ?? 0]}
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            background: '#F7F7F7',
                                            borderRadius: '20px',
                                            padding: '3px 10px',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            color: '#3D3936',
                                        }}
                                    >
                                        {person.score}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                perPage={perPage}
                setPerPage={(n) => { setPerPage(n); setCurrentPage(1) }}
                totalItems={filtered.length}
            />
        </main>
    )
}
