const {PRIMES} = require("../constants")
const {primeFactorizeInteger} = require("./monzoFromRatio")
const {computePrimeCount} = require("../../utilities/primeCount")

// sum of unique prime factors > 3 mapped to prime count fn (π)
const computeSoupifgtt = monzo => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopfgtt, term, index) => {
            if (index < 2) return 0

            const prime = term === 0 ? 0 : computePrimeCount(PRIMES[index])

            return sopfgtt + prime
        },
        0,
    )
}

module.exports = {
    computeSoupifgtt,
}
