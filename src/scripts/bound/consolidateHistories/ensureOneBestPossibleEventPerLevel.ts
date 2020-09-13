import { Level } from "../../../sagittal"
import { EventConsolidation, HistoryConsolidation } from "./types"

const ensureOneBestPossibleEventPerLevel = (historyConsolidation: HistoryConsolidation) => {
    const historyConsolidationEntries = Object.entries(historyConsolidation) as Array<[Level, EventConsolidation[]]>

    historyConsolidationEntries.forEach(([level, events]: [Level, EventConsolidation[]]) => {
        const bestPossibleHistoryEvents = events.filter(event => event.isBestPossibleHistoryMember)

        if (bestPossibleHistoryEvents.length > 1) {
            throw new Error(`History had at the ${level} level more than one event marked as member of the best possible history.`)
        }
        if (bestPossibleHistoryEvents.length === 0) {
            throw new Error(`History had at the ${level} level no event marked as member of the best possible history.`)
        }
    })
}

export {
    ensureOneBestPossibleEventPerLevel,
}
