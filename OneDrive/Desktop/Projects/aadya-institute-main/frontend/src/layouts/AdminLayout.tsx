import React from "react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Target,
  CalendarDays,
  IndianRupee,
  BarChart3,
  Settings,
} from "lucide-react";
import { RootLayout } from "@/components/layout/RootLayout";

const adminNavItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    title: "Students",
    icon: GraduationCap,
    children: [
      { title: "All Students", href: "/admin/students" },
      { title: "Add Student", href: "/admin/students/add" },
      { title: "Student Details", href: "/admin/students/details" },
      { title: "Attendance", href: "/admin/students/attendance" },
      { title: "Performance", href: "/admin/students/performance" },
    ],
  },
  {
    title: "Faculty",
    icon: Users,
    children: [
      { title: "All Faculty", href: "/admin/faculty" },
      { title: "Add Faculty", href: "/admin/faculty/add" },
      { title: "Faculty Details", href: "/admin/faculty/details" },
      { title: "Assigned Courses", href: "/admin/faculty/courses" },
      { title: "Attendance", href: "/admin/faculty/attendance" },
    ],
  },
  {
    title: "Courses",
    icon: BookOpen,
    children: [
      { title: "All Courses", href: "/admin/courses" },
      { title: "Add Course", href: "/admin/courses/add" },
      { title: "Batches", href: "/admin/courses/batches" },
      { title: "Curriculum", href: "/admin/courses/curriculum" },
    ],
  },
  {
    title: "Admissions / Leads",
    icon: Target,
    children: [
      { title: "Enquiries", href: "/admin/admissions/enquiries" },
      { title: "Applications", href: "/admin/admissions/applications" },
      { title: "Admissions", href: "/admin/admissions" },
    ],
  },
  {
    title: "Schedule",
    icon: CalendarDays,
    children: [
      { title: "Classes", href: "/admin/schedule/classes" },
      { title: "Timetable", href: "/admin/schedule/timetable" },
      { title: "Upcoming Classes", href: "/admin/schedule/upcoming" },
    ],
  },
  {
    title: "Fees",
    icon: IndianRupee,
    children: [
      { title: "Payments", href: "/admin/fees/payments" },
      { title: "Pending Fees", href: "/admin/fees/pending" },
      { title: "Fee Reports", href: "/admin/fees/reports" },
    ],
  },
  {
    title: "Reports",
    icon: BarChart3,
    children: [
      { title: "Student Reports", href: "/admin/reports/students" },
      { title: "Faculty Reports", href: "/admin/reports/faculty" },
      { title: "Course Reports", href: "/admin/reports/courses" },
      { title: "Financial Reports", href: "/admin/reports/financial" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export const AdminLayout: React.FC = () => {
  // @ts-ignore - Temporary ignore for new NavItem structure
  return <RootLayout navItems={adminNavItems} />;
};
