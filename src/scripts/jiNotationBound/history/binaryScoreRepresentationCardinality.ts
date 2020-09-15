import { Integer, Rank } from "../../../general"
import { JI_NOTATION_LEVELS } from "../../../sagittal"
import { EventAnalysis } from "./events"

const computeBinaryScoreRepresentationIndex = (rank: Integer & Rank<EventAnalysis>, index: number): number =>
    rank * JI_NOTATION_LEVELS.length + (JI_NOTATION_LEVELS.length - 1 - index)

export {
    computeBinaryScoreRepresentationIndex,
}
