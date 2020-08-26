import { computeTrimmedArray } from "../code"
import { Integer, Max, Prime, PRIMES } from "../math"
import { computeMonzoFromIntegerOrMonzo } from "./monzoFromIntegerOrMonzo"
import { Monzo } from "./types"

const computeGpf = (integerOrMonzo: Integer | Monzo): Max<Prime> => {
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
