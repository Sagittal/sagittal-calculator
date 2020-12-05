import {
    computeExtensionBase,
    computeRationalMonzoCopfr,
    computeRationalMonzoSopfr,
    computeTrimmedArray,
    Copfr,
    Decimal,
    Exponent,
    ExtensionBaseType,
    Extrema,
    FIVE_PRIME_INDEX,
    isUndefined,
    Max,
    Maybe,
    Monzo,
    Prime,
    shallowClone,
    Sopfr,
} from "@sagittal/general"
import {computePrimeExponentExtremasGivenMaxN2D3P9} from "@sagittal/system"
import {TWO_3_FREE_MONZO_BASE} from "./constants"
import {computePrimeExponentRange} from "./primeExponentRange"
import {compute23FreePrimesToCheck} from "./two3FreePrimesToCheck"
import {FindCommasOptions} from "./types"

const compute23FreeRationalMonzosToCheck = (
    {maxPrimeLimit, max23FreeSopfr, max23FreeCopfr, maxN2D3P9}: Partial<FindCommasOptions> = {},
): Array<Monzo<{rational: true, rough: 5}>> => {
    if (isUndefined(max23FreeSopfr) && isUndefined(maxN2D3P9)) {
        if (isUndefined(maxPrimeLimit)) {
            if (isUndefined(max23FreeCopfr)) {
                throw new Error("The primes must be constrained somehow.")
            } else {
                throw new Error("The size of the primes must be constrained somehow.")
            }
        } else if (isUndefined(max23FreeCopfr)) {
            throw new Error("The count of the primes must be constrained somehow.")
        }
    }

    const primeExponentExtremasGivenMaxN2D3P9:
        Maybe<Array<Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>>> =
        maxN2D3P9 && computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9, {mirrored: true})

    const two3FreePrimesToCheck = compute23FreePrimesToCheck({
        maxPrimeLimit,
        max23FreeSopfr,
        primeExponentExtremasGivenMaxN2D3P9,
    })

    let two3FreeRationalMonzosToCheck: Array<Monzo<{rational: true, rough: 5}>> = [
        shallowClone(TWO_3_FREE_MONZO_BASE),
    ]
    two3FreePrimesToCheck.forEach((two3FreePrimeToCheck: Prime, index: number): void => {
        const extended23FreeMonzosToCheck: Array<Monzo<{rational: true, rough: 5}>> =
            computeExtensionBase(ExtensionBaseType.ARRAY) as Array<Monzo<{rational: true, rough: 5}>>

        const primeExponentExtremaGivenMaxN2D3P9:
            Maybe<Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>> =
            primeExponentExtremasGivenMaxN2D3P9 && primeExponentExtremasGivenMaxN2D3P9[index + FIVE_PRIME_INDEX]

        two3FreeRationalMonzosToCheck.forEach((two3FreeMonzoToCheck: Monzo<{rational: true}>): void => {
            const two3FreeSopfr = computeRationalMonzoSopfr(two3FreeMonzoToCheck)
            const two3FreeCopfr = computeRationalMonzoCopfr(two3FreeMonzoToCheck)

            const adjustedMax23FreeSopfr = max23FreeSopfr &&
                max23FreeSopfr - two3FreeSopfr as Max<Sopfr<{rough: 5}>>
            const adjustedMaxTwo3FreeCopfr = max23FreeCopfr &&
                max23FreeCopfr - two3FreeCopfr as Max<Copfr<{rough: 5}>>

            const primeExponentRange: Array<Decimal<{integer: true}> & Exponent<Prime>> =
                computePrimeExponentRange(
                    two3FreePrimeToCheck,
                    {
                        max23FreeSopfr: adjustedMax23FreeSopfr,
                        max23FreeCopfr: adjustedMaxTwo3FreeCopfr,
                        primeExponentExtremaGivenMaxN2D3P9,
                    },
                ) as Array<Decimal<{integer: true}> & Exponent<Prime>>
            primeExponentRange.forEach((
                potentialNextTerm: Decimal<{integer: true}> & Exponent<Prime>,
            ): void => {
                extended23FreeMonzosToCheck.push(
                    two3FreeMonzoToCheck.concat(potentialNextTerm) as Monzo<{rational: true, rough: 5}>,
                )
            })
        })

        two3FreeRationalMonzosToCheck = extended23FreeMonzosToCheck
    })

    return two3FreeRationalMonzosToCheck.map(computeTrimmedArray)
}

export {
    compute23FreeRationalMonzosToCheck,
}
