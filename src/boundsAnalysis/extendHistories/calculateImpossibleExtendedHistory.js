const calculateImpossibleExtendedHistory = (history, level) => ({
    events: history.events.concat(`${level}_impossible`),
    position: history.position,
})

module.exports = {
    calculateImpossibleExtendedHistory,
}
