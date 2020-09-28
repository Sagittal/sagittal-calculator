import { computeGpf, IntegerNumerator } from "../../../../../../../general"
import { computeN2 } from "./n2"
import { N2P } from "./types"

const computeN2P = (numerator: IntegerNumerator): N2P => {
    return computeN2(numerator) * computeGpf(numerator) as N2P
}

export {
    computeN2P,
}
