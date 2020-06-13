const computeSleda = analyzedEvents => {
    return analyzedEvents.reduce(
        (sleda, analyzedEvent) => {
            return sleda + analyzedEvent.sleda
        },
        0
    )
}

module.exports = {
    computeSleda,
}
