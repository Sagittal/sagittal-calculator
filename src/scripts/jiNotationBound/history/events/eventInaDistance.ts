import { abs, Cents, Multiplier } from "../../../../general"
import { Ina } from "../../../../sagittal"
import { HistoricalEvent, History } from "../../histories"
import { computeInaDistance } from "./inaDistance"

const computeEventInaDistance = (event: HistoricalEvent, index: number, history: History): Multiplier<Ina> =>
    computeInaDistance(
        abs(
            index === 0 ?
                0 :
                history[ index - 1 ].cents - event.cents,
        ) as Cents,
        event.jiNotationLevel,
    )

export {
    computeEventInaDistance,
}
