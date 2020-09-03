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
import { AnalyzedRationalPitch, APOTOME, formatSymbol, N2D3P9 } from "../../sagittal"
// TODO: this is not great. perhaps these scripts need to be moved into sagittal/
// tslint:disable-next-line:no-reaching-imports
import { addMaybeSagittalSymbol } from "../pitch/addMaybeSagittalSymbol"
// tslint:disable-next-line:no-reaching-imports
import { computeNotatingCommas } from "../pitch/notatingCommas"
import { computeExactlyNotatingJiSymbolIds } from "./exactlyNotatingJiSymbolIds"
import { PopularRatioWithBestNotatingComma } from "./types"

const computePopularRatioWithBestNotatingComma = (
    { monzo, n2d3p9 }: { monzo: Monzo, n2d3p9: N2D3P9 },
): PopularRatioWithBestNotatingComma => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    const ratio = computeRatioFromMonzo(monzo)
    const formattedRatio = formatRatio(ratio)
    const popularity = COMMA_POPULARITIES.find(popularity => deepEquals(popularity.fiveRoughRatio, ratio))
    const popularityRank = popularity?.rank || "-" as Io
    const votes = popularity?.votes || 0 as Votes

    const exactlyNotatingJiSymbolIds = computeExactlyNotatingJiSymbolIds(monzo)

    const notatingCommas = computeNotatingCommas(monzo, { maxCents: APOTOME.cents / 2 as Max<Cents> })

    let notatingCommaWithLeastAbsoluteApotomeSlope: Maybe<AnalyzedRationalPitch> = undefined
    for (const notatingComma of notatingCommas) {
        if (
            isUndefined(notatingCommaWithLeastAbsoluteApotomeSlope) ||
            abs(notatingComma.apotomeSlope) < abs(notatingCommaWithLeastAbsoluteApotomeSlope.apotomeSlope)
        ) {
            notatingCommaWithLeastAbsoluteApotomeSlope = notatingComma
        }
    }

    if (isUndefined(notatingCommaWithLeastAbsoluteApotomeSlope)) {
        throw new Error("did not find")
    }

    const commaWithMaybeSagittalSymbol = addMaybeSagittalSymbol(notatingCommaWithLeastAbsoluteApotomeSlope)

    return {
        n2d3p9,
        formattedN2D3P9,
        formattedRatio,
        popularityRank,
        votes,
        centsOfNotatingCommaWithLeastAbsoluteApotomeSlope: formatNumber(commaWithMaybeSagittalSymbol.cents),
        monzoOfNotatingCommaWithLeastAbsoluteApotomeSlope: formatMonzo(commaWithMaybeSagittalSymbol.monzo),
        maybeSymbolForNotatingCommaWithLeastAbsoluteApotomeSlope:
            commaWithMaybeSagittalSymbol.symbolId ?
                formatSymbol(commaWithMaybeSagittalSymbol.symbolId, ioSettings) :
                BLANK,
        symbolSubsets: exactlyNotatingJiSymbolIds,
    }
}

export {
    computePopularRatioWithBestNotatingComma,
}
