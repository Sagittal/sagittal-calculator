import {
    computeCopfr,
    computePrimeExponentExtremasGivenMaximumN2D3P9,
    computeSopfr,
    computeTrimmedMonzo,
    Copfr,
    Exponent,
    isUndefined,
    Monzo,
    Prime,
    PrimeExponentExtrema,
    Sopfr,
} from "../../general"
import { computeFiveRoughPrimesToCheck } from "./fiveRoughPrimesToCheck"
import { computePrimeExponentRange } from "./primeExponentRange"
import { ComputeFiveSlicedMonzosToCheckOptions } from "./types"

const computeFiveSlicedMonzosToCheck = ({ maximumPrimeLimit, maximumFiveRoughSopfr, maximumFiveRoughCopfr, maximumN2D3P9 }: ComputeFiveSlicedMonzosToCheckOptions = {}): Array<Monzo<5>> => {
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

    const primeExponentExtremasGivenMaximumN2D3P9: Array<PrimeExponentExtrema> | undefined = maximumN2D3P9 && computePrimeExponentExtremasGivenMaximumN2D3P9(maximumN2D3P9)

    const fiveRoughPrimesToCheck = computeFiveRoughPrimesToCheck({
        maximumPrimeLimit,
        maximumFiveRoughSopfr,
        primeExponentExtremasGivenMaximumN2D3P9,
    })

    fiveRoughPrimesToCheck.forEach((fiveRoughPrimeToCheck, index) => {
        const extendedFiveSlicedMonzosToCheck: Array<Monzo<5>> = []

        const primeExponentExtremaGivenMaximumN2D3P9: PrimeExponentExtrema | undefined = primeExponentExtremasGivenMaximumN2D3P9 && primeExponentExtremasGivenMaximumN2D3P9[ index ]

        fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
            const fiveRoughSopfr = computeSopfr([0, 0, ...fiveSlicedMonzoToCheck] as Monzo)
            const fiveRoughCopfr = computeCopfr([0, 0, ...fiveSlicedMonzoToCheck] as Monzo)

            const termRange: Exponent<Prime>[] = computePrimeExponentRange(
                fiveRoughPrimeToCheck,
                {
                    maximumFiveRoughSopfr: maximumFiveRoughSopfr ? maximumFiveRoughSopfr - fiveRoughSopfr as Sopfr<5> : undefined, // this is where the maximum five rough sopfr is enforced
                    maximumFiveRoughCopfr: maximumFiveRoughCopfr ? maximumFiveRoughCopfr - fiveRoughCopfr as Copfr<5> : undefined,
                    primeExponentExtremaGivenMaximumN2D3P9,
                },
            ) as Exponent<Prime>[]
            termRange.forEach((potentialNextTerm: Exponent<Prime>) => {
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
