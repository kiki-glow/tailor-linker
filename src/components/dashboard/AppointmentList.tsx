
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import type { Appointment } from "@/lib/types";
import { AppointmentItem } from "./AppointmentItem";

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

export const AppointmentList = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);

  const handleUpdateAppointment = (updatedAppointment: Appointment) => {
    setAppointments((prev) =>
      prev.map((app) =>
        app.id === updatedAppointment.id ? updatedAppointment : app
      )
    );
  };

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
          {appointments.map((appointment) => (
            <AppointmentItem
              key={appointment.id}
              appointment={appointment}
              onUpdate={handleUpdateAppointment}
            />
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};
