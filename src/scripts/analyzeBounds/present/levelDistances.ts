import {LEVELS} from "../../../notations/ji/levels"
import {presentNumber} from "./number"
import {alignFormattedNumber} from "./alignFormattedNumber"

const extractLevelDistances = analyzedHistory => {
    const events = analyzedHistory.events

    return LEVELS.slice(0, LEVELS.length - 1).map(level => {
        const previousEventIndex = events.findIndex(event => event.level === level)
        if (previousEventIndex === -1) return " "
        const levelEvent = events[previousEventIndex + 1]

        return alignFormattedNumber(presentNumber(levelEvent.distance))
    })
}

export {
    extractLevelDistances,
}
