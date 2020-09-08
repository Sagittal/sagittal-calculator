import { ZERO_ONE_INDEX_DIFF } from "../../code"
import { computePrimeCount } from "../primeCount"
import { Monzo, MonzoTypeParameters } from "./types"

const computeMonzoSlicedToPrime = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends Omit<MonzoTypeParameters, "slice">>(
    monzo: Monzo<T>,
    slicingPrime: S,
): Monzo<T & { slice: S }> => {
    const sliceIndex = computePrimeCount(slicingPrime) - ZERO_ONE_INDEX_DIFF

    return monzo.slice(sliceIndex) as Monzo<T & { slice: S }>
}

export {
    computeMonzoSlicedToPrime,
}
