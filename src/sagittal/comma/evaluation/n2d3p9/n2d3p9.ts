import {
    abs,
    computeGpf,
    computeIsSubMonzo,
    computeTrimmedArray,
    Direction,
    Exponent,
    formatMonzo,
    Monzo,
    NumericTypeParameters,
    Prime,
    PRIMES,
} from "../../../../general"
import { N2D3P9 } from "./types"

const computeN2D3P9 = <T extends NumericTypeParameters &
    { direction: Direction.SUPER, rough: 5 } = { direction: Direction.SUPER, rough: 5, irrational: true }>(
    monzo: Monzo<T>,
): N2D3P9 => {
    if (computeTrimmedArray(monzo).length < 3) {
        return 1 as N2D3P9
    }

    if (monzo[ 0 ] !== 0 || monzo[ 1 ] !== 0) {
        throw new Error(`N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received monzo ${formatMonzo(monzo)}`)
    }
    if (computeIsSubMonzo(monzo)) {
        throw new Error(`N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received monzo ${formatMonzo(monzo)}`)
    }

    const n2d3p9 = monzo.reduce(
        (n2d3p9: N2D3P9, primeExponent: Exponent<Prime>, index: number) => {
            const prime = PRIMES[ index ]
            const divisor = primeExponent < 0 ? 3 : 2

            return n2d3p9 * (prime / divisor) ** abs(primeExponent) as N2D3P9
        },
        1 as N2D3P9,
    ) * computeGpf(monzo) * (1 / 9) as N2D3P9

    return n2d3p9
}

export {
    computeN2D3P9,
}
