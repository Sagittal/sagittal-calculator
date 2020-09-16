import { Exponent, NumericTypeParameters, Prime } from "../types"
import { Monzo, PotentiallyIrrationalMonzoParameter } from "./types"

const computeMonzoIsInteger = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<Omit<T, "integer">>,
): monzo is Monzo<Omit<T, "integer"> & { integer: true }> => {
    return monzo.every((term: Exponent<Prime>): boolean => term >= 0) ||
        monzo.every((term: Exponent<Prime>): boolean => term <= 0)
}

export {
    computeMonzoIsInteger,
}
