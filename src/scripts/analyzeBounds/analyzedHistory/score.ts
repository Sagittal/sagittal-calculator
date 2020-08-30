import { BASE_2, Exponent, pow } from "../../../general"
import { LEVELS } from "../../../sagittal"
import { RANKS } from "../analyzeBound"
import { AnalyzedEvent } from "./analyzeEvents"
import { computeBinaryScoreRepresentationIndex } from "./binaryScoreRepresentationCardinality"
import { Score } from "./types"

const computeScore = (analyzedEvents: AnalyzedEvent[]): Score => {
    const binaryScoreRepresentationCardinality = Object.keys(RANKS).length * LEVELS.length // 15

    const binaryScoreReformatation = [...Array(binaryScoreRepresentationCardinality).keys()].map(_ => 0)

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
