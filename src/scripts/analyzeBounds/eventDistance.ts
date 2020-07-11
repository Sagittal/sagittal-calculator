import { Cents } from "../../utilities/types"
import { HistoricalEvent, History } from "./types"

const computeEventDistance = (event: HistoricalEvent, index: number, history: History): Cents => {
    return Math.abs(index === 0 ? 0 : history[ index - 1 ].position - event.position) as Cents
}

export {
    computeEventDistance,
}
