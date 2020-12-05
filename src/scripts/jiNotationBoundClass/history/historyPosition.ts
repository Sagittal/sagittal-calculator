import {finalElement, Scamon} from "@sagittal/general"
import {BoundHistory} from "../histories"

const computeBoundHistoryPosition = (boundHistory: BoundHistory): Scamon =>
    finalElement(boundHistory).pitch

export {
    computeBoundHistoryPosition,
}
