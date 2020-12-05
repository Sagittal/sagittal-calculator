import {computeExtensionBase, ExtensionBaseType} from "@sagittal/general"
import {JiNotationBoundClass, JiNotationLevelId} from "@sagittal/system"
import {computeExtendedJiNotationLevelBoundHistories} from "./extendedLevelHistories"
import {BoundHistory} from "./types"

const computeHistories = (jiNotationBoundClass: JiNotationBoundClass): BoundHistory[] => {
    const {jiNotationLevels} = jiNotationBoundClass

    let histories: BoundHistory[] = [computeExtensionBase(ExtensionBaseType.ARRAY)] as BoundHistory[]
    jiNotationLevels.forEach((jiNotationLevel: JiNotationLevelId): void => {
        histories = computeExtendedJiNotationLevelBoundHistories(histories, jiNotationLevel, jiNotationBoundClass)
    })

    return histories
}

export {
    computeHistories,
}
