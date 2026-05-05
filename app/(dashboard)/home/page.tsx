import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { DashboardSidebar, DashboardShell, DashboardHome } from "@/components/features/dashboard"

export default function HomePage() {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardShell title="Home">
          <DashboardHome />
        </DashboardShell>
      </SidebarInset>
    </SidebarProvider>
  )
}
