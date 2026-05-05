import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RequestWizardStepper } from "./RequestWizardStepper"
import { RequestWizardContent } from "./RequestWizardContent"

export interface RequestWizardProps {
  className?: string
}

export function RequestWizard({ className }: RequestWizardProps) {
  return (
    <div className="flex h-screen bg-neutral-50">
      <div className="relative mx-auto flex h-full w-full max-w-360 flex-row">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10"
        >
          <Link href="/"><X className="h-4 w-4" /></Link>
        </Button>
        <RequestWizardStepper />
        <RequestWizardContent />
      </div>
    </div>
  )
}
