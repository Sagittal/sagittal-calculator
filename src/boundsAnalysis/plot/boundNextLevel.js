const computeBoundNextLevel = (bound, level) => {
    const {levels} = bound

    return levels[levels.indexOf(level) + 1]
}

module.exports = {
    computeBoundNextLevel,
}
