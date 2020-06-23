const computeDoEventsContainEvent = (events, targetEvent) =>
    !!events.find(event => event.name === targetEvent.name && event.level === targetEvent.level)

module.exports = {
    computeDoEventsContainEvent,
}
