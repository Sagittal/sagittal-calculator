import { PRIMES } from "../constants"
import { Prime } from "../types"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { computeTrimmedMonzo } from "./trimmedMonzo"
import { Monzo } from "./types"

const computeGpf = (monzoOrInteger: Monzo | number): Prime => {
    let monzo
    if (typeof monzoOrInteger === "number") {
        monzo = computeMonzoFromInteger(monzoOrInteger)
    } else {
        monzo = monzoOrInteger
    }
    const trimmedMonzo = computeTrimmedMonzo(monzo)

    if (!trimmedMonzo.length) {
        return 1 as Prime
    }

    return PRIMES[ trimmedMonzo.length - 1 ]
}

export {
    computeGpf,
}
