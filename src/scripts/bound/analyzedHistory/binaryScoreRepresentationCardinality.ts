import { Integer, Rank } from "../../../general"
import { LEVELS } from "../../../sagittal"
import { AnalyzedEvent } from "./analyzeEvents"

const computeBinaryScoreRepresentationIndex = (rank: Integer & Rank<AnalyzedEvent>, index: number) =>
    rank * LEVELS.length + (LEVELS.length - 1 - index)

export {
    computeBinaryScoreRepresentationIndex,
}
