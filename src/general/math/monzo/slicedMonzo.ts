import { ZERO_ONE_INDEX_DIFF } from "../../code"
import { computePrimeCount } from "../primeCount"
import { Monzo } from "./types"

const computeMonzoSlicedToPrime = <T extends number, S extends number>(
    monzo: Monzo<T>,
    slicingPrime: S
): Monzo<T, S> => {
    const sliceIndex = computePrimeCount(slicingPrime) - ZERO_ONE_INDEX_DIFF

    return monzo.slice(sliceIndex) as Monzo<T, S>
}

export {
    computeMonzoSlicedToPrime,
}
