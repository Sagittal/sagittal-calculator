import { computeRange, computeTrimmedArray } from "../../../code"
import { add, count, Exponent, max, NumericProperties, Prime, RealMonzo } from "../../../math"

const computeRealMonzoSum = <T extends NumericProperties>(...realMonzos: Array<RealMonzo<T>>): RealMonzo<T> => {
    const maxMonzoLength = max(...realMonzos.map(count))

    const summedMonzos: RealMonzo = computeRange(maxMonzoLength).map((index: number): Exponent<Prime> => {
        return realMonzos.reduce(
            (totalPrimeExponent: Exponent<Prime>, monzo: RealMonzo): Exponent<Prime> => {
                const primeExponent: Exponent<Prime> = monzo[ index ] || 0 as Exponent<Prime>

                return add(totalPrimeExponent, primeExponent)
            },
            0 as Exponent<Prime>,
        ) as Exponent<Prime>
    }) as RealMonzo

    return computeTrimmedArray(summedMonzos) as RealMonzo<T>
}

export {
    computeRealMonzoSum,
}
