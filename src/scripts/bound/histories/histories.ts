import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { Bound } from "../../../sagittal"
import { computeExtendedLevelHistories } from "./extendedLevelHistories"
import { History } from "./types"

const computeHistories = (bound: Bound): History[] => {
    const { levels } = bound

    let histories: History[] = [computeExtensionBase(ExtensionBaseType.ARRAY)] as History[]
    levels.forEach(level => {
        histories = computeExtendedLevelHistories(histories, level, bound)
    })

    return histories
}

export {
    computeHistories,
}