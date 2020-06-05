const extendHistory = (history, event) => ({
    ...history,
    position: event.position,
    rank: event.rank > history.rank ? event.rank : history.rank,
    events: history.events.concat(event),
})

module.exports = {
    extendHistory,
}
