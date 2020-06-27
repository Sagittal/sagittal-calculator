const {PRIMES} = require("../constants")
const {primeFactorizeInteger} = require("./monzoFromRatio")

// sum of prime factors > 3
const computeSopfgtt = monzo => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopfgtt, term, index) => {
            if (index < 2) return 0

            return sopfgtt + Math.abs(term * PRIMES[index])
        },
        0,
    )
}

module.exports = {
    computeSopfgtt,
}
