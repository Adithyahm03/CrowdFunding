import React from "react";
import { LayoutDashboard, UserCheck, FileText } from "lucide-react";
import { RootLayout } from "@/components/layout/RootLayout";

const counselorNavItems = [
  { title: "Counselor Dashboard", icon: LayoutDashboard, href: "/counselor/dashboard" },
  { title: "Lead Management", icon: UserCheck, href: "/counselor/leads" },
  { title: "Admissions", icon: FileText, href: "/counselor/admissions" },
];

export const CounselorLayout: React.FC = () => {
  return <RootLayout navItems={counselorNavItems} />;
};
