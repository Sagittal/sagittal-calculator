const computeRank = analyzedEvents => analyzedEvents.reduce(
    (rank, analyzedEvent) => {
        return rank > analyzedEvent.rank ? rank : analyzedEvent.rank
    },
    0,
)

module.exports = {
    computeRank,
}
