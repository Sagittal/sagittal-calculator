import { Cents } from "../../general"
import { HistoricalEvent, History } from "./types"

const computeEventDistance = (event: HistoricalEvent, index: number, history: History): Cents =>
    Math.abs(index === 0 ? 0 : history[ index - 1 ].cents - event.cents) as Cents

export {
    computeEventDistance,
}
