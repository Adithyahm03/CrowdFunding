import React from "react";
import { LayoutDashboard, Building2, Calendar } from "lucide-react";
import { RootLayout } from "@/components/layout/RootLayout";

const centerNavItems = [
  { title: "Center Dashboard", icon: LayoutDashboard, href: "/center/dashboard" },
  { title: "Branch Operations", icon: Building2, href: "/center/branches" },
  { title: "Batch Management", icon: Calendar, href: "/center/batches" },
];

export const CenterLayout: React.FC = () => {
  return <RootLayout navItems={centerNavItems} />;
};
