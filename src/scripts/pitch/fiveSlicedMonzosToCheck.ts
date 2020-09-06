import {
    computeCopfr,
    computeExtensionBase,
    computeSopfr,
    computeTrimmedArray,
    Copfr,
    Exponent,
    ExtensionBaseType,
    Extrema,
    Integer,
    isUndefined,
    Max,
    Maybe,
    Monzo,
    Prime,
    Sopfr,
} from "../../general"
import { computePrimeExponentExtremasGivenMaxN2D3P9 } from "../../sagittal"
import { computeFiveRoughPrimesToCheck } from "./fiveRoughPrimesToCheck"
import { computePrimeExponentRange } from "./primeExponentRange"
import { FiveSlicedMonzosToCheckOptions } from "./types"

const computeFiveSlicedMonzosToCheck = (
    { maxPrimeLimit, maxFiveRoughSopfr, maxFiveRoughCopfr, maxN2D3P9 }: FiveSlicedMonzosToCheckOptions = {},
): Array<Monzo<Integer, 5>> => {
    if (isUndefined(maxFiveRoughSopfr)) {
        if (isUndefined(maxPrimeLimit)) {
            if (isUndefined(maxFiveRoughCopfr)) {
                throw new Error("The primes must be limited somehow.")
            } else {
                throw new Error("The size of the primes must be limited somehow.")
            }
        } else if (isUndefined(maxFiveRoughCopfr)) {
            throw new Error("The count of the primes must be limited somehow.")
        }
    }

    let fiveSlicedMonzosToCheck: Array<Monzo<Integer, 5>> = [
        [] as unknown[] as Monzo<Integer, 5>,
    ]

    const primeExponentExtremasGivenMaxN2D3P9: Maybe<Array<Extrema<Integer & Exponent<Prime>>>> =
        maxN2D3P9 && computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)

    const fiveRoughPrimesToCheck = computeFiveRoughPrimesToCheck({
        maxPrimeLimit,
        maxFiveRoughSopfr,
        primeExponentExtremasGivenMaxN2D3P9,
    })

    fiveRoughPrimesToCheck.forEach((fiveRoughPrimeToCheck, index) => {
        const extendedFiveSlicedMonzosToCheck: Array<Monzo<Integer, 5>> =
            computeExtensionBase(ExtensionBaseType.ARRAY) as Array<Monzo<Integer, 5>>

        const primeExponentExtremaGivenMaxN2D3P9: Maybe<Extrema<Integer & Exponent<Prime>>> =
            primeExponentExtremasGivenMaxN2D3P9 && primeExponentExtremasGivenMaxN2D3P9[ index ]

        fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
            const fiveRoughSopfr = computeSopfr([0, 0, ...fiveSlicedMonzoToCheck] as Monzo)
            const fiveRoughCopfr = computeCopfr([0, 0, ...fiveSlicedMonzoToCheck] as Monzo)

            const adjustedMaxFiveRoughSopfr = maxFiveRoughSopfr && maxFiveRoughSopfr - fiveRoughSopfr as Max<Sopfr<5>>
            const adjustedMaxFiveRoughCopfr = maxFiveRoughCopfr && maxFiveRoughCopfr - fiveRoughCopfr as Max<Copfr<5>>

            const termRange: Array<Integer & Exponent<Prime>> = computePrimeExponentRange(
                fiveRoughPrimeToCheck,
                {
                    maxFiveRoughSopfr: adjustedMaxFiveRoughSopfr, // this is where the max five rough sopfr is enforced
                    maxFiveRoughCopfr: adjustedMaxFiveRoughCopfr,
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
