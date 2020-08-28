import { Maybe } from "../../general"
import { ensureOneBestPossibleEventPerLevel } from "./ensureOneBestPossibleEventPerLevel"
import { computeInitialConsolidatedEvent } from "./initialConsolidatedEvent"
import { AnalyzedHistory, ConsolidatedEvent, ConsolidatedHistories } from "./types"
import { updateConsolidatedEvent } from "./updateConsolidatedEvent"

const computeConsolidatedHistories = (
    analyzedHistories: AnalyzedHistory[],
    bestPossibleHistory: AnalyzedHistory,
): ConsolidatedHistories => {
    const consolidatedHistories: ConsolidatedHistories = {}

    analyzedHistories.forEach(analyzedHistory => {
        analyzedHistory.events.forEach((analyzedEvent, index) => {
            consolidatedHistories[ analyzedEvent.level ] = consolidatedHistories[ analyzedEvent.level ] || []
            const consolidatedEvents: Maybe<ConsolidatedEvent[]> = consolidatedHistories[ analyzedEvent.level ]

            const nextAnalyzedEvent = analyzedHistory.events[ index + 1 ]

            const matchingConsolidatedEvent: Maybe<ConsolidatedEvent> = consolidatedEvents && consolidatedEvents
                .find(existingEvent => existingEvent.name === analyzedEvent.name)

            const updateConsolidatedEventParameters = {
                nextAnalyzedEvent,
                analyzedHistory,
                analyzedEvent,
                bestPossibleHistory,
            }

            if (matchingConsolidatedEvent) {
                updateConsolidatedEvent(matchingConsolidatedEvent, updateConsolidatedEventParameters)
            } else {
                const newConsolidatedEvent: ConsolidatedEvent = computeInitialConsolidatedEvent(analyzedEvent)

                updateConsolidatedEvent(newConsolidatedEvent, updateConsolidatedEventParameters)

                consolidatedEvents && consolidatedEvents.push(newConsolidatedEvent)
            }
        })
    })

    ensureOneBestPossibleEventPerLevel(consolidatedHistories)

    return consolidatedHistories
}

export {
    computeConsolidatedHistories,
}
