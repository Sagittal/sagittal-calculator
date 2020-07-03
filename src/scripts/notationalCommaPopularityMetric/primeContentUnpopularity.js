const {PRIMES} = require("../../utilities/constants")
const {computePrimeCount} = require("../../utilities/primeCount")
const {computeLog} = require("../../utilities/log")

// (sum or count)
// of (maybe adjusted) prime factors
// (or prime factor indices via prime count function π)
// (maybe with (maybe adjusted) repetition)

const computePrimeContentUnpopularity = (fiveRoughMonzo, adjustments = {}, submetricType = {}) => {
    const {
        a = 1,
        aIsBaseNotPower = 0,
        w = 0,
        x = 0,
        y = 1,
        v = 0,
        t = 0,
    } = adjustments

    const {
        withRepetition = true,
        operation = "SUM",
        usePrimeIndex,
    } = submetricType

    return fiveRoughMonzo.reduce(
        (totalPrimeContentUnpopularity, term, index) => {
            const prime = PRIMES[index]

            let adjustedPrime
            let adjustedTerm

            adjustedPrime = operation === "COUNT" ?
                1 :
                usePrimeIndex ?
                    computePrimeCount(prime) :
                    prime
            adjustedPrime = adjustedPrime + x
            adjustedPrime = aIsBaseNotPower ?
                adjustedPrime >= 1 ?
                    computeLog(adjustedPrime, a) :
                    1 :
                adjustedPrime >= 0 ?
                    adjustedPrime ** a :
                    0
            adjustedPrime = adjustedPrime + w

            if (term === 0) {
                adjustedTerm = 0
            } else {
                adjustedTerm = withRepetition ? Math.abs(term) : 1
                adjustedTerm = adjustedTerm + t
                adjustedTerm = adjustedTerm >= 0 ? adjustedTerm ** y : 0
                adjustedTerm = adjustedTerm + v
            }


            const primeContentUnpopularity = adjustedTerm * adjustedPrime

            // console.log("p", prime, "ap", adjustedPrime, "r", term, "ar", adjustedTerm, "totalPrimeContentUnpopularity", totalPrimeContentUnpopularity)

            return totalPrimeContentUnpopularity + primeContentUnpopularity
        },
        0,
    )
}

module.exports = {
    computePrimeContentUnpopularity,
}
