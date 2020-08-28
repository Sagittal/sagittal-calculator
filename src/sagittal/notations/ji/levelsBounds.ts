import { BOUNDS } from "./bounds"
import { LEVELS } from "./levels"
import { Bound, Level } from "./types"

const LEVELS_BOUNDS: Record<Level, Bound[]> = LEVELS.reduce(
    (levelBounds, level) =>
        ({
            ...levelBounds,
            [ level ]: BOUNDS.filter(bound => bound.levels.includes(level)),
        }),
    {} as Record<Level, Bound[]>,
)

export {
    LEVELS_BOUNDS,
}
