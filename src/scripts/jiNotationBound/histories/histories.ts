import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { JiNotationBound, JiNotationLevel } from "../../../sagittal"
import { computeExtendedJiNotationLevelHistories } from "./extendedLevelHistories"
import { History } from "./types"

const computeHistories = (jiNotationBound: JiNotationBound): History[] => {
    const { jiNotationLevels } = jiNotationBound

    let histories: History[] = [computeExtensionBase(ExtensionBaseType.ARRAY)] as History[]
    jiNotationLevels.forEach((jiNotationLevel: JiNotationLevel): void => {
        histories = computeExtendedJiNotationLevelHistories(histories, jiNotationLevel, jiNotationBound)
    })

    return histories
}

export {
    computeHistories,
}
