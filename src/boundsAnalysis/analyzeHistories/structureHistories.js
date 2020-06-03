const structureHistories = histories => {
    const structuredHistories = {}

    histories.forEach(history => {
        history.events.forEach((event, index) => {
            if (event.type === "impossible") return

            const nextEvent = history.events[index + 1]

            if (!structuredHistories[event.level]) structuredHistories[event.level] = []

            const existingEvent = structuredHistories[event.level].find(existingEvent => existingEvent.name === event.name)

            if (existingEvent) {
                if (nextEvent && !existingEvent.nextEvents.includes(nextEvent.name)) {
                    existingEvent.nextEvents.push(nextEvent.name)
                }
                if (history.possible) {
                    existingEvent.possible = true
                }
                if (history.overridden) {
                    existingEvent.overridden = true
                }
            } else {
                const newEvent = {
                    ...event,
                    possible: false,
                    nextEvents: [],
                }
                if (nextEvent) {
                    newEvent.nextEvents.push(nextEvent.name)
                }
                if (history.possible) {
                    newEvent.possible = true
                }
                if (history.overridden) {
                    newEvent.overridden = true // TODO: these two seem kinda weird, though they appear to work. these are the kinds of things where I'm like, why isn't it just on the event in the first place?
                }
                structuredHistories[event.level].push(newEvent)
            }
        })
    })

    return structuredHistories
}

module.exports = {
    structureHistories,
}
