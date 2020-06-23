const {PRIMES} = require("../constants")

const computeRatioFromMonzo = monzo => {
    let numerator = 1
    let denominator = 1

    monzo.forEach((term, index) => {
        if (term > 0) {
            numerator *= PRIMES[index] ** term
        }
        if (term < 0) {
            denominator *= PRIMES[index] ** -term
        }
    })

    return [numerator, denominator]
}

module.exports = {
    computeRatioFromMonzo,
}
