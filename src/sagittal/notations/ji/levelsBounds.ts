import { JI_BOUNDS } from "./jiBounds"
import { LEVELS } from "./levels"
import { Bound, Level } from "./types"

const LEVELS_BOUNDS: Record<Level, Bound[]> = LEVELS.reduce(
    (levelBounds, level) =>
        ({
            ...levelBounds,
            [ level ]: JI_BOUNDS.filter(bound => bound.levels.includes(level)),
        }),
    {} as Record<Level, Bound[]>,
)

export {
    LEVELS_BOUNDS,
}
