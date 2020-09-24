import { computeIsEmpty, computeTrimmedArray, indexOfFinalElement } from "../../code"
import { Max } from "../types"
import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { PRIMES } from "./primes"
import { Integer, Prime, RationalNumTypeParameters, Smoothness } from "./types"

// todo shouldn't this just take nums now?
//  this along with other things that used to take integerOrMonzo
//  well you will need to consider... i guess you just also provide a computeGpfFromDecimal
//  and hope you don't have to expose it
//  same deal with others
const computeGpf = <T extends RationalNumTypeParameters>(
    integerOrMonzo: Integer | Monzo<T>,
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
