import {Extrema, Max, Min} from "../../../general"
import {SIZE_CATEGORY_BOUNDS} from "./sizeCategoryBounds"
import {SizeCategory, SizeCategoryBound} from "./types"

const computeSizeCategoryExtrema = (sizeCategory: SizeCategory): Extrema<SizeCategoryBound> => {
    const sizeCategoryIndex = Object.values(SizeCategory).findIndex((sizeCategoryValue: SizeCategory): boolean => {
        return sizeCategory === sizeCategoryValue
    })

    return [
        SIZE_CATEGORY_BOUNDS[sizeCategoryIndex ? sizeCategoryIndex - 1 : 0] as Min<SizeCategoryBound>,
        SIZE_CATEGORY_BOUNDS[sizeCategoryIndex] as Max<SizeCategoryBound>,
    ]
}

export {
    computeSizeCategoryExtrema,
}
