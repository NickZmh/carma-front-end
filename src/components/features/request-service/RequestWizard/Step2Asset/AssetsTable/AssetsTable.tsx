import { Search, ArrowUpDown, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Asset {
  id: string
  yearMakeModel: string
  vin: string
  driver: string
  warranty: boolean
}

const assets: Asset[] = [
  { id: "7266 DD47",  yearMakeModel: "2021 Freightliner M2",        vin: "3ALACXFC8MDMS9989", driver: "William Nobbe",    warranty: true  },
  { id: "50002 VAC",  yearMakeModel: "2023 Mack Granite",           vin: "1M2GR4GC2PM034449", driver: "Frank Delaney",    warranty: false },
  { id: "1183 BJ91",  yearMakeModel: "2022 Kenworth T680",          vin: "1XKYDP9X4NJ123456", driver: "Emma Johnson",     warranty: false },
  { id: "8391 CZ25",  yearMakeModel: "2020 Peterbilt 579",          vin: "2NP892X9XLM123789", driver: "Carlos Ramirez",   warranty: true  },
  { id: "4527 DX88",  yearMakeModel: "2019 Volvo VNL",              vin: "4V4NC9EH3MN123987", driver: "Jessica Lee",      warranty: true  },
  { id: "9034 EZ12",  yearMakeModel: "2021 International LT",       vin: "3HSDJSJR0JN123654", driver: "Mark Thompson",    warranty: false },
  { id: "6712 FW33",  yearMakeModel: "2023 Freightliner Cascadia",  vin: "1FUJGLDR1ML123321", driver: "Sophia Martinez",  warranty: true  },
  { id: "3459 GX44",  yearMakeModel: "2022 Mack Anthem",            vin: "1M2AX07C2MM123432", driver: "David Nguyen",     warranty: false },
  { id: "7821 HY56",  yearMakeModel: "2020 Western Star 5700",      vin: "WDAPF4CC7LJ123765", driver: "Olivia Brown",     warranty: false },
  { id: "4593 JZ78",  yearMakeModel: "2021 Kenworth W990",          vin: "1XKYD49X3MJ123852", driver: "Michael Smith",    warranty: true  },
]

export function AssetsTable() {
  return (
    <div className="flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex h-8 w-[373px] items-center gap-1.5 rounded-[10px] border border-neutral-200 bg-white px-2.5">
          <Search className="h-4 w-4 shrink-0 text-neutral-500" />
          <input
            placeholder="Search"
            className="flex-1 bg-transparent text-sm text-neutral-950 outline-none placeholder:text-neutral-500"
          />
        </div>
        <Button variant="outline" size="sm" className="h-8 gap-1.5 rounded-lg border-neutral-200">
          <ArrowUpDown className="h-4 w-4" />
          Sort
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-neutral-200">
        <Table>
          <TableHeader>
            <TableRow className="border-neutral-200 hover:bg-transparent">
              <TableHead className="h-10 w-8 px-2" />
              <TableHead className="h-10 w-24 px-2 text-sm font-medium text-neutral-950">Asset ID</TableHead>
              <TableHead className="h-10 px-2 text-sm font-medium text-neutral-950">Year-Make-Model</TableHead>
              <TableHead className="h-10 px-2 text-sm font-medium text-neutral-950">VIN</TableHead>
              <TableHead className="h-10 px-2 text-sm font-medium text-neutral-950">Driver</TableHead>
              <TableHead className="h-10 px-2 text-right text-sm font-medium text-neutral-950">Warranty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.id} className="h-[41px] border-neutral-200">
                <TableCell className="w-8 px-2 py-0">
                  <Checkbox />
                </TableCell>
                <TableCell className="w-24 px-2 py-0 text-sm text-neutral-950">{asset.id}</TableCell>
                <TableCell className="px-2 py-0 text-sm text-neutral-950">{asset.yearMakeModel}</TableCell>
                <TableCell className="px-2 py-0 text-sm text-neutral-950">{asset.vin}</TableCell>
                <TableCell className="px-2 py-0 text-sm text-neutral-950">{asset.driver}</TableCell>
                <TableCell className="px-2 py-0 text-right">
                  {asset.warranty ? (
                    <Badge className="bg-green-600 text-xs font-medium text-white hover:bg-green-600">
                      Under Warranty
                    </Badge>
                  ) : (
                    <Badge className="border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-950">
                      Expired
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" disabled className="h-7 w-7 rounded-lg border-neutral-200 opacity-50">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-neutral-950">1-10 of 40</span>
          <Button variant="outline" size="icon" className="h-7 w-7 rounded-lg border-neutral-200">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex h-7 items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5">
          <span className="text-sm text-neutral-950">10 items per page</span>
          <ChevronDown className="h-4 w-4 text-neutral-950" />
        </div>
      </div>
    </div>
  )
}
