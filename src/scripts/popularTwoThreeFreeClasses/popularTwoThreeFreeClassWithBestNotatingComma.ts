import {
    abs,
    BLANK,
    Cents,
    COMMA_POPULARITIES,
    computeMonzoFromRatio,
    deepEquals,
    formatMonzo,
    formatNumber,
    formatRatio,
    Formatted,
    Io,
    ioSettings,
    isUndefined,
    Max,
    Maybe,
    Votes,
} from "../../general"
import {
    addMaybeJiSymbol,
    AnalyzedRationalPitch,
    APOTOME,
    computeNotatingCommas,
    formatSymbol,
    N2D3P9,
    TwoThreeFreeClass,
} from "../../sagittal"
import { popularTwoThreeFreeClassesScriptGroupSettings } from "./globals"
import { PopularTwoThreeFreeClassWithBestNotatingComma } from "./types"

// TODO: not yet tested
const isLate = (notatingComma: AnalyzedRationalPitch, bestNotatingComma: AnalyzedRationalPitch) => {
    return abs(notatingComma.monzo[ 1 ]) < abs(bestNotatingComma.monzo[ 1 ]) ||
        (
            abs(notatingComma.monzo[ 1 ]) === abs(bestNotatingComma.monzo[ 1 ]) &&
            notatingComma.cents < bestNotatingComma.cents
        )
}

const isLaas = (notatingComma: AnalyzedRationalPitch, bestNotatingComma: AnalyzedRationalPitch) => {
    return abs(notatingComma.apotomeSlope) < abs(bestNotatingComma.apotomeSlope)
}

const computePopularTwoThreeFreeClassWithBestNotatingComma = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): PopularTwoThreeFreeClassWithBestNotatingComma => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    const formattedTwoThreeFreeClass: Formatted<TwoThreeFreeClass> = formatRatio(twoThreeFreeClass)
    const popularity = COMMA_POPULARITIES.find(popularity => {
        return deepEquals(popularity.twoThreeFreeClass, twoThreeFreeClass)
    })
    const popularityRank = popularity?.rank || "-" as Io
    const votes = popularity?.votes || 0 as Votes

    const notatingCommas = computeNotatingCommas(
        computeMonzoFromRatio(twoThreeFreeClass),
        { maxCents: APOTOME.cents / 2 as Max<Cents> },
    )

    let bestNotatingComma: Maybe<AnalyzedRationalPitch> = undefined
    for (const notatingComma of notatingCommas) {
        if (
            isUndefined(bestNotatingComma) ||
            (
                popularTwoThreeFreeClassesScriptGroupSettings.useLate ?
                    isLate(notatingComma, bestNotatingComma) :
                    isLaas(notatingComma, bestNotatingComma)
            )
        ) {
            bestNotatingComma = notatingComma
        }
    }

    if (isUndefined(bestNotatingComma)) {
        throw new Error("did not find a best notating comma for this 2,3-free class")
    }

    const commaWithMaybeSagittalSymbol = addMaybeJiSymbol(bestNotatingComma)

    return {
        n2d3p9,
        formattedN2D3P9,
        formattedTwoThreeFreeClass,
        popularityRank,
        votes,
        centsOfBestNotatingComma: formatNumber(commaWithMaybeSagittalSymbol.cents),
        monzoOfBestNotatingComma: formatMonzo(commaWithMaybeSagittalSymbol.monzo),
        maybeSymbolForBestNotatingComma:
            commaWithMaybeSagittalSymbol.symbolId ?
                formatSymbol(commaWithMaybeSagittalSymbol.symbolId, ioSettings) :
                BLANK,
    }
}

export {
    computePopularTwoThreeFreeClassWithBestNotatingComma,
}
