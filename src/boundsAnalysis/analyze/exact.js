const computeExact = analyzedEvents =>
    analyzedEvents
        .filter(analyzedEvent => analyzedEvent.type !== "INITIAL")
        .every(analyzedEvent => analyzedEvent.exact)

module.exports = {
    computeExact,
}
