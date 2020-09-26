import { equalNums } from "../../../general"
import { MAX_SYMBOL_CLASS_POSITION, SizeCategoryBound, SIZE_CATEGORY_BOUNDS } from "../../../sagittal"

const computeSizeCategoryBoundsWithinMaximumPosition = (): SizeCategoryBound[] =>
    SIZE_CATEGORY_BOUNDS.slice(
        0,
        SIZE_CATEGORY_BOUNDS.findIndex(
            (sizeCategoryBound: SizeCategoryBound): boolean =>
                equalNums(sizeCategoryBound, MAX_SYMBOL_CLASS_POSITION),
        ) + 1,
    )

export {
    computeSizeCategoryBoundsWithinMaximumPosition,
}
