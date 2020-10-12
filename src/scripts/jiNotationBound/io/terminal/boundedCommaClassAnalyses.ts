import { Id, isUndefined, Maybe } from "../../../../general"
import { analyzeCommaClass, JiNotationBound } from "../../../../sagittal"
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

            // TODO: needs work after merging primary comma into comma class
            let firstBoundedCommaClassWithPrimaryComma
            if (!isUndefined(first)) {
                const firstJiNotationCommaClassWithPrimaryComma = analyzeCommaClass(first.id)
                firstBoundedCommaClassWithPrimaryComma = { ...first, ...firstJiNotationCommaClassWithPrimaryComma }
            }

            let secondBoundedCommaClassWithPrimaryComma
            if (!isUndefined(second)) {
                const secondJiNotationCommaClassWithPrimaryComma = analyzeCommaClass(second.id)
                secondBoundedCommaClassWithPrimaryComma = { ...second, ...secondJiNotationCommaClassWithPrimaryComma }
            }

            return {
                ...boundedCommaClassAnalyses,
                [ jiNotationLevel ]: [
                    firstBoundedCommaClassWithPrimaryComma,
                    secondBoundedCommaClassWithPrimaryComma,
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
