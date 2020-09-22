import { Exponent, NumericTypeParameters } from "../../types"
import { Prime } from "../types"
import { Monzo, PotentiallyIrrationalMonzoParameter } from "./types"

const computeMonzoIsInteger = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<T>,
): monzo is Monzo<T & { integer: true }> => {
    return monzo.every((term: Exponent<Prime>): boolean => term >= 0) ||
        monzo.every((term: Exponent<Prime>): boolean => term <= 0)
}

export {
    computeMonzoIsInteger,
}
