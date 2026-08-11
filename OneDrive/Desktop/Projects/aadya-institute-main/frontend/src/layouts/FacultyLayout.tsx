import React from "react";
import { LayoutDashboard, CheckSquare, BookOpen, FileCheck } from "lucide-react";
import { RootLayout } from "@/components/layout/RootLayout";

const facultyNavItems = [
  { title: "Faculty Dashboard", icon: LayoutDashboard, href: "/faculty/dashboard" },
  { title: "Classes & Sessions", icon: BookOpen, href: "/faculty/classes" },
  { title: "Mark Attendance", icon: CheckSquare, href: "/faculty/attendance" },
  { title: "Assignments", icon: FileCheck, href: "/faculty/assignments" },
];

export const FacultyLayout: React.FC = () => {
  return <RootLayout navItems={facultyNavItems} />;
};
