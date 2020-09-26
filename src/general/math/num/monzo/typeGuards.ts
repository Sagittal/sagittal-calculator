import { isInteger, Prime } from "../../rational"
import { Exponent } from "../../types"
import { NumTypeParameters } from "../types"
import { Monzo, MonzoNotDefaultingToRational } from "./types"

// todo: test
const computeMonzoIsRational = <T extends NumTypeParameters>(
    candidateIntegerMonzo: MonzoNotDefaultingToRational<T>,
): candidateIntegerMonzo is Monzo<T & { potentiallyIrrational: false }> =>
    candidateIntegerMonzo.every((term: Exponent<Prime>): boolean => isInteger(term))

const computeMonzoIsInteger = <T extends NumTypeParameters>(
    candidateIntegerMonzo: MonzoNotDefaultingToRational<T>,
): candidateIntegerMonzo is Monzo<T & { potentiallyIrrational: false, integer: true }> =>
    computeMonzoIsRational(candidateIntegerMonzo) &&
    candidateIntegerMonzo.every((term: Exponent<Prime>): boolean => term >= 0)

export {
    computeMonzoIsInteger,
    computeMonzoIsRational,
}
