import {computeInitialConsolidatedEvent} from "./initialConsolidatedEvent"
import {updateConsolidatedEvent} from "./updateConsolidatedEvent"
import {ensureOneBestPossibleEventPerLevel} from "./ensureOneBestPossibleEventPerLevel"

const computeConsolidatedHistories = (analyzedHistories, bestPossibleHistory) => {
    const consolidatedHistories = {}

    analyzedHistories.forEach(analyzedHistory => {
        analyzedHistory.events.forEach((analyzedEvent, index) => {
            if (!consolidatedHistories[analyzedEvent.level]) {
                consolidatedHistories[analyzedEvent.level] = []
            }

            const nextAnalyzedEvent = analyzedHistory.events[index + 1]

            const matchingConsolidatedEvent = consolidatedHistories[analyzedEvent.level]
                .find(existingEvent => existingEvent.name === analyzedEvent.name)

            if (matchingConsolidatedEvent) {
                updateConsolidatedEvent(matchingConsolidatedEvent, {
                    nextAnalyzedEvent,
                    analyzedHistory,
                    analyzedEvent,
                    bestPossibleHistory,
                })
            } else {
                const newConsolidatedEvent = computeInitialConsolidatedEvent(analyzedEvent)

                updateConsolidatedEvent(newConsolidatedEvent, {
                    nextAnalyzedEvent,
                    analyzedHistory,
                    analyzedEvent,
                    bestPossibleHistory,
                })

                consolidatedHistories[analyzedEvent.level].push(newConsolidatedEvent)
            }
        })
    })

    ensureOneBestPossibleEventPerLevel(consolidatedHistories)

    return consolidatedHistories
}

export {
    computeConsolidatedHistories,
}
