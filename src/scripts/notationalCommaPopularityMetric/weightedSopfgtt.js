const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")


// sum of prime factors > 3
const computeWeightedSopfgtt = (monzo, a, logarithmic) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopfgtt, term, index) => {
            if (index < 2) return 0

            const prime = PRIMES[index]
            const weightedPrime = logarithmic ? Math.log(prime) / Math.log(a) : prime ** a
            const pfgtt = Math.abs(term * weightedPrime)

            return sopfgtt + pfgtt
        },
        0,
    )
}

module.exports = {
    computeWeightedSopfgtt,
}
