"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { PageHeader } from "@/components/shared/PageHeader"
import { NeoButton } from "./NeoButton"
import { NeoPanel } from "./NeoPanel"

export interface DashboardShellProps {
  title: string
  children: React.ReactNode
  headerAction?: React.ReactNode
}

export function DashboardShell({ title, children, headerAction }: DashboardShellProps) {
  const [neoOpen, setNeoOpen] = useState(false)

  return (
    <>
      <PageHeader
        title={title}
        action={
          <div className="flex items-center gap-4">
            {headerAction}
            <NeoButton onClick={() => setNeoOpen(true)} />
          </div>
        }
      />
      <div className="flex flex-1 overflow-hidden px-4 pb-4">
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          {children}
        </div>
        <div
          className={cn(
            "shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out",
            neoOpen ? "w-84" : "w-0"
          )}
        >
          <div className="h-full pl-4">
            <NeoPanel onClose={() => setNeoOpen(false)} />
          </div>
        </div>
      </div>
    </>
  )
}
