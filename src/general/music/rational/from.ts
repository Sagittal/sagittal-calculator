import {
    computeRationalMonzoFromRationalDecimal,
    computeRationalMonzoFromRationalQuotient,
    Decimal,
    Monzo,
    NumericProperties,
    Quotient,
} from "../../math"
import { Pitch } from "../pitch"

const computeJiPitchFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & { rational: true }>,
): Pitch<T & { rational: true }> =>
    ({
        monzo: computeRationalMonzoFromRationalDecimal(rationalDecimal),
    }) as Pitch<T & { rational: true }>

const computeJiPitchFromRationalMonzo = <T extends NumericProperties>(
    rationalMonzo: Monzo<T & { rational: true }>,
): Pitch<T & { rational: true }> =>
    ({ monzo: rationalMonzo }) as Pitch<T & { rational: true }>

const computeJiPitchFromRationalQuotient = <T extends NumericProperties>(
    rationalQuotient: Quotient<T & { rational: true }>,
): Pitch<T & { rational: true }> =>
    computeJiPitchFromRationalMonzo(computeRationalMonzoFromRationalQuotient(rationalQuotient))

export {
    computeJiPitchFromRationalDecimal,
    computeJiPitchFromRationalMonzo,
    computeJiPitchFromRationalQuotient,
}
