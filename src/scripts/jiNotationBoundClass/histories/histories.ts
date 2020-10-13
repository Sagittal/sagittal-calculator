import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { JiNotationBoundClass, JiNotationLevel } from "../../../sagittal"
import { computeExtendedJiNotationLevelBoundClassHistories } from "./extendedLevelHistories"
import { BoundClassHistory } from "./types"

const computeHistories = (jiNotationBoundClass: JiNotationBoundClass): BoundClassHistory[] => {
    const { jiNotationLevels } = jiNotationBoundClass

    let histories: BoundClassHistory[] = [computeExtensionBase(ExtensionBaseType.ARRAY)] as BoundClassHistory[]
    jiNotationLevels.forEach((jiNotationLevel: JiNotationLevel): void => {
        histories = computeExtendedJiNotationLevelBoundClassHistories(histories, jiNotationLevel, jiNotationBoundClass)
    })

    return histories
}

export {
    computeHistories,
}
