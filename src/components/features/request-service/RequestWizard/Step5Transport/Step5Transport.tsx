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

export interface Step5TransportProps {
  className?: string
}

export function Step5Transport({ className }: Step5TransportProps) {
  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
      <div className="min-h-0 flex-1 overflow-y-auto p-10">
        <h1 className="mb-5 text-2xl font-semibold tracking-tight text-neutral-950">
          Assign manager, transport type, and service team
        </h1>

        <div className="flex gap-10">
          {/* Left: Form */}
          <div className="flex flex-1 flex-col gap-5">
            {/* Asset owner */}
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium text-neutral-950">Asset owner</p>
              <Select>
                <SelectTrigger className="h-8 rounded-[10px] border-neutral-200 text-sm">
                  <SelectValue placeholder="Search by name, phone number, location, etc." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="william">William Nobbe</SelectItem>
                  <SelectItem value="frank">Frank Delaney</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Transport type */}
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium text-neutral-950">Select transport type</p>
              <RadioGroup defaultValue="self" className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="self" id="self" />
                  <Label htmlFor="self" className="text-sm font-medium text-neutral-950">
                    I'll handle the transport of the asset myself
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="towing" id="towing" />
                  <Label htmlFor="towing" className="text-sm font-medium text-neutral-950">
                    Towing pick-up service
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Service team */}
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium text-neutral-950">Service team</p>
              <Select>
                <SelectTrigger className="h-8 rounded-[10px] border-neutral-200 text-sm">
                  <SelectValue placeholder="Select service team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="team-a">Team A</SelectItem>
                  <SelectItem value="team-b">Team B</SelectItem>
                </SelectContent>
              </Select>
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
