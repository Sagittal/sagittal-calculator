import { COMMA_POPULARITIES, equalJiPitches, isUndefined, Popularity, TwoThreeFreeClass, Votes } from "../../general"
import { N2D3P9 } from "../../sagittal"
import { computeBestNotatingCommaProperties } from "./bestNotatingComma"
import { computeExactlyNotatingSymbolClassProperties } from "./exactlyNotatingSymbolClass"
import { popular23FreeClassesScriptGroupSettings } from "./globals"
import { Popular23FreeClass } from "./types"

const computePopular23FreeClass = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): Popular23FreeClass => {
    const popularity = COMMA_POPULARITIES.find((popularity: Popularity): boolean => {
        return equalJiPitches(popularity.twoThreeFreeClass, twoThreeFreeClass)
    })
    const popularityRank = !isUndefined(popularity) ? popularity.rank : undefined
    const votes = popularity?.votes || 0 as Votes

    let bestNotatingCommaOrExactlyNotatingSymbolClassProperties
    if (popular23FreeClassesScriptGroupSettings.useBestNotatingCommas) {
        bestNotatingCommaOrExactlyNotatingSymbolClassProperties = computeBestNotatingCommaProperties(twoThreeFreeClass)
    } else {
        bestNotatingCommaOrExactlyNotatingSymbolClassProperties =
            computeExactlyNotatingSymbolClassProperties(twoThreeFreeClass)
    }

    return {
        ...twoThreeFreeClass,
        n2d3p9,
        popularityRank,
        votes,
        ...bestNotatingCommaOrExactlyNotatingSymbolClassProperties,
    }
}

export {
    computePopular23FreeClass,
}
