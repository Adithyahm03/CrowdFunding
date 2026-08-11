import React from "react";
import { UserCheck, PhoneCall, FileText } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatsCard } from "@/components/ui/StatsCard";

export const CounselorDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Counselor Dashboard" 
        description="Lead Pipeline & Student Admissions" 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Leads Assigned"
          value="64"
          icon={UserCheck}
          iconClassName="text-emerald-500 bg-emerald-500/10"
        />
        <StatsCard
          title="AI Followups Today"
          value="18"
          icon={PhoneCall}
          iconClassName="text-indigo-500 bg-indigo-500/10"
        />
        <StatsCard
          title="Confirmed Admissions"
          value="9"
          icon={FileText}
          iconClassName="text-pink-500 bg-pink-500/10"
          trend={{ value: 2, label: "vs last week" }}
        />
      </div>
    </div>
  );
};
