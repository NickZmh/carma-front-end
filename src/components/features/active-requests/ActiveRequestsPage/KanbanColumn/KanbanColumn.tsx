import { RequestCard } from "../RequestCard"
import type { RequestCardData } from "../RequestCard"

export interface KanbanColumnProps {
  title: string
  count: number
  cards: RequestCardData[]
}

export function KanbanColumn({ title, count, cards }: KanbanColumnProps) {
  return (
    <div className="flex min-w-60 flex-1 flex-col">
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 pb-3 pt-1">
        <span className="text-base font-semibold text-neutral-950">{title}</span>
        <span className="text-sm font-semibold text-neutral-500">{count}</span>
      </div>
      <div className="flex flex-col gap-2 py-2">
        {cards.map((card) => (
          <RequestCard key={card.id} {...card} />
        ))}
        {cards.length === 0 && (
          <div className="rounded-[10px] border border-dashed border-neutral-200 p-4 text-center text-xs text-neutral-400">
            No requests
          </div>
        )}
      </div>
    </div>
  )
}
