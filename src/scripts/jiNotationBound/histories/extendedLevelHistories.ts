import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { JiNotationBound, JiNotationLevel } from "../../../sagittal"
import { computeExtendedHistories } from "./extendedHistories"
import { History } from "./types"

const computeExtendedJiNotationLevelHistories = (
    histories: History[],
    jiNotationLevel: JiNotationLevel,
    jiNotationBound: JiNotationBound,
): History[] => {
    let extendedJiNotationLevelHistories: History[] = computeExtensionBase(ExtensionBaseType.ARRAY) as History[]

    histories.forEach((history: History): void => {
        const extendedHistories = computeExtendedHistories(history, jiNotationLevel, jiNotationBound)
        extendedJiNotationLevelHistories = extendedJiNotationLevelHistories.concat(extendedHistories)
    })

    return extendedJiNotationLevelHistories
}

export {
    computeExtendedJiNotationLevelHistories,
}
