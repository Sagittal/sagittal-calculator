import { COMMA_POPULARITIES, equalNums, isUndefined, Popularity, TwoThreeFreeClass, Votes } from "../../general"
import { N2D3P9, TwoThreeFreeClassAnalysis } from "../../sagittal"
import { computeBestNotatingCommaProperties } from "./bestNotatingComma"
import { computeExactlyNotatingSymbolClassProperties } from "./exactlyNotatingSymbolClass"
import { popular23FreeClassesScriptGroupSettings } from "./globals"
import { Popular23FreeClass } from "./types"

const computePopular23FreeClass = (
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis,
): Popular23FreeClass => {
    const popularity = COMMA_POPULARITIES.find((popularity: Popularity): boolean => {
        return equalNums(popularity.twoThreeFreeClass, twoThreeFreeClassAnalysis)
    })
    const popularityRank = !isUndefined(popularity) ? popularity.rank : undefined
    const votes = popularity?.votes || 0 as Votes

    let bestNotatingCommaOrExactlyNotatingSymbolClassProperties
    if (popular23FreeClassesScriptGroupSettings.useBestNotatingCommas) {
        bestNotatingCommaOrExactlyNotatingSymbolClassProperties =
            computeBestNotatingCommaProperties(twoThreeFreeClassAnalysis)
    } else {
        bestNotatingCommaOrExactlyNotatingSymbolClassProperties =
            computeExactlyNotatingSymbolClassProperties(twoThreeFreeClassAnalysis)
    }

    return {
        ...twoThreeFreeClassAnalysis,
        popularityRank,
        votes,
        ...bestNotatingCommaOrExactlyNotatingSymbolClassProperties,
    }
}

export {
    computePopular23FreeClass,
}
