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
//  OR... perhaps it speaks to how Nums should also take a simple decimal as a possible representation
//  like maybe instead of the decimal being a key on the object part, instead its like this:
//  Num = Decimal<T> | { monzo: Monzo<T>, ratio: Ratio<T>, ... }
//  anyway, this occurred to me while I was contemplating the interval helper for the half-apotome mirror spec etc.
//  and I was thinking that while it's *difference* when in cents, it's truly a division of two Nums
//  and sometimes when I want say a half-apotome, the thing I'm dividing by is just the number 2...
//  so if I don't want to find myself passing it { decimal: 2 } instead of the simpler plain old 2, I would want that
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
