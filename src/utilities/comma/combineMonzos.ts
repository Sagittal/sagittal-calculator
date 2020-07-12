import { Monzo, PrimeExponent } from "./types"

const combineMonzos = (...monzos: Monzo[]): Monzo => {
    const maximumMonzoLength = Math.max(...monzos.map(monzo => monzo.length))

    return [...Array(maximumMonzoLength).keys()].map((index: number) => {
        return monzos.reduce(
            (primeExponent: PrimeExponent, monzo: Monzo) => {
                return primeExponent + (monzo[ index ] || 0) as PrimeExponent
            },
            0 as PrimeExponent,
        )
    }) as Monzo
}

export {
    combineMonzos,
}
