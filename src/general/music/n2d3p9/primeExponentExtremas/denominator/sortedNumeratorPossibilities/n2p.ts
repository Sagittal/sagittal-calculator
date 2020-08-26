import { computeGpf, Numerator } from "../../../../../math"
import { computeN2 } from "./n2"
import { N2P } from "./types"

const computeN2P = (numerator: Numerator): N2P => {
    return computeN2(numerator) * computeGpf(numerator) as N2P
}

export {
    computeN2P,
}
