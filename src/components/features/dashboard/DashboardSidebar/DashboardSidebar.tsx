"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import {
  Box, ChevronDown, ChevronsUpDown, Clock, Download,
  GalleryVerticalEnd, Home, Layers, ListChecks,
  Settings, ShieldCheck, Signal, Users, Wrench, Zap,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

type NavItemDef = {
  label: string
  icon: LucideIcon
  href?: string
  badge?: string
  children?: string[]
}

const navItems: NavItemDef[] = [
  { label: "Home", icon: Home, href: "/home" },
  { label: "Active Requests", icon: ListChecks, href: "/active-requests", badge: "1" },
  { label: "Action Center", icon: Zap },
  {
    label: "Assets",
    icon: Box,
    children: ["My Assets", "Groups", "Replacement Analysis", "Documents & Compliance"],
  },
  { label: "Users", icon: Users },
  { label: "Service History", icon: Clock },
  { label: "Analytics", icon: Signal },
  { label: "Manage Neo", icon: Layers },
  { label: "Settings", icon: Settings },
]

function NavGroup({ label, icon: Icon, children }: { label: string; icon: LucideIcon; children: string[] }) {
  const [open, setOpen] = useState(true)

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={label}
        onClick={() => setOpen(!open)}
        className="data-[active=true]:bg-orange-50 data-[active=true]:text-orange-600"
      >
        <Icon />
        <span>{label}</span>
        <ChevronDown
          className={`ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${!open ? "-rotate-90" : ""}`}
        />
      </SidebarMenuButton>

      {open && (
        <SidebarMenuSub>
          {children.map((child) => (
            <SidebarMenuSubItem key={child}>
              <SidebarMenuSubButton asChild>
                <button>{child}</button>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  )
}

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader>
        <div className="flex items-center justify-between gap-2 group-data-[collapsible=icon]:justify-center">
          <div className="flex items-center gap-2 px-1 group-data-[collapsible=icon]:hidden">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary">
              <GalleryVerticalEnd className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold leading-none">Carma</span>
          </div>
          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Request Service — full button when expanded, icon-only when collapsed */}
        <SidebarGroup>
          <SidebarGroupContent>
            <Button asChild size="lg" className="w-full group-data-[collapsible=icon]:hidden">
              <Link href="/request-service?step=1">
                <Wrench className="h-4 w-4" />
                Request Service
              </Link>
            </Button>
            <div className="hidden justify-center group-data-[collapsible=icon]:flex">
              <Button asChild size="icon" className="h-8 w-8 rounded-lg">
                <Link href="/request-service?step=1">
                  <Wrench className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Main navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = !!item.href && pathname.startsWith(item.href)
                return item.children ? (
                  <NavGroup key={item.label} label={item.label} icon={item.icon}>{item.children}</NavGroup>
                ) : (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild={!!item.href}
                      isActive={isActive}
                      tooltip={item.label}
                      className="data-[active=true]:bg-orange-50 data-[active=true]:text-orange-600"
                    >
                      {item.href ? (
                        <Link href={item.href}>
                          <item.icon />
                          <span>{item.label}</span>
                        </Link>
                      ) : (
                        <>
                          <item.icon />
                          <span>{item.label}</span>
                        </>
                      )}
                    </SidebarMenuButton>
                    {item.badge && (
                      <SidebarMenuBadge className="rounded-full bg-primary">
                        <span className="text-white">{item.badge}</span>
                      </SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Download Mobile App">
              <Download />
              <span>Download Mobile App</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Client Support">
              <ShieldCheck />
              <span>Client Support</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarSeparator />

        <SidebarMenuButton size="lg" tooltip="Josh Kosela">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">
            JK
          </div>
          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-sm font-semibold leading-none">Josh Kosela</p>
            <p className="mt-1 truncate text-xs leading-none text-muted-foreground">josh@fleet.com</p>
          </div>
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  )
}
