import { computeTrimmedArray } from "../code"
import { Integer, Max, MonzoTypeParameters, Prime, PRIMES } from "../math"
import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"

const computeGpf = <T extends MonzoTypeParameters = { irrational: true }>(
    integerOrMonzo: Integer | Monzo<T>,
): Max<Prime> => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)
    const trimmedMonzo = computeTrimmedArray(monzo)

    if (!trimmedMonzo.length) {
        return 1 as Max<Prime>
    }

    return PRIMES[ trimmedMonzo.length - 1 ] as Max<Prime>
}

export {
    computeGpf,
}
