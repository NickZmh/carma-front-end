import { Truck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AssetCard() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-[10px] border border-neutral-200 bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-neutral-200 px-5 py-4">
        <div className="flex flex-1 flex-col gap-0.5">
          <p className="text-sm font-medium text-neutral-500">Selected asset</p>
          <div className="flex items-center gap-1.5">
            <span className="text-base font-semibold text-neutral-950">7266 DD47</span>
            <span className="text-base font-semibold text-neutral-950">•</span>
            <span className="text-base font-semibold text-neutral-950">2021 Freightliner M2</span>
          </div>
          <p className="text-sm font-medium text-neutral-950">VIN: 3ALACXFC8MDMS9989</p>
        </div>
        <div className="flex shrink-0 items-center justify-center rounded-full bg-neutral-100 p-4">
          <Truck className="h-7 w-7 text-neutral-950" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 px-5 py-4">
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-medium text-neutral-500">Current status</p>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-neutral-950">Belleville Show-up Yard</span>
            <Badge className="bg-orange-500 text-xs font-medium text-white hover:bg-orange-500">
              Stationary
            </Badge>
          </div>
          <p className="text-sm text-neutral-950">930 West Blvd, Belleville, IL 62221</p>
        </div>

        <div className="h-80 w-full rounded-lg bg-neutral-100" />

        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-medium text-neutral-500">Latest readings</p>
          <div className="flex items-center gap-2">
            <span className="w-32 text-sm text-neutral-950">Mileage</span>
            <span className="text-sm font-semibold text-neutral-950">69,976 mi</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-32 text-sm text-neutral-950">Engine hours</span>
            <span className="text-sm font-semibold text-neutral-950">5,567 hrs</span>
          </div>
          <p className="text-sm text-neutral-950">Last updated Dec 31, 11:00 AM</p>
        </div>
      </div>
    </div>
  )
}
