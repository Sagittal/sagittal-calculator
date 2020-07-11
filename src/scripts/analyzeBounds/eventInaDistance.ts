import { computeInaDistance } from "../../notations/ji/inaDistance"
import { HistoricalEvent, History } from "./types"
import { Cents } from "../../utilities/types"

const computeEventInaDistance = (event: HistoricalEvent, index: number, history: History) => {
    return computeInaDistance(
        Math.abs(
            index === 0 ?
                0 :
                history[ index - 1 ].position - event.position,
        ) as Cents,
        event.level,
    )
}

export {
    computeEventInaDistance,
}
