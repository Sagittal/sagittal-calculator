import { program } from "commander"
import {
    COMMA_POPULARITIES,
    computeCentsFromRatio,
    computeN2D3P9,
    computePossibleMonzosFromPrimeExponentExtremas,
    computePrimeExponentExtremasGivenMaxN2D3P9,
    computeRatioFromMonzo,
    deepEquals,
    presentRatio,
    PrimeExponentExtrema,
    rank,
    RankStrategy,
    round,
    Votes,
} from "../../../general"
import { computeNotatingSymbolIds, computeSmileyFromAscii, getSymbol, SYMBOL_SETS } from "../../../notations"
import { DEFAULT_MAX_N2D3P9 } from "../constants"
import { PopularRatioUnrankedResult } from "../types"

// TODO: consider adding a layer which pre-calculates numerators up to 3501 per Dave's suggestion on the forum

program
    .option("-m, --max-n2d3p9 [maxN2D3P9]", "max N2D3P9", parseFloat)
    .parse(process.argv)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9

const primeExponentExtremasGivenMaxN2D3P9 = computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)
// TODO: FIVE ROUGH LINK there might be some better way to deal with the five rough vs. not five rough situation
//  throughout this popular ratios / N2D3P9 code
//  e.g. computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9 has some stuff
primeExponentExtremasGivenMaxN2D3P9.unshift([0, 0] as PrimeExponentExtrema)
primeExponentExtremasGivenMaxN2D3P9.unshift([0, 0] as PrimeExponentExtrema)

const unrankedResults = [] as Array<PopularRatioUnrankedResult>

const monzosToCheck = computePossibleMonzosFromPrimeExponentExtremas(primeExponentExtremasGivenMaxN2D3P9)

monzosToCheck.forEach(monzo => {
    // TODO: extract this
    const ratio = computeRatioFromMonzo(monzo)
    if (computeCentsFromRatio(ratio) < 0) return

    const n2d3p9 = computeN2D3P9(monzo)

    if (n2d3p9 <= maxN2D3P9) {
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
            actualRank,
            votes,
        })
    }
})

// TODO: this is working okay for now,
//  but ideally we'd have something that will generalize the saveDebugMessage trick across all the different scripts

console.log(`count of results with N2D3P9 <= ${maxN2D3P9}: ${unrankedResults.length}`)

const results = rank(unrankedResults, { by: "presentedN2D3P9", strategy: RankStrategy.FRACTIONAL })

// TODO: extract this... and can you use a table helper
console.log(`[table]`)
console.log("[tr][th]5-rough[/th][th][/th][th][/th][th]introducing[/th][th][/th][th][/th][th][/th][/tr]")
console.log("[tr][th]pitch[/th][th][/th][th][/th][th]symbol[/th][th][/th][th]Scala[/th][th]Scala[/th][/tr]")
console.log("[tr][th]ratio[/th][th][/th][th][/th][th]subset[/th][th]N2D3P9[/th][th]archive[/th][th]archive[/th][/tr]")
console.log("[tr][th]class[/th][th]N2D3P9[/th][th]symbol[/th][th]indices[/th][th]rank[/th][th]rank[/th][th]occurrences[/th][/tr]")
results.forEach(result => {
    const { presentedN2D3P9, presentedRatio, rank: estimatedRank, actualRank, symbolSets, smileys, votes } = result
    console.log(`[tr][td]${presentedRatio}[/td][td]${presentedN2D3P9}[/td][td]${smileys}[/td][td]${symbolSets}[/td][td]${estimatedRank}[/td][td]${actualRank}[/td][td]${votes}[/td][/tr]`)
})
console.log(`[/table]`)
