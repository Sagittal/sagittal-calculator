import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { JiNotationBoundClass, JiNotationLevel } from "../../../sagittal"
import { computeExtendedHistories } from "./extendedHistories"
import { BoundClassHistory } from "./types"

const computeExtendedJiNotationLevelBoundClassHistories = (
    boundClassHistories: BoundClassHistory[],
    jiNotationLevel: JiNotationLevel,
    jiNotationBoundClass: JiNotationBoundClass,
): BoundClassHistory[] => {
    let extendedJiNotationLevelBoundClassHistories: BoundClassHistory[] =
        computeExtensionBase(ExtensionBaseType.ARRAY) as BoundClassHistory[]

    boundClassHistories.forEach((boundClassHistory: BoundClassHistory): void => {
        const extendedBoundClassHistories =
            computeExtendedHistories(boundClassHistory, jiNotationLevel, jiNotationBoundClass)
        extendedJiNotationLevelBoundClassHistories = extendedJiNotationLevelBoundClassHistories
            .concat(extendedBoundClassHistories)
    })

    return extendedJiNotationLevelBoundClassHistories
}

export {
    computeExtendedJiNotationLevelBoundClassHistories,
}
