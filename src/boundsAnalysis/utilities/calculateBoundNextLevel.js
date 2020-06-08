const calculateBoundNextLevel = (bound, level) => {
    const {levels} = bound

    return levels[levels.indexOf(level) + 1]
}

module.exports = {
    calculateBoundNextLevel,
}
