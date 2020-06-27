const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")
const {computePrimeCount} = require("../../utilities/primeCount")

// sum of prime count > 3 mapped to prime count fn (π)
const computeWeightedSopifgtt = (monzo, a) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopifgtt, term, index) => {
            if (index < 2) return 0

            return sopifgtt + Math.abs(term * computePrimeCount(PRIMES[index]) ** a)
        },
        0,
    )
}

module.exports = {
    computeWeightedSopifgtt,
}
