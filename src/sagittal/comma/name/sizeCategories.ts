import { SizeCategory, SizeCategoryAbbreviation, SizeCategoryName } from "./types"

const SIZE_CATEGORIES: SizeCategory[] = Object.entries(SizeCategoryName)
    .map(([key, sizeCategoryName]: [string, SizeCategoryName]): SizeCategory => {
        return {
            name: sizeCategoryName,
            abbreviation: (SizeCategoryAbbreviation as Record<string, SizeCategoryAbbreviation>)[ key ],
        }
    })

export {
    SIZE_CATEGORIES,
}
