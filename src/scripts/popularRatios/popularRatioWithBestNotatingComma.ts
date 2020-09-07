import {
    abs,
    BLANK,
    Cents,
    COMMA_POPULARITIES,
    computeRatioFromMonzo,
    deepEquals,
    formatMonzo,
    formatNumber,
    formatRatio,
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
    N2D3P9,
} from "../../sagittal"
import { computeExactlyNotatingJiSymbolIds } from "./exactlyNotatingJiSymbolIds"
import { popularRatiosScriptGroupSettings } from "./globals"
import { PopularRatioWithBestNotatingComma } from "./types"

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

const computePopularRatioWithBestNotatingComma = (
    { monzo, n2d3p9 }: { monzo: Monzo, n2d3p9: N2D3P9 },
): PopularRatioWithBestNotatingComma => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    const ratio = computeRatioFromMonzo(monzo)
    const formattedRatio = formatRatio(ratio)
    const popularity = COMMA_POPULARITIES.find(popularity => deepEquals(popularity.fiveRoughRatio, ratio))
    const popularityRank = popularity?.rank || "-" as Io
    const votes = popularity?.votes || 0 as Votes

    const notatingCommas = computeNotatingCommas(monzo, { maxCents: APOTOME.cents / 2 as Max<Cents> })

    let bestNotatingComma: Maybe<AnalyzedRationalPitch> = undefined
    for (const notatingComma of notatingCommas) {
        if (
            isUndefined(bestNotatingComma) ||
            (
                popularRatiosScriptGroupSettings.useLate ?
                    isLate(notatingComma, bestNotatingComma) :
                    isLaas(notatingComma, bestNotatingComma)
            )
        ) {
            bestNotatingComma = notatingComma
        }
    }

    if (isUndefined(bestNotatingComma)) {
        throw new Error("did not find a best notating comma for this ratio")
    }

    const commaWithMaybeSagittalSymbol = addMaybeJiSymbol(bestNotatingComma)

    return {
        n2d3p9,
        formattedN2D3P9,
        formattedRatio,
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
    computePopularRatioWithBestNotatingComma,
}
