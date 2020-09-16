import { computeTrimmedArray, indexOfFinalElement } from "../code"
import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { PRIMES } from "./primes"
import { Integer, Max, Prime, RationalTypeParameters } from "./types"

const computeGpf = <T extends RationalTypeParameters>(
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
