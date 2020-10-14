import { isUndefined, Maybe } from "../../../../general"
import { JiNotationLevel } from "../../../../sagittal"
import { computeBoundedCommaClassInfo } from "./boundedCommaClassInfo"
import { BoundedCommaClassIdPair, BoundedCommaClassIdPairs, BoundedCommaClassInfoPairs } from "./types"

const computeBoundedCommaClassInfoPairs = (
    { jiNotationBoundClassId, ...boundedCommaClassIdPairs }: BoundedCommaClassIdPairs,
): BoundedCommaClassInfoPairs => {
    return Object.entries(boundedCommaClassIdPairs).reduce(
        (
            boundedCommaClassInfoPairs: BoundedCommaClassInfoPairs,
            [jiNotationLevel, boundedCommaClassIdPair]: [string, Maybe<BoundedCommaClassIdPair>],
        ): BoundedCommaClassInfoPairs => {
            const [first, second] = boundedCommaClassIdPair
            const firstBoundedCommaClassInfo = !isUndefined(first) &&
                computeBoundedCommaClassInfo(first, jiNotationBoundClassId, jiNotationLevel as JiNotationLevel)
            const secondBoundedCommaClassInfo = !isUndefined(second) &&
                computeBoundedCommaClassInfo(second, jiNotationBoundClassId, jiNotationLevel as JiNotationLevel)

            return {
                ...boundedCommaClassInfoPairs,
                [ jiNotationLevel ]: [
                    firstBoundedCommaClassInfo,
                    secondBoundedCommaClassInfo,
                ],
            }
        },
        {
            jiNotationBoundClassId,
        },
    )
}

export {
    computeBoundedCommaClassInfoPairs,
}
