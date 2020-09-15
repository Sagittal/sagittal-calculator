import { abs, Cents, subtract } from "../../../../general"
import { HistoricalEvent, History } from "../../histories"

const computeEventDistance = (event: HistoricalEvent, index: number, history: History): Cents =>
    index === 0 ? 0 as Cents : abs(subtract(history[ index - 1 ].cents, event.cents))

export {
    computeEventDistance,
}
