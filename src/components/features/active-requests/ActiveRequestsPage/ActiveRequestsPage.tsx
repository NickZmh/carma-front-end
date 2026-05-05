"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { KanbanColumn } from "./KanbanColumn"
import { FilterPopover } from "./FilterPopover"
import type { RequestCardData, RequestStatus, Priority } from "./RequestCard"

const SAMPLE_CARDS: RequestCardData[] = [
  {
    id: "REQ-0012",
    assetId: "A-1042",
    assetName: "Ford F-550",
    vin: "1FDUF5HT3EEA12345",
    priority: "High",
    status: "Pending Assignment",
    date: "Jan 5, 11:30 AM",
    location: "Belleville Show-Up Yard",
  },
  {
    id: "REQ-0009",
    assetId: "A-1038",
    assetName: "Chevy Silverado 1500",
    vin: "1GC1KXEG4FF123456",
    priority: "Medium",
    status: "Prepare for Service",
    date: "Jan 4, 9:00 AM",
    location: "Central Depot",
  },
  {
    id: "REQ-0008",
    assetId: "A-1031",
    assetName: "Ford Transit 250",
    vin: "1FTBR1Y83MKA11111",
    priority: "Low",
    status: "Prepare for Service",
    date: "Jan 3, 2:15 PM",
    location: "North Yard",
  },
  {
    id: "REQ-0007",
    assetId: "A-1029",
    assetName: "Ram 2500 Heavy Duty",
    vin: "3C6UR5DL4GG222222",
    priority: "High",
    status: "Prepare for Service",
    date: "Jan 2, 8:45 AM",
    location: "Belleville Show-Up Yard",
  },
  {
    id: "REQ-0006",
    assetId: "A-1025",
    assetName: "GMC Sierra 2500",
    vin: "1GTV2UEC4GZ333333",
    priority: "Medium",
    status: "Prepare for Service",
    date: "Jan 1, 10:00 AM",
    location: "South Gate",
  },
  {
    id: "REQ-0005",
    assetId: "A-1020",
    assetName: "Ford F-250 Super Duty",
    vin: "1FT7W2BT0FEA44444",
    priority: "High",
    status: "Inspection in Progress",
    date: "Dec 31, 3:30 PM",
    location: "Central Depot",
  },
  {
    id: "REQ-0004",
    assetId: "A-1018",
    assetName: "Chevy Express 3500",
    vin: "1GCWGAFG7G1555555",
    priority: "Low",
    status: "Inspection in Progress",
    date: "Dec 30, 11:00 AM",
    location: "North Yard",
  },
  {
    id: "REQ-0003",
    assetId: "A-1015",
    assetName: "Ford E-350 Cutaway",
    vin: "1FDWE3FL0FDA66666",
    priority: "Medium",
    status: "Service in Progress",
    date: "Dec 29, 7:00 AM",
    location: "Belleville Show-Up Yard",
  },
  {
    id: "REQ-0002",
    assetId: "A-1010",
    assetName: "Ram ProMaster 2500",
    vin: "3C6TRVAG4HE777777",
    priority: "High",
    status: "Service in Progress",
    date: "Dec 28, 1:00 PM",
    location: "Central Depot",
  },
]

type Column = {
  title: string
  status: RequestStatus
}

const COLUMNS: Column[] = [
  { title: "Pending Selection", status: "Pending Assignment" },
  { title: "Ready for Service", status: "Prepare for Service" },
  { title: "Inspection in Progress", status: "Inspection in Progress" },
  { title: "Needs Approval", status: "Service in Progress" },
  { title: "In Service", status: "Service Completed" },
]

export interface ActiveRequestsPageProps {
  className?: string
}

export function ActiveRequestsPage({ className }: ActiveRequestsPageProps) {
  const [query, setQuery] = useState("")
  const [priorities, setPriorities] = useState<Priority[]>([])

  const filtered = SAMPLE_CARDS.filter((c) => {
    const q = query.trim().toLowerCase()
    const matchesQuery =
      !q ||
      c.id.toLowerCase().includes(q) ||
      c.assetId.toLowerCase().includes(q) ||
      c.assetName.toLowerCase().includes(q) ||
      c.vin.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q)
    const matchesPriority = priorities.length === 0 || priorities.includes(c.priority)
    return matchesQuery && matchesPriority
  })

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 overflow-hidden p-4">
      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative w-93.25">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <Input
            placeholder="Search"
            className="rounded-[10px] pl-9"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <FilterPopover selected={priorities} onChange={setPriorities} />
      </div>

      {/* Kanban board */}
      <div className="flex flex-1 gap-4 overflow-x-auto pb-2">
        {COLUMNS.map(({ title, status }) => {
          const cards = filtered.filter((c) => c.status === status)
          return (
            <KanbanColumn
              key={status}
              title={title}
              count={cards.length}
              cards={cards}
            />
          )
        })}
      </div>
    </div>
  )
}
