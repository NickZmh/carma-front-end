"use client"

import { ChevronRight } from "lucide-react"
import { Pie, PieChart } from "recharts"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const chartConfig = {
  high:   { label: "High Risk",   color: "#DC2626" },
  medium: { label: "Medium Risk", color: "#F59E0B" },
  low:    { label: "Low Risk",    color: "#0BA5EC" },
} satisfies ChartConfig

const chartData = [
  { label: "High Risk",   value: 86, fill: "var(--color-high)",   dot: "bg-red-600"   },
  { label: "Medium Risk", value: 57, fill: "var(--color-medium)", dot: "bg-amber-400" },
  { label: "Low Risk",    value: 29, fill: "var(--color-low)",    dot: "bg-sky-500"   },
]

const total = chartData.reduce((s, d) => s + d.value, 0)

export interface UnresolvedRecallsCardProps {
  className?: string
}

export function UnresolvedRecallsCard({ className }: UnresolvedRecallsCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col gap-6 rounded-2xl border-neutral-200 px-7 py-6 shadow-xs",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-1.5">
        <p className="flex-1 text-base font-semibold leading-none tracking-tight text-neutral-950">
          Unresolved Recalls
        </p>
        <Button
          variant="link"
          className="h-auto gap-1.5 p-0 text-sm font-medium text-primary no-underline hover:no-underline"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Donut + Legend */}
      <div className="flex flex-1 items-center gap-7">

        {/* Donut */}
        <div className="relative flex-1">
          <ChartContainer config={chartConfig} className="aspect-square w-full">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="label"
                innerRadius="59%"
                outerRadius="82%"
                strokeWidth={0}
                startAngle={90}
                endAngle={-270}
              />
            </PieChart>
          </ChartContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold leading-9 text-neutral-950">{total}</span>
            <span className="text-xs text-neutral-500">Assets</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex w-32.5 shrink-0 flex-col gap-3">
          {chartData.map((seg) => (
            <div key={seg.label} className="flex items-center gap-2">
              <span className={cn("h-3 w-3 shrink-0 rounded-xs", seg.dot)} />
              <span className="flex-1 text-sm text-neutral-500">{seg.label}</span>
              <span className="text-sm font-medium text-neutral-950">{seg.value}</span>
            </div>
          ))}
        </div>

      </div>
    </Card>
  )
}
