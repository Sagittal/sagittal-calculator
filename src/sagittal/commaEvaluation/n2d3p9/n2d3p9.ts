import {
    abs,
    ACCURACY_THRESHOLD,
    computeGpf,
    computeIsSubMonzo,
    Exponent,
    formatMonzo,
    Monzo,
    Prime,
    PRIMES,
    round,
} from "../../../general"
import { N2D3P9 } from "./types"

const computeN2D3P9 = (monzo: Monzo): N2D3P9 => {
    if (monzo.length < 3) {
        return 1 as N2D3P9
    }

    if (monzo[ 0 ] !== 0 || monzo[ 1 ] !== 0) {
        throw new Error(`N2D3P9 must be given a 5-roughened monzo; received ${formatMonzo(monzo)}`)
    }

    if (computeIsSubMonzo(monzo)) {
        throw new Error(`N2D3P9 must be given a super (n ≥ d) monzo; received ${formatMonzo(monzo)}`)
    }

    const n2d3p9 = monzo.reduce(
        (n2d3p9: N2D3P9, primeExponent: Exponent<Prime>, index: number) => {
            const prime = PRIMES[ index ]
            const divisor = primeExponent < 0 ? 3 : 2

            return n2d3p9 * (prime / divisor) ** abs(primeExponent) as N2D3P9
        },
        1 as N2D3P9,
    ) * computeGpf(monzo) * (1 / 9) as N2D3P9

    return round(n2d3p9, ACCURACY_THRESHOLD)
}

export {
    computeN2D3P9,
}
