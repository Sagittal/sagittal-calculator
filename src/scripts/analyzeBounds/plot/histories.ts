import { computeExtendedLevelHistories } from "./extendedLevelHistories"
import { Bound } from "../../../notations/ji/types"
import { History } from "../types"

const computeHistories = (bound: Bound) => {
    const { levels } = bound

    let histories: History[] = [[]]
    levels.forEach(level => {
        histories = computeExtendedLevelHistories(histories, level, bound)
    })

    return histories
}

export {
    computeHistories,
}
