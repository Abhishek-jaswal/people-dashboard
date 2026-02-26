import React, { useState } from 'react'
import { UserPlus, Check, Mail, Phone } from 'lucide-react'

const INDICATOR_COLORS = ['#FFC83E', '#70D32E', '#6194EC', '#FB8C3D']

const INDICATOR_LABELS = ['Available', 'In Office', 'Remote', 'Busy']

function Avatar({ name, color, size = 133 }) {
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)

    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                background: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative',
            }}
        >
            <span
                style={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: `${size * 0.26}px`,
                    fontFamily: 'Playfair Display, DM Sans, sans-serif',
                    letterSpacing: '-0.02em',
                }}
            >
                {initials}
            </span>
        </div>
    )
}

export default function ProfileCard({ person, index }) {
    const [connected, setConnected] = useState(person.connected || false)

    // Pick avatar gradient based on index
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
    const avatarGradient = gradients[index % gradients.length]

    const statusColor = INDICATOR_COLORS[person.statusIndex ?? (index % 4)]
    const statusLabel = INDICATOR_LABELS[person.statusIndex ?? (index % 4)]

    return (
        <div
            className="card-hover"
            style={{
                width: '248px',
                height: '267px',
                borderRadius: '24px',
                border: '1px solid #E5E5E4',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                background: 'white',
                cursor: 'pointer',
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle top accent */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: statusColor,
                    borderRadius: '24px 24px 0 0',
                }}
            />

            {/* Image + badge */}
            <div
                style={{
                    width: '133px',
                    height: '133px',
                    position: 'relative',
                    flexShrink: 0,
                }}
            >
                <Avatar name={person.name} color={avatarGradient} size={133} />

                {/* Status badge */}
                <div
                    style={{
                        width: '48.36px',
                        height: '48.36px',
                        borderRadius: '50%',
                        background: statusColor,
                        border: '3px solid white',
                        position: 'absolute',
                        bottom: '0px',
                        right: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    }}
                >
                    {connected ? (
                        <Check size={16} color="white" strokeWidth={3} />
                    ) : (
                        <span style={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>
                            {person.score || Math.floor(Math.random() * 50) + 50}
                        </span>
                    )}
                </div>
            </div>

            {/* Name */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    width: '100%',
                }}
            >
                <h3
                    className="font-brother"
                    style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '100%',
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        color: '#3D3936',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '200px',
                    }}
                >
                    {person.name}
                </h3>
                <p
                    style={{
                        fontSize: '12px',
                        color: '#9E9B98',
                        textAlign: 'center',
                        fontWeight: 400,
                    }}
                >
                    {person.role}
                </p>
            </div>

            {/* Status indicators */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                }}
            >
                {/* Dot indicators row */}
                <div
                    style={{
                        display: 'flex',
                        gap: '3px',
                        alignItems: 'center',
                    }}
                >
                    {INDICATOR_COLORS.map((color, i) => (
                        <div
                            key={i}
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: color,
                                opacity: i === (person.statusIndex ?? (index % 4)) ? 1 : 0.3,
                                transition: 'opacity 0.2s ease',
                            }}
                        />
                    ))}
                    <span
                        style={{
                            fontSize: '10px',
                            color: '#9E9B98',
                            marginLeft: '4px',
                            fontWeight: 500,
                        }}
                    >
                        {statusLabel}
                    </span>
                </div>

                {/* Connect button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        setConnected(!connected)
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 20px',
                        borderRadius: '40px',
                        border: connected ? 'none' : '1px solid #3D3936',
                        background: connected ? '#3D3936' : 'transparent',
                        color: connected ? 'white' : '#3D3936',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontFamily: 'DM Sans, sans-serif',
                    }}
                >
                    {connected ? (
                        <>
                            <Check size={12} />
                            Connected
                        </>
                    ) : (
                        <>
                            <UserPlus size={12} />
                            Connect
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}
