const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")
const {computePrimeCount} = require("../../utilities/primeCount")

// sum of prime factors > 3, mapped to prime count fn (π)
const computeWeightedSopifgtt = (monzo, a, logarithmic) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopifgtt, term, index) => {
            if (index < 2) return 0

            const primeCount = computePrimeCount(PRIMES[index])
            const weightedPrimeCount = logarithmic ? Math.log(primeCount) / Math.log(a) : primeCount ** a
            const pifgtt = Math.abs(term * weightedPrimeCount)

            return sopifgtt + pifgtt
        },
        0,
    )
}

module.exports = {
    computeWeightedSopifgtt,
}
