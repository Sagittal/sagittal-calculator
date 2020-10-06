import { shallowClone } from "../../code"
import {
    BASE_2,
    computeDecimalFromMonzo,
    computeDecimalFromQuotient,
    computeRationalMonzoFromRationalDecimal,
    computeRationalMonzoFromRationalQuotient,
    Decimal,
    isRationalDecimal,
    isRationalMonzo,
    isRationalQuotient,
    log,
    Monzo,
    NumericProperties,
    Quotient,
} from "../../math"
import { CENTS_PER_OCTAVE } from "../constants"
import { Cents } from "../types"
import { NON_JI_PITCH_BASE_MONZO } from "./constants"
import { Pitch } from "./types"

const computePitchFromCents = (cents: Cents): Pitch =>
    computePitchFromDecimal(2 ** (cents / CENTS_PER_OCTAVE))

const computePitchFromDecimal = <T extends NumericProperties>(decimal: Decimal<T>): Pitch<T> =>
    isRationalDecimal(decimal) ?
        {
            monzo: computeRationalMonzoFromRationalDecimal(decimal),
        } as Pitch<T & { rational: true }> :
        {
            monzo: shallowClone(NON_JI_PITCH_BASE_MONZO),
            scaler: [log(decimal, BASE_2) as Decimal, 1],
        } as Pitch<T & { rational: false }>

const computePitchFromMonzo = <T extends NumericProperties>(monzo: Monzo<T>): Pitch<T> =>
    isRationalMonzo(monzo) ?
        { monzo } as Pitch<T & { rational: true }> :
        computePitchFromDecimal(computeDecimalFromMonzo(monzo))

const computePitchFromQuotient = <T extends NumericProperties>(quotient: Quotient<T>): Pitch<T> =>
    isRationalQuotient(quotient) ?
        computePitchFromMonzo(computeRationalMonzoFromRationalQuotient(quotient)) :
        computePitchFromDecimal(computeDecimalFromQuotient(quotient))

export {
    computePitchFromCents,
    computePitchFromMonzo,
    computePitchFromQuotient,
    computePitchFromDecimal,
}
