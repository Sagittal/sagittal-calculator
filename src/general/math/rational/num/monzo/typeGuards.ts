import { Monzo, MonzoNotDefaultingToRational, NumTypeParameters } from "../../../num"
import { Exponent } from "../../../types"
import { isInteger } from "../../typeGuards"
import { Prime } from "../../types"

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
