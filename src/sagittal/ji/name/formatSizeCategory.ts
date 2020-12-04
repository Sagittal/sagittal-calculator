import {Index} from "../../../general"
import {SIZE_CATEGORY_ABBREVIATIONS} from "./sizeCategories"
import {SizeCategory, SizeCategoryAbbreviation} from "./types"

const formatSizeCategory = (sizeCategoryIndex: Index<SizeCategory>): SizeCategoryAbbreviation =>
    Object.values(SIZE_CATEGORY_ABBREVIATIONS)[sizeCategoryIndex]

export {
    formatSizeCategory,
}
