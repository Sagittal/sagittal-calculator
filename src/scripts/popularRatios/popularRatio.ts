import {
    COMMA_POPULARITIES,
    computeRatioFromMonzo,
    deepEquals,
    DEFAULT_N2D3P9_PRECISION,
    Monzo,
    N2D3P9,
    presentRatio,
    round,
    Votes,
} from "../../general"
import { computeNotatingSymbolIds, computeSmileyFromAscii, getSymbol, SYMBOL_SETS } from "../../notations"

const computePopularRatio = ({ monzo, n2d3p9 }: { monzo: Monzo, n2d3p9: N2D3P9 }) => {
    const presentedN2D3P9 = round(n2d3p9, DEFAULT_N2D3P9_PRECISION)

    const ratio = computeRatioFromMonzo(monzo)
    const presentedRatio = presentRatio(ratio)
    const popularity = COMMA_POPULARITIES.find(popularity => deepEquals(popularity.fiveRoughRatio, ratio))
    const popularityRank = popularity?.rank || "-"
    const votes = popularity?.votes || 0 as Votes

    const notatingSymbolIds = computeNotatingSymbolIds(monzo)
    const notatingSymbols = notatingSymbolIds.map(getSymbol)
    const smileys = notatingSymbols.map(symbol => computeSmileyFromAscii(symbol.ascii)).join(" ")
    const symbolSets = notatingSymbols.map(symbol => SYMBOL_SETS.indexOf(symbol.lowestSymbolSet)).join(", ")

    return {
        presentedN2D3P9,
        presentedRatio,
        popularityRank,
        votes,
        smileys,
        symbolSets,
    }
}

export {
    computePopularRatio,
}
