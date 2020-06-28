const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")
const {computePrimeCount} = require("../../utilities/primeCount")

// sum of unique prime factors > 3, mapped to prime count fn (π)
const computeWeightedSoupifgtt = (monzo, b, logarithmic) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (soupifgtt, term, index) => {
            if (index < 2) return 0

            const primeCount = computePrimeCount(PRIMES[index])
            const weightedPrimeCount = logarithmic ? Math.log(primeCount) / Math.log(b) : primeCount ** b
            const upifgtt = term === 0 ? 0 : weightedPrimeCount

            return soupifgtt + upifgtt
        },
        0,
    )
}

module.exports = {
    computeWeightedSoupifgtt,
}
