"use client"

import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

const steps = [
  { number: 1, label: "Type" },
  { number: 2, label: "Asset" },
  { number: 3, label: "Details" },
  { number: 4, label: "Priority & Pickup" },
  { number: 5, label: "Transportation & Team" },
  { number: 6, label: "Review & Submit" },
]

export interface RequestWizardStepperProps {
  className?: string
}

export function RequestWizardStepper({ className }: RequestWizardStepperProps) {
  const searchParams = useSearchParams()
  const activeStep = Number(searchParams.get("step") ?? 1)

  return (
    <div className={cn("flex w-64 shrink-0 flex-col bg-neutral-50 py-10", className)}>
      <div className="flex flex-col rounded-2xl border border-neutral-200 bg-white py-4">
        <p className="px-6 py-3 text-lg font-semibold leading-none text-neutral-950">
          Request service
        </p>
        <ol className="flex flex-col gap-2 px-4 py-2">
          {steps.map((step) => {
            const isActive = step.number === activeStep
            return (
              <li key={step.number}>
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-lg p-2",
                    isActive && "bg-orange-50",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                      isActive
                        ? "bg-orange-500 text-white"
                        : "bg-neutral-100 text-neutral-950",
                    )}
                  >
                    {step.number}
                  </span>
                  <span
                    className={cn(
                      "text-sm leading-none",
                      isActive ? "font-medium text-orange-600" : "text-neutral-950",
                    )}
                  >
                    {step.label}
                  </span>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
