import { BASE_2, Exponent, pow } from "../../general"
import { LEVELS } from "../../sagittal"
import {
    BINARY_SCORE_REPRESENTATION_CARDINALITY,
    computeBinaryScoreRepresentationIndex,
} from "./binaryScoreRepresentationCardinality"
import { AnalyzedEvent, Score } from "./types"

const computeScore = (analyzedEvents: AnalyzedEvent[]): Score => {
    const binaryScoreReformatation = [...Array(BINARY_SCORE_REPRESENTATION_CARDINALITY).keys()].map(_ => 0)

    analyzedEvents.forEach(analyzedHistory => {
        const binaryScoreReformatationIndex = computeBinaryScoreRepresentationIndex(
            analyzedHistory.rank,
            LEVELS.indexOf(analyzedHistory.level),
        )

        binaryScoreReformatation[ binaryScoreReformatationIndex ] += 1
    })

    return binaryScoreReformatation.reduce(
        (score, binaryScoreReformatationTerm, index): Score =>
            score + binaryScoreReformatationTerm * pow(BASE_2, index as Exponent) as Score,
        0 as Score,
    ) as Score
}

export {
    computeScore,
}
