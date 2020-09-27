import { BASE_2, computeCopfr, Count, Exponent, pow, Prime, RationalNumerator } from "../../../../../../../general"
import { N2 } from "./types"

const computeN2 = (numerator: RationalNumerator): N2 => {
    return numerator / pow(BASE_2, computeCopfr(numerator) as number as Exponent<Count<Prime>>) as N2
}

export {
    computeN2,
}
