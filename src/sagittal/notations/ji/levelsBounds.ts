import { JI_BOUNDS } from "./jiBounds"
import { LEVELS } from "./levels"
import { Bound, Level } from "./types"

const LEVELS_BOUNDS: Record<Level, Bound[]> = LEVELS.reduce(
    (levelBounds: Record<Level, Bound[]>, level: Level): Record<Level, Bound[]> =>
        ({
            ...levelBounds,
            [ level ]: JI_BOUNDS.filter((bound: Bound): boolean => bound.levels.includes(level)),
        }),
    {} as Record<Level, Bound[]>,
)

export {
    LEVELS_BOUNDS,
}
