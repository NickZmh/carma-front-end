import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface PageHeaderProps {
  title: string
  action?: ReactNode
  className?: string
}

export function PageHeader({ title, action, className }: PageHeaderProps) {
  return (
    <header className={cn("flex items-center justify-between px-6 py-5", className)}>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-950">{title}</h1>
      {action}
    </header>
  )
}
