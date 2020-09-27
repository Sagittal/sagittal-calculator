import { isInteger, Prime } from "../../rational"
import { Exponent } from "../../types"
import { NumTypeParameters } from "../types"
import { Monzo, MonzoNotDefaultingToRational } from "./types"

const isRationalMonzo = <T extends NumTypeParameters>(
    candidateIntegerMonzo: MonzoNotDefaultingToRational<T>,
): candidateIntegerMonzo is Monzo<T & { potentiallyIrrational: false }> =>
    candidateIntegerMonzo.every((term: Exponent<Prime>): boolean => isInteger(term))

const isIntegerMonzo = <T extends NumTypeParameters>(
    candidateIntegerMonzo: MonzoNotDefaultingToRational<T>,
): candidateIntegerMonzo is Monzo<T & { potentiallyIrrational: false, integer: true }> =>
    isRationalMonzo(candidateIntegerMonzo) &&
    candidateIntegerMonzo.every((term: Exponent<Prime>): boolean => term >= 0)

export {
    isIntegerMonzo,
    isRationalMonzo,
}
