import { computeRange, computeTrimmedArray } from "../../../code"
import { add, count, Exponent, max, Monzo, Prime } from "../../../math"

const sumMonzos = (...monzos: Array<Monzo>): Monzo => {
    const maxMonzoLength = max(...monzos.map(count))

    const summedMonzos: Monzo = computeRange(maxMonzoLength).map((index: number): Exponent<Prime> => {
        return monzos.reduce(
            (primeExponent: Exponent<Prime>, monzo: Monzo): Exponent<Prime> => {
                const term: Exponent<Prime> = monzo[ index ] || 0 as Exponent<Prime>

                return add(primeExponent, term)
            },
            0 as Exponent<Prime>,
        ) as Exponent<Prime>
    }) as Monzo

    return computeTrimmedArray(summedMonzos)
}

export {
    sumMonzos,
}
