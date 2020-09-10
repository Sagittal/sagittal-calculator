import {
    COMMA_POPULARITIES,
    computeRatioFromMonzo,
    deepEquals,
    formatNumber,
    formatRatio,
    Formatted,
    Io,
    ioSettings,
    join,
    SPACE,
    Votes,
} from "../../general"
import { formatSymbol, getJiSymbol, JI_SYMBOL_SUBSETS, N2D3P9, TwoThreeFreeClass } from "../../sagittal"
import { computeExactlyNotatingJiSymbolIds } from "./exactlyNotatingJiSymbolIds"
import { Popular23FreeClass } from "./types"

const computePopular23FreeClass = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): Popular23FreeClass => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    // TODO: COMMA MONZO RATIO JI 
    //  so this is like the worst of both worlds... we have to convert the monzo to a ratio AND format it
    //  so it becomes painfully clear how the formatted version is of the ratio even though it shouldn't have that name
    const twoThreeFreeClassAsRatio = computeRatioFromMonzo(twoThreeFreeClass.monzo)
    const formatted23FreeClass =
        formatRatio(twoThreeFreeClassAsRatio) as Formatted as Formatted<TwoThreeFreeClass>
    const popularity = COMMA_POPULARITIES.find(popularity => {
        return deepEquals(popularity.twoThreeFreeClassAsRatio, twoThreeFreeClassAsRatio)
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
