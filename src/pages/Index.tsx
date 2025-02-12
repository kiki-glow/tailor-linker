
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { AppointmentList } from "@/components/dashboard/AppointmentList";
import { TailorStatus } from "@/components/dashboard/TailorStatus";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome to your tailor management dashboard
        </p>
      </div>

      <DashboardStats />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <AppointmentList />
        <TailorStatus />
      </div>
    </div>
  );
};

export default Index;
