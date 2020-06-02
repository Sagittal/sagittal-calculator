const {LEVELS} = require("../data/levels")

const isWithinLevel = (level, targetLevel) =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

module.exports = {
    isWithinLevel,
}
