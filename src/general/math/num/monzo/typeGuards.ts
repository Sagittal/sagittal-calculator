import { Prime } from "../../rational"
import { Exponent } from "../../types"
import { NumTypeParameters } from "../types"
import { Monzo, MonzoNotDefaultingToRational } from "./types"

const computeMonzoIsInteger = <T extends NumTypeParameters>(
    candidateIntegerMonzo: MonzoNotDefaultingToRational<T>,
): candidateIntegerMonzo is Monzo<T & { integer: true }> => {
    return candidateIntegerMonzo.every((term: Exponent<Prime>): boolean => term >= 0) ||
        candidateIntegerMonzo.every((term: Exponent<Prime>): boolean => term <= 0)
}

export {
    computeMonzoIsInteger,
}
