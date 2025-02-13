
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit2Icon } from "lucide-react";
import type { Appointment } from "@/lib/types";
import { AppointmentEditDialog } from "./AppointmentEditDialog";

interface AppointmentItemProps {
  appointment: Appointment;
  onUpdate: (appointment: Appointment) => void;
}

const statusColors = {
  pending: "bg-yellow-500",
  confirmed: "bg-blue-500",
  completed: "bg-green-500",
  cancelled: "bg-red-500",
};

export const AppointmentItem = ({ appointment, onUpdate }: AppointmentItemProps) => {
  return (
    <div className="rounded-lg border p-4 transition-all duration-200 hover:shadow-md">
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
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Edit2Icon className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <AppointmentEditDialog
              appointment={appointment}
              onClose={() => {}}
              onUpdate={onUpdate}
            />
          </Dialog>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        {Object.entries(appointment.measurements).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="capitalize text-muted-foreground">{key}:</span>
            <span>{value}"</span>
          </div>
        ))}
      </div>
    </div>
  );
};
