import { computeInitialConsolidatedEvent } from "./initialConsolidatedEvent"
import { updateConsolidatedEvent } from "./updateConsolidatedEvent"
import { ensureOneBestPossibleEventPerLevel } from "./ensureOneBestPossibleEventPerLevel"
import { AnalyzedHistory, ConsolidatedEvent, ConsolidatedHistories, UpdateConsolidatedEventParameters } from "./types"

const computeConsolidatedHistories = (analyzedHistories: AnalyzedHistory[], bestPossibleHistory: AnalyzedHistory): ConsolidatedHistories => {
    const consolidatedHistories: ConsolidatedHistories = {}

    analyzedHistories.forEach(analyzedHistory => {
        analyzedHistory.events.forEach((analyzedEvent, index) => {
            consolidatedHistories[ analyzedEvent.level ] = consolidatedHistories[ analyzedEvent.level ] || [] as ConsolidatedEvent[]
            const consolidatedHistory = consolidatedHistories[ analyzedEvent.level ] as ConsolidatedEvent[]

            const nextAnalyzedEvent = analyzedHistory.events[ index + 1 ]

            const matchingConsolidatedEvent: ConsolidatedEvent | undefined = consolidatedHistory
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

                consolidatedHistory.push(newConsolidatedEvent)
            }
        })
    })

    ensureOneBestPossibleEventPerLevel(consolidatedHistories)

    return consolidatedHistories
}

export {
    computeConsolidatedHistories,
}
