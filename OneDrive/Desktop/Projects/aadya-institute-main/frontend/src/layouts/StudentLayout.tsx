import React from "react";
import { LayoutDashboard, Calendar, Video, FileText } from "lucide-react";
import { RootLayout } from "@/components/layout/RootLayout";

const studentNavItems = [
  { title: "Student Portal", icon: LayoutDashboard, href: "/student/dashboard" },
  { title: "Class Schedule", icon: Calendar, href: "/student/schedule" },
  { title: "Video Recordings", icon: Video, href: "/student/recordings" },
  { title: "Assignments", icon: FileText, href: "/student/assignments" },
];

export const StudentLayout: React.FC = () => {
  return <RootLayout navItems={studentNavItems} />;
};
