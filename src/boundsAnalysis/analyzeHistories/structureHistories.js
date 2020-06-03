const structureHistories = histories => {
    const structuredHistories = {}

    histories.forEach(history => {
        history.events.forEach((event, index) => {
            if (event.type === "impossible") return

            const nextEvent = history.events[index + 1]

            if (!structuredHistories[event.level]) structuredHistories[event.level] = []

            const existingEvent = structuredHistories[event.level].find(existingEvent => existingEvent.name === event.name)

            if (existingEvent) {
                if (nextEvent) existingEvent.nextEvents.push(nextEvent.name)
                if (history.possible) existingEvent.possible = true
            } else {
                const newEvent = {
                    ...event,
                    possible: false,
                    nextEvents: [],
                }
                if (nextEvent) newEvent.nextEvents.push(nextEvent.name)
                if (history.possible) newEvent.possible = true
                structuredHistories[event.level].push(newEvent)
            }
        })
    })

    return structuredHistories
}

module.exports = {
    structureHistories,
}
