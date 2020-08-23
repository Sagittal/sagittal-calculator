import { Prime, PRIMES } from "../../general"

const computeFiveRoughPrimesToCheck = ({ maximumPrimeLimit, maximumFiveRoughSopfr, primeExponentExtremasGivenMaximumN2D3P9 }: any) => {
    let maximumPrime: Prime
    if (maximumPrimeLimit) {
        maximumPrime = maximumPrimeLimit
    } else {
        const possiblePrimes = PRIMES.filter(prime => prime < (maximumFiveRoughSopfr || Infinity))
        maximumPrime = possiblePrimes[ possiblePrimes.length - 1 ]
    }
    const indexOfMaximumPrime = PRIMES.findIndex(prime =>
        prime === maximumPrime)

    return PRIMES.slice(2, indexOfMaximumPrime + 1)
}

export {
    computeFiveRoughPrimesToCheck,
}
