/**
 * Bottom pagination row:
 * rows-per-page selector + page info + prev/next buttons.
 */
function Pagination() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
                marginTop: 24,
                paddingTop: 16,
                borderTop: "1px solid #f0ede8",
            }}
        >
            <span style={{ fontSize: 12, color: "#9ca3af" }}>Rows per page:</span>

            <select
                style={{
                    border: "1.5px solid #ede9e4",
                    borderRadius: 7,
                    padding: "5px 10px",
                    fontSize: 12,
                    color: "#374151",
                    background: "#fafafa",
                    fontFamily: "'DM Sans', sans-serif",
                    cursor: "pointer",
                    outline: "none",
                }}
            >
                <option>100</option>
                <option>50</option>
                <option>25</option>
            </select>

            <span style={{ fontSize: 12, color: "#9ca3af" }}>1–100 of 500</span>

            <div style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
                {["‹", "›"].map((ch) => (
                    <button
                        key={ch}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 7,
                            border: "1.5px solid #ede9e4",
                            background: "#fafafa",
                            fontSize: 15,
                            cursor: "pointer",
                            color: "#6b7280",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.15s",
                        }}
                    >
                        {ch}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Pagination;
