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
    NOT_FOUND,
    Popularity,
    SPACE,
    TwoThreeFreeClass,
    Votes,
} from "../../general"
import {
    formatSymbolClass,
    getSmallestSymbolSubset,
    JI_NOTATION_SYMBOL_SUBSETS,
    N2D3P9,
    SymbolClass,
    SymbolLongAscii,
    SymbolSmiley,
    SymbolSubset,
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

    const smallestJiNotationSymbolSubsetIndices = exactlyNotatingSymbolClassIds
        .map((symbolClassId: Id<SymbolClass>): number => {
            let symbolSubsetIndex = JI_NOTATION_SYMBOL_SUBSETS.indexOf(getSmallestSymbolSubset(symbolClassId))

            // the smallest symbol subset method will include Trojan, but for these purposes
            // we only care about the smallest subset in the JI notation hierarchy
            symbolSubsetIndex = symbolSubsetIndex === NOT_FOUND ?
                JI_NOTATION_SYMBOL_SUBSETS.indexOf(SymbolSubset.PROMETHEAN) :
                symbolSubsetIndex

            return symbolSubsetIndex
        }).join(", ") as Io

    return {
        n2d3p9,
        formattedN2D3P9,
        formatted23FreeClass,
        popularityRank,
        votes,
        formattedExactlyNotatingSymbolClasses,
        smallestJiNotationSymbolSubsetIndices,
    }
}

export {
    analyzePopular23FreeClass,
}
