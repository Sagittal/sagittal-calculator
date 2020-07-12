import { PRIMES } from "../../utilities/constants"
import { computePrimeExponentRange } from "./primeExponentRange"
import { computeSopfr } from "../../utilities/comma/sopfr"
import { computeCopfr } from "../../utilities/comma/copfr"
import { computeTrimmedMonzo } from "../../utilities/comma/trimmedMonzo"
import { Prime } from "../../utilities/types"
import { Monzo, PrimeExponent } from "../../utilities/comma/types"
import { ComputeFiveSlicedMonzosToCheckParameters } from "./types"
import { isUndefined } from "../../utilities/typeGuards"

const computeFiveSlicedMonzosToCheck = ({ maximumPrimeLimit, maximumFiveRoughSopfr, maximumFiveRoughCopfr }: ComputeFiveSlicedMonzosToCheckParameters = {}): Monzo<5>[] => {
    if (isUndefined(maximumFiveRoughSopfr)) {
        if (isUndefined(maximumPrimeLimit)) {
            if (isUndefined(maximumFiveRoughCopfr)) {
                throw new Error("The primes must be limited somehow.")
            } else {
                throw new Error("The size of the primes must be limited somehow.")
            }
        } else if (isUndefined(maximumFiveRoughCopfr)) {
            throw new Error("The count of the primes must be limited somehow.")
        }
    }

    let fiveSlicedMonzosToCheck: Monzo<5>[] = [
        [] as unknown as Monzo<5>,
    ]

    let maximumPrime: Prime
    if (maximumPrimeLimit) {
        maximumPrime = maximumPrimeLimit
    } else {
        const possiblePrimes = PRIMES.filter(prime => prime < (maximumFiveRoughSopfr || Infinity))
        maximumPrime = possiblePrimes[ possiblePrimes.length - 1 ]
    }
    const indexOfMaximumPrime = PRIMES.findIndex(prime => {
        return prime === maximumPrime
    })

    const primes = PRIMES.slice(2, indexOfMaximumPrime + 1)

    primes.forEach(prime => {
        const extendedFiveSlicedMonzosToCheck: Monzo<5>[] = []

        fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
            const fiveRoughSopfr = computeSopfr([0, 0, ...fiveSlicedMonzoToCheck] as Monzo)
            const fiveRoughCopfr = computeCopfr([0, 0, ...fiveSlicedMonzoToCheck] as Monzo)

            const termRange: PrimeExponent[] = computePrimeExponentRange(
                prime,
                {
                    maximumFiveRoughSopfr: maximumFiveRoughSopfr ? maximumFiveRoughSopfr - fiveRoughSopfr : undefined,
                    maximumFiveRoughCopfr: maximumFiveRoughCopfr ? maximumFiveRoughCopfr - fiveRoughCopfr : undefined,
                },
            ) as PrimeExponent[]
            termRange.forEach((potentialNextTerm: PrimeExponent) => {
                extendedFiveSlicedMonzosToCheck.push(fiveSlicedMonzoToCheck.concat(potentialNextTerm) as Monzo<5>)
            })
        })

        fiveSlicedMonzosToCheck = extendedFiveSlicedMonzosToCheck
    })

    return fiveSlicedMonzosToCheck.map(computeTrimmedMonzo)
}

export {
    computeFiveSlicedMonzosToCheck,
}
