import {
    COMMA_POPULARITIES,
    equalJiPitches,
    format23FreeClass,
    formatNumber,
    Formatted,
    Id,
    Io,
    ioSettings,
    join,
    Popularity,
    SPACE,
    TwoThreeFreeClass,
    Votes,
} from "../../general"
import {
    formatSymbolClass,
    getSmallestSymbolSubset,
    N2D3P9,
    SymbolClass,
    SymbolLongAscii,
    SymbolSmiley,
    SYMBOL_SUBSETS_USED_IN_JI_NOTATION_SORTED_BY_ASCENDING_SYMBOL_COUNT,
} from "../../sagittal"
import { computeExactlyNotatingSymbolClassIds } from "./notatingSymbolClassIds"
import { Popular23FreeClassAnalysis } from "./types"

const analyzePopular23FreeClass = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): Popular23FreeClassAnalysis => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    const formatted23FreeClass = format23FreeClass(twoThreeFreeClass)
    const popularity = COMMA_POPULARITIES.find((popularity: Popularity): boolean => {
        return equalJiPitches(popularity.twoThreeFreeClass, twoThreeFreeClass)
    })
    const popularityRank = popularity?.rank || "-" as Io
    const votes = popularity?.votes || 0 as Votes

    const exactlyNotatingSymbolClassIds = computeExactlyNotatingSymbolClassIds(twoThreeFreeClass)
    const formattedExactlyNotatingSymbolClasses = join(exactlyNotatingSymbolClassIds.map(
        (symbolClassId: Id<SymbolClass>): SymbolSmiley | Formatted<SymbolLongAscii> => {
            return formatSymbolClass(symbolClassId, ioSettings)
        },
    ), SPACE)

    const symbolSubsets = exactlyNotatingSymbolClassIds.map((symbolClassId: Id<SymbolClass>): number => {
        return SYMBOL_SUBSETS_USED_IN_JI_NOTATION_SORTED_BY_ASCENDING_SYMBOL_COUNT
            .indexOf(getSmallestSymbolSubset(symbolClassId))
    }).join(", ") as Io

    return {
        n2d3p9,
        formattedN2D3P9,
        formatted23FreeClass,
        popularityRank,
        votes,
        formattedExactlyNotatingSymbolClasses,
        symbolSubsets,
    }
}

export {
    analyzePopular23FreeClass,
}
