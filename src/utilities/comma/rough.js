const {PRIMES} = require("../constants")

const computeRoughMonzo = (monzo, roughness) => {
    const roughnessIndex = PRIMES.findIndex(prime => prime === roughness)

    return monzo.map((term, index) => {
        return index < roughnessIndex ? 0 : term
    })
}

module.exports = {
    computeRoughMonzo,
}
