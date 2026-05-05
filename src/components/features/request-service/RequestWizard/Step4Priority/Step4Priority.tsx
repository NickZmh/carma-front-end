import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { AssetCard } from "../AssetCard"
import { WizardActionPanel } from "../WizardActionPanel"

export interface Step4PriorityProps {
  className?: string
}

export function Step4Priority({ className }: Step4PriorityProps) {
  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
      <div className="min-h-0 flex-1 overflow-y-auto p-10">
        <h1 className="mb-5 text-2xl font-semibold tracking-tight text-neutral-950">
          Enter priority, date and location
        </h1>

        <div className="flex gap-10">
          {/* Left: Form */}
          <div className="flex flex-1 flex-col gap-5">
            {/* Priority + Return deadline */}
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium text-neutral-950">How urgent is this issue?</p>
              <Select>
                <SelectTrigger className="h-8 w-44 rounded-[10px] border-neutral-200 text-sm">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-8 w-56 rounded-[10px] border-neutral-200 text-sm">
                  <SelectValue placeholder="Return deadline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1d">1 day</SelectItem>
                  <SelectItem value="3d">3 days</SelectItem>
                  <SelectItem value="1w">1 week</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* When is asset available */}
            <div className="flex flex-col gap-0.5">
              <p className="text-base font-medium text-neutral-950">When is the asset available?</p>
              <p className="text-sm text-neutral-500">Choose the earliest available date and time.</p>
            </div>

            {/* Date + Time */}
            <div className="flex gap-2">
              <div className="flex flex-1 flex-col gap-2">
                <Label className="text-sm font-medium text-neutral-950">Date</Label>
                <Select>
                  <SelectTrigger className="h-8 rounded-[10px] border-neutral-200 text-sm">
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-28 flex-col gap-2">
                <Label className="text-sm font-medium text-neutral-950">Time</Label>
                <div className="flex h-8 items-center rounded-[10px] border border-neutral-200 bg-white px-2.5 text-sm text-neutral-950">
                  10:30:00
                </div>
              </div>
            </div>

            {/* Pickup location */}
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium text-neutral-950">Where should we pick up the asset?</p>
              <RadioGroup defaultValue="branch" className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="branch" id="branch" />
                  <Label htmlFor="branch" className="text-sm font-medium text-neutral-950">
                    Branch Location
                  </Label>
                </div>
                <div className="pl-6">
                  <Select defaultValue="belleville">
                    <SelectTrigger className="h-8 rounded-[10px] border-neutral-200 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="belleville">Belleville Show-up Yard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="custom" id="custom" />
                  <Label htmlFor="custom" className="text-sm font-medium text-neutral-950">
                    Custom address
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Right: Asset card */}
          <AssetCard />
        </div>
      </div>

      <WizardActionPanel />
    </div>
  )
}
