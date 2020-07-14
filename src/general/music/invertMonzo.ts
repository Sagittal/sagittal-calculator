import { Monzo, PrimeExponent } from "./types"

const invertMonzo = <MonzoType extends Monzo>(monzo: MonzoType): MonzoType =>
    monzo.map(primeExponent => -primeExponent as PrimeExponent) as MonzoType

export {
    invertMonzo,
}
