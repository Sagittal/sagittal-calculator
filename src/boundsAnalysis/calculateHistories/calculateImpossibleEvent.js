const calculateImpossibleEvent = (position, level) => ({
    level,
    type: "impossible",
    name: "impossible",
    position,
})

module.exports = {
    calculateImpossibleEvent,
}
