import {add, Basis, Cents, computePx, DEFAULT_PRECISION, Multiplier, multiply, Px, round} from "@sagittal/general"
import {JiNotationLevelId, JI_NOTATION_LEVELS} from "@sagittal/system"
import {computeReversedJiNotationLevelIndex} from "./reversedLevelIndex"
import {LEVEL_HEIGHT, MARGIN, Y_SCALE} from "./sizes"

const computeJiNotationLevelHeights = (withinLevelHeight: Multiplier<Basis<Cents>>): Record<JiNotationLevelId, Px> =>
    JI_NOTATION_LEVELS.reduce(
        (
            jiNotationLevelTops: Record<JiNotationLevelId, Px>,
            jiNotationLevel: JiNotationLevelId,
            jiNotationLevelIndex: number,
        ): Record<JiNotationLevelId, Px> => {
            const jiNotationLevelHeight: Multiplier<Basis<Cents>> =
                add(computeReversedJiNotationLevelIndex(jiNotationLevelIndex), withinLevelHeight)

            return {
                ...jiNotationLevelTops,
                [jiNotationLevel]: round(
                    computePx(
                        add(MARGIN,
                            multiply(
                                LEVEL_HEIGHT,
                                jiNotationLevelHeight,
                            ),
                        ),
                        Y_SCALE,
                    ),
                    DEFAULT_PRECISION,
                ),
            }
        },
        {} as Record<JiNotationLevelId, Px>,
    )

const JI_NOTATION_LEVEL_TOPS: Record<JiNotationLevelId, Px> =
    computeJiNotationLevelHeights(0 as Multiplier<Basis<Cents>>)

const JI_NOTATION_LEVEL_CENTERS: Record<JiNotationLevelId, Px> =
    computeJiNotationLevelHeights(0.5 as Multiplier<Basis<Cents>>)

const JI_NOTATION_LEVEL_BOTTOMS: Record<JiNotationLevelId, Px> =
    computeJiNotationLevelHeights(1 as Multiplier<Basis<Cents>>)

export {
    JI_NOTATION_LEVEL_TOPS,
    JI_NOTATION_LEVEL_CENTERS,
    JI_NOTATION_LEVEL_BOTTOMS,
    computeJiNotationLevelHeights,
}
