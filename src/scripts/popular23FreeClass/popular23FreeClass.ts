import {areRationalScamonsEqual, COMMA_POPULARITIES, isUndefined, Popularity, Votes} from "../../general"
import {Two3FreeClassAnalysis} from "../../sagittal"
import {computeBestNotatingCommaProperties} from "./bestNotatingComma"
import {popular23FreeClassesScriptGroupSettings} from "./globals"
import {computeNotatingSymbolClassesProperties} from "./notatingSymbolClasses"
import {Popular23FreeClass} from "./types"

const computePopular23FreeClass = (
    two3FreeClassAnalysis: Two3FreeClassAnalysis,
): Popular23FreeClass => {
    const {two3FreeClass} = two3FreeClassAnalysis
    const popularity = COMMA_POPULARITIES.find((popularity: Popularity): boolean => {
        return areRationalScamonsEqual(popularity.two3FreeClass, two3FreeClass)
    })
    const popularityRank = !isUndefined(popularity) ? popularity.rank : undefined
    const votes = popularity?.votes || 0 as Votes

    const bestNotatingCommaOrNotatingSymbolClassesProperties =
        popular23FreeClassesScriptGroupSettings.useBestNotatingCommas ?
            computeBestNotatingCommaProperties(two3FreeClass) :
            computeNotatingSymbolClassesProperties(two3FreeClass)

    return {
        ...two3FreeClassAnalysis,
        popularityRank,
        votes,
        ...bestNotatingCommaOrNotatingSymbolClassesProperties,
    }
}

export {
    computePopular23FreeClass,
}
