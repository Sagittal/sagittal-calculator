import { Monzo } from "./types"
import { Exponent } from "../math"
import { Prime } from "../types"

const invertMonzo = <MonzoType extends Monzo>(monzo: MonzoType): MonzoType =>
    monzo.map(primeExponent => -primeExponent as Exponent<Prime>) as MonzoType

export {
    invertMonzo,
}
