const computeHistoryInaDistance = analyzedEvents => {
    return analyzedEvents.reduce(
        (inaDistance, analyzedEvent) => {
            return inaDistance + analyzedEvent.inaDistance
        },
        0,
    )
}

module.exports = {
    computeHistoryInaDistance,
}