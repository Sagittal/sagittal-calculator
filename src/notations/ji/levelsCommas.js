const {COMMAS} = require("./commas")
const {LEVELS} = require("./levels")

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
    LEVELS_COMMAS,
    computeIsWithinLevel,
    computeLevelCommas,
}
