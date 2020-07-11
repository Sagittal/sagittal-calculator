import { computeExtendedHistories } from "./extendedHistories"
import { History } from "../types"
import { Bound, Level } from "../../../notations/ji/types"

const computeExtendedLevelHistories = (histories: History[], level: Level, bound: Bound) => {
    let extendedLevelHistories: History[] = []

    histories.forEach(history => {
        const extendedHistories = computeExtendedHistories(history, level, bound)
        extendedLevelHistories = extendedLevelHistories.concat(extendedHistories)
    })

    return extendedLevelHistories
}

export {
    computeExtendedLevelHistories,
}
