import { presentNumber } from "../../../general"
import { LEVELS } from "../../../notations"
import { AnalyzedHistory } from "../types"
import { alignFormattedNumber } from "./alignFormattedNumber"

const extractLevelDistances = (analyzedHistory: AnalyzedHistory) => {
    const events = analyzedHistory.events

    return LEVELS.slice(0, LEVELS.length - 1).map(level => {
        const previousEventIndex = events.findIndex(event => event.level === level)
        if (previousEventIndex === -1) {
            return " "
        }
        const levelEvent = events[ previousEventIndex + 1 ]

        return alignFormattedNumber(presentNumber(levelEvent.distance))
    })
}

export {
    extractLevelDistances,
}
