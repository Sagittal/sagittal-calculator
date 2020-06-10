const {BOUNDS} = require("./bounds")
const {LEVELS} = require("./levels")

const LEVELS_BOUNDS = LEVELS.reduce(
    (levelBounds, level) => {
        return {
            ...levelBounds,
            [level]: BOUNDS.filter(bound => bound.levels.includes(level)),
        }
    },
    {},
)

module.exports = {
    LEVELS_BOUNDS,
}
