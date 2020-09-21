import { Cents, finalElement } from "../../../general"
import { BoundHistory } from "../histories"

const computeBoundHistoryPosition = (boundHistory: BoundHistory): Cents => {
    const mostRecentBoundEvent = finalElement(boundHistory)

    return mostRecentBoundEvent.cents
}

export {
    computeBoundHistoryPosition,
}
