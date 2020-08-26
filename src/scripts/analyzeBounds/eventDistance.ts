import { abs, Cents, difference } from "../../general"
import { HistoricalEvent, History } from "./types"

const computeEventDistance = (event: HistoricalEvent, index: number, history: History): Cents =>
    index === 0 ? 0 as Cents : abs(difference(history[ index - 1 ].cents, event.cents))

export {
    computeEventDistance,
}
