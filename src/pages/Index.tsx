
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { AppointmentList } from "@/components/dashboard/AppointmentList";
import { TailorStatus } from "@/components/dashboard/TailorStatus";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950 p-6 transition-all duration-500">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Dashboard
        </h1>
        <p className="mt-2 text-muted-foreground">
          Welcome to your tailor management dashboard
        </p>
      </div>

      <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
        <DashboardStats />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <AppointmentList />
        <TailorStatus />
      </div>
    </div>
  );
};

export default Index;
