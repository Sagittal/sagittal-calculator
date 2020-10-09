import { finalElement, Scamon } from "../../../general"
import { BoundHistory } from "../histories"

const computeBoundHistoryPosition = (boundHistory: BoundHistory): Scamon =>
    finalElement(boundHistory).pitch

export {
    computeBoundHistoryPosition,
}
