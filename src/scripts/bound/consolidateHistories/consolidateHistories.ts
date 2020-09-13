import { Maybe } from "../../../general"
import { EventAnalysis, HistoryAnalysis } from "../analyzeHistory"
import { ensureOneBestPossibleEventPerLevel } from "./ensureOneBestPossibleEventPerLevel"
import { computeInitialEventConsolidation } from "./initialEventConsolidation"
import { EventConsolidation, HistoryConsolidation } from "./types"
import { updateEventConsolidation } from "./updateEventConsolidation"

const consolidateHistories = (
    historyAnalyses: HistoryAnalysis[],
    bestPossibleHistory: HistoryAnalysis,
): HistoryConsolidation => {
    const historyConsolidation: HistoryConsolidation = {}

    historyAnalyses.forEach((historyAnalysis: HistoryAnalysis): void => {
        historyAnalysis.eventAnalyses.forEach((eventAnalysis: EventAnalysis, index: number): void => {
            historyConsolidation[ eventAnalysis.level ] = historyConsolidation[ eventAnalysis.level ] || []
            const eventConsolidations: Maybe<EventConsolidation[]> = historyConsolidation[ eventAnalysis.level ]

            const nextEventAnalysis = historyAnalysis.eventAnalyses[ index + 1 ]

            const matchingEventConsolidation: Maybe<EventConsolidation> = eventConsolidations && eventConsolidations
                .find((existingEvent: EventConsolidation): boolean => existingEvent.name === eventAnalysis.name)

            const UpdateEventConsolidationOptions = {
                nextEventAnalysis,
                historyAnalysis,
                eventAnalysis,
                bestPossibleHistory,
            }

            if (matchingEventConsolidation) {
                updateEventConsolidation(matchingEventConsolidation, UpdateEventConsolidationOptions)
            } else {
                const newEventConsolidation: EventConsolidation = computeInitialEventConsolidation(eventAnalysis)

                updateEventConsolidation(newEventConsolidation, UpdateEventConsolidationOptions)

                eventConsolidations && eventConsolidations.push(newEventConsolidation)
            }
        })
    })

    ensureOneBestPossibleEventPerLevel(historyConsolidation)

    return historyConsolidation
}

export {
    consolidateHistories,
}
