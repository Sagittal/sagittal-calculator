import { Monzo, PrimeExponent } from "./types"

const invertMonzo = (monzo: Monzo): Monzo =>
    monzo.map(term => -term as PrimeExponent)

export {
    invertMonzo,
}
