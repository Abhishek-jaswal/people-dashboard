# CORE — People Dashboard

A responsive employee directory and people management dashboard built with **React**, deployed on **Vercel**, and version-controlled via **GitHub**.

---

## 🔗 Links

| | |
|---|---|
| **Live Demo** | [https://people-dashboard-rho.vercel.app/](https://people-dashboard-rho.vercel.app/) |
| **GitHub Repository** | [https://github.com/Abhishek-jaswal/people-dashboard](https://github.com/Abhishek-jaswal/people-dashboard) |


---

## 📸 Screens Implemented

### 1. People Directory (Desktop & Mobile)
- Collapsible sidebar navigation with active state highlighting
- Top bar with live clock, timezone badge, notification bell, and user avatar
- Responsive employee card grid (2 → 3 → 4 → 5 columns based on viewport)
- Search/filter bar with action buttons (Download, Filter, Add, Grid, List, Sort)
- Employee cards with real photos, name, role, skill indicator dots, and selection states (blue / red highlight)
- Pagination row with rows-per-page selector and prev/next controls

### 2. Mobile View
- Hamburger menu triggering a slide-in sidebar drawer with backdrop overlay
- Compact card grid (2 columns)
- Condensed top bar (hides timezone badge and bell icon)
- Reduced action buttons (3 instead of 6)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **Lucide React** | Icon library |
| **Vercel** | Deployment & hosting |
| **GitHub** | Version control |

---

## 📁 Project Structure

```
people-dashboard/
├── public/
│   └── topbar.jpg               # User avatar image
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Collapsible sidebar with nav items
│   │   ├── TopBar.jsx           # Top navigation bar with clock & avatar
│   │   ├── EmployeeCard.jsx     # Individual employee card with selection
│   ├── data/
│   │   └── employees.js         # Employee data array & nav items
│   ├── hooks/
│   │   └── useWindowSize.js     # Custom hook for responsive breakpoints
│   └── App.jsx                  # Root component — layout & state management
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started



### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Abhishek-jaswal/people-dashboard.git

# 2. Navigate into the project directory
cd people-dashboard

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

---

## 📐 Design Decisions

### Component Architecture
- **3 core components** — `Sidebar`, `TopBar`, and the main content area — kept simple and self-contained
- All state managed in `App.jsx` and passed down as props — no external state library needed at this scale
- Custom `useWindowSize` hook drives all responsive behavior without any CSS media query dependencies

### Styling Approach
- Inline styles used throughout for fully scoped, zero-conflict styling
- Consistent design tokens (`#3D3936` sidebar, `#F4F4F0` background, `#4D96FF` accent) defined in constants
- Smooth transitions on sidebar collapse, card hover lift, and mobile drawer slide

---

## ✅ Assignment Checklist

- [x] Both screens implemented (Desktop + Mobile)
- [x] UI closely matches the provided design (layout, spacing, colors, fonts)
- [x] Responsive for desktop, tablet, and mobile
- [x] Clean code with proper component structure
- [x] Meaningful variable and prop names
- [x] Deployed to Vercel
- [x] Source code hosted on GitHub

---

## 👤 Author

** Name**
- GitHub: [@Abhishek-jaswal](https://github.com/Abhishek-jaswal)
- Portfolio: [@Abhishek-jaswal](https://abhishek-jaswal.vercel.app)
- Email: abhishekjaswal1122@gmail.com, abhignitejaswal@gmail.com

---

