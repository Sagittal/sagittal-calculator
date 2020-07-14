import { LEVELS } from "../../notations"
import {
    BINARY_SCORE_REPRESENTATION_CARDINALITY,
    computeBinaryScoreRepresentationIndex,
} from "./binaryScoreRepresentationCardinality"
import { AnalyzedEvent, Score } from "./types"

const computeScore = (analyzedEvents: AnalyzedEvent[]): Score => {
    const binaryScoreRepresentation = [...Array(BINARY_SCORE_REPRESENTATION_CARDINALITY).keys()].map(_ => 0)

    analyzedEvents.forEach(analyzedHistory => {
        const binaryScoreRepresentationIndex = computeBinaryScoreRepresentationIndex(
            analyzedHistory.rank,
            LEVELS.indexOf(analyzedHistory.level),
        )

        binaryScoreRepresentation[ binaryScoreRepresentationIndex ] += 1
    })

    return binaryScoreRepresentation.reduce(
        (score, binaryScoreRepresentationTerm, index): Score =>
            score + binaryScoreRepresentationTerm * Math.pow(2, index) as Score,
        0 as Score,
    ) as Score
}

export {
    computeScore,
    computeBinaryScoreRepresentationIndex,
}
