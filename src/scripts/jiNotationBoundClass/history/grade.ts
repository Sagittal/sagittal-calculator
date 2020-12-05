import {BASE_2, decrement, Exponent, Grade, pow} from "@sagittal/general"
import {JI_NOTATION_LEVELS} from "@sagittal/system"
import {BoundHistory} from "../histories"
import {RANKS} from "../ranks"
import {computeBinaryGradeRepresentationIndex} from "./binaryGradeRepresentationCardinality"
import {BoundEventAnalysis} from "./events"

const computeGrade = (boundEventAnalyses: BoundEventAnalysis[]): Grade<BoundHistory> => {
    const binaryGradeRepresentationCardinality = Object.keys(RANKS).length * JI_NOTATION_LEVELS.length // 15

    const binaryGradeRepresentation = [...Array(binaryGradeRepresentationCardinality).keys()]
        .map((_: number): number => 0)

    boundEventAnalyses.forEach((boundEventAnalysis: BoundEventAnalysis): void => {
        const binaryGradeRepresentationIndex = computeBinaryGradeRepresentationIndex(
            decrement(boundEventAnalysis.rank),
            JI_NOTATION_LEVELS.indexOf(boundEventAnalysis.jiNotationLevel),
        )

        binaryGradeRepresentation[binaryGradeRepresentationIndex] += 1
    })

    return binaryGradeRepresentation.reduce(
        (grade: Grade<BoundHistory>, binaryGradeRepresentationTerm: number, index: number): Grade<BoundHistory> =>
            grade + binaryGradeRepresentationTerm * pow(BASE_2, index as Exponent) as Grade<BoundHistory>,
        0 as Grade<BoundHistory>,
    ) as Grade<BoundHistory>
}

export {
    computeGrade,
}
