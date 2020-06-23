const computeExact = analyzedEvents =>
    analyzedEvents
        .every(analyzedEvent => analyzedEvent.exact)

module.exports = {
    computeExact,
}
