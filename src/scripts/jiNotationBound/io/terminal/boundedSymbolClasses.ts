import { Id, isUndefined, Maybe } from "../../../../general"
import { JiNotationBound } from "../../../../sagittal"
import { analyzeJiNotationSymbolClass } from "./analyzeSymbolClass"
import {
    BoundedSymbolClassAnalyses,
    BoundedSymbolClassIdWithDistancesPair,
    JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
} from "./types"

const analyzeBoundedSymbolClasses = (
    jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel:
        JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
): BoundedSymbolClassAnalyses => {
    return Object.entries(jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel).reduce(
        (
            boundedSymbolClassAnalyses: BoundedSymbolClassAnalyses,
            [jiNotationLevel, jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPair]:
                [string, Maybe<BoundedSymbolClassIdWithDistancesPair> | Id<JiNotationBound>],
        ): BoundedSymbolClassAnalyses => {
            if (jiNotationLevel === "id") return boundedSymbolClassAnalyses

            const [first, second] = jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPair

            let firstBoundedSymbolWithPrimaryComma
            if (!isUndefined(first)) {
                const firstJiNotationSymbolWithPrimaryComma = analyzeJiNotationSymbolClass(first.id)
                firstBoundedSymbolWithPrimaryComma = { ...first, ...firstJiNotationSymbolWithPrimaryComma }
            }

            let secondBoundedSymbolWithPrimaryComma
            if (!isUndefined(second)) {
                const secondJiNotationSymbolWithPrimaryComma = analyzeJiNotationSymbolClass(second.id)
                secondBoundedSymbolWithPrimaryComma = { ...second, ...secondJiNotationSymbolWithPrimaryComma }
            }

            return {
                ...boundedSymbolClassAnalyses,
                [ jiNotationLevel ]: [
                    firstBoundedSymbolWithPrimaryComma,
                    secondBoundedSymbolWithPrimaryComma,
                ],
            }
        },
        {
            id: jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel.id,
        },
    )
}

export {
    analyzeBoundedSymbolClasses,
}
