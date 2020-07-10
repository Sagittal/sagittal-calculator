const computeExact = analyzedEvents =>
    analyzedEvents
        .every(analyzedEvent => analyzedEvent.exact)

export {
    computeExact,
}
