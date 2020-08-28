import { Px } from "../../../../general"
import { Level, LEVELS } from "../../../../notations"
import { computeReversedLevelIndex } from "./reversedLevelIndex"
import { LEVEL_HEIGHT, MARGIN, Y_SCALE } from "./sizes"

const computeLevelHeights = (withinLevelHeight: number): Record<Level, Px> =>
    LEVELS.reduce(
        (levelTops, level, levelIndex) => {
            const levelHeight = computeReversedLevelIndex(levelIndex) + withinLevelHeight

            return {
                ...levelTops,
                [ level ]: Y_SCALE * (MARGIN + levelHeight * LEVEL_HEIGHT) as Px,
            }
        },
        {} as Record<Level, Px>,
    )

const LEVEL_TOPS = computeLevelHeights(0)

const LEVEL_CENTERS = computeLevelHeights(0.5)

const LEVEL_BOTTOMS = computeLevelHeights(1)

export {
    LEVEL_TOPS,
    LEVEL_CENTERS,
    LEVEL_BOTTOMS,
    computeLevelHeights,
}
