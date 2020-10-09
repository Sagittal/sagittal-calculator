import { finalElement, Pitch } from "../../../general"
import { BoundHistory } from "../histories"

const computeBoundHistoryPosition = (boundHistory: BoundHistory): Pitch =>
    finalElement(boundHistory).pitch

export {
    computeBoundHistoryPosition,
}
