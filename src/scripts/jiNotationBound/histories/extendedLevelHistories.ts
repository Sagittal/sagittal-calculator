import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { JiNotationBound, JiNotationLevel } from "../../../sagittal"
import { computeExtendedHistories } from "./extendedHistories"
import { BoundHistory } from "./types"

const computeExtendedJiNotationLevelBoundHistories = (
    boundHistories: BoundHistory[],
    jiNotationLevel: JiNotationLevel,
    jiNotationBound: JiNotationBound,
): BoundHistory[] => {
    let extendedJiNotationLevelBoundHistories: BoundHistory[] =
        computeExtensionBase(ExtensionBaseType.ARRAY) as BoundHistory[]

    boundHistories.forEach((boundHistory: BoundHistory): void => {
        const extendedBoundHistories = computeExtendedHistories(boundHistory, jiNotationLevel, jiNotationBound)
        extendedJiNotationLevelBoundHistories = extendedJiNotationLevelBoundHistories.concat(extendedBoundHistories)
    })

    return extendedJiNotationLevelBoundHistories
}

export {
    computeExtendedJiNotationLevelBoundHistories,
}
