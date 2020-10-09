import {
    computeDecimalFromMonzo,
    computeDecimalFromQuotient,
    Decimal,
    Exponent,
    Monzo,
    NumericProperties,
    Prime,
    Quotient,
} from "../../math"
import { Pitch } from "../pitch"

const computeIrrationalDecimalFromPitch = <T extends NumericProperties>(
    pitch: Pitch<T>,
): Decimal<T & { rational: false }> =>
    computeDecimalFromMonzo(pitch.monzo) **
    computeDecimalFromQuotient(pitch.scaler || [1, 1]) as Decimal<T & { rational: false }>

const computeIrrationalMonzoFromPitch = <T extends NumericProperties>(
    pitch: Pitch<T>,
): Monzo<T & { rational: false }> =>
    pitch.monzo
        .map((primeExponent: Decimal<{ integer: true }> & Exponent<Prime>): Exponent<Prime> => {
            return primeExponent * computeDecimalFromQuotient(
                pitch.scaler || [1, 1] as Quotient,
            ) as Exponent<Prime>
        }) as Monzo<T & { rational: false }>

const computeIrrationalQuotientFromPitch = <T extends NumericProperties>(
    pitch: Pitch<T>,
): Quotient<T & { rational: false }> =>
    [
        computeDecimalFromMonzo(pitch.monzo) ** computeDecimalFromQuotient(pitch.scaler || [1, 1]),
        1,
    ] as Quotient<T & { rational: false }>

export {
    computeIrrationalDecimalFromPitch,
    computeIrrationalMonzoFromPitch,
    computeIrrationalQuotientFromPitch,
}
