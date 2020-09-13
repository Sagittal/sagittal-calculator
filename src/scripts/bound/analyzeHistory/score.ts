import { BASE_2, Exponent, pow } from "../../../general"
import { LEVELS } from "../../../sagittal"
import { RANKS } from "../analyzeBound"
import { EventAnalysis } from "./analyzeEvents"
import { computeBinaryScoreRepresentationIndex } from "./binaryScoreRepresentationCardinality"
import { Score } from "./types"

const computeScore = (eventAnalyses: EventAnalysis[]): Score => {
    const binaryScoreRepresentationCardinality = Object.keys(RANKS).length * LEVELS.length // 15

    const binaryScoreRepresentation = [...Array(binaryScoreRepresentationCardinality).keys()]
        .map((_: number): number => 0)

    eventAnalyses.forEach((eventAnalysis: EventAnalysis): void => {
        const binaryScoreRepresentationIndex = computeBinaryScoreRepresentationIndex(
            eventAnalysis.rank,
            LEVELS.indexOf(eventAnalysis.level),
        )

        binaryScoreRepresentation[ binaryScoreRepresentationIndex ] += 1
    })

    return binaryScoreRepresentation.reduce(
        (score: Score, binaryScoreRepresentationTerm: number, index: number): Score =>
            score + binaryScoreRepresentationTerm * pow(BASE_2, index as Exponent) as Score,
        0 as Score,
    ) as Score
}

export {
    computeScore,
}
