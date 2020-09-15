import { Id, isUndefined, Maybe } from "../../../../general"
import { JiNotationBound } from "../../../../sagittal"
import { getJiNotationSymbolClassWithPrimaryComma } from "./symbolClassWithPrimaryComma"
import {
    BoundedSymbolClassesWithPrimaryCommas,
    BoundedSymbolClassIdWithDistancesPair,
    JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
} from "./types"

const computeBoundedSymbolClasses = (
    jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel:
        JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
): BoundedSymbolClassesWithPrimaryCommas => {
    return Object.entries(jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPairsByJiNotationLevel).reduce(
        (
            boundedSymbolClasses: BoundedSymbolClassesWithPrimaryCommas,
            [jiNotationLevel, jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPair]:
                [string, Maybe<BoundedSymbolClassIdWithDistancesPair> | Id<JiNotationBound>],
        ): BoundedSymbolClassesWithPrimaryCommas => {
            if (jiNotationLevel === "id") return boundedSymbolClasses

            const [first, second] = jiNotationBoundIdWithBoundedSymbolClassIdWithDistancesPair

            let firstBoundedSymbolWithPrimaryComma
            if (!isUndefined(first)) {
                const firstJiNotationSymbolWithPrimaryComma = getJiNotationSymbolClassWithPrimaryComma(first.id)
                firstBoundedSymbolWithPrimaryComma = { ...first, ...firstJiNotationSymbolWithPrimaryComma }
            }

            let secondBoundedSymbolWithPrimaryComma
            if (!isUndefined(second)) {
                const secondJiNotationSymbolWithPrimaryComma = getJiNotationSymbolClassWithPrimaryComma(second.id)
                secondBoundedSymbolWithPrimaryComma = { ...second, ...secondJiNotationSymbolWithPrimaryComma }
            }

            return {
                ...boundedSymbolClasses,
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
    computeBoundedSymbolClasses,
}
