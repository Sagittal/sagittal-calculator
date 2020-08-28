import { abs, Cents, Proportion } from "../../general"
import { computeInaDistance } from "../../sagittal"
import { HistoricalEvent, History } from "./types"

const computeEventInaDistance = (event: HistoricalEvent, index: number, history: History): Proportion =>
    computeInaDistance(
        abs(
            index === 0 ?
                0 :
                history[ index - 1 ].cents - event.cents,
        ) as Cents,
        event.level,
    )

export {
    computeEventInaDistance,
}
