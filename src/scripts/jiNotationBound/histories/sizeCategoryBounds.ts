import { CentsPosition } from "../../../general"
import { MAX_SYMBOL_CLASS_CENTS, SizeCategoryBound, SIZE_CATEGORY_BOUNDS } from "../../../sagittal"

const computeSizeCategoryBoundsWithinMaximumPosition = (): SizeCategoryBound[] =>
    SIZE_CATEGORY_BOUNDS.slice(
        0,
        SIZE_CATEGORY_BOUNDS.findIndex(
            (sizeCategoryBound: CentsPosition): boolean => sizeCategoryBound.cents === MAX_SYMBOL_CLASS_CENTS) + 1,
    )

export {
    computeSizeCategoryBoundsWithinMaximumPosition,
}
