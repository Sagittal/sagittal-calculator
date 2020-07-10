import {PRIMES} from "../constants"

const computeRoughNumberMonzo = (monzo, roughness) => {
    const roughnessIndex = PRIMES.findIndex(prime => prime === roughness)

    return monzo.map((term, index) => {
        return index < roughnessIndex ? 0 : term
    })
}

export {
    computeRoughNumberMonzo,
}
