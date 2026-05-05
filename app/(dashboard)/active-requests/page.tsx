import Link from "next/link"
import { Plus } from "lucide-react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { DashboardSidebar, DashboardShell } from "@/components/features/dashboard"
import { ActiveRequestsPage } from "@/components/features/active-requests"

export default function ActiveRequestsRoute() {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardShell
          title="Active Requests"
          headerAction={
            <Button asChild>
              <Link href="/request-service?step=1">
                <Plus className="h-4 w-4" />
                Create Service Request
              </Link>
            </Button>
          }
        >
          <ActiveRequestsPage />
        </DashboardShell>
      </SidebarInset>
    </SidebarProvider>
  )
}
