import {
    BASE_2,
    computeRationalDecimalCopfr,
    Count,
    Decimal,
    Exponent,
    Numerator,
    pow,
    Prime,
} from "../../../../../../../../../general"
import {N2} from "./types"

const computeN2 = (numerator: Numerator & Decimal<{integer: true}>): N2 =>
    numerator /
    pow(
        BASE_2,
        computeRationalDecimalCopfr(numerator) as number as Exponent<Count<Prime>>,
    ) as N2

export {
    computeN2,
}
