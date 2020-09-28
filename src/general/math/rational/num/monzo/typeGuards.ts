import { Monzo, NumTypeParameters } from "../../../num"
import { Exponent } from "../../../types"
import { Prime } from "../../types"
import { isIntegerDecimal } from "../decimal"
import { IntegerMonzo, RationalMonzo } from "./types"

const isRationalMonzo = <T extends NumTypeParameters>(
    candidateRationalMonzo: Monzo<T>,
): candidateRationalMonzo is RationalMonzo<T> =>
    candidateRationalMonzo.every((term: Exponent<Prime>): boolean => isIntegerDecimal(term))

const isIntegerMonzo = <T extends NumTypeParameters>(
    candidateIntegerMonzo: Monzo<T>,
): candidateIntegerMonzo is IntegerMonzo<T> =>
    isRationalMonzo(candidateIntegerMonzo) &&
    candidateIntegerMonzo.every((term: Exponent<Prime>): boolean => term >= 0)

export {
    isIntegerMonzo,
    isRationalMonzo,
}
