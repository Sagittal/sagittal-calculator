import { presentMonzo } from "../../io"
import { computeGpf, Exponent, isSubMonzo, Monzo, Prime, PRIMES } from "../../math"
import { N2D3P9 } from "./types"

const computeN2D3P9 = (monzo: Monzo): N2D3P9 => {
    if (monzo.length < 3) {
        return 1 as N2D3P9
    }

    if (monzo[ 0 ] !== 0 || monzo[ 1 ] !== 0) {
        throw new Error(`N2D3P9 must be given a 5-roughened monzo; received ${presentMonzo(monzo)}`)
    }

    if (isSubMonzo(monzo)) {
        throw new Error(`N2D3P9 must be given a super (n ≥ d) monzo; received ${presentMonzo(monzo)}`)
    }

    return monzo.reduce(
        (n2d3p9: N2D3P9, primeExponent: Exponent<Prime>, primeIndex: number) => {
            const prime = PRIMES[ primeIndex ]
            const divisor = primeExponent < 0 ? 3 : 2

            return n2d3p9 * (prime / divisor) ** Math.abs(primeExponent) as N2D3P9
        },
        1 as N2D3P9,
    ) * computeGpf(monzo) / 9 as N2D3P9
}

export {
    computeN2D3P9,
}
