const calculateRank = analyzedEvents => analyzedEvents.reduce((rank, analyzedEvent) => {
    const calculatedRank = rank > analyzedEvent.rank ? rank : analyzedEvent.rank

    return calculatedRank
}, 0)

module.exports = {
    calculateRank,
}
