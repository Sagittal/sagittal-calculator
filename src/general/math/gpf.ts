import { computeTrimmedArray, indexOfFinalElement } from "../code"
import { Integer, Max, NumericTypeParameters, Prime, PRIMES } from "../math"
import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"

const computeGpf = <T extends NumericTypeParameters = { irrational: true }>(
    integerOrMonzo: Integer | Monzo<T>,
): Max<Prime> => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)
    const trimmedMonzo = computeTrimmedArray(monzo)

    if (!trimmedMonzo.length) {
        return 1 as Max<Prime>
    }

    return PRIMES[ indexOfFinalElement(trimmedMonzo) ] as Max<Prime>
}

export {
    computeGpf,
}
