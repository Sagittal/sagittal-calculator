import { BASE_2, computeCopfr, Exponent, Numerator, pow, Prime } from "../../../../../math"
import { Count } from "../../../../../types"
import { N2 } from "./types"

const computeN2 = (numerator: Numerator): N2 => {
    return numerator / pow(BASE_2, computeCopfr(numerator) as number as Exponent<Count<Prime>>) as N2
}

export {
    computeN2,
}
