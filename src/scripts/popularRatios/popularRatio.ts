import { COMMA_POPULARITIES, computeRatioFromMonzo, deepEquals, formatRatio, IO, Monzo, Votes } from "../../general"
import {
    computeExactlyNotatingJiSymbolIds,
    computeSmileyFromAscii,
    formatN2D3P9,
    getJiSymbol,
    JI_SYMBOL_SUBSETS,
    N2D3P9,
} from "../../sagittal"
import { PopularRatio } from "./types"

const computePopularRatio = ({ monzo, n2d3p9 }: { monzo: Monzo, n2d3p9: N2D3P9 }): PopularRatio => {
    const formattedN2D3P9 = formatN2D3P9(n2d3p9)

    const ratio = computeRatioFromMonzo(monzo)
    const formattedRatio = formatRatio(ratio)
    const popularity = COMMA_POPULARITIES.find(popularity => deepEquals(popularity.fiveRoughRatio, ratio))
    const popularityRank = popularity?.rank || "-" as IO
    const votes = popularity?.votes || 0 as Votes

    const notatingSymbolIds = computeExactlyNotatingJiSymbolIds(monzo)
    const notatingSymbols = notatingSymbolIds.map(getJiSymbol)
    const smileys = notatingSymbols.map(symbol => computeSmileyFromAscii(symbol.ascii)).join(" ") as IO
    const symbolSubsets = notatingSymbols.map(symbol => {
        return JI_SYMBOL_SUBSETS.indexOf(symbol.smallestJiSymbolSubset)
    }).join(", ") as IO

    return {
        n2d3p9,
        formattedN2D3P9,
        formattedRatio,
        popularityRank,
        votes,
        smileys,
        symbolSubsets,
    }
}

export {
    computePopularRatio,
}
