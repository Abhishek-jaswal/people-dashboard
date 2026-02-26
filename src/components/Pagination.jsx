import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ currentPage, totalPages, onPageChange, perPage, setPerPage, totalItems }) {
    const pages = Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
        if (totalPages <= 5) return i + 1
        if (currentPage <= 3) return i + 1
        if (currentPage >= totalPages - 2) return totalPages - 4 + i
        return currentPage - 2 + i
    })

    return (
        <div
            style={{
                height: '61px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #F0F0EF',
                background: 'white',
                borderRadius: '0 0 20px 20px',
                flexShrink: 0,
            }}
        >
            {/* Left: per page + total */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '12px', color: '#9E9B98' }}>Show:</span>
                    <select
                        value={perPage}
                        onChange={(e) => setPerPage(Number(e.target.value))}
                        style={{
                            border: '1px solid #E5E5E4',
                            borderRadius: '8px',
                            padding: '3px 8px',
                            fontSize: '12px',
                            color: '#3D3936',
                            background: 'white',
                            cursor: 'pointer',
                            fontFamily: 'DM Sans, sans-serif',
                            outline: 'none',
                        }}
                    >
                        {[8, 12, 16, 24].map((n) => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                    <span style={{ fontSize: '12px', color: '#9E9B98' }}>per page</span>
                </div>
                <span style={{ fontSize: '12px', color: '#B0ADA9' }}>
                    {totalItems} total
                </span>
            </div>

            {/* Right: pagination controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        border: '1px solid #E5E5E4',
                        background: 'white',
                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: currentPage === 1 ? 0.4 : 1,
                        transition: 'all 0.15s ease',
                    }}
                >
                    <ChevronLeft size={14} color="#3D3936" />
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            border: page === currentPage ? 'none' : '1px solid #E5E5E4',
                            background: page === currentPage ? '#3D3936' : 'white',
                            color: page === currentPage ? 'white' : '#3D3936',
                            fontSize: '12px',
                            fontWeight: page === currentPage ? 600 : 400,
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            fontFamily: 'DM Sans, sans-serif',
                        }}
                    >
                        {page}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        border: '1px solid #E5E5E4',
                        background: 'white',
                        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: currentPage === totalPages ? 0.4 : 1,
                        transition: 'all 0.15s ease',
                    }}
                >
                    <ChevronRight size={14} color="#3D3936" />
                </button>
            </div>
        </div>
    )
}
