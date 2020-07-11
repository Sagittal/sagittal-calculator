import { Monzo, PrimeExponent } from "./types"

const invertMonzo = <MonzoType extends Monzo>(monzo: MonzoType): MonzoType =>
    monzo.map(term => -term as PrimeExponent) as MonzoType

export {
    invertMonzo,
}
