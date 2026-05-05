import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { WizardActionPanel } from "../WizardActionPanel"

export interface Step3DetailsProps {
  className?: string
}

export function Step3Details({ className }: Step3DetailsProps) {
  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
      <div className="min-h-0 flex-1 overflow-y-auto p-10">
        <h1 className="mb-5 text-2xl font-semibold tracking-tight text-neutral-950">
          Enter request details
        </h1>

        <div className="flex flex-col gap-5">
          {/* What&apos;s wrong */}
          <div className="flex flex-col gap-0.5">
            <p className="text-base font-medium text-neutral-950">What&apos;s wrong with the asset?</p>
            <p className="text-sm text-neutral-500">
              Include symptoms, when the issue started, and anything that may help the technician diagnose it.
            </p>
          </div>

          <textarea
            placeholder="Example: The engine warning light is on and the vehicle loses power when accelerating. This started this morning."
            className="h-16 w-full resize-none rounded-[10px] border border-neutral-200 bg-white px-2.5 py-2 text-sm text-neutral-950 outline-none placeholder:text-neutral-500"
          />

          {/* Add photos / videos */}
          <div className="flex flex-col gap-0.5">
            <p className="text-base font-medium text-neutral-950">Add photos or videos</p>
            <p className="text-sm text-neutral-500">Optional, but helpful for faster diagnosis.</p>
          </div>

          <div className="flex gap-4">
            {/* Upload from device */}
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm font-medium text-neutral-950">Upload from this device</p>
              <div className="flex h-80 flex-col items-center justify-center gap-3 rounded-[10px] border border-dashed border-neutral-200 bg-neutral-50 p-12">
                <FileText className="h-12 w-12 text-neutral-950" />
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm font-medium text-neutral-950">Drag files here or browse files</p>
                  <p className="text-center text-xs text-neutral-950">
                    PNG, JPG, HEIC/HEIF, MP4, or MOV (Up to 3 files, 100MB each)
                  </p>
                </div>
              </div>
            </div>

            {/* Upload from phone */}
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm font-medium text-neutral-950">Upload from your phone</p>
              <div className="flex h-80 flex-col items-center justify-center gap-6 rounded-[10px] border border-neutral-200 px-9 py-12">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm font-medium text-neutral-950">Scan QR code</p>
                  <div className="h-[120px] w-[120px] rounded bg-neutral-100" />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <p className="text-center text-xs text-neutral-950">or send an upload link by text</p>
                  <div className="flex items-center gap-1.5 rounded-[10px] border border-neutral-200 bg-white px-2.5 py-1">
                    <input
                      placeholder="+1 (123) 123-1234"
                      className="flex-1 bg-transparent text-sm text-neutral-950 outline-none placeholder:text-neutral-500"
                    />
                    <Button variant="link" className="h-auto p-0 text-sm font-medium text-orange-500 no-underline hover:no-underline">
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Uploaded content */}
          <div className="flex flex-col gap-1.5">
            <p className="text-base font-medium text-neutral-950">Uploaded content</p>
            <p className="text-sm text-neutral-500">No items uploaded yet</p>
          </div>
        </div>
      </div>

      <WizardActionPanel />
    </div>
  )
}
