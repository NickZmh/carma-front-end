"use client"

import { useRef, useState } from "react"
import { ArrowUp, BarChart3, CornerDownRight, GitFork, List, Plus, SlidersHorizontal, Wrench, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export interface NeoPanelProps {
  onClose: () => void
  className?: string
}

type Role = {
  label: string
  icon: React.ElementType
  iconColor: string
  bgColor: string
}

const ROLES: Role[] = [
  {
    label: "ASE-Certified Master Technician",
    icon: Wrench,
    iconColor: "#EE6810",
    bgColor: "#FEF0E4",
  },
  {
    label: "Operations Manager",
    icon: GitFork,
    iconColor: "#0145E1",
    bgColor: "#E3EBFD",
  },
  {
    label: "Financial Analyst",
    icon: BarChart3,
    iconColor: "#1E8634",
    bgColor: "#EAF6EA",
  },
]

export function NeoPanel({ onClose, className }: NeoPanelProps) {
  const [value, setValue] = useState("")
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    const el = e.target
    el.style.height = "auto"
    el.style.height = `${el.scrollHeight}px`
  }

  const hasValue = value.trim().length > 0

  return (
    <div
      className={cn(
        "flex h-full w-80 flex-col gap-2.5 rounded-[32px] bg-white p-4",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-2 py-1">
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
          <List className="h-4 w-4" />
        </Button>
        <span className="flex-1 text-lg font-semibold leading-7 text-black">Neo</span>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Ask me anything */}
      <div className="flex flex-1 items-center justify-center">
        <p className="bg-[linear-gradient(151deg,rgb(255,111,14)_0%,rgb(217,90,4)_100%)] bg-clip-text text-2xl font-bold text-transparent">
          Ask me anything
        </p>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-2.5">
        {/* Suggestion */}
        <div className="flex items-center gap-2 px-1 py-2">
          <CornerDownRight className="h-5 w-5 shrink-0 text-neutral-400" />
          <span className="text-xs text-neutral-950">What can Neo do for my fleet?</span>
        </div>

        {/* Input area */}
        <div className="flex flex-col gap-2.5 rounded-[20px] border border-neutral-300 bg-white px-3 pt-2 pb-3">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            placeholder="Ask Neo"
            rows={1}
            className="w-full resize-none overflow-hidden bg-transparent text-base leading-normal text-neutral-950 placeholder:text-gray-400 focus:outline-none"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  side="top"
                  align="start"
                  sideOffset={8}
                  className="w-71 rounded-[20px] border-none p-0 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex flex-col px-4 pt-2 pb-3.5">
                    <div className="px-1 py-1">
                      <span className="text-sm font-bold text-black">Roles</span>
                    </div>
                    <div className="flex flex-col">
                      {ROLES.map((role) => (
                        <button
                          key={role.label}
                          onClick={() => setSelectedRole(role.label)}
                          className={cn(
                            "flex cursor-pointer items-center gap-3 rounded-[10px] px-1 py-2 text-left transition-colors hover:bg-neutral-50",
                            selectedRole === role.label && "bg-neutral-100",
                          )}
                        >
                          <div
                            className="flex shrink-0 items-center justify-center rounded-full p-2"
                            style={{ backgroundColor: role.bgColor }}
                          >
                            <role.icon
                              className="h-5 w-5"
                              style={{ color: role.iconColor }}
                            />
                          </div>
                          <span className="text-sm font-medium text-neutral-950">{role.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <Button
              size="icon"
              disabled={!hasValue}
              className={cn(
                "h-8 w-8 rounded-full transition-colors",
                hasValue
                  ? "bg-neutral-950 hover:bg-neutral-800"
                  : "bg-neutral-200 cursor-default hover:bg-neutral-200",
              )}
            >
              <ArrowUp className={cn("h-4 w-4", hasValue ? "text-white" : "text-neutral-400")} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
