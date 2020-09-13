import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { Bound, Level } from "../../../sagittal"
import { computeExtendedHistories } from "./extendedHistories"
import { History } from "./types"

const computeExtendedLevelHistories = (histories: History[], level: Level, bound: Bound): History[] => {
    let extendedLevelHistories: History[] = computeExtensionBase(ExtensionBaseType.ARRAY) as History[]

    histories.forEach((history: History): void => {
        const extendedHistories = computeExtendedHistories(history, level, bound)
        extendedLevelHistories = extendedLevelHistories.concat(extendedHistories)
    })

    return extendedLevelHistories
}

export {
    computeExtendedLevelHistories,
}
