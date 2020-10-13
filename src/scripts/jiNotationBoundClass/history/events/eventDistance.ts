import { Abs, abs, Cents, subtractPitch } from "../../../../general"
import { BoundClassEvent, BoundClassHistory } from "../../histories"

const computeBoundClassEventDistance = (
    boundClassEvent: BoundClassEvent,
    index: number,
    boundClassHistory: BoundClassHistory,
): Abs<Cents> =>
    abs(
        index === 0 ?
            0 as Cents :
            subtractPitch(boundClassHistory[ index - 1 ].pitch, boundClassEvent.pitch),
    )

export {
    computeBoundClassEventDistance,
}
