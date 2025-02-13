
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import type { StatsCardProps } from "@/lib/types";

export const StatsCard = ({ title, value, change, icon }: StatsCardProps) => {
  const isPositive = change > 0;

  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
      <div className="flex items-center justify-between">
        <div className="text-muted-foreground">{title}</div>
        <div className="rounded-full bg-secondary/50 p-2 backdrop-blur-sm">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <div className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          {value}
        </div>
        <div
          className={cn(
            "flex items-center text-sm transition-colors",
            isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
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

