const ensureOneBestPossibleEventPerLevel = consolidatedHistory => {
    Object.entries(consolidatedHistory).forEach(([level, events]: any) => {
        const bestPossibleHistoryEvents = events.filter(event => event.isBestPossibleHistoryMember)

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
