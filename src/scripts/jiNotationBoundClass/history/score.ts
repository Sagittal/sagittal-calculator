import { BASE_2, decrement, Exponent, pow } from "../../../general"
import { JI_NOTATION_LEVELS } from "../../../sagittal"
import { RANKS } from "../ranks"
import { computeBinaryScoreRepresentationIndex } from "./binaryScoreRepresentationCardinality"
import { BoundClassEventAnalysis } from "./events"
import { Score } from "./types"

const computeScore = (boundClassEventAnalyses: BoundClassEventAnalysis[]): Score => {
    const binaryScoreRepresentationCardinality = Object.keys(RANKS).length * JI_NOTATION_LEVELS.length // 15

    const binaryScoreRepresentation = [...Array(binaryScoreRepresentationCardinality).keys()]
        .map((_: number): number => 0)

    boundClassEventAnalyses.forEach((boundClassEventAnalysis: BoundClassEventAnalysis): void => {
        const binaryScoreRepresentationIndex = computeBinaryScoreRepresentationIndex(
            decrement(boundClassEventAnalysis.rank),
            JI_NOTATION_LEVELS.indexOf(boundClassEventAnalysis.jiNotationLevel),
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
