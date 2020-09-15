import { BASE_2, Exponent, pow } from "../../../general"
import { JI_NOTATION_LEVELS } from "../../../sagittal"
import { RANKS } from "../bound"
import { computeBinaryScoreRepresentationIndex } from "./binaryScoreRepresentationCardinality"
import { EventAnalysis } from "./events"
import { Score } from "./types"

const computeScore = (eventAnalyses: EventAnalysis[]): Score => {
    const binaryScoreRepresentationCardinality = Object.keys(RANKS).length * JI_NOTATION_LEVELS.length // 15

    const binaryScoreRepresentation = [...Array(binaryScoreRepresentationCardinality).keys()]
        .map((_: number): number => 0)

    eventAnalyses.forEach((eventAnalysis: EventAnalysis): void => {
        const binaryScoreRepresentationIndex = computeBinaryScoreRepresentationIndex(
            eventAnalysis.rank,
            JI_NOTATION_LEVELS.indexOf(eventAnalysis.jiNotationLevel),
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
