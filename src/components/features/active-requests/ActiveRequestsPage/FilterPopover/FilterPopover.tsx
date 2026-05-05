"use client"

import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import type { Priority } from "../RequestCard"

const PRIORITIES: Priority[] = ["High", "Medium", "Low"]

export interface FilterPopoverProps {
  selected: Priority[]
  onChange: (priorities: Priority[]) => void
}

export function FilterPopover({ selected, onChange }: FilterPopoverProps) {
  const toggle = (p: Priority) =>
    onChange(selected.includes(p) ? selected.filter((x) => x !== p) : [...selected, p])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("gap-2 rounded-[10px]", selected.length > 0 && "border-neutral-950")}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filter
          {selected.length > 0 && (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-950 text-[10px] font-medium text-white">
              {selected.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-44 p-3" align="start">
        <div className="flex flex-col gap-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">Priority</p>
          {PRIORITIES.map((p) => (
            <label
              key={p}
              className="flex cursor-pointer items-center gap-2 rounded-md px-1 py-1.5 hover:bg-neutral-50"
            >
              <Checkbox
                checked={selected.includes(p)}
                onCheckedChange={() => toggle(p)}
              />
              <span className="text-sm font-medium text-neutral-950">{p}</span>
            </label>
          ))}
          {selected.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 h-7 w-full text-xs text-neutral-500"
              onClick={() => onChange([])}
            >
              Clear filters
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
