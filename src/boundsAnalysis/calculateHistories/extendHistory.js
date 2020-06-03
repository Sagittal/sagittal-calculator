const extendHistory = (history, event) => ({
    ...history,
    position: event.position,
    events: history.events.concat(event),
})

module.exports = {
    extendHistory,
}
