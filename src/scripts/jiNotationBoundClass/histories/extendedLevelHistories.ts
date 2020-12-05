import {computeExtensionBase, ExtensionBaseType} from "@sagittal/general"
import {JiNotationBoundClass, JiNotationLevelId} from "@sagittal/system"
import {computeExtendedHistories} from "./extendedHistories"
import {BoundHistory} from "./types"

const computeExtendedJiNotationLevelBoundHistories = (
    boundHistories: BoundHistory[],
    jiNotationLevel: JiNotationLevelId,
    jiNotationBoundClass: JiNotationBoundClass,
): BoundHistory[] => {
    let extendedJiNotationLevelBoundHistories: BoundHistory[] =
        computeExtensionBase(ExtensionBaseType.ARRAY) as BoundHistory[]

    boundHistories.forEach((boundHistory: BoundHistory): void => {
        const extendedBoundHistories =
            computeExtendedHistories(boundHistory, jiNotationLevel, jiNotationBoundClass)
        extendedJiNotationLevelBoundHistories = extendedJiNotationLevelBoundHistories
            .concat(extendedBoundHistories)
    })

    return extendedJiNotationLevelBoundHistories
}

export {
    computeExtendedJiNotationLevelBoundHistories,
}
