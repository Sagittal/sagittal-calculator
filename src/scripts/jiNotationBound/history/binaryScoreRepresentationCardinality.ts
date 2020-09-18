import { Integer, Rank } from "../../../general"
import { JI_NOTATION_LEVELS } from "../../../sagittal"
import { EventType } from "../histories"

const computeBinaryScoreRepresentationIndex = (rank: Integer & Rank<EventType>, index: number): number =>
    rank * JI_NOTATION_LEVELS.length + (JI_NOTATION_LEVELS.length - 1 - index)

export {
    computeBinaryScoreRepresentationIndex,
}
