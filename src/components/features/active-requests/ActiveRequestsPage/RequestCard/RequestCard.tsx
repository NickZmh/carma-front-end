import { Barcode, Calendar, MapPin, Warehouse } from "lucide-react"
import { cn } from "@/lib/utils"

export type Priority = "High" | "Medium" | "Low"

export type RequestStatus =
  | "Pending Assignment"
  | "Prepare for Service"
  | "Inspection in Progress"
  | "Service in Progress"
  | "Service Completed"

export interface RequestCardData {
  id: string
  assetId: string
  assetName: string
  vin: string
  priority: Priority
  status: RequestStatus
  date: string
  location: string
}

const priorityStyles: Record<Priority, string> = {
  High: "bg-red-500 text-white",
  Medium: "bg-amber-400 text-neutral-900",
  Low: "bg-blue-500 text-white",
}

export function RequestCard({ id, assetId, assetName, vin, priority, status, date, location }: RequestCardData) {
  return (
    <div className="flex flex-col gap-4 rounded-[10px] border border-neutral-200 bg-white p-4">
      {/* Header: type icon + ID */}
      <div className="flex items-center gap-1">
        <Warehouse className="h-3.5 w-3.5 shrink-0 text-neutral-500" />
        <span className="text-xs font-medium text-neutral-500">{id}</span>
      </div>

      {/* Asset info */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-0.5">
          <span className="text-sm font-semibold text-neutral-950">{assetId}</span>
          <span className="text-sm font-semibold text-neutral-950">•</span>
          <span className="min-w-0 flex-1 truncate text-sm font-semibold text-neutral-950">{assetName}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Barcode className="h-3 w-3 shrink-0 text-neutral-500" />
          <span className="text-xs font-medium text-neutral-500">{vin}</span>
        </div>
      </div>

      {/* Priority badge */}
      <span className={cn("w-fit rounded-full px-2 py-0.5 text-xs font-medium", priorityStyles[priority])}>
        {priority}
      </span>

      {/* Date + Location */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3 shrink-0 text-neutral-950" />
          <span className="text-xs font-medium text-neutral-950">{date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3 shrink-0 text-neutral-950" />
          <span className="text-xs font-medium text-neutral-950">{location}</span>
        </div>
      </div>

      {/* Status badge */}
      <span className="w-fit rounded-full bg-neutral-950 px-2 py-0.5 text-xs font-medium text-neutral-50">
        {status}
      </span>
    </div>
  )
}
