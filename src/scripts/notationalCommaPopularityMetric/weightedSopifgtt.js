const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")
const {computePrimeCount} = require("../../utilities/primeCount")

// sum of prime factors > 3, mapped to prime count fn (π)
const computeWeightedSopifgtt = (monzo, a) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopifgtt, term, index) => {
            if (index < 2) return 0

            const prime = Math.abs(term * computePrimeCount(PRIMES[index]) ** a)

            return sopifgtt + prime
        },
        0,
    )
}

module.exports = {
    computeWeightedSopifgtt,
}
