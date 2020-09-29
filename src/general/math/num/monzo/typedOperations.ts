import { computeRange, computeTrimmedArray } from "../../../code"
import { add, count, Exponent, max, Monzo, NumTypeParameters, Prime } from "../../../math"

const computeMonzoSum = <T extends NumTypeParameters>(...monzos: Array<Monzo<T>>): Monzo<T> => {
    const maxMonzoLength = max(...monzos.map(count))

    const summedMonzos: Monzo = computeRange(maxMonzoLength).map((index: number): Exponent<Prime> => {
        return monzos.reduce(
            (totalPrimeExponent: Exponent<Prime>, monzo: Monzo): Exponent<Prime> => {
                const primeExponent: Exponent<Prime> = monzo[ index ] || 0 as Exponent<Prime>

                return add(totalPrimeExponent, primeExponent)
            },
            0 as Exponent<Prime>,
        ) as Exponent<Prime>
    }) as Monzo

    return computeTrimmedArray(summedMonzos) as Monzo<T>
}

export {
    computeMonzoSum,
}
