"use client"

import { TrendingUp, ChevronRight } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const chartData = [
  { day: "Mon", uptime: 11  },
  { day: "Tue", uptime: 50  },
  { day: "Wed", uptime: 79  },
  { day: "Thu", uptime: 56  },
  { day: "Fri", uptime: 108 },
  { day: "Sat", uptime: 116 },
  { day: "Sun", uptime: 149 },
]

const chartConfig = {
  uptime: {
    label: "Fleet Uptime",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export interface FleetUptimeCardProps {
  className?: string
}

export function FleetUptimeCard({ className }: FleetUptimeCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col gap-6 rounded-2xl border-neutral-200 px-7 py-6 shadow-xs",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-neutral-500">Fleet Uptime</p>
          <p className="text-2xl font-bold text-neutral-950">98.6%</p>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-600">+1.2%</span>
            <span className="text-sm text-neutral-500">vs last 7 days</span>
          </div>
        </div>
        <Button
          variant="link"
          className="h-auto gap-1.5 p-0 text-sm font-medium text-primary no-underline hover:no-underline"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Area chart */}
      <ChartContainer config={chartConfig} className="h-44 w-full">
        <AreaChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="uptimeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="var(--color-uptime)" stopOpacity={0.7} />
              <stop offset="100%" stopColor="var(--color-uptime)" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#E5E5E5" strokeOpacity={0.8} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#737373" }}
          />
          <YAxis hide domain={[0, 160]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            dataKey="uptime"
            type="monotone"
            stroke="var(--color-uptime)"
            strokeWidth={1.5}
            fill="url(#uptimeGradient)"
            dot={{ fill: "white", stroke: "var(--color-uptime)", strokeWidth: 1.5, r: 3 }}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  )
}
