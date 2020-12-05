import {isUndefined, Maybe} from "@sagittal/general"
import {JiNotationLevelId} from "@sagittal/system"
import {computeBoundedCommaClassInfo} from "./boundedCommaClassInfo"
import {BoundedCommaClassIdPair, BoundedCommaClassIdPairs, BoundedCommaClassInfoPairs} from "./types"

const computeBoundedCommaClassInfoPairs = (
    {boundClassId, ...boundedCommaClassIdPairs}: BoundedCommaClassIdPairs,
): BoundedCommaClassInfoPairs => {
    return Object.entries(boundedCommaClassIdPairs).reduce(
        (
            boundedCommaClassInfoPairs: BoundedCommaClassInfoPairs,
            [jiNotationLevel, boundedCommaClassIdPair]: [string, Maybe<BoundedCommaClassIdPair>],
        ): BoundedCommaClassInfoPairs => {
            const [first, second] = boundedCommaClassIdPair!
            const firstBoundedCommaClassInfo = !isUndefined(first) &&
                computeBoundedCommaClassInfo(first, boundClassId, jiNotationLevel as JiNotationLevelId)
            const secondBoundedCommaClassInfo = !isUndefined(second) &&
                computeBoundedCommaClassInfo(second, boundClassId, jiNotationLevel as JiNotationLevelId)

            return {
                ...boundedCommaClassInfoPairs,
                [jiNotationLevel]: [
                    firstBoundedCommaClassInfo,
                    secondBoundedCommaClassInfo,
                ],
            }
        },
        {
            boundClassId,
        },
    )
}

export {
    computeBoundedCommaClassInfoPairs,
}
