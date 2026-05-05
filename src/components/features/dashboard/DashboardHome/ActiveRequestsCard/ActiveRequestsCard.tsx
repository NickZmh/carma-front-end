"use client"

import { TrendingDown, ChevronRight } from "lucide-react"
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"
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
  { label: "Pending Selection",   value: 47 },
  { label: "Ready for Service",   value: 78 },
  { label: "In Inspection",       value: 59 },
  { label: "Needs Approval",      value: 34 },
  { label: "Service in Progress", value: 48 },
]

const chartConfig = {
  value: {
    label: "Active Requests",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export interface ActiveRequestsCardProps {
  className?: string
}

export function ActiveRequestsCard({ className }: ActiveRequestsCardProps) {
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
          <p className="text-sm font-medium text-neutral-500">Active Requests</p>
          <p className="text-2xl font-bold text-neutral-950">289</p>
          <div className="flex items-center gap-1">
            <TrendingDown className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-600">-14</span>
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

      {/* Horizontal bar chart */}
      <ChartContainer config={chartConfig} className="h-42.5 w-full">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ left: 0, right: 28, top: 0, bottom: 0 }}
        >
          <YAxis
            type="category"
            dataKey="label"
            width={124}
            tickLine={false}
            axisLine={false}
            tick={({ x, y, payload }) => (
              <text x={x} y={y} dy={4} textAnchor="end" fontSize={12} fill="#737373">
                {payload.value}
              </text>
            )}
          />
          <XAxis type="number" hide />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="value" fill="var(--color-value)" radius={4} barSize={24}>
            <LabelList
              dataKey="value"
              position="right"
              className="fill-neutral-950 text-xs font-semibold"
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </Card>
  )
}
