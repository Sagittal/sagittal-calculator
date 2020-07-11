import { PRIMES } from "../constants"
import { computeTrimmedMonzo } from "./trimmedMonzo"
import { Monzo } from "./types"
import { Prime } from "../types"

const computeGpf = (monzo: Monzo): Prime => {
    const trimmedMonzo = computeTrimmedMonzo(monzo)

    if (!trimmedMonzo.length) return 1 as Prime

    return PRIMES[ trimmedMonzo.length - 1 ]
}

export {
    computeGpf,
}
