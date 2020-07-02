const {PRIMES} = require("../constants")
const {primeFactorizeInteger} = require("./monzoFromRatio")

// sum of prime factors
const computeSopfr = monzo => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopfr, term, index) => {
            return sopfr + Math.abs(term * PRIMES[index])
        },
        0,
    )
}

module.exports = {
    computeSopfr,
}
