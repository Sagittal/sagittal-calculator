const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")


// sum of prime factors > 3
const computeWeightedSopfgtt = (monzo, a) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopfgtt, term, index) => {
            if (index < 2) return 0

            const prime = Math.abs(term * PRIMES[index] ** a)

            return sopfgtt + prime
        },
        0,
    )
}

module.exports = {
    computeWeightedSopfgtt,
}