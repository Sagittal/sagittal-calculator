const {PRIMES} = require("../constants")
const {computeMonzoFromInteger} = require("./monzoFromInteger")

// sum of prime factors (without repetition)
const computeSopf = monzo => {
    if (typeof monzo === "number") {
        monzo = computeMonzoFromInteger(monzo)
    }

    return monzo.reduce(
        (sopf, term, index) => {
            const prime = term === 0 ? 0 : PRIMES[index]

            return sopf + prime
        },
        0,
    )
}

module.exports = {
    computeSopf,
}
