"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

const TOTAL_STEPS = 6

export function WizardActionPanel() {
  const searchParams = useSearchParams()
  const step = Number(searchParams.get("step") ?? 1)

  const isFirst = step === 1
  const isLast = step === TOTAL_STEPS

  return (
    <div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-10 py-6">
      {isFirst ? (
        <Button variant="ghost" size="lg" className="invisible">Back</Button>
      ) : (
        <Button asChild variant="ghost" size="lg">
          <Link href={`?step=${step - 1}`}>Back</Link>
        </Button>
      )}
      <Button asChild size="lg">
        <Link href={`?step=${step + 1}`}>{isLast ? "Submit Request" : "Continue"}</Link>
      </Button>
    </div>
  )
}
