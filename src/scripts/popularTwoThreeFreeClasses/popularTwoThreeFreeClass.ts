import {
    COMMA_POPULARITIES,
    computeMonzoFromRatio,
    deepEquals,
    formatNumber,
    formatRatio,
    Io,
    ioSettings,
    join,
    SPACE,
    Votes,
} from "../../general"
import { formatSymbol, getJiSymbol, JI_SYMBOL_SUBSETS, N2D3P9, TwoThreeFreeClass } from "../../sagittal"
import { computeExactlyNotatingJiSymbolIds } from "./exactlyNotatingJiSymbolIds"
import { Popular23FreeClass } from "./types"

const computePopularTwoThreeFreeClass = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): Popular23FreeClass => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    // const twoThreeFreeClass = computeRatioFromMonzo(twoThreeFreeMonzo) as TwoThreeFreeClass
    const formattedTwoThreeFreeClass = formatRatio(twoThreeFreeClass)
    const popularity = COMMA_POPULARITIES.find(popularity => {
        return deepEquals(popularity.twoThreeFreeClass, twoThreeFreeClass)
    })
    const popularityRank = popularity?.rank || "-" as Io
    const votes = popularity?.votes || 0 as Votes

    const exactlyNotatingJiSymbolIds = computeExactlyNotatingJiSymbolIds(computeMonzoFromRatio(twoThreeFreeClass))
    const formattedExactlyNotatingJiSymbols = join(exactlyNotatingJiSymbolIds.map(symbolId => {
        return formatSymbol(symbolId, ioSettings)
    }), SPACE)

    const symbolSubsets = exactlyNotatingJiSymbolIds.map(symbolId => {
        return JI_SYMBOL_SUBSETS.indexOf(getJiSymbol(symbolId).smallestJiSymbolSubset)
    }).join(", ") as Io

    return {
        n2d3p9,
        formattedN2D3P9,
        formattedTwoThreeFreeClass,
        popularityRank,
        votes,
        formattedExactlyNotatingJiSymbols,
        symbolSubsets,
    }
}

export {
    computePopularTwoThreeFreeClass,
}
