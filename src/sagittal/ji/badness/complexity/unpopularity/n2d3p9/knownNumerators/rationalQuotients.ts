import {
    Denominator,
    Filename,
    isLowestTerms,
    Max,
    NEWLINE,
    Quotient,
    QuotientPart,
    readLines,
} from "@sagittal/general"
import {N2D3P9} from "../types"
import {computeN2D3P9FromKnownLowN2D3P9NumeratorAndPossibleDenominator} from "./n2d3p9"
import {KnownLowN2D3P9Numerator} from "./types"

const computeKnownRationalQuotients = (maxN2D3P9: Max<N2D3P9>): Array<Quotient<{rational: true, rough: 5}>> => {
    const knownNumerators: KnownLowN2D3P9Numerator[] = JSON.parse(
        // tslint:disable-next-line max-line-length
        readLines("src/sagittal/ji/badness/complexity/unpopularity/n2d3p9/knownNumerators/knownNumerators.txt" as Filename).join(NEWLINE),
    )

    const rationalQuotients = [] as Array<Quotient<{rational: true, rough: 5}>>

    for (const [knownNumeratorIndex, knownNumerator] of knownNumerators.entries()) {
        const possibleDenominators = knownNumerators.slice(0, knownNumeratorIndex)

        for (const [possibleDenominatorIndex, possibleDenominator] of possibleDenominators.entries()) {
            const n2d3p9 =
                computeN2D3P9FromKnownLowN2D3P9NumeratorAndPossibleDenominator(knownNumerator, possibleDenominator)

            if (n2d3p9 <= maxN2D3P9) {
                const rationalQuotient = [
                    knownNumerator.numerator,
                    possibleDenominator.numerator as QuotientPart as Denominator,
                ] as Quotient<{rational: true, rough: 5}>
                if (!isLowestTerms(rationalQuotient)) continue
                rationalQuotients.push(rationalQuotient)
            } else if (possibleDenominatorIndex === 0) {
                break
            }
        }
    }

    return rationalQuotients
}

export {
    computeKnownRationalQuotients,
}
