"use client"

import { useSearchParams } from "next/navigation"
import { Step1Type } from "../Step1Type"
import { Step2Asset } from "../Step2Asset"
import { Step3Details } from "../Step3Details"
import { Step4Priority } from "../Step4Priority"
import { Step5Transport } from "../Step5Transport"
import { Step6Review } from "../Step6Review"
import { cn } from "@/lib/utils"

const stepComponents = {
  1: Step1Type,
  2: Step2Asset,
  3: Step3Details,
  4: Step4Priority,
  5: Step5Transport,
  6: Step6Review,
} as const

export interface RequestWizardContentProps {
  className?: string
}

export function RequestWizardContent({ className }: RequestWizardContentProps) {
  const searchParams = useSearchParams()
  const step = Number(searchParams.get("step") ?? 1)

  const StepComponent = stepComponents[step as keyof typeof stepComponents]
  if (!StepComponent) return null
  return <StepComponent className={cn("min-h-0 flex-1", className)} />
}
