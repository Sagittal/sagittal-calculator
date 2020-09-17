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
    computeExactlyNotatingCommas,
    formatSymbolClass,
    N2D3P9,
} from "../../sagittal"
import { popular23FreeClassesScriptGroupSettings } from "./globals"
import { Popular23FreeClassAnalysisWithBestExactlyNotatingComma } from "./types"

const isLate = (exactlyNotatingComma: Comma, bestExactlyNotatingComma: Comma): boolean => {
    const exactlyNotatingCommaMonzo = computeJiPitchMonzo(exactlyNotatingComma)
    const bestExactlyNotatingCommaMonzo = computeJiPitchMonzo(bestExactlyNotatingComma)

    return abs(
        exactlyNotatingCommaMonzo[ THREE_PRIME_INDEX ]) <
        abs(bestExactlyNotatingCommaMonzo[ THREE_PRIME_INDEX ],
        ) ||
        (
            abs(exactlyNotatingCommaMonzo[ THREE_PRIME_INDEX ]) ===
            abs(bestExactlyNotatingCommaMonzo[ THREE_PRIME_INDEX ]) &&
            computeCentsFromPitch(exactlyNotatingComma) <
            computeCentsFromPitch(bestExactlyNotatingComma)
        )
}

const isLaas = (exactlyNotatingComma: Comma, bestExactlyNotatingComma: Comma): boolean => {
    return abs(computeApotomeSlope(exactlyNotatingComma)) < abs(computeApotomeSlope(bestExactlyNotatingComma))
}

const analyzePopular23FreeClassWithBestExactlyNotatingComma = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): Popular23FreeClassAnalysisWithBestExactlyNotatingComma => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    const formatted23FreeClass: Formatted<TwoThreeFreeClass> = format23FreeClass(twoThreeFreeClass)

    const popularity = COMMA_POPULARITIES.find((popularity: Popularity): boolean => {
        return deepEquals(popularity.twoThreeFreeClass, twoThreeFreeClass)
    })
    const popularityRank = popularity?.rank || "-" as Io
    const votes = popularity?.votes || 0 as Votes

    const exactlyNotatingCommas =
        computeExactlyNotatingCommas(twoThreeFreeClass, { maxCents: APOTOME_CENTS / 2 as Max<Cents> })

    let bestExactlyNotatingComma: Maybe<Comma> = undefined
    for (const exactlyNotatingComma of exactlyNotatingCommas) {
        if (
            isUndefined(bestExactlyNotatingComma) ||
            (
                popular23FreeClassesScriptGroupSettings.useLate ?
                    isLate(exactlyNotatingComma, bestExactlyNotatingComma) :
                    isLaas(exactlyNotatingComma, bestExactlyNotatingComma)
            )
        ) {
            bestExactlyNotatingComma = exactlyNotatingComma
        }
    }

    if (isUndefined(bestExactlyNotatingComma)) {
        throw new Error("did not find a best exactly notating comma for this 2,3-free class")
    }

    const commaWithMaybeSagittalSymbolClassId = addMaybeSymbolClassId(bestExactlyNotatingComma)

    return {
        n2d3p9,
        formattedN2D3P9,
        formatted23FreeClass,
        popularityRank,
        votes,
        centsOfBestExactlyNotatingComma: formatNumber(computeCentsFromPitch(commaWithMaybeSagittalSymbolClassId)),
        monzoOfBestExactlyNotatingComma: formatMonzo(computeJiPitchMonzo(commaWithMaybeSagittalSymbolClassId)),
        maybeSymbolForBestExactlyNotatingComma:
            commaWithMaybeSagittalSymbolClassId.symbolClassId ?
                formatSymbolClass(commaWithMaybeSagittalSymbolClassId.symbolClassId, ioSettings) :
                BLANK,
    }
}

export {
    analyzePopular23FreeClassWithBestExactlyNotatingComma,
}
