
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Edit2Icon } from "lucide-react";
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
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(
    null
  );

  const handleUpdateAppointment = (updatedAppointment: Appointment) => {
    setAppointments((prev) =>
      prev.map((app) =>
        app.id === updatedAppointment.id ? updatedAppointment : app
      )
    );
    setEditingAppointment(null);
  };

  const AppointmentEditDialog = ({ appointment }: { appointment: Appointment }) => {
    const [formData, setFormData] = useState({ ...appointment });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleUpdateAppointment(formData);
    };

    const handleMeasurementChange = (key: string, value: string) => {
      setFormData((prev) => ({
        ...prev,
        measurements: {
          ...prev.measurements,
          [key]: parseFloat(value) || 0,
        },
      }));
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="customerName">Customer Name</Label>
            <Input
              id="customerName"
              value={formData.customerName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  customerName: e.target.value,
                }))
              }
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="datetime-local"
              value={formData.date.slice(0, 16)}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  date: e.target.value,
                }))
              }
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value: any) =>
                setFormData((prev) => ({
                  ...prev,
                  status: value,
                }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Measurements</Label>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(formData.measurements).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <Label htmlFor={key} className="capitalize">
                    {key}
                  </Label>
                  <Input
                    id={key}
                    type="number"
                    value={value}
                    onChange={(e) =>
                      handleMeasurementChange(key, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setEditingAppointment(null)}
          >
            Cancel
          </Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
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
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className={`${statusColors[appointment.status]} text-white`}
                  >
                    {appointment.status}
                  </Badge>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => setEditingAppointment(appointment)}
                      >
                        <Edit2Icon className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Edit Appointment</DialogTitle>
                      </DialogHeader>
                      <AppointmentEditDialog appointment={appointment} />
                    </DialogContent>
                  </Dialog>
                </div>
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
