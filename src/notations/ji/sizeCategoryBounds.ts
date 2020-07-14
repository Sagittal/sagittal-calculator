import { Position, SIZE_CATEGORY_BOUNDS } from "../../general"

const computeSizeCategoryBounds = (): Position[] => SIZE_CATEGORY_BOUNDS.slice(0, 8)

export {
    computeSizeCategoryBounds,
}
