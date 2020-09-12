import { computeRange, computeTrimmedArray } from "../../code"
import { count, Exponent, max, PotentiallyIrrationalMonzoParameter, Prime, sum } from "../../math"
import { Monzo } from "./types"

const sumMonzos = (...monzos: Array<PotentiallyIrrationalMonzoParameter>): Monzo => {
    const maxMonzoLength = max(...monzos.map(count))

    const summedMonzos: Monzo = computeRange(maxMonzoLength).map((index: number): Exponent<Prime> => {
        return monzos.reduce(
            (primeExponent: Exponent<Prime>, monzo: PotentiallyIrrationalMonzoParameter): Exponent<Prime> => {
                const term: Exponent<Prime> = monzo[ index ] || 0 as Exponent<Prime>

                return sum(primeExponent, term)
            },
            0 as Exponent<Prime>,
        ) as Exponent<Prime>
    }) as Monzo

    return computeTrimmedArray(summedMonzos)
}

export {
    sumMonzos,
}
