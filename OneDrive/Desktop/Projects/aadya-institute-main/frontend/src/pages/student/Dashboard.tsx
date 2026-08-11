import React from "react";
import { GraduationCap, Calendar, Video } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatsCard } from "@/components/ui/StatsCard";

export const StudentDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Student Portal" 
        description="Welcome back! Track your course learning & schedules." 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Enrolled Course"
          value="Fullstack Web"
          icon={GraduationCap}
          iconClassName="text-pink-500 bg-pink-500/10"
        />
        <StatsCard
          title="Next Session"
          value="16:00"
          icon={Calendar}
          iconClassName="text-indigo-500 bg-indigo-500/10"
          trend={{ value: 0, label: "Node.js & Prisma ORM" }}
        />
        <StatsCard
          title="Available Recordings"
          value="28"
          icon={Video}
          iconClassName="text-cyan-500 bg-cyan-500/10"
        />
      </div>
    </div>
  );
};
