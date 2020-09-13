import { Level } from "../../../sagittal"
import { EventConsolidation, HistoryConsolidation } from "./types"

const ensureOneBestPossibleEventPerLevel = (historyConsolidation: HistoryConsolidation): void => {
    const historyConsolidationEntries = Object.entries(historyConsolidation) as Array<[Level, EventConsolidation[]]>

    historyConsolidationEntries.forEach(([level, eventConsolidations]: [Level, EventConsolidation[]]): void => {
        const bestPossibleHistoryEvents =
            eventConsolidations.filter((eventConsolidation: EventConsolidation): boolean => {
                return eventConsolidation.isBestPossibleHistoryMember
            })

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
