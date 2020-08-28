import { Rank } from "../../general"
import { LEVELS } from "../../notations"
import { RANKS } from "./ranks"
import { AnalyzedEvent } from "./types"

const BINARY_SCORE_REPRESENTATION_CARDINALITY = Object.keys(RANKS).length * LEVELS.length // 15

const computeBinaryScoreRepresentationIndex = (rank: Rank<AnalyzedEvent>, index: number) =>
    rank * LEVELS.length + (LEVELS.length - 1 - index)

export {
    BINARY_SCORE_REPRESENTATION_CARDINALITY,
    computeBinaryScoreRepresentationIndex,
}
