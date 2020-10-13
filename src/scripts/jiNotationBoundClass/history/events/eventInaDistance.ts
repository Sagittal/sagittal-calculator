import { Multiplier } from "../../../../general"
import { Ina } from "../../../../sagittal"
import { BoundClassEvent, BoundClassHistory } from "../../histories"
import { computeBoundClassEventDistance } from "./eventDistance"
import { computeInaDistance } from "./inaDistance"

const computeBoundClassEventInaDistance = (
    boundClassEvent: BoundClassEvent,
    index: number,
    boundClassHistory: BoundClassHistory,
): Multiplier<Ina> =>
    computeInaDistance(
        computeBoundClassEventDistance(boundClassEvent, index, boundClassHistory),
        boundClassEvent.jiNotationLevel,
    )

export {
    computeBoundClassEventInaDistance,
}
