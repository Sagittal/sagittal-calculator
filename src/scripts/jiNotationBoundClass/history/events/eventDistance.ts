import {Abs, abs, Cents, subtractPitch} from "@sagittal/general"
import {BoundEvent, BoundHistory} from "../../histories"

const computeBoundEventDistance = (
    boundEvent: BoundEvent,
    index: number,
    boundHistory: BoundHistory,
): Abs<Cents> =>
    abs(
        index === 0 ?
            0 as Cents :
            subtractPitch(boundHistory[index - 1].pitch, boundEvent.pitch),
    )

export {
    computeBoundEventDistance,
}
