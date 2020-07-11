import { PRIMES } from "../../utilities/constants"
import { computeTermRange } from "./termRange"
import { computeSopfr } from "../../utilities/comma/sopfr"
import { computeCopfr } from "../../utilities/comma/copfr"
import { computeTrimmedMonzo } from "../../utilities/comma/trimmedMonzo"
import { Prime } from "../../utilities/types"
import { Monzo, PrimeExponent } from "../../utilities/comma/types"

// todo: get rid of all "any"
const computeFiveSlicedMonzosToCheck = ({ maximumPrimeLimit, maximumFiveRoughSopfr, maximumFiveRoughCopfr }: any = {}): Monzo<5>[] => {
    if (typeof maximumFiveRoughSopfr === "undefined") {
        if (typeof maximumPrimeLimit === "undefined") {
            if (typeof maximumFiveRoughCopfr === "undefined") {
                throw new Error("The primes must be limited somehow.")
            } else {
                throw new Error("The size of the primes must be limited somehow.")
            }
        } else if (typeof maximumFiveRoughCopfr === "undefined") {
            throw new Error("The resolution of the primes must be limited somehow.")
        }
    }

    let fiveSlicedMonzosToCheck: Monzo<5>[] = [
        [] as unknown as Monzo<5>,
    ]

    let maximumPrime: Prime
    if (maximumPrimeLimit) {
        maximumPrime = maximumPrimeLimit
    } else {
        const possiblePrimes = PRIMES.filter(prime => prime < maximumFiveRoughSopfr)
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

            const termRange: PrimeExponent[] = computeTermRange(
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
