import { PRIMES } from "../constants"
import { Max, Prime } from "../types"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { computeTrimmedMonzo } from "./trimmedMonzo"
import { Monzo } from "./types"

const computeGpf = (monzoOrInteger: Monzo | number): Max<Prime> => {
    let monzo
    if (typeof monzoOrInteger === "number") {
        monzo = computeMonzoFromInteger(monzoOrInteger)
    } else {
        monzo = monzoOrInteger
    }
    const trimmedMonzo = computeTrimmedMonzo(monzo)

    if (!trimmedMonzo.length) {
        return 1 as Max<Prime>
    }

    return PRIMES[ trimmedMonzo.length - 1 ] as Max<Prime>
}

export {
    computeGpf,
}
