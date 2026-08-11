import React from "react";
import { BookOpen, CheckSquare, FileCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatsCard } from "@/components/ui/StatsCard";

export const FacultyDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Faculty Dashboard" 
        description="Teaching Schedule & Student Progress" 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Sessions Today"
          value="3"
          icon={BookOpen}
          iconClassName="text-amber-500 bg-amber-500/10"
          trend={{ value: 0, label: "Next: React & TS (14:00)" }}
        />
        <StatsCard
          title="Batch Attendance"
          value="96%"
          icon={CheckSquare}
          iconClassName="text-emerald-500 bg-emerald-500/10"
        />
        <StatsCard
          title="Pending Submissions"
          value="14"
          icon={FileCheck}
          iconClassName="text-indigo-500 bg-indigo-500/10"
        />
      </div>
    </div>
  );
};
