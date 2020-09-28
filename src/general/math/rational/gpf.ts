import { computeTrimmedArray, indexOfFinalElement, isEmpty } from "../../code"
import { NumTypeParameters } from "../num"
import { Max } from "../types"
import { computeRationalMonzoFromIntegerDecimalOrRationalMonzo, IntegerDecimal, RationalMonzo } from "./num"
import { PRIMES } from "./primes"
import { Prime, Smoothness } from "./types"

// TODO: NUM IMPROVEMENTS
//  Shouldn't this just take nums now?
//  This along with other things that used to take integerOrMonzo
//  Well you will need to consider... i guess you just also provide a computeGpfFromDecimal
//  And hope you don't have to expose it
//  Same deal with others
//  Well, is that not just what primeLimit is already doing? so maybe actually revert this back to a simple
//  Primitive number only method
const computeGpf = <T extends NumTypeParameters>(
    integerDecimalOrRationalMonzo: IntegerDecimal<T> | RationalMonzo<T>,
): Max<Prime> | Smoothness => {
    const monzo = computeRationalMonzoFromIntegerDecimalOrRationalMonzo(integerDecimalOrRationalMonzo)
    const trimmedMonzo = computeTrimmedArray(monzo)

    if (isEmpty(trimmedMonzo)) {
        return 1 as Max<Prime> | Smoothness
    }

    return PRIMES[ indexOfFinalElement(trimmedMonzo) ] as Max<Prime> | Smoothness
}

export {
    computeGpf,
}
