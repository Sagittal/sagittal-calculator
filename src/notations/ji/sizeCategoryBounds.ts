import { SIZE_CATEGORY_BOUNDS } from "../sizeCategoryBounds"
import { SnappablePosition } from "../../scripts/analyzeBounds/types"

const computeSizeCategoryBounds = (): SnappablePosition[] => SIZE_CATEGORY_BOUNDS.slice(0, 7)

export {
    computeSizeCategoryBounds,
}
