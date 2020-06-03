const extendHistory = (history, event) => ({
    position: event.position,
    events: history.events.concat(event),
})

module.exports = {
    extendHistory,
}
