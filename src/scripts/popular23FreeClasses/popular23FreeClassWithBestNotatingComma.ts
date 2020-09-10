import {
    abs,
    BLANK,
    Cents,
    COMMA_POPULARITIES,
    computeCentsFromMonzo,
    computeRatioFromMonzo,
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
    TwoThreeFreeClassAsRatio,
    Votes,
} from "../../general"
import {
    addMaybeJiSymbol,
    APOTOME_CENTS,
    Comma,
    computeApotomeSlope,
    computeNotatingCommas,
    formatSymbol,
    N2D3P9,
    TwoThreeFreeClass,
} from "../../sagittal"
import { popular23FreeClassesScriptGroupSettings } from "./globals"
import { Popular23FreeClassWithBestNotatingComma } from "./types"

const isLate = (notatingComma: Comma, bestNotatingComma: Comma) => {
    return abs(notatingComma.monzo[ 1 ]) < abs(bestNotatingComma.monzo[ 1 ]) ||
        (
            abs(notatingComma.monzo[ 1 ]) === abs(bestNotatingComma.monzo[ 1 ]) &&
            computeCentsFromMonzo(notatingComma.monzo) < computeCentsFromMonzo(bestNotatingComma.monzo)
        )
}

const isLaas = (notatingComma: Comma, bestNotatingComma: Comma) => {
    return abs(computeApotomeSlope(notatingComma.monzo)) < abs(computeApotomeSlope(bestNotatingComma.monzo))
}

const computePopular23FreeClassWithBestNotatingComma = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): Popular23FreeClassWithBestNotatingComma => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    const formatted23FreeClass: Formatted<TwoThreeFreeClass> =
        // TODO: you'll want to extract this as an actual format23FreeClass funtion
        formatRatio(computeRatioFromMonzo(twoThreeFreeClass.monzo)) as unknown as Formatted<TwoThreeFreeClass>

    const twoThreeFreeClassAsRatio: TwoThreeFreeClassAsRatio =
        computeRatioFromMonzo(twoThreeFreeClass.monzo) as TwoThreeFreeClassAsRatio
    const popularity = COMMA_POPULARITIES.find(popularity => {
        return deepEquals(popularity.twoThreeFreeClassAsRatio, twoThreeFreeClassAsRatio)
    })
    const popularityRank = popularity?.rank || "-" as Io
    const votes = popularity?.votes || 0 as Votes

    const notatingCommas = computeNotatingCommas(
        twoThreeFreeClass.monzo,
        { maxCents: APOTOME_CENTS / 2 as Max<Cents> },
    )

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
        throw new Error("did not find a best notating comma for this 2,3-free class")
    }

    const commaWithMaybeSagittalSymbol = addMaybeJiSymbol(bestNotatingComma)

    return {
        n2d3p9,
        formattedN2D3P9,
        formatted23FreeClass,
        popularityRank,
        votes,
        centsOfBestNotatingComma: formatNumber(computeCentsFromMonzo(commaWithMaybeSagittalSymbol.monzo)),
        monzoOfBestNotatingComma: formatMonzo(commaWithMaybeSagittalSymbol.monzo),
        maybeSymbolForBestNotatingComma:
            commaWithMaybeSagittalSymbol.symbolId ?
                formatSymbol(commaWithMaybeSagittalSymbol.symbolId, ioSettings) :
                BLANK,
    }
}

export {
    computePopular23FreeClassWithBestNotatingComma,
}
