import { Position } from "../../general"
import { MAX_POSITION } from "../intervals"
import { SIZE_CATEGORY_BOUNDS } from "../sizeCategoryBounds"

const computeSizeCategoryBoundsWithinMaximumPosition = (): Position[] =>
    SIZE_CATEGORY_BOUNDS.slice(
        0,
        SIZE_CATEGORY_BOUNDS.findIndex((sizeCategoryBound: Position) => sizeCategoryBound.cents === MAX_POSITION) + 1,
    )

export {
    computeSizeCategoryBoundsWithinMaximumPosition,
}
