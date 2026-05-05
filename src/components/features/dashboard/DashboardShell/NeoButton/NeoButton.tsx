"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export interface NeoButtonProps {
  onClick?: () => void
}

export function NeoButton({ onClick }: NeoButtonProps) {
  return (
    <Button
      variant="outline"
      className="h-auto gap-2.5 rounded-lg border-neutral-200 py-1 pl-1 pr-4"
      onClick={onClick}
    >
      <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-[4px] [background:radial-gradient(circle_at_50%_50%,rgba(255,176,124,1)_0%,rgba(255,102,0,1)_100%)]">
        <Image
          src="/images/dashboard/neo-avatar-8b40e8.png"
          alt="Neo"
          fill
          className="object-cover"
        />
      </div>
      <span className="text-sm font-medium text-neutral-950">Ask Neo</span>
    </Button>
  )
}
