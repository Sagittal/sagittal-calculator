import { computeInaDistance } from "../../notations/ji/inaDistance"
import { HistoricalEvent, History } from "./types"
import { Cents, Proportion } from "../../utilities/types"

const computeEventInaDistance = (event: HistoricalEvent, index: number, history: History): Proportion => {
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
