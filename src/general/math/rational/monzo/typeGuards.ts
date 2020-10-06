import { Monzo, NumericProperties } from "../../numeric"
import { Exponent } from "../../types"
import { isIntegerDecimal } from "../decimal"
import { Prime } from "../types"

const isRationalMonzo = <T extends NumericProperties>(
    candidateRationalMonzo: Monzo<T>,
): candidateRationalMonzo is Monzo<T & { rational: true }> =>
    candidateRationalMonzo.every((primeExponent: Exponent<Prime>): boolean => isIntegerDecimal(primeExponent))

const isIntegerMonzo = <T extends NumericProperties>(
    candidateIntegerMonzo: Monzo<T>,
): candidateIntegerMonzo is Monzo<T & { integer: true }> =>
    isRationalMonzo(candidateIntegerMonzo) &&
    candidateIntegerMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent >= 0)

export {
    isIntegerMonzo,
    isRationalMonzo,
}
