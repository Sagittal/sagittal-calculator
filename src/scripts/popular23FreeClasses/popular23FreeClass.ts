import {
    COMMA_POPULARITIES,
    equalJiPitches,
    format23FreeClass,
    formatNumber,
    Io,
    ioSettings,
    join,
    SPACE,
    TwoThreeFreeClass,
    Votes,
} from "../../general"
import { formatSymbol, getJiSymbol, JI_SYMBOL_SUBSETS, N2D3P9 } from "../../sagittal"
import { computeExactlyNotatingJiSymbolIds } from "./exactlyNotatingJiSymbolIds"
import { Popular23FreeClass } from "./types"

const computePopular23FreeClass = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): Popular23FreeClass => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    const formatted23FreeClass = format23FreeClass(twoThreeFreeClass)
    const popularity = COMMA_POPULARITIES.find(popularity => {
        return equalJiPitches(popularity.twoThreeFreeClass, twoThreeFreeClass)
    })
    const popularityRank = popularity?.rank || "-" as Io
    const votes = popularity?.votes || 0 as Votes

    const exactlyNotatingJiSymbolIds = computeExactlyNotatingJiSymbolIds(twoThreeFreeClass)
    const formattedExactlyNotatingJiSymbols = join(exactlyNotatingJiSymbolIds.map(symbolId => {
        return formatSymbol(symbolId, ioSettings)
    }), SPACE)

    const symbolSubsets = exactlyNotatingJiSymbolIds.map(symbolId => {
        return JI_SYMBOL_SUBSETS.indexOf(getJiSymbol(symbolId).smallestJiSymbolSubset)
    }).join(", ") as Io

    return {
        n2d3p9,
        formattedN2D3P9,
        formatted23FreeClass,
        popularityRank,
        votes,
        formattedExactlyNotatingJiSymbols,
        symbolSubsets,
    }
}

export {
    computePopular23FreeClass,
}
