import { Multiplier } from "../../../../general"
import { Ina } from "../../../../sagittal"
import { HistoricalEvent, History } from "../../histories"
import { computeEventDistance } from "./eventDistance"
import { computeInaDistance } from "./inaDistance"

const computeEventInaDistance = (event: HistoricalEvent, index: number, history: History): Multiplier<Ina> =>
    computeInaDistance(
        computeEventDistance(event, index, history),
        event.jiNotationLevel,
    )

export {
    computeEventInaDistance,
}
