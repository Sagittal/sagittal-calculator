import {Multiplier} from "@sagittal/general"
import {Ina} from "@sagittal/system"
import {BoundEvent, BoundHistory} from "../../histories"
import {computeBoundEventDistance} from "./eventDistance"
import {computeInaDistance} from "./inaDistance"

const computeBoundEventInaDistance = (
    boundEvent: BoundEvent,
    index: number,
    boundHistory: BoundHistory,
): Multiplier<Ina> =>
    computeInaDistance(
        computeBoundEventDistance(boundEvent, index, boundHistory),
        boundEvent.jiNotationLevel,
    )

export {
    computeBoundEventInaDistance,
}
