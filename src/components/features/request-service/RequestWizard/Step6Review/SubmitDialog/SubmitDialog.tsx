"use client"

import { CircleCheck } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export interface SubmitDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SubmitDialog({ open, onOpenChange }: SubmitDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col items-center gap-3 rounded-[10px] p-6 sm:max-w-106">
        {/* Green success icon */}
        <div className="flex items-center justify-center rounded-full bg-green-100 p-2">
          <CircleCheck className="h-6 w-6 text-green-600" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1 text-center">
          <DialogTitle className="text-2xl font-semibold leading-normal text-neutral-950">
            Successfully submitted the request
          </DialogTitle>
          <p className="text-sm text-neutral-500">
            Your assigned service team has received your in-house maintenance request!
          </p>
        </div>

        {/* Actions */}
        <div className="flex w-full gap-2.5 pt-2">
          <Button variant="outline" className="flex-1 cursor-pointer" onClick={() => onOpenChange(false)}>
            View current request
          </Button>
          <Button className="flex-1 cursor-pointer" onClick={() => onOpenChange(false)}>
            Submit another request
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
