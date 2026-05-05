import { Phone, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface SupportCardProps {
  className?: string
}

export function SupportCard({ className }: SupportCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col gap-4 rounded-2xl border-neutral-200 px-7 py-6 shadow-xs",
        className,
      )}
    >
      <p className="text-lg font-semibold text-neutral-950">
        Need help? Our support team is here 24/7
      </p>

      <div className="flex flex-col gap-4">

        {/* Priority Client Support */}
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-neutral-500">Priority Client Support</p>
          <div className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 shrink-0 text-neutral-950" />
            <span className="text-sm font-medium text-neutral-950">(314) 899-2886</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 shrink-0 text-neutral-950" />
            <span className="text-sm font-medium text-neutral-950">support@joincarma.com</span>
          </div>
        </div>

        {/* Towing & Roadside Assistance */}
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-neutral-500">Towing &amp; Roadside Assistance</p>
          <div className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 shrink-0 text-neutral-950" />
            <span className="text-sm font-medium text-neutral-950">(314) 899-2886</span>
          </div>
        </div>

      </div>
    </Card>
  )
}
