import { BASE_2, decrement, Exponent, pow } from "../../../general"
import { JI_NOTATION_LEVELS } from "../../../sagittal"
import { RANKS } from "../ranks"
import { computeBinaryScoreRepresentationIndex } from "./binaryScoreRepresentationCardinality"
import { BoundEventAnalysis } from "./events"
import { Score } from "./types"

const computeScore = (boundEventAnalyses: BoundEventAnalysis[]): Score => {
    const binaryScoreRepresentationCardinality = Object.keys(RANKS).length * JI_NOTATION_LEVELS.length // 15

    const binaryScoreRepresentation = [...Array(binaryScoreRepresentationCardinality).keys()]
        .map((_: number): number => 0)

    boundEventAnalyses.forEach((boundEventAnalysis: BoundEventAnalysis): void => {
        const binaryScoreRepresentationIndex = computeBinaryScoreRepresentationIndex(
            decrement(boundEventAnalysis.rank),
            JI_NOTATION_LEVELS.indexOf(boundEventAnalysis.jiNotationLevel),
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
