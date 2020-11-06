import {BASE_2, decrement, Exponent, pow, Score} from "../../../general"
import {JI_NOTATION_LEVELS} from "../../../sagittal"
import {BoundHistory} from "../histories"
import {RANKS} from "../ranks"
import {computeBinaryScoreRepresentationIndex} from "./binaryScoreRepresentationCardinality"
import {BoundEventAnalysis} from "./events"

const computeScore = (boundEventAnalyses: BoundEventAnalysis[]): Score<BoundHistory> => {
    const binaryScoreRepresentationCardinality = Object.keys(RANKS).length * JI_NOTATION_LEVELS.length // 15

    const binaryScoreRepresentation = [...Array(binaryScoreRepresentationCardinality).keys()]
        .map((_: number): number => 0)

    boundEventAnalyses.forEach((boundEventAnalysis: BoundEventAnalysis): void => {
        const binaryScoreRepresentationIndex = computeBinaryScoreRepresentationIndex(
            decrement(boundEventAnalysis.rank),
            JI_NOTATION_LEVELS.indexOf(boundEventAnalysis.jiNotationLevel),
        )

        binaryScoreRepresentation[binaryScoreRepresentationIndex] += 1
    })

    return binaryScoreRepresentation.reduce(
        (score: Score<BoundHistory>, binaryScoreRepresentationTerm: number, index: number): Score<BoundHistory> =>
            score + binaryScoreRepresentationTerm * pow(BASE_2, index as Exponent) as Score<BoundHistory>,
        0 as Score<BoundHistory>,
    ) as Score<BoundHistory>
}

export {
    computeScore,
}
