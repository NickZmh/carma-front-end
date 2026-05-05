"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AssetCard } from "../AssetCard"
import { SubmitDialog } from "./SubmitDialog"

const plainBlocks = [
  { label: "Reason", value: "Need truck back ASAP for Illinois transmission line job." },
  { label: "Scheduled pickup", value: "Jan 1, 2026 at 11:30 AM" },
  { label: "Asset location", value: "Belleville Show-Up Yard" },
  { label: "Asset owner", value: "Nathan Medlock" },
  { label: "Transport type", value: "I'll handle the transport of the asset myself" },
  { label: "Assigned service team", value: "Central Illinois - Mobile Team 1" },
]

export interface Step6ReviewProps {
  className?: string
}

export function Step6Review({ className }: Step6ReviewProps) {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
      <div className="min-h-0 flex-1 overflow-y-auto p-10">
        <h1 className="mb-5 text-2xl font-semibold tracking-tight text-neutral-950">
          Review and submit request
        </h1>

        <div className="flex gap-10">
          <div className="flex flex-1 flex-col gap-5">
            {/* Issue details */}
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-neutral-950">Issue details</p>
              <p className="text-sm text-neutral-950">Engine is making a knocking sound.</p>
            </div>

            {/* Uploaded photos */}
            <div className="flex flex-col gap-1.5">
              <p className="text-base font-medium text-neutral-950">Uploaded photos</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 rounded-[10px] border border-neutral-200 bg-white p-3">
                  <div className="flex items-center justify-center rounded-md border border-neutral-200 p-1.5">
                    <FileText className="h-4 w-4 text-neutral-950" />
                  </div>
                  <p className="text-sm font-medium text-black">7266_DD47_video.mp4</p>
                </div>
                <div className="flex items-center gap-2 rounded-[10px] border border-neutral-200 bg-white p-3">
                  <div className="h-9 w-9 rounded-md bg-neutral-200" />
                  <p className="text-sm font-medium text-black">7266_DD47_image.jpg</p>
                </div>
              </div>
            </div>

            {/* Priority */}
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-neutral-950">Priority</p>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <p className="text-sm text-neutral-950">High priority</p>
              </div>
            </div>

            {/* Plain review blocks */}
            {plainBlocks.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <p className="text-base font-medium text-neutral-950">{label}</p>
                <p className="text-sm text-neutral-950">{value}</p>
              </div>
            ))}
          </div>

          <AssetCard />
        </div>
      </div>

      {/* Action panel */}
      <div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-10 py-6">
        <Button asChild variant="ghost" size="lg">
          <Link href="?step=5">Back</Link>
        </Button>
        <Button size="lg" className="cursor-pointer" onClick={() => setDialogOpen(true)}>
          Submit Request
        </Button>
      </div>

      <SubmitDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  )
}
