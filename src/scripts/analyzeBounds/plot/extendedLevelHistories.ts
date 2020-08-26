import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { Bound, Level } from "../../../notations"
import { History } from "../types"
import { computeExtendedHistories } from "./extendedHistories"

const computeExtendedLevelHistories = (histories: History[], level: Level, bound: Bound) => {
    let extendedLevelHistories: History[] = computeExtensionBase(ExtensionBaseType.ARRAY) as History[]

    histories.forEach(history => {
        const extendedHistories = computeExtendedHistories(history, level, bound)
        extendedLevelHistories = extendedLevelHistories.concat(extendedHistories)
    })

    return extendedLevelHistories
}

export {
    computeExtendedLevelHistories,
}
