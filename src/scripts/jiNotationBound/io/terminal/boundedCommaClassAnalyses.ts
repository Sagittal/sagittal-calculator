import { Id, isUndefined, Maybe } from "../../../../general"
import { JiNotationBound } from "../../../../sagittal"
import { computeCommaClassInfo } from "../commaClassInfo"
import {
    BoundedCommaClassAnalyses,
    BoundedCommaClassIdWithDistancesPair,
    JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
} from "./types"

const computeBoundedCommaClassAnalyses = (
    jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByJiNotationLevel:
        JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
): BoundedCommaClassAnalyses => {
    return Object.entries(jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByJiNotationLevel).reduce(
        (
            boundedCommaClassAnalyses: BoundedCommaClassAnalyses,
            [jiNotationLevel, jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPair]:
                [string, Maybe<BoundedCommaClassIdWithDistancesPair> | Id<JiNotationBound>],
        ): BoundedCommaClassAnalyses => {
            if (jiNotationLevel === "id") return boundedCommaClassAnalyses

            const [first, second] = jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPair

            let firstBoundedCommaClassAnalysis
            if (!isUndefined(first)) {
                const firstJiNotationCommaClassAnalysis = computeCommaClassInfo(first.id)
                firstBoundedCommaClassAnalysis = { ...first, ...firstJiNotationCommaClassAnalysis }
            }

            let secondBoundedCommaClassAnalysis
            if (!isUndefined(second)) {
                const secondJiNotationCommaClassAnalysis = computeCommaClassInfo(second.id)
                secondBoundedCommaClassAnalysis = { ...second, ...secondJiNotationCommaClassAnalysis }
            }

            return {
                ...boundedCommaClassAnalyses,
                [ jiNotationLevel ]: [
                    firstBoundedCommaClassAnalysis,
                    secondBoundedCommaClassAnalysis,
                ],
            }
        },
        {
            id: jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByJiNotationLevel.id,
        },
    )
}

export {
    computeBoundedCommaClassAnalyses,
}
