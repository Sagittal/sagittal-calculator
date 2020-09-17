import {
    abs,
    BLANK,
    Cents,
    Comma,
    COMMA_POPULARITIES,
    computeCentsFromPitch,
    computeJiPitchMonzo,
    deepEquals,
    format23FreeClass,
    formatMonzo,
    formatNumber,
    Formatted,
    Io,
    ioSettings,
    isUndefined,
    Max,
    Maybe,
    Popularity,
    THREE_PRIME_INDEX,
    TwoThreeFreeClass,
    Votes,
} from "../../general"
import {
    addMaybeSymbolClassId,
    APOTOME_CENTS,
    computeApotomeSlope,
    computeNotatingCommas,
    formatSymbolClass,
    N2D3P9,
} from "../../sagittal"
import { popular23FreeClassesScriptGroupSettings } from "./globals"
import { Popular23FreeClassAnalysisWithBestNotatingComma } from "./types"

const isLate = (notatingComma: Comma, bestNotatingComma: Comma): boolean => {
    const notatingCommaMonzo = computeJiPitchMonzo(notatingComma)
    const bestNotatingCommaMonzo = computeJiPitchMonzo(bestNotatingComma)

    return abs(
        notatingCommaMonzo[ THREE_PRIME_INDEX ]) <
        abs(bestNotatingCommaMonzo[ THREE_PRIME_INDEX ],
        ) ||
        (
            abs(notatingCommaMonzo[ THREE_PRIME_INDEX ]) ===
            abs(bestNotatingCommaMonzo[ THREE_PRIME_INDEX ]) &&
            computeCentsFromPitch(notatingComma) <
            computeCentsFromPitch(bestNotatingComma)
        )
}

const isLaas = (notatingComma: Comma, bestNotatingComma: Comma): boolean => {
    return abs(computeApotomeSlope(notatingComma)) < abs(computeApotomeSlope(bestNotatingComma))
}

const analyzePopular23FreeClassWithBestNotatingComma = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): Popular23FreeClassAnalysisWithBestNotatingComma => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    const formatted23FreeClass: Formatted<TwoThreeFreeClass> = format23FreeClass(twoThreeFreeClass)

    const popularity = COMMA_POPULARITIES.find((popularity: Popularity): boolean => {
        return deepEquals(popularity.twoThreeFreeClass, twoThreeFreeClass)
    })
    const popularityRank = popularity?.rank || "-" as Io
    const votes = popularity?.votes || 0 as Votes

    const notatingCommas =
        computeNotatingCommas(twoThreeFreeClass, { maxCents: APOTOME_CENTS / 2 as Max<Cents> })

    let bestNotatingComma: Maybe<Comma> = undefined
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
        throw new Error("did not find a best exactly notating comma for this 2,3-free class")
    }

    const commaAnalysisWithMaybeSagittalSymbolClassId = addMaybeSymbolClassId(bestNotatingComma)

    return {
        n2d3p9,
        formattedN2D3P9,
        formatted23FreeClass,
        popularityRank,
        votes,
        centsOfBestNotatingComma: formatNumber(computeCentsFromPitch(commaAnalysisWithMaybeSagittalSymbolClassId)),
        monzoOfBestNotatingComma: formatMonzo(computeJiPitchMonzo(commaAnalysisWithMaybeSagittalSymbolClassId)),
        maybeSymbolForBestNotatingComma:
            commaAnalysisWithMaybeSagittalSymbolClassId.symbolClassId ?
                formatSymbolClass(commaAnalysisWithMaybeSagittalSymbolClassId.symbolClassId, ioSettings) :
                BLANK,
    }
}

export {
    analyzePopular23FreeClassWithBestNotatingComma,
}
