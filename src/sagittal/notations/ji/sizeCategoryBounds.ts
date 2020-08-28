import { CentsPosition } from "../../../general"
import { SIZE_CATEGORY_BOUNDS } from "../../commaSizeName"
import { MAX_SINGLE_SHAFT_CENTS } from "../intervals"

const computeSizeCategoryBoundsWithinMaximumPosition = (): CentsPosition[] =>
    SIZE_CATEGORY_BOUNDS.slice(
        0,
        SIZE_CATEGORY_BOUNDS.findIndex(
            (sizeCategoryBound: CentsPosition) => sizeCategoryBound.cents === MAX_SINGLE_SHAFT_CENTS) + 1,
    )

export {
    computeSizeCategoryBoundsWithinMaximumPosition,
}
