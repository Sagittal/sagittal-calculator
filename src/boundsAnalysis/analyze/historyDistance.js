const computeHistoryDistance = analyzedEvents => {
    return analyzedEvents.reduce(
        (distance, analyzedEvent) => {
            return distance + analyzedEvent.distance
        },
        0
    )
}

module.exports = {
    computeHistoryDistance,
}
