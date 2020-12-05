import {Comma, Index} from "@sagittal/general"
import {computeSizeCategory} from "./sizeCategory"
import {SizeCategory} from "./types"

const computeSizeCategoryIndex = (comma: Comma): Index<SizeCategory> => {
    const sizeCategory = computeSizeCategory(comma)

    return computeSizeCategoryIndexFromSizeCategory(sizeCategory)
}

const computeSizeCategoryIndexFromSizeCategory = (sizeCategory: SizeCategory): Index<SizeCategory> =>
    Object.values(SizeCategory).indexOf(sizeCategory) as Index<SizeCategory>

export {
    computeSizeCategoryIndex,
    computeSizeCategoryIndexFromSizeCategory,
}
