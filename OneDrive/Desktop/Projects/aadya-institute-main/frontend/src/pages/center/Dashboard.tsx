import React from "react";
import { Building2, Users, Calendar } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatsCard } from "@/components/ui/StatsCard";

export const CenterDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Center Manager Dashboard" 
        description="Branch Operations & Management — Main Campus" 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Main Branch"
          value="Bengaluru, KA"
          icon={Building2}
          iconClassName="text-cyan-500 bg-cyan-500/10"
        />
        <StatsCard
          title="Active Students"
          value="410"
          icon={Users}
          iconClassName="text-indigo-500 bg-indigo-500/10"
        />
        <StatsCard
          title="Running Batches"
          value="12"
          icon={Calendar}
          iconClassName="text-amber-500 bg-amber-500/10"
        />
      </div>
    </div>
  );
};
