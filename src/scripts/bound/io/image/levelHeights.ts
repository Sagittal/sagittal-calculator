import { Basis, Cents, computePx, Multiplier, multiply, Px, sum } from "../../../../general"
import { Level, LEVELS } from "../../../../sagittal"
import { computeReversedLevelIndex } from "./reversedLevelIndex"
import { LEVEL_HEIGHT, MARGIN, Y_SCALE } from "./sizes"

const computeLevelHeights = (withinLevelHeight: Multiplier<Basis<Cents>>): Record<Level, Px> =>
    LEVELS.reduce(
        (levelTops, level, levelIndex) => {
            const levelHeight: Multiplier<Basis<Cents>> = sum(computeReversedLevelIndex(levelIndex), withinLevelHeight)

            return {
                ...levelTops,
                [ level ]: computePx(sum(MARGIN, multiply(LEVEL_HEIGHT, levelHeight)), Y_SCALE),
            }
        },
        {} as Record<Level, Px>,
    )

const LEVEL_TOPS: Record<Level, Px> = computeLevelHeights(0 as Multiplier<Basis<Cents>>)

const LEVEL_CENTERS: Record<Level, Px> = computeLevelHeights(0.5 as Multiplier<Basis<Cents>>)

const LEVEL_BOTTOMS: Record<Level, Px> = computeLevelHeights(1 as Multiplier<Basis<Cents>>)

export {
    LEVEL_TOPS,
    LEVEL_CENTERS,
    LEVEL_BOTTOMS,
    computeLevelHeights,
}
