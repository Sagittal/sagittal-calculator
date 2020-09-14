import { computeTrimmedArray, indexOfFinalElement } from "../code"
import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { PRIMES } from "./primes"
import { IntegerTypeParameters, Max, Numeric, Prime } from "./types"

const computeGpf = <T extends IntegerTypeParameters>(
    integerOrMonzo: Numeric<T> | Monzo<T>,
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
