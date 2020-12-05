import {Comma, formatPitch, isScamonGreater, isUndefined} from "@sagittal/general"
import {SIZE_CATEGORY_BOUNDS} from "./sizeCategoryBounds"
import {SizeCategory, SizeCategoryBound} from "./types"

const computeSizeCategory = (comma: Comma): SizeCategory => {
    const sizeCategories = Object.values(SizeCategory)
    let sizeCategory = sizeCategories[0]

    SIZE_CATEGORY_BOUNDS.forEach((sizeCategoryBound: SizeCategoryBound, index: number): void => {
        if (isScamonGreater(comma, sizeCategoryBound.pitch)) {
            sizeCategory = sizeCategories[index + 1]
        }
    })

    if (isUndefined(sizeCategory)) {
        throw new Error(`${formatPitch(comma)} is beyond the maximum size category's bounds.`)
    }

    return sizeCategory
}

export {
    computeSizeCategory,
}
