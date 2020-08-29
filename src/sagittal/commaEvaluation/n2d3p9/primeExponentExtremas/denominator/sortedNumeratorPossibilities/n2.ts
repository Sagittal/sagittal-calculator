import { BASE_2, computeCopfr, Count, Exponent, Numerator, pow, Prime } from "../../../../../../general"
import { N2 } from "./types"

const computeN2 = (numerator: Numerator): N2 => {
    return numerator / pow(BASE_2, computeCopfr(numerator) as number as Exponent<Count<Prime>>) as N2
}

export {
    computeN2,
}
