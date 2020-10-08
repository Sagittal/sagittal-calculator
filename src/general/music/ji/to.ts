import {
    computeDecimalFromMonzo,
    computeQuotientFromMonzo,
    Decimal,
    Monzo,
    NumericProperties,
    Quotient,
} from "../../math"
import { Pitch } from "../pitch"

const computeRationalDecimalFromJiPitch = <T extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
): Decimal<T & { rational: true }> =>
    computeDecimalFromMonzo(jiPitch.monzo)

const computeRationalMonzoFromJiPitch = <T extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
): Monzo<T & { rational: true }> =>
    jiPitch.monzo

const computeRationalQuotientFromJiPitch = <T extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
): Quotient<T & { rational: true }> =>
    computeQuotientFromMonzo(jiPitch.monzo)

export {
    computeRationalDecimalFromJiPitch,
    computeRationalMonzoFromJiPitch,
    computeRationalQuotientFromJiPitch,
}
