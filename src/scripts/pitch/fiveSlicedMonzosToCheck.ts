import {
    computeCopfr,
    computeExtensionBase,
    computeSopfr,
    computeTrimmedArray,
    Copfr,
    Exponent,
    ExtensionBaseType,
    Extrema, FIVE_PRIME_INDEX,
    Integer,
    isUndefined,
    Max,
    Maybe,
    Monzo,
    Prime,
    Sopfr,
} from "../../general"
import { computePrimeExponentExtremasGivenMaxN2D3P9 } from "../../sagittal"
import { computePrimeExponentRange } from "./primeExponentRange"
import { compute23FreePrimesToCheck } from "./twoThreeFreePrimesToCheck"
import { FiveSlicedMonzosToCheckOptions } from "./types"

const computeFiveSlicedMonzosToCheck = (
    { maxPrimeLimit, max23FreeSopfr, max23FreeCopfr, maxN2D3P9 }: FiveSlicedMonzosToCheckOptions = {},
): Array<Monzo<Integer, 5>> => {
    if (isUndefined(max23FreeSopfr) && isUndefined(maxN2D3P9)) {
        if (isUndefined(maxPrimeLimit)) {
            if (isUndefined(max23FreeCopfr)) {
                throw new Error("The primes must be limited somehow.")
            } else {
                throw new Error("The size of the primes must be limited somehow.")
            }
        } else if (isUndefined(max23FreeCopfr)) {
            throw new Error("The count of the primes must be limited somehow.")
        }
    }

    const primeExponentExtremasGivenMaxN2D3P9: Maybe<Array<Extrema<Integer & Exponent<Prime>>>> =
        maxN2D3P9 && computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9, { mirrored: true })

    const twoThreeFreePrimesToCheck = compute23FreePrimesToCheck({
        maxPrimeLimit,
        max23FreeSopfr,
        primeExponentExtremasGivenMaxN2D3P9,
    })

    let fiveSlicedMonzosToCheck: Array<Monzo<Integer, 5>> = [
        [] as unknown[] as Monzo<Integer, 5>,
    ]
    twoThreeFreePrimesToCheck.forEach((twoThreeFreePrimeToCheck, index) => {
        const extendedFiveSlicedMonzosToCheck: Array<Monzo<Integer, 5>> =
            computeExtensionBase(ExtensionBaseType.ARRAY) as Array<Monzo<Integer, 5>>

        const primeExponentExtremaGivenMaxN2D3P9: Maybe<Extrema<Integer & Exponent<Prime>>> =
            primeExponentExtremasGivenMaxN2D3P9 && primeExponentExtremasGivenMaxN2D3P9[ index + FIVE_PRIME_INDEX ]

        fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
            const twoThreeFreeSopfr = computeSopfr([0, 0, ...fiveSlicedMonzoToCheck] as Monzo)
            const twoThreeFreeCopfr = computeCopfr([0, 0, ...fiveSlicedMonzoToCheck] as Monzo)

            const adjustedMax23FreeSopfr = max23FreeSopfr &&
                max23FreeSopfr - twoThreeFreeSopfr as Max<Sopfr<5>>
            const adjustedMaxTwoThreeFreeCopfr = max23FreeCopfr &&
                max23FreeCopfr - twoThreeFreeCopfr as Max<Copfr<5>>

            const termRange: Array<Integer & Exponent<Prime>> = computePrimeExponentRange(
                twoThreeFreePrimeToCheck,
                {
                    max23FreeSopfr: adjustedMax23FreeSopfr,
                    max23FreeCopfr: adjustedMaxTwoThreeFreeCopfr,
                    primeExponentExtremaGivenMaxN2D3P9,
                },
            ) as Array<Integer & Exponent<Prime>>
            termRange.forEach((potentialNextTerm: Integer & Exponent<Prime>) => {
                extendedFiveSlicedMonzosToCheck.push(
                    fiveSlicedMonzoToCheck.concat(potentialNextTerm) as Monzo<Integer, 5>,
                )
            })
        })

        fiveSlicedMonzosToCheck = extendedFiveSlicedMonzosToCheck
    })

    return fiveSlicedMonzosToCheck.map(computeTrimmedArray)
}

export {
    computeFiveSlicedMonzosToCheck,
}
