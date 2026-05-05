import { ServiceCard } from "./ServiceCard"
import { ChartCard } from "./ChartCard"
import { ActiveRequestsCard } from "./ActiveRequestsCard"
import { FleetUptimeCard } from "./FleetUptimeCard"
import { AssetsDueToServiceCard } from "./AssetsDueToServiceCard"
import { UnresolvedRecallsCard } from "./UnresolvedRecallsCard"
import { SupportCard } from "./SupportCard"

export function DashboardHome() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <ServiceCard
            title="Need service?"
            description={"Submit a maintenance request,\nmanaged in-house"}
            image={{ src: "/images/dashboard/service-car.png", width: 465, height: 159 }}
            className="bg-primary h-full"
          />
        </div>
        <div className="col-span-1">
          <ServiceCard
            title="Mobile service?"
            description={"Powered by\nCox Automotive"}
            image={{ src: "/images/dashboard/mobile-service.svg", width: 132, height: 120 }}
            layout="row"
            className="bg-[#0BA5EC]"
          />
        </div>
        <ChartCard label="My Assets" value="3,984" viewAllHref="#" />
        <ActiveRequestsCard />
        <FleetUptimeCard />
        <AssetsDueToServiceCard />
        <UnresolvedRecallsCard />
        <SupportCard />
      </div>
    </div>
  )
}
