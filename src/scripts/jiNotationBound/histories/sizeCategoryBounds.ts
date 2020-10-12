import { areScamonsEqual } from "../../../general"
import { MAX_SINGLE_SHAFT_POSITION, SizeCategoryBound, SIZE_CATEGORY_BOUNDS } from "../../../sagittal"

const computeSizeCategoryBoundsWithinMaximumPosition = (): SizeCategoryBound[] =>
    SIZE_CATEGORY_BOUNDS.slice(
        0,
        SIZE_CATEGORY_BOUNDS.findIndex(
            (sizeCategoryBound: SizeCategoryBound): boolean =>
                areScamonsEqual(sizeCategoryBound.pitch, MAX_SINGLE_SHAFT_POSITION),
        ) + 1,
    )

export {
    computeSizeCategoryBoundsWithinMaximumPosition,
}
