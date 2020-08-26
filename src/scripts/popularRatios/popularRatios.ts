import {
    COMMA_POPULARITIES,
    computeCentsFromRatio,
    computeMonzosFromPrimeExponentExtremas,
    computeN2D3P9,
    computePrimeExponentExtremasGivenMaxN2D3P9,
    computeRatioFromMonzo,
    deepEquals,
    Max,
    N2D3P9,
    presentRatio,
    rank,
    Ranked,
    RankStrategy,
    round,
    Votes,
} from "../../general"
import { computeNotatingSymbolIds, computeSmileyFromAscii, getSymbol, SYMBOL_SETS } from "../../notations"
import { PopularRatio } from "./types"

const computePopularRatios = (maxN2D3P9: Max<N2D3P9>): Array<Ranked<PopularRatio>> => {
    const primeExponentExtremasGivenMaxN2D3P9 = computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)
    const monzosToCheck = computeMonzosFromPrimeExponentExtremas(primeExponentExtremasGivenMaxN2D3P9)

    const unrankedResults = [] as Array<PopularRatio>
    monzosToCheck.forEach(monzo => {
        const ratio = computeRatioFromMonzo(monzo)
        if (computeCentsFromRatio(ratio) < 0) return

        const n2d3p9 = computeN2D3P9(monzo)

        if (n2d3p9 <= maxN2D3P9) {
            // TODO: extract this
            const presentedN2D3P9 = round(n2d3p9, 2)
            const presentedRatio = presentRatio(ratio)
            const notatingSymbolIds = computeNotatingSymbolIds(monzo)
            const notatingSymbols = notatingSymbolIds.map(getSymbol)
            const smileys = notatingSymbols.map(symbol => computeSmileyFromAscii(symbol.ascii)).join(" ")
            const symbolSets = notatingSymbols.map(symbol => SYMBOL_SETS.indexOf(symbol.lowestSymbolSet)).join(", ")
            const actualPopularity = COMMA_POPULARITIES.find(popularity => deepEquals(popularity.fiveRoughRatio, ratio))
            const actualRank = actualPopularity?.rank || "-"
            const votes = actualPopularity?.votes || 0 as Votes

            unrankedResults.push({
                presentedN2D3P9,
                presentedRatio,
                smileys,
                symbolSets,
                popularityRank: actualRank,
                votes,
            })
        }
    })

    return rank(unrankedResults, { by: "presentedN2D3P9", strategy: RankStrategy.FRACTIONAL })
}

export {
    computePopularRatios,
}
