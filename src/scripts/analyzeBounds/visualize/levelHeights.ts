import { LEVELS } from "../../../notations/ji/levels"
import { LEVEL_HEIGHT, MARGIN, Y_SCALE } from "./sizes"
import { computeReversedLevelIndex } from "./reversedLevelIndex"
import { Level } from "../../../notations/ji/types"
import { Px } from "./types"
import { EnumHash } from "../../../utilities/types"

const computeLevelHeights = (withinLevelHeight: number): EnumHash<Level, Px> => {
    return LEVELS.reduce(
        (levelTops, level, levelIndex) => {
            return {
                ...levelTops,
                [ level ]: Y_SCALE * (MARGIN + (computeReversedLevelIndex(levelIndex) + withinLevelHeight) * LEVEL_HEIGHT) as Px,
            }
        },
        {} as EnumHash<Level, Px>,
    )
}

const LEVEL_TOPS = computeLevelHeights(0)

const LEVEL_CENTERS = computeLevelHeights(0.5)

const LEVEL_BOTTOMS = computeLevelHeights(1)

export {
    LEVEL_TOPS,
    LEVEL_CENTERS,
    LEVEL_BOTTOMS,
    computeLevelHeights,
}
