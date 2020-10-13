import { finalElement, Scamon } from "../../../general"
import { BoundClassHistory } from "../histories"

const computeBoundClassHistoryPosition = (boundClassHistory: BoundClassHistory): Scamon =>
    finalElement(boundClassHistory).pitch

export {
    computeBoundClassHistoryPosition,
}
