import { PRIMES } from "../primes"
import { Prime } from "../types"
import { Monzo } from "./types"

const computeMonzoSlicedToPrimeIndex = <T extends number, S extends number>(monzo: Monzo<T>, prime: S): Monzo<T, S> => {
    const sliceIndex = PRIMES.findIndex(p => p === prime as number as Prime)

    return monzo.slice(sliceIndex) as Monzo<T, S>
}

export {
    computeMonzoSlicedToPrimeIndex,
}
