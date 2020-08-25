import {
    computeCopfr,
    computePrimeExponentExtremasGivenMaxN2D3P9,
    computeSopfr,
    computeTrimmedArray,
    Copfr,
    Exponent,
    isUndefined,
    Max,
    Monzo,
    Prime,
    PrimeExponentExtrema,
    Sopfr,
} from "../../general"
import { computeFiveRoughPrimesToCheck } from "./fiveRoughPrimesToCheck"
import { computePrimeExponentRange } from "./primeExponentRange"
import { ComputeFiveSlicedMonzosToCheckOptions } from "./types"

const computeFiveSlicedMonzosToCheck = ({ maxPrimeLimit, maxFiveRoughSopfr, maxFiveRoughCopfr, maxN2D3P9 }: ComputeFiveSlicedMonzosToCheckOptions = {}): Array<Monzo<5>> => {
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

    let fiveSlicedMonzosToCheck: Array<Monzo<5>> = [
        [] as unknown as Monzo<5>,
    ]

    const primeExponentExtremasGivenMaxN2D3P9: Array<PrimeExponentExtrema> | undefined = maxN2D3P9 && computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)

    const fiveRoughPrimesToCheck = computeFiveRoughPrimesToCheck({
        maxPrimeLimit,
        maxFiveRoughSopfr,
        primeExponentExtremasGivenMaxN2D3P9,
    })

    fiveRoughPrimesToCheck.forEach((fiveRoughPrimeToCheck, index) => {
        const extendedFiveSlicedMonzosToCheck: Array<Monzo<5>> = []

        const primeExponentExtremaGivenMaxN2D3P9: PrimeExponentExtrema | undefined = primeExponentExtremasGivenMaxN2D3P9 && primeExponentExtremasGivenMaxN2D3P9[ index ]

        fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
            const fiveRoughSopfr = computeSopfr([0, 0, ...fiveSlicedMonzoToCheck] as Monzo)
            const fiveRoughCopfr = computeCopfr([0, 0, ...fiveSlicedMonzoToCheck] as Monzo)

            const termRange: Exponent<Prime>[] = computePrimeExponentRange(
                fiveRoughPrimeToCheck,
                {
                    maxFiveRoughSopfr: maxFiveRoughSopfr ? maxFiveRoughSopfr - fiveRoughSopfr as Max<Sopfr<5>> : undefined, // this is where the max five rough sopfr is enforced
                    maxFiveRoughCopfr: maxFiveRoughCopfr ? maxFiveRoughCopfr - fiveRoughCopfr as Max<Copfr<5>> : undefined,
                    primeExponentExtremaGivenMaxN2D3P9,
                },
            ) as Exponent<Prime>[]
            termRange.forEach((potentialNextTerm: Exponent<Prime>) => {
                extendedFiveSlicedMonzosToCheck.push(fiveSlicedMonzoToCheck.concat(potentialNextTerm) as Monzo<5>)
            })
        })

        fiveSlicedMonzosToCheck = extendedFiveSlicedMonzosToCheck
    })

    return fiveSlicedMonzosToCheck.map(computeTrimmedArray)
}

export {
    computeFiveSlicedMonzosToCheck,
}
