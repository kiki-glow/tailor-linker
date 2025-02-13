
import { Users, Calendar, TrendingUp, Scissors } from "lucide-react";
import { StatsCard } from "@/components/shared/StatsCard";

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Appointments"
        value="156"
        change={12}
        icon={<Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />}
      />
      <StatsCard
        title="Active Tailors"
        value="24"
        change={8}
        icon={<Scissors className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
      />
      <StatsCard
        title="New Customers"
        value="89"
        change={-5}
        icon={<Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
      />
      <StatsCard
        title="Revenue"
        value="$12,426"
        change={23}
        icon={<TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />}
      />
    </div>
  );
};

