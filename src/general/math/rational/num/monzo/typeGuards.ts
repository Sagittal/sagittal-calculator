import { Monzo, NumTypeParameters } from "../../../num"
import { Exponent } from "../../../types"
import { isInteger } from "../../typeGuards"
import { Prime } from "../../types"
import { RationalMonzo } from "./types"

const isRationalMonzo = <T extends NumTypeParameters>(
    candidateRationalMonzo: Monzo<T>,
): candidateRationalMonzo is RationalMonzo<T> =>
    candidateRationalMonzo.every((term: Exponent<Prime>): boolean => isInteger(term))

const isIntegerMonzo = <T extends NumTypeParameters>(
    candidateIntegerMonzo: Monzo<T>,
): candidateIntegerMonzo is RationalMonzo<T & { integer: true }> =>
    isRationalMonzo(candidateIntegerMonzo) &&
    candidateIntegerMonzo.every((term: Exponent<Prime>): boolean => term >= 0)

export {
    isIntegerMonzo,
    isRationalMonzo,
}
