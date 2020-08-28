import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { Bound } from "../../../sagittal"
import { History } from "../types"
import { computeExtendedLevelHistories } from "./extendedLevelHistories"

const computeHistories = (bound: Bound) => {
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
