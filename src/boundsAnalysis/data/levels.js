const {COMMAS} = require("./commas")

const LEVELS = ["MEDIUM", "HIGH", "VERY_HIGH", "EXTREME", "INSANE"]

const LEVEL_EDAS = [21, 47, 58, 233, 809]

const computeIsWithinLevel = (level, targetLevel) =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

const computeLevelCommas = level =>
    COMMAS.filter(comma => computeIsWithinLevel(comma.introducingLevel, level))

const LEVELS_COMMAS = LEVELS.reduce(
    (levelCommas, level) => {
        return {
            ...levelCommas,
            [level]: computeLevelCommas(level),
        }
    },
    {},
)

module.exports = {
    LEVELS,
    LEVEL_EDAS,
    LEVELS_COMMAS,
    computeIsWithinLevel,
    computeLevelCommas,
}
