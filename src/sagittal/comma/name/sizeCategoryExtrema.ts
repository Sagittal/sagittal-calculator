import { Cents, Extrema, Max, Min } from "../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { SIZE_CATEGORY_BOUNDS } from "./sizeCategoryBounds"
import { SizeCategoryName } from "./types"

const computeSizeCategoryExtrema = (sizeCategoryName: SizeCategoryName): Extrema<Cents> => {
    const sizeCategoryIndex = SIZE_CATEGORIES.findIndex(sizeCategory => sizeCategory.name === sizeCategoryName)

    return [
        SIZE_CATEGORY_BOUNDS[ sizeCategoryIndex ? sizeCategoryIndex - 1 : 0 ].cents as Min<Cents>,
        SIZE_CATEGORY_BOUNDS[ sizeCategoryIndex ].cents as Max<Cents>,
    ]
}

export {
    computeSizeCategoryExtrema,
}
