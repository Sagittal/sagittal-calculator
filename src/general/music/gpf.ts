import { PRIMES } from "../constants"
import { Max, Prime } from "../types"
import { computeMonzoFromIntegerOrMonzo } from "./monzoFromIntegerOrMonzo"
import { computeTrimmedMonzo } from "./trimmedMonzo"
import { Monzo } from "./types"

const computeGpf = (integerOrMonzo: number | Monzo): Max<Prime> => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)
    const trimmedMonzo = computeTrimmedMonzo(monzo)

    if (!trimmedMonzo.length) {
        return 1 as Max<Prime>
    }

    return PRIMES[ trimmedMonzo.length - 1 ] as Max<Prime>
}

export {
    computeGpf,
}
