import { computeIsEmpty, computeTrimmedArray, indexOfFinalElement } from "../../code"
import { Max } from "../types"
import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { PRIMES } from "./primes"
import { Integer, Prime, RationalTypeParameters } from "./types"

const computeGpf = <T extends RationalTypeParameters>(
    integerOrMonzo: Integer | Monzo<T>,
): Max<Prime> => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)
    const trimmedMonzo = computeTrimmedArray(monzo)

    if (computeIsEmpty(trimmedMonzo)) {
        return 1 as Max<Prime>
    }

    return PRIMES[ indexOfFinalElement(trimmedMonzo) ] as Max<Prime>
}

export {
    computeGpf,
}
