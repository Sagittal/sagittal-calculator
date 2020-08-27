import {
    COMMA_POPULARITIES,
    computeRatioFromMonzo,
    deepEquals,
    formatN2D3P9,
    formatRatio,
    Monzo,
    N2D3P9,
    Votes,
} from "../../general"
import { computeNotatingSymbolIds, computeSmileyFromAscii, getSymbol, SYMBOL_SETS } from "../../notations"
import { PopularRatio } from "./types"

const computePopularRatio = ({ monzo, n2d3p9 }: { monzo: Monzo, n2d3p9: N2D3P9 }): PopularRatio => {
    const formattedN2D3P9 = formatN2D3P9(n2d3p9)

    const ratio = computeRatioFromMonzo(monzo)
    const formattedRatio = formatRatio(ratio)
    const popularity = COMMA_POPULARITIES.find(popularity => deepEquals(popularity.fiveRoughRatio, ratio))
    const popularityRank = popularity?.rank || "-"
    const votes = popularity?.votes || 0 as Votes

    const notatingSymbolIds = computeNotatingSymbolIds(monzo)
    const notatingSymbols = notatingSymbolIds.map(getSymbol)
    const smileys = notatingSymbols.map(symbol => computeSmileyFromAscii(symbol.ascii)).join(" ")
    const symbolSets = notatingSymbols.map(symbol => SYMBOL_SETS.indexOf(symbol.lowestSymbolSet)).join(", ")

    return {
        n2d3p9,
        formattedN2D3P9,
        formattedRatio,
        popularityRank,
        votes,
        smileys,
        symbolSets,
    }
}

export {
    computePopularRatio,
}
