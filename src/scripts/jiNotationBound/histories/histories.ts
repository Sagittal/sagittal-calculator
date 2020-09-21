import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { JiNotationBound, JiNotationLevel } from "../../../sagittal"
import { computeExtendedJiNotationLevelBoundHistories } from "./extendedLevelHistories"
import { BoundHistory } from "./types"

const computeHistories = (jiNotationBound: JiNotationBound): BoundHistory[] => {
    const { jiNotationLevels } = jiNotationBound

    let histories: BoundHistory[] = [computeExtensionBase(ExtensionBaseType.ARRAY)] as BoundHistory[]
    jiNotationLevels.forEach((jiNotationLevel: JiNotationLevel): void => {
        histories = computeExtendedJiNotationLevelBoundHistories(histories, jiNotationLevel, jiNotationBound)
    })

    return histories
}

export {
    computeHistories,
}
