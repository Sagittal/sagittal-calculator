import { BASE_2, computeCopfr, Count, Exponent, IntegerNumerator, pow, Prime } from "../../../../../../../general"
import { N2 } from "./types"

const computeN2 = (integerNumerator: IntegerNumerator): N2 => {
    return integerNumerator / pow(BASE_2, computeCopfr(integerNumerator) as number as Exponent<Count<Prime>>) as N2
}

export {
    computeN2,
}
