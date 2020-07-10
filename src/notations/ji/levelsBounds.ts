import {BOUNDS} from "./bounds"
import {LEVELS} from "./levels"

const LEVELS_BOUNDS = LEVELS.reduce(
    (levelBounds, level) => {
        return {
            ...levelBounds,
            [level]: BOUNDS.filter(bound => bound.levels.includes(level)),
        }
    },
    {},
)

export {
    LEVELS_BOUNDS,
}
