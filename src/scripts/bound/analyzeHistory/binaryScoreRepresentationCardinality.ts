import { Integer, Rank } from "../../../general"
import { LEVELS } from "../../../sagittal"
import { EventAnalysis } from "./analyzeEvents"

const computeBinaryScoreRepresentationIndex = (rank: Integer & Rank<EventAnalysis>, index: number): number =>
    rank * LEVELS.length + (LEVELS.length - 1 - index)

export {
    computeBinaryScoreRepresentationIndex,
}
