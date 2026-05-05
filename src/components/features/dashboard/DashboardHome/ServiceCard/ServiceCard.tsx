import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ServiceCardProps {
  title: string
  description: string
  ctaLabel?: string
  image?: { src: string; width: number ; height: number }
  layout?: "column" | "row"
  className?: string
}

export function ServiceCard({
  title,
  description,
  ctaLabel = "Request Now",
  image,
  layout = "column",
  className,
}: ServiceCardProps) {
  const isRow = layout === "row"

  return (
    <Card
      className={cn(
        "relative flex min-h-40 flex-1 overflow-hidden rounded-xl border-0 p-6",
        isRow ? "flex-row items-center gap-2.5" : "flex-col justify-center",
        className,
      )}
    >
      {/* Column layout: decorative image absolutely anchored to the right */}
      {!isRow && image && (
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          className="absolute right-0 top-3.75 object-cover"
        />
      )}

      <div className={cn("relative flex flex-col gap-4", isRow && "flex-1")}>
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold text-white">{title}</p>
          <p className="text-sm text-white/90">{description}</p>
        </div>
        <Button className="h-8 w-fit gap-1.5 bg-white px-2.5 text-sm font-medium text-neutral-950 hover:bg-white/90">
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Row layout: illustration in flow on the right */}
      {isRow && image && (
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          className="shrink-0"
        />
      )}
    </Card>
  )
}
