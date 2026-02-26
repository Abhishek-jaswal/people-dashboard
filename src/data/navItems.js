import { Users, FolderKanban, UserPlus, FileText, Home, User2, ChartPie } from "lucide-react";

export const navItems = [
    { label: "Home", icon: Home, arrow: false },
    { label: "My Info", icon: User2, arrow: false },
    { label: "People", icon: Users, arrow: false },
    { label: "Team Management", icon: FolderKanban, arrow: true },
    { label: "Project Setup", icon: FileText, arrow: true },
    { label: "Hiring", icon: UserPlus, arrow: false },
    { label: "Report", icon: ChartPie, arrow: false },
];