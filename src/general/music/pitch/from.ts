import {
    Decimal,
    isRationalDecimal,
    isRationalMonzo,
    isRationalQuotient,
    Monzo,
    NumericProperties,
    Quotient,
} from "../../math"
import { CENTS_PER_OCTAVE } from "../constants"
import {
    computeJiPitchFromRationalDecimal,
    computeJiPitchFromRationalMonzo,
    computeJiPitchFromRationalQuotient,
} from "../ji"
import { computeNonJiPitchFromDecimal, computeNonJiPitchFromMonzo, computeNonJiPitchFromQuotient } from "../nonJi"
import { Cents } from "../types"
import { Pitch } from "./types"

const computePitchFromCents = (cents: Cents): Pitch =>
    computePitchFromDecimal(2 ** (cents / CENTS_PER_OCTAVE))

const computePitchFromDecimal = <T extends NumericProperties>(decimal: Decimal<T>): Pitch<T> =>
    isRationalDecimal(decimal) ?
        computeJiPitchFromRationalDecimal(decimal) :
        computeNonJiPitchFromDecimal(decimal)

const computePitchFromMonzo = <T extends NumericProperties>(monzo: Monzo<T>): Pitch<T> =>
    isRationalMonzo(monzo) ?
        computeJiPitchFromRationalMonzo(monzo) :
        computeNonJiPitchFromMonzo(monzo)

const computePitchFromQuotient = <T extends NumericProperties>(quotient: Quotient<T>): Pitch<T> =>
    isRationalQuotient(quotient) ?
        computeJiPitchFromRationalQuotient(quotient) :
        computeNonJiPitchFromQuotient(quotient)

export {
    computePitchFromCents,
    computePitchFromMonzo,
    computePitchFromQuotient,
    computePitchFromDecimal,
}
