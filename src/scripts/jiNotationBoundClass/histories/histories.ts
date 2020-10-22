import {computeExtensionBase, ExtensionBaseType} from "../../../general"
import {JiNotationBoundClass, JiNotationLevel} from "../../../sagittal"
import {computeExtendedJiNotationLevelBoundHistories} from "./extendedLevelHistories"
import {BoundHistory} from "./types"

const computeHistories = (jiNotationBoundClass: JiNotationBoundClass): BoundHistory[] => {
    const {jiNotationLevels} = jiNotationBoundClass

    let histories: BoundHistory[] = [computeExtensionBase(ExtensionBaseType.ARRAY)] as BoundHistory[]
    jiNotationLevels.forEach((jiNotationLevel: JiNotationLevel): void => {
        histories = computeExtendedJiNotationLevelBoundHistories(histories, jiNotationLevel, jiNotationBoundClass)
    })

    return histories
}

export {
    computeHistories,
}
