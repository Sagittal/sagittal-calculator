import { CentsPosition } from "../../general"
import { MAX_SINGLE_SHAFT_CENTS } from "../intervals"
import { SIZE_CATEGORY_BOUNDS } from "../sizeCategoryBounds"

const computeSizeCategoryBoundsWithinMaximumPosition = (): CentsPosition[] =>
    SIZE_CATEGORY_BOUNDS.slice(
        0,
        SIZE_CATEGORY_BOUNDS.findIndex(
            (sizeCategoryBound: CentsPosition) => sizeCategoryBound.cents === MAX_SINGLE_SHAFT_CENTS) + 1,
    )

export {
    computeSizeCategoryBoundsWithinMaximumPosition,
}
