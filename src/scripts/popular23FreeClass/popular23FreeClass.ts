import { COMMA_POPULARITIES, equalJiPitches, isUndefined, Popularity, Votes } from "../../general"
import { Two3FreeClassAnalysis } from "../../sagittal"
import { computeBestNotatingCommaProperties } from "./bestNotatingComma"
import { computeExactlyNotatingSymbolClassProperties } from "./exactlyNotatingSymbolClass"
import { popular23FreeClassesScriptGroupSettings } from "./globals"
import { Popular23FreeClass } from "./types"

const computePopular23FreeClass = (
    two3FreeClassAnalysis: Two3FreeClassAnalysis,
): Popular23FreeClass => {
    const popularity = COMMA_POPULARITIES.find((popularity: Popularity): boolean => {
        return equalJiPitches(popularity.two3FreeClass, two3FreeClassAnalysis)
    })
    const popularityRank = !isUndefined(popularity) ? popularity.rank : undefined
    const votes = popularity?.votes || 0 as Votes

    let bestNotatingCommaOrExactlyNotatingSymbolClassProperties
    if (popular23FreeClassesScriptGroupSettings.useBestNotatingCommas) {
        bestNotatingCommaOrExactlyNotatingSymbolClassProperties =
            computeBestNotatingCommaProperties(two3FreeClassAnalysis)
    } else {
        bestNotatingCommaOrExactlyNotatingSymbolClassProperties =
            computeExactlyNotatingSymbolClassProperties(two3FreeClassAnalysis)
    }

    return {
        ...two3FreeClassAnalysis,
        popularityRank,
        votes,
        ...bestNotatingCommaOrExactlyNotatingSymbolClassProperties,
    }
}

export {
    computePopular23FreeClass,
}
