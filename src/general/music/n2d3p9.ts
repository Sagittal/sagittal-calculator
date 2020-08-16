import { Monzo, N2D3P9 } from "./types"
import { computeRoughNumberMonzo } from "./rough"
import { Exponent } from "../math"
import { Prime } from "../types"
import { PRIMES } from "../constants"
import { computeGpf } from "./gpf"
import { computeCentsFromRatio } from "./centsFromRatio"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { invertMonzo } from "./invertMonzo"

const computeN2D3P9 = (monzo: Monzo): N2D3P9 => {
    let fiveRoughMonzo = computeRoughNumberMonzo(monzo, 5)
    if (computeCentsFromRatio(computeRatioFromMonzo(fiveRoughMonzo)) < 0) {
        fiveRoughMonzo = invertMonzo(fiveRoughMonzo)
    }

    return fiveRoughMonzo.reduce(
        (n2d3p9: N2D3P9, primeExponent: Exponent<Prime>, primeIndex: number) => {
            const prime = PRIMES[ primeIndex ]
            const divisor = primeExponent < 0 ? 3 : 2

            return n2d3p9 * (prime / divisor) ** Math.abs(primeExponent) as N2D3P9
        },
        1 as N2D3P9,
    ) * computeGpf(fiveRoughMonzo) / 9 as N2D3P9
}

export {
    computeN2D3P9,
}
