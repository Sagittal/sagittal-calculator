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
    Id,
    Io,
    ioSettings,
    isUndefined,
    Max,
    Maybe,
    Monzo,
    Votes,
} from "../../general"
import {
    addMaybeJiSymbol,
    AnalyzedRationalPitch,
    APOTOME,
    computeNotatingCommas,
    formatSymbol,
    JiSymbol,
    N2D3P9,
    TwoThreeFreeClass,
} from "../../sagittal"
import { popular23FreeClassesScriptGroupSettings } from "./globals"
import { Popular23FreeClassWithBestNotatingComma } from "./types"

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

const computePopular23FreeClassWithBestNotatingComma = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): Popular23FreeClassWithBestNotatingComma => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    const formatted23FreeClass: Formatted<TwoThreeFreeClass> = formatRatio(twoThreeFreeClass)
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
                popular23FreeClassesScriptGroupSettings.useLate ?
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
        formatted23FreeClass,
        popularityRank,
        votes,
        centsOfBestNotatingComma: formatNumber(commaWithMaybeSagittalSymbol.cents),
        // TODO: unclear why I need to type assert on this next line...
        monzoOfBestNotatingComma: formatMonzo(commaWithMaybeSagittalSymbol.monzo) as Formatted<Monzo>,
        maybeSymbolForBestNotatingComma:
            commaWithMaybeSagittalSymbol.symbolId ?
                formatSymbol(commaWithMaybeSagittalSymbol.symbolId, ioSettings) :
                BLANK,
    }
}

export {
    computePopular23FreeClassWithBestNotatingComma,
}
