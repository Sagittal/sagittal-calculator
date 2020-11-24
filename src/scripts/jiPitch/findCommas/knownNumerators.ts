import {
    computeRationalMonzoCopfr,
    computeRationalMonzoFromRationalQuotient,
    computeRationalMonzoSmoothness,
    computeRationalMonzoSopfr,
    Denominator, EMPTY_MONZO,
    Filename, invertMonzo,
    isLowestTerms,
    isUndefined,
    Monzo,
    NEWLINE,
    Quotient,
    QuotientPart,
    readLines, stringify,
} from "../../../general"
import {
    computeN2D3P9FromKnownLowN2D3P9NumeratorAndPossibleDenominator,
    KnownLowN2D3P9Numerator,
    MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN,
} from "../../../sagittal"
import { Two3FreeMonzosToCheckOptions } from "./types"

// TODO: DRY this up with the thing that's very similar to this in popular 2,3-free classes,
//  Which is maybe similar to doForEachMonzo in essence

const compute23FreeRationalMonzosToCheckFromKnownLowN2D3P9Numerators = (
    options: Two3FreeMonzosToCheckOptions = {},
): Array<Monzo<{ rational: true, rough: 5 }>> => {
    const {
        maxPrimeLimit,
        max23FreeSopfr,
        max23FreeCopfr,
        maxN2D3P9 = MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN,
    } = options

    const knownNumerators: KnownLowN2D3P9Numerator[] = JSON.parse(
        // tslint:disable-next-line max-line-length
        readLines("src/sagittal/ji/badness/complexity/unpopularity/n2d3p9/knownNumerators/knownNumerators.txt" as Filename).join(NEWLINE),
    )

    const monzosToCheck = [
        EMPTY_MONZO as Monzo<{rational: true, rough: 5}>,
    ] as Array<Monzo<{ rational: true, rough: 5 }>>

    for (const [knownNumeratorIndex, knownNumerator] of knownNumerators.entries()) {
        const possibleDenominators = knownNumerators.slice(0, knownNumeratorIndex)

        for (const [possibleDenominatorIndex, possibleDenominator] of possibleDenominators.entries()) {
            const n2d3p9 =
                computeN2D3P9FromKnownLowN2D3P9NumeratorAndPossibleDenominator(knownNumerator, possibleDenominator)

            if (n2d3p9 <= maxN2D3P9) {
                const rationalQuotient = [
                    knownNumerator.numerator,
                    possibleDenominator.numerator as QuotientPart as Denominator,
                ] as Quotient<{ rational: true, rough: 5 }>
                if (!isLowestTerms(rationalQuotient)) continue
                const rationalMonzo = computeRationalMonzoFromRationalQuotient(rationalQuotient)
                monzosToCheck.push(rationalMonzo)
                monzosToCheck.push(invertMonzo(rationalMonzo))
            } else if (possibleDenominatorIndex === 0) {
                break
            }
        }
    }

    return monzosToCheck.filter((somethingMonzoToCheck: Monzo<{ rational: true, rough: 5 }>): boolean => {
        if (
            !isUndefined(max23FreeSopfr)
            && computeRationalMonzoSopfr(somethingMonzoToCheck) > max23FreeSopfr
        ) {
            return false
        }
        if (
            !isUndefined(max23FreeCopfr)
            && computeRationalMonzoCopfr(somethingMonzoToCheck) > max23FreeCopfr
        ) {
            return false
        }
        return !(
            !isUndefined(maxPrimeLimit)
            && computeRationalMonzoSmoothness(somethingMonzoToCheck) > maxPrimeLimit
        )
    })
}

export {
    compute23FreeRationalMonzosToCheckFromKnownLowN2D3P9Numerators,
}
