import {
    computeCopfr,
    computeExtensionBase,
    computeSopfr,
    computeTrimmedArray,
    Copfr,
    Exponent,
    ExtensionBaseType,
    Extrema,
    FIVE_PRIME_INDEX,
    Integer,
    isUndefined,
    Max,
    Maybe,
    Monzo,
    Prime, shallowClone,
    Sopfr,
} from "../../general"
import { computePrimeExponentExtremasGivenMaxN2D3P9 } from "../../sagittal"
import { TWO_THREE_FREE_MONZO_BASE } from "./constants"
import { computePrimeExponentRange } from "./primeExponentRange"
import { compute23FreePrimesToCheck } from "./twoThreeFreePrimesToCheck"
import { FiveSlicedMonzosToCheckOptions } from "./types"

// TODO: Might it be preferable to do the strategy where instead of populating the whole list of monzos to check
//  you instead go with the technique the N2D3P9 is already taking with the prime exponent extremas?
//  that is maybe you should abstract/extract that bit in the popular 2,3-free script group
//  which found a way to take some prime exponent extremas and check each of them
//  and just have the artifact from here be one of those extremas?
//  - might also save some energy, what with these all being mirrored

const compute23FreeMonzosToCheck = (
    { maxPrimeLimit, max23FreeSopfr, max23FreeCopfr, maxN2D3P9 }: FiveSlicedMonzosToCheckOptions = {},
): Array<Monzo<{ rough: 5 }>> => {
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

    let twoThreeFreeMonzosToCheck: Array<Monzo<{ rough: 5 }>> = [
        shallowClone(TWO_THREE_FREE_MONZO_BASE)
    ]
    twoThreeFreePrimesToCheck.forEach((twoThreeFreePrimeToCheck, index) => {
        const extendedFiveSlicedMonzosToCheck: Array<Monzo<{ rough: 5 }>> =
            computeExtensionBase(ExtensionBaseType.ARRAY) as Array<Monzo<{ rough: 5 }>>

        const primeExponentExtremaGivenMaxN2D3P9: Maybe<Extrema<Integer & Exponent<Prime>>> =
            primeExponentExtremasGivenMaxN2D3P9 && primeExponentExtremasGivenMaxN2D3P9[ index + FIVE_PRIME_INDEX ]

        twoThreeFreeMonzosToCheck.forEach(twoThreeFreeMonzoToCheck => {
            const twoThreeFreeSopfr = computeSopfr(twoThreeFreeMonzoToCheck)
            const twoThreeFreeCopfr = computeCopfr(twoThreeFreeMonzoToCheck)

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
                    twoThreeFreeMonzoToCheck.concat(potentialNextTerm) as Monzo<{ rough: 5 }>,
                )
            })
        })

        twoThreeFreeMonzosToCheck = extendedFiveSlicedMonzosToCheck
    })

    return twoThreeFreeMonzosToCheck.map(computeTrimmedArray)
}

export {
    compute23FreeMonzosToCheck,
}
