import { add, Basis, Cents, computePx, Multiplier, multiply, Px } from "../../../../general"
import { JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../sagittal"
import { computeReversedJiNotationLevelIndex } from "./reversedLevelIndex"
import { LEVEL_HEIGHT, MARGIN, Y_SCALE } from "./sizes"

const computeJiNotationLevelHeights = (withinLevelHeight: Multiplier<Basis<Cents>>): Record<JiNotationLevel, Px> =>
    JI_NOTATION_LEVELS.reduce(
        (
            jiNotationLevelTops: Record<JiNotationLevel, Px>,
            jiNotationLevel: JiNotationLevel,
            jiNotationLevelIndex: number,
        ): Record<JiNotationLevel, Px> => {
            const jiNotationLevelHeight: Multiplier<Basis<Cents>> =
                add(computeReversedJiNotationLevelIndex(jiNotationLevelIndex), withinLevelHeight)

            return {
                ...jiNotationLevelTops,
                [ jiNotationLevel ]: computePx(add(MARGIN, multiply(LEVEL_HEIGHT, jiNotationLevelHeight)), Y_SCALE),
            }
        },
        {} as Record<JiNotationLevel, Px>,
    )

const JI_NOTATION_LEVEL_TOPS: Record<JiNotationLevel, Px> =
    computeJiNotationLevelHeights(0 as Multiplier<Basis<Cents>>)

const JI_NOTATION_LEVEL_CENTERS: Record<JiNotationLevel, Px> =
    computeJiNotationLevelHeights(0.5 as Multiplier<Basis<Cents>>)

const JI_NOTATION_LEVEL_BOTTOMS: Record<JiNotationLevel, Px> =
    computeJiNotationLevelHeights(1 as Multiplier<Basis<Cents>>)

export {
    JI_NOTATION_LEVEL_TOPS,
    JI_NOTATION_LEVEL_CENTERS,
    JI_NOTATION_LEVEL_BOTTOMS,
    computeJiNotationLevelHeights,
}
