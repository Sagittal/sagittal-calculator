import { abs, Cents, Proportion } from "../../../../general"
import { HistoricalEvent, History } from "../../histories"
import { computeInaDistance } from "./inaDistance"

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
