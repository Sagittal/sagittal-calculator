import { Prime, PRIMES } from "../../general"

const computeFiveRoughPrimesToCheck = (
    { maxPrimeLimit, maxFiveRoughSopfr, primeExponentExtremasGivenMaxN2D3P9 }: any,
) => {
    let maxPrime: Prime
    if (maxPrimeLimit) {
        maxPrime = maxPrimeLimit
    } else {
        const possiblePrimes = PRIMES.filter(prime => prime < (maxFiveRoughSopfr || Infinity))
        maxPrime = possiblePrimes[ possiblePrimes.length - 1 ]
    }
    const indexOfMaxPrime = PRIMES.findIndex(prime =>
        prime === maxPrime)

    return PRIMES.slice(2, indexOfMaxPrime + 1)
}

export {
    computeFiveRoughPrimesToCheck,
}
