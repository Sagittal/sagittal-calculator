import {BLANK, Index, isUndefined, Maybe} from "@sagittal/general"
import {SIZE_CATEGORY_ABBREVIATIONS} from "./sizeCategories"
import {SizeCategory, SizeCategoryAbbreviation} from "./types"

const formatSizeCategory = (sizeCategoryIndex: Maybe<Index<SizeCategory>>): SizeCategoryAbbreviation =>
    isUndefined(sizeCategoryIndex) ?
        BLANK as SizeCategoryAbbreviation :
        Object.values(SIZE_CATEGORY_ABBREVIATIONS)[sizeCategoryIndex]

export {
    formatSizeCategory,
}
