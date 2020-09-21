import { Abs, abs, Cents, subtract } from "../../../../general"
import { BoundEvent, BoundHistory } from "../../histories"

const computeBoundEventDistance = (boundEvent: BoundEvent, index: number, boundHistory: BoundHistory): Abs<Cents> =>
    abs(
        index === 0 ?
            0 as Cents :
            subtract(boundHistory[ index - 1 ].cents, boundEvent.cents),
    )

export {
    computeBoundEventDistance,
}
