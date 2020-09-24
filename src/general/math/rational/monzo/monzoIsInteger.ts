import { Exponent, NumTypeParameters } from "../../types"
import { Prime } from "../types"
import { Monzo, MonzoNotDefaultingToRational } from "./types"

const computeMonzoIsInteger = <T extends NumTypeParameters>(
    monzo: MonzoNotDefaultingToRational<T>,
): monzo is Monzo<T & { integer: true }> => {
    return monzo.every((term: Exponent<Prime>): boolean => term >= 0) ||
        monzo.every((term: Exponent<Prime>): boolean => term <= 0)
}

export {
    computeMonzoIsInteger,
}
