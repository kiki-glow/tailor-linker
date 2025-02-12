
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Appointment } from "@/lib/types";

const mockAppointments: Appointment[] = [
  {
    id: "1",
    customerName: "Alice Johnson",
    date: "2024-03-20T10:00:00",
    status: "pending",
    measurements: {
      chest: 38,
      waist: 32,
      hips: 40,
      inseam: 32,
    },
    tailorId: "1",
  },
  {
    id: "2",
    customerName: "Bob Wilson",
    date: "2024-03-20T14:30:00",
    status: "confirmed",
    measurements: {
      chest: 42,
      waist: 36,
      hips: 44,
      inseam: 34,
    },
    tailorId: "2",
  },
  {
    id: "3",
    customerName: "Carol Martinez",
    date: "2024-03-21T11:00:00",
    status: "completed",
    measurements: {
      chest: 36,
      waist: 28,
      hips: 38,
      inseam: 30,
    },
    tailorId: "3",
  },
];

const statusColors = {
  pending: "bg-yellow-500",
  confirmed: "bg-blue-500",
  completed: "bg-green-500",
  cancelled: "bg-red-500",
};

export const AppointmentList = () => {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Appointments</h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {mockAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="rounded-lg border p-4 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{appointment.customerName}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(appointment.date).toLocaleString()}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className={`${statusColors[appointment.status]} text-white`}
                >
                  {appointment.status}
                </Badge>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                {Object.entries(appointment.measurements).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize text-muted-foreground">
                      {key}:
                    </span>
                    <span>{value}"</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};
