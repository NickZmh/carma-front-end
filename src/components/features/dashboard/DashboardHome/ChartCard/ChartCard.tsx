import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ChartCardProps {
  label: string
  value: string
  viewAllHref?: string
  className?: string
}

export function ChartCard({ label, value, viewAllHref, className }: ChartCardProps) {
  return (
    <Card className={cn("relative min-h-80 overflow-hidden rounded-2xl border-neutral-200 shadow-xs", className)}>
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px]">
           <Image
            src="/images/dashboard/chart-card-bg-4f97c9.png"
            alt=""
            fill
            className="object-cover object-right-bottom"
      />
      </div>
     
      <div className="absolute inset-0 [background:linear-gradient(180deg,white_32%,transparent_48%)]" />
      <div className="absolute inset-0 [background:linear-gradient(139deg,white_12%,transparent_29%)]" />

      <div className="relative flex flex-col gap-6 px-7 py-6">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-neutral-500">{label}</p>
            <p className="text-2xl font-bold text-neutral-950">{value}</p>
          </div>
          {viewAllHref && (
            <Button
              variant="link"
              className="h-auto gap-1.5 p-0 text-sm font-medium no-underline hover:no-underline"
              asChild
            >
              <a href={viewAllHref}>
                View All
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
