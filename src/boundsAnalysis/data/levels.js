const {COMMAS} = require("./commas")

const LEVELS = ["MEDIUM", "HIGH", "VERY_HIGH", "EXTREME", "INSANE"]

const LEVEL_EDAS = [21, 47, 58, 233, 809]

const isWithinLevel = (level, targetLevel) =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

const calculateLevelCommas = level =>
    COMMAS.filter(comma => isWithinLevel(comma.introducingLevel, level))

const LEVEL_COMMAS = LEVELS.reduce(
    (levelCommas, level) => {
        return {
            ...levelCommas,
            [level]: calculateLevelCommas(level),
        }
    },
    {},
)

module.exports = {
    LEVELS,
    LEVEL_EDAS,
    LEVEL_COMMAS,
    isWithinLevel,
    calculateLevelCommas,
}
