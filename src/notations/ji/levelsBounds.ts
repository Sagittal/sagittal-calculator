import { BOUNDS } from "./bounds"
import { LEVELS } from "./levels"
import { Bound, Level } from "./types"

const LEVELS_BOUNDS: { [key in Level]: Bound[] } = LEVELS.reduce(
    (levelBounds, level) => {
        return {
            ...levelBounds,
            [ level ]: BOUNDS.filter(bound => bound.levels.includes(level)),
        }
    },
    {},
) as { [key in Level]: Bound[] }

export {
    LEVELS_BOUNDS,
}
