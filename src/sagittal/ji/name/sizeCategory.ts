import {Comma, formatPitch, isScamonGreater, isUndefined, stringify} from "../../../general"
import {SIZE_CATEGORIES} from "./sizeCategories"
import {SIZE_CATEGORY_BOUNDS} from "./sizeCategoryBounds"
import {SizeCategoryAbbreviation, SizeCategoryBound, SizeCategoryName, SizeCategoryOptions} from "./types"

const computeSizeCategory: {
    (comma: Comma, {abbreviated}: {abbreviated: true}): SizeCategoryAbbreviation,
    (comma: Comma, {abbreviated}: {abbreviated: false}): SizeCategoryName,
    (comma: Comma, {}: {}): SizeCategoryName | SizeCategoryAbbreviation,
    (comma: Comma): SizeCategoryName | SizeCategoryAbbreviation,
} = (comma: Comma, {abbreviated = true}: SizeCategoryOptions = {}): SizeCategoryName & SizeCategoryAbbreviation => {
    let sizeCategory = SIZE_CATEGORIES[0]

    SIZE_CATEGORY_BOUNDS.forEach((sizeCategoryBound: SizeCategoryBound, index: number): void => {
        if (isScamonGreater(comma, sizeCategoryBound.pitch)) {
            sizeCategory = SIZE_CATEGORIES[index + 1]
        }
    })

    if (isUndefined(sizeCategory)) {
        throw new Error(`${formatPitch(comma)} is beyond the maximum size category's bounds.`)
    }

    return abbreviated ?
        sizeCategory.abbreviation as SizeCategoryName & SizeCategoryAbbreviation :
        sizeCategory.name as SizeCategoryName & SizeCategoryAbbreviation
}

export {
    computeSizeCategory,
}
