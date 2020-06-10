const {computeInitialStructuredEvent} = require("./initialStructuredEvent")
const {updateStructuredEvent} = require("./updateStructuredEvent")

const computeStructuredHistories = analyzedHistories => {
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
                updateStructuredEvent(matchingStructuredEvent, {nextAnalyzedEvent, analyzedHistory, analyzedEvent})
            } else {
                const newStructuredEvent = computeInitialStructuredEvent(analyzedEvent)

                updateStructuredEvent(newStructuredEvent, {nextAnalyzedEvent, analyzedHistory, analyzedEvent})

                structuredHistories[analyzedEvent.level].push(newStructuredEvent)
            }
        })
    })

    return structuredHistories
}

module.exports = {
    computeStructuredHistories,
}
