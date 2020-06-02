const {DATA} = require("./data")

const LEVELS = ["Medium", "High", "VeryHigh", "Extreme", "Insane"]

const LEVEL_EDAS = [21, 47, 58, 233, 809]

const isWithinLevel = (level, targetLevel) =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

const calculateLevelCommas = level =>
    DATA.filter(datum => isWithinLevel(datum.comma.introducingLevel, level)).map(datum => ({...datum.comma}))

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
