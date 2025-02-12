
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import type { Tailor } from "@/lib/types";

const mockTailors: Tailor[] = [
  {
    id: "1",
    name: "John Smith",
    status: "active",
    rating: 4.8,
    appointments: 12,
    completionRate: 95,
  },
  {
    id: "2",
    name: "Maria Garcia",
    status: "busy",
    rating: 4.9,
    appointments: 15,
    completionRate: 98,
  },
  {
    id: "3",
    name: "David Chen",
    status: "offline",
    rating: 4.7,
    appointments: 8,
    completionRate: 92,
  },
];

const statusColors = {
  active: "bg-green-500",
  busy: "bg-yellow-500",
  offline: "bg-gray-500",
};

export const TailorStatus = () => {
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold">Active Tailors</h3>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {mockTailors.map((tailor) => (
            <div
              key={tailor.id}
              className="flex items-center justify-between rounded-lg border p-4 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    statusColors[tailor.status]
                  }`}
                />
                <div>
                  <p className="font-medium">{tailor.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {tailor.appointments} appointments today
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{tailor.rating} ★</Badge>
                <Badge variant="outline">{tailor.completionRate}%</Badge>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};
