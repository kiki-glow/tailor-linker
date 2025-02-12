
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import type { StatsCardProps } from "@/lib/types";

export const StatsCard = ({ title, value, change, icon }: StatsCardProps) => {
  const isPositive = change > 0;

  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="text-muted-foreground">{title}</div>
        <div className="rounded-full bg-secondary p-2">{icon}</div>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        <div
          className={cn(
            "flex items-center text-sm",
            isPositive ? "text-green-600" : "text-red-600"
          )}
        >
          {isPositive ? (
            <ArrowUpIcon className="mr-1 h-4 w-4" />
          ) : (
            <ArrowDownIcon className="mr-1 h-4 w-4" />
          )}
          {Math.abs(change)}%
        </div>
      </div>
    </Card>
  );
};
