import {PRIMES} from "../constants"
import {computeTrimmedMonzo} from "./trimmedMonzo"

const computeGpf = monzo => {
    const trimmedMonzo = computeTrimmedMonzo(monzo)

    if (!trimmedMonzo.length) return 1

    return PRIMES[trimmedMonzo.length - 1]
}

export {
    computeGpf,
}
