import {
    computeCopfr,
    computeSopfr,
    computeTrimmedMonzo,
    isUndefined,
    Monzo,
    Prime,
    PrimeExponent,
    PRIMES,
} from "../../general"
import { computePrimeExponentRange } from "./primeExponentRange"
import { ComputeFiveSlicedMonzosToCheckOptions } from "./types"

const computeFiveSlicedMonzosToCheck = ({ maximumPrimeLimit, maximumFiveRoughSopfr, maximumFiveRoughCopfr }: ComputeFiveSlicedMonzosToCheckOptions = {}): Array<Monzo<5>> => {
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

    let fiveSlicedMonzosToCheck: Array<Monzo<5>> = [
        [] as unknown as Monzo<5>,
    ]

    let maximumPrime: Prime
    if (maximumPrimeLimit) {
        maximumPrime = maximumPrimeLimit
    } else {
        const possiblePrimes = PRIMES.filter(prime => prime < (maximumFiveRoughSopfr || Infinity))
        maximumPrime = possiblePrimes[ possiblePrimes.length - 1 ]
    }
    const indexOfMaximumPrime = PRIMES.findIndex(prime =>
        prime === maximumPrime)

    const primes = PRIMES.slice(2, indexOfMaximumPrime + 1)

    primes.forEach(prime => {
        const extendedFiveSlicedMonzosToCheck: Array<Monzo<5>> = []

        fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
            const fiveRoughSopfr = computeSopfr([ 0, 0, ...fiveSlicedMonzoToCheck ] as Monzo)
            const fiveRoughCopfr = computeCopfr([ 0, 0, ...fiveSlicedMonzoToCheck ] as Monzo)

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
