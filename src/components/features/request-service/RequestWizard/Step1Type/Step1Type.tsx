import {
  Wrench,
  SquareActivity,
  Ambulance,
  TriangleAlert,
  Warehouse,
  MapPinned,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { WizardActionPanel } from "../WizardActionPanel"

interface ServiceType {
  icon: LucideIcon
  title: string
  description: string
}

const externalServices: ServiceType[] = [
  {
    icon: Wrench,
    title: "Service",
    description: "Specify the services your vehicle needs",
  },
  {
    icon: SquareActivity,
    title: "Diagnostic",
    description: "Carma Partner Service Centers will diagnose your vehicle issue",
  },
  {
    icon: Ambulance,
    title: "Mobile",
    description: "Get on-site service at your location. Overnight availability included.",
  },
  {
    icon: TriangleAlert,
    title: "Emergency Towing or Roadside Assistance",
    description: "Request immediate help with towing or roadside issues.",
  },
]

const internalServices: ServiceType[] = [
  {
    icon: Warehouse,
    title: "In-House Maintenance",
    description: "Submit a maintenance request, managed in-house",
  },
  {
    icon: MapPinned,
    title: "Asset Location Change",
    description: "Submit an asset location change",
  },
]

function ServiceTypeCard({ icon: Icon, title, description }: ServiceType) {
  return (
    <div className="flex h-53 flex-col items-end justify-between rounded-[10px] border border-neutral-200 bg-white p-6">
      <Icon className="h-8 w-8 text-neutral-950" />
      <div className="flex w-full flex-col gap-2">
        <p className="text-lg font-semibold text-black">{title}</p>
        <p className="text-base text-neutral-500">{description}</p>
      </div>
    </div>
  )
}

export interface Step1TypeProps {
  className?: string
}

export function Step1Type({ className }: Step1TypeProps) {
  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
      {/* Scrollable content */}
      <div className="min-h-0 flex-1 overflow-y-auto p-10">
        <h1 className="mb-5 text-2xl font-semibold tracking-tight text-neutral-950">
          Select request type
        </h1>

        {/* External services */}
        <p className="text-base font-medium text-black">External services</p>
        <div className="grid grid-cols-2 gap-2 pb-4 pt-2">
          {externalServices.map((s) => (
            <ServiceTypeCard key={s.title} {...s} />
          ))}
        </div>

        {/* Internal services */}
        <p className="text-base font-medium text-black">Internal services</p>
        <div className="grid grid-cols-2 gap-2 pt-2">
          {internalServices.map((s) => (
            <ServiceTypeCard key={s.title} {...s} />
          ))}
        </div>
      </div>

      <WizardActionPanel />
    </div>
  )
}
