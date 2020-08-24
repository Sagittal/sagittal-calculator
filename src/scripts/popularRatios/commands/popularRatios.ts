import { program } from "commander"
import {
    computeCentsFromRatio,
    computeN2D3P9,
    computePossibleMonzosFromPrimeExponentExtremas,
    computePrimeExponentExtremasGivenMaximumN2D3P9,
    computeRatioFromMonzo,
    deepEquals,
    fractionallyRank,
    presentRatio,
    PrimeExponentExtrema,
    round,
} from "../../../general"
import { computeNotatingSymbolIds, computeSmileyFromAscii, getSymbol, SYMBOL_SETS } from "../../../notations"
// TODO: we should not export from one command to another,
//  so the popularities stuff should be relocated to a place where it can be shared
// tslint:disable-next-line no-reaching-imports
import { COMMA_POPULARITIES } from "../../unpopularityMetric/sumOfSquares"
import { N2D3P9_MAX } from "../constants"
import { PopularRatioUnrankedResult } from "../types"

// TODO: consider adding a layer which pre-calculates numerators up to 3501 per Dave's suggestion on the forum

program
    .option("-m, --maximum-n2d3p9 [maximumN2D3P9]", "maximum N2D3P9", parseFloat)
    .parse(process.argv)

const maximumN2D3P9 = program.maximumN2d3p9 || N2D3P9_MAX

const primeExponentExtremasGivenMaximumN2D3P9 = computePrimeExponentExtremasGivenMaximumN2D3P9(maximumN2D3P9)
// TODO: FIVE ROUGH LINK there might be some better way to deal with the five rough vs. not five rough situation
//  throughout this popular ratios / N2D3P9 code
//  e.g. computeMaximumNumeratorPrimeExponentsGivenMaximumN2D3P9 has some stuff
primeExponentExtremasGivenMaximumN2D3P9.unshift([0, 0] as PrimeExponentExtrema)
primeExponentExtremasGivenMaximumN2D3P9.unshift([0, 0] as PrimeExponentExtrema)

const unrankedResults = [] as Array<PopularRatioUnrankedResult>

const monzosToCheck = computePossibleMonzosFromPrimeExponentExtremas(primeExponentExtremasGivenMaximumN2D3P9)

monzosToCheck.forEach(monzo => {
    // TODO: extract this
    const ratio = computeRatioFromMonzo(monzo)
    if (computeCentsFromRatio(ratio) < 0) return

    const n2d3p9 = computeN2D3P9(monzo)

    if (n2d3p9 <= maximumN2D3P9) {
        const presentedN2D3P9 = round(n2d3p9, 2)
        const presentedRatio = presentRatio(ratio)
        const notatingSymbolIds = computeNotatingSymbolIds(monzo)
        const notatingSymbols = notatingSymbolIds.map(getSymbol)
        const smileys = notatingSymbols.map(symbol => computeSmileyFromAscii(symbol.ascii)).join(" ")
        const symbolSets = notatingSymbols.map(symbol => SYMBOL_SETS.indexOf(symbol.lowestSymbolSet)).join(", ")
        const actualRank = COMMA_POPULARITIES.find(popularity => deepEquals(popularity.fiveRoughRatio, ratio))?.fractionalRank

        unrankedResults.push({
            presentedN2D3P9,
            presentedRatio,
            smileys,
            symbolSets,
            actualRank,
        })
    }
})

// TODO: this is working okay for now,
//  but ideally we'd have something that will generalize the saveDebugMessage trick across all the different scripts

console.log(`count of results with N2D3P9 <= ${maximumN2D3P9}: ${unrankedResults.length}`)

const results = fractionallyRank(unrankedResults, "presentedN2D3P9")

console.log(`[table]`)
console.log(`[tr][th]ratio[/th][th]N2D3P9[/th][th]symbol[/th][th]symbol sets[/th][th]estimated rank[/th][th]actual rank[/th][/tr]`)
results.forEach(result => {
    // TODO: extract this
    const { presentedN2D3P9, presentedRatio, fractionalRank: estimatedRank, actualRank, symbolSets, smileys } = result
    console.log(`[tr][td]${presentedRatio}[/td][td]${presentedN2D3P9}[/td][td]${smileys}[/td][td]${symbolSets}[/td][td]${estimatedRank}[/td][td]${actualRank || "-"}[/td][/tr]`)
})
console.log(`[/table]`)
