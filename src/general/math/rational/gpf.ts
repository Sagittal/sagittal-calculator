import { computeIsEmpty, computeTrimmedArray, indexOfFinalElement } from "../../code"
import { computeMonzoFromIntegerOrMonzo, Monzo, NumTypeParameters } from "../num"
import { Max } from "../types"
import { PRIMES } from "./primes"
import { Integer, Prime, Smoothness } from "./types"

// TODO: shouldn't this just take nums now?
//  this along with other things that used to take integerOrMonzo
//  well you will need to consider... i guess you just also provide a computeGpfFromDecimal
//  and hope you don't have to expose it
//  same deal with others
//  well, is that not just what primeLimit is already doing? so maybe actually revert this back to a simple
//  primitive number only method
const computeGpf = <T extends NumTypeParameters>(
    integerOrMonzo: Integer<T> | Monzo<T>,
): Max<Prime> | Smoothness => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)
    const trimmedMonzo = computeTrimmedArray(monzo)

    if (computeIsEmpty(trimmedMonzo)) {
        return 1 as Max<Prime> | Smoothness
    }

    return PRIMES[ indexOfFinalElement(trimmedMonzo) ] as Max<Prime> | Smoothness
}

export {
    computeGpf,
}
