import { Exponent, Prime } from "../types"
import { Monzo } from "./types"

const invertMonzo = <MonzoType extends Monzo>(monzo: MonzoType): MonzoType =>
    monzo.map(primeExponent => primeExponent === 0 ? 0 : -primeExponent as Exponent<Prime>) as MonzoType

export {
    invertMonzo,
}
