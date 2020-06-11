const {computeInitialStructuredEvent} = require("./initialStructuredEvent")
const {updateStructuredEvent} = require("./updateStructuredEvent")
const {ensureOneBestPossibleEventPerLevel} = require("./ensureOneBestPossibleEventPerLevel")

const computeStructuredHistories = (analyzedHistories, bestPossibleHistory) => {
    const structuredHistories = {}

    analyzedHistories.forEach(analyzedHistory => {
        analyzedHistory.events.forEach((analyzedEvent, index) => {
            if (!structuredHistories[analyzedEvent.level]) {
                structuredHistories[analyzedEvent.level] = []
            }

            const nextAnalyzedEvent = analyzedHistory.events[index + 1]

            const matchingStructuredEvent = structuredHistories[analyzedEvent.level]
                .find(existingEvent => existingEvent.name === analyzedEvent.name)

            if (matchingStructuredEvent) {
                updateStructuredEvent(matchingStructuredEvent, {nextAnalyzedEvent, analyzedHistory, analyzedEvent, bestPossibleHistory})
            } else {
                const newStructuredEvent = computeInitialStructuredEvent(analyzedEvent)

                updateStructuredEvent(newStructuredEvent, {nextAnalyzedEvent, analyzedHistory, analyzedEvent, bestPossibleHistory})

                structuredHistories[analyzedEvent.level].push(newStructuredEvent)
            }
        })
    })

    ensureOneBestPossibleEventPerLevel(structuredHistories)

    return structuredHistories
}

module.exports = {
    computeStructuredHistories,
}
