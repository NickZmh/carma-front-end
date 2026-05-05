import { cn } from "@/lib/utils"
import { AssetsTable } from "./AssetsTable"
import { WizardActionPanel } from "../WizardActionPanel"

export interface Step2AssetProps {
  className?: string
}

export function Step2Asset({ className }: Step2AssetProps) {
  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
      <div className="min-h-0 flex-1 overflow-y-auto p-10">
        <h1 className="mb-5 text-2xl font-semibold tracking-tight text-neutral-950">
          Select asset for service
        </h1>
        <AssetsTable />
      </div>

      <WizardActionPanel />
    </div>
  )
}
