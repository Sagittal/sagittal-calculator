const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")
const {computePrimeCount} = require("../../utilities/primeCount")

// sum of unique prime factors > 3, mapped to prime count fn (π)
const computeWeightedSoupifgtt = (monzo, b) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopfgtt, term, index) => {
            if (index < 2) return 0

            const prime = term === 0 ? 0 : computePrimeCount(PRIMES[index]) ** b

            return sopfgtt + prime
        },
        0,
    )
}

module.exports = {
    computeWeightedSoupifgtt,
}
