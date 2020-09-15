import { formatJiNotationLevel, JiNotationLevel } from "../../../sagittal"
import { EventConsolidation, HistoryConsolidation } from "./types"

const ensureOneBestPossibleEventPerJiNotationLevel = (historyConsolidation: HistoryConsolidation): void => {
    const historyConsolidationEntries =
        Object.entries(historyConsolidation) as Array<[JiNotationLevel, EventConsolidation[]]>

    historyConsolidationEntries.forEach(
        ([jiNotationLevel, eventConsolidations]: [JiNotationLevel, EventConsolidation[]]): void => {
            const bestPossibleHistoryEvents =
                eventConsolidations.filter((eventConsolidation: EventConsolidation): boolean => {
                    return eventConsolidation.isBestPossibleHistoryMember
                })

            if (bestPossibleHistoryEvents.length > 1) {
                throw new Error(`History had at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level more than one event marked as member of the best possible history.`)
            }
            if (bestPossibleHistoryEvents.length === 0) {
                throw new Error(`History had at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level no event marked as member of the best possible history.`)
            }
        },
    )
}

export {
    ensureOneBestPossibleEventPerJiNotationLevel,
}
