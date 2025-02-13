
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
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
    <Card className="p-6 transition-all duration-300 hover:shadow-lg backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
      <h3 className="mb-4 text-lg font-semibold">Active Tailors</h3>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {mockTailors.map((tailor) => (
            <div
              key={tailor.id}
              className="flex items-center justify-between rounded-lg border p-4 transition-all duration-200 hover:shadow-md hover:scale-[1.02] bg-white dark:bg-gray-800"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900">
                  <span className="font-medium text-indigo-700 dark:text-indigo-300">
                    {tailor.name.charAt(0)}
                  </span>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="font-medium">{tailor.name}</p>
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        statusColors[tailor.status]
                      }`}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tailor.appointments} appointments today
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                    {tailor.rating} ★
                  </Badge>
                </div>
                <div className="min-w-[60px] text-right">
                  <div className="relative pt-1">
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        style={{ width: `${tailor.completionRate}%` }}
                        className="h-2 rounded-full bg-green-500 transition-all duration-300"
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 block">
                      {tailor.completionRate}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

