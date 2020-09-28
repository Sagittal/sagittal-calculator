import { computeTrimmedArray, indexOfFinalElement, isEmpty } from "../../code"
import { NumTypeParameters } from "../num"
import { Max } from "../types"
import { computeRationalMonzoFromIntegerOrRationalMonzo, RationalMonzo } from "./num"
import { PRIMES } from "./primes"
import { Integer, Prime, Smoothness } from "./types"

// TODO: shouldn't this just take nums now?
//  This along with other things that used to take integerOrMonzo
//  Well you will need to consider... i guess you just also provide a computeGpfFromDecimal
//  And hope you don't have to expose it
//  Same deal with others
//  Well, is that not just what primeLimit is already doing? so maybe actually revert this back to a simple
//  Primitive number only method
//  OR... perhaps it speaks to how Nums should also take a simple decimal as a possible representation
//  Like maybe instead of the decimal being a key on the object part, instead its like this:
//  Num = Decimal<T> | { monzo: Monzo<T>, quotient: Quotient<T>, ... }
//  Anyway, this occurred to me while I was contemplating the interval helper for the half-apotome mirror spec etc.
//  And I was thinking that while it's *difference* when in cents, it's truly a division of two Nums
//  And sometimes when I want say a half-apotome, the thing I'm dividing by is just the number 2...
//  So if I don't want to find myself passing it { decimal: 2 } instead of the simpler plain old 2, I would want that
const computeGpf = <T extends NumTypeParameters>(
    integerOrRationalMonzo: Integer<T> | RationalMonzo<T>,
): Max<Prime> | Smoothness => {
    const monzo = computeRationalMonzoFromIntegerOrRationalMonzo(integerOrRationalMonzo)
    const trimmedMonzo = computeTrimmedArray(monzo)

    if (isEmpty(trimmedMonzo)) {
        return 1 as Max<Prime> | Smoothness
    }

    return PRIMES[ indexOfFinalElement(trimmedMonzo) ] as Max<Prime> | Smoothness
}

export {
    computeGpf,
}
