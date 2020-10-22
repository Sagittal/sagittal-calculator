import {Extrema, Max, Min} from "../../../../general"
import {SIZE_CATEGORIES} from "./sizeCategories"
import {SIZE_CATEGORY_BOUNDS} from "./sizeCategoryBounds"
import {SizeCategory, SizeCategoryBound, SizeCategoryName} from "./types"

const computeSizeCategoryExtrema = (sizeCategoryName: SizeCategoryName): Extrema<SizeCategoryBound> => {
    const sizeCategoryIndex = SIZE_CATEGORIES.findIndex((sizeCategory: SizeCategory): boolean => {
        return sizeCategory.name === sizeCategoryName
    })

    return [
        SIZE_CATEGORY_BOUNDS[sizeCategoryIndex ? sizeCategoryIndex - 1 : 0] as Min<SizeCategoryBound>,
        SIZE_CATEGORY_BOUNDS[sizeCategoryIndex] as Max<SizeCategoryBound>,
    ]
}

export {
    computeSizeCategoryExtrema,
}
