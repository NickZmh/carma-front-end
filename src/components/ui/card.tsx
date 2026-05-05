import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-3xl border border-slate-200 bg-white shadow-sm",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-slate-200 bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-2 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-2xl font-semibold text-slate-950", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm leading-6 text-slate-600", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export interface SidebarMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  label: string;
  active?: boolean;
  badge?: string;
  nested?: boolean;
}

const SidebarMenuItem = React.forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  ({ className, icon: Icon, label, active, badge, nested, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150",
        active ? "bg-orange-50 text-orange-600" : "text-slate-700 hover:bg-slate-50",
        nested ? "pl-8 text-slate-600 hover:bg-slate-100" : "",
        className
      )}
      {...props}
    >
      <span className={cn("flex items-center gap-2 min-w-0", !Icon && "pl-1")}> 
        {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
        <span className="truncate">{label}</span>
      </span>
      {badge ? (
        <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-orange-500 px-2 text-xs font-medium text-white">
          {badge}
        </span>
      ) : null}
    </button>
  )
);
SidebarMenuItem.displayName = "SidebarMenuItem";

export { Card, CardContent, CardDescription, CardHeader, CardTitle, SidebarMenuItem };
