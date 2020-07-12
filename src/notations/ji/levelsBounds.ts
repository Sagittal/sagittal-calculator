import { BOUNDS } from "./bounds"
import { LEVELS } from "./levels"
import { Bound, Level } from "./types"
import { EnumHash } from "../../utilities/types"

const LEVELS_BOUNDS: EnumHash<Level, Bound[]> = LEVELS.reduce(
    (levelBounds, level) => {
        return {
            ...levelBounds,
            [ level ]: BOUNDS.filter(bound => bound.levels.includes(level)),
        }
    },
    {} as EnumHash<Level, Bound[]>,
)

export {
    LEVELS_BOUNDS,
}
