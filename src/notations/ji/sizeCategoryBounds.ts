import { Position } from "../../general"
import { SIZE_CATEGORY_BOUNDS } from "../sizeCategoryBounds"
import { MAX_POSITION } from "./intervals"

const computeSizeCategoryBoundsWithinMaximumPosition = (): Position[] =>
    SIZE_CATEGORY_BOUNDS.slice(
        0,
        SIZE_CATEGORY_BOUNDS.findIndex((sizeCategoryBound: Position) => sizeCategoryBound.cents === MAX_POSITION) + 1,
    )

export {
    computeSizeCategoryBoundsWithinMaximumPosition,
}
