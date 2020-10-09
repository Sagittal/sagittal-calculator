import {
    Decimal,
    isDecimalRational,
    isMonzoRational,
    isQuotientRational,
    Monzo,
    NumericProperties,
    Quotient,
} from "../../math"
import { CENTS_PER_OCTAVE } from "../constants"
import { computeNonJiPitchFromDecimal, computeNonJiPitchFromMonzo, computeNonJiPitchFromQuotient } from "../irrational"
import {
    computeJiPitchFromRationalDecimal,
    computeJiPitchFromRationalMonzo,
    computeJiPitchFromRationalQuotient,
} from "../rational"
import { Cents } from "../types"
import { Pitch } from "./types"

const computePitchFromCents = (cents: Cents): Pitch<{ rational: false }> =>
    computePitchFromDecimal(2 ** (cents / CENTS_PER_OCTAVE) as Decimal<{ rational: false }>)

const computePitchFromDecimal = <T extends NumericProperties>(decimal: Decimal<T>): Pitch<T> =>
    isDecimalRational(decimal) ?
        computeJiPitchFromRationalDecimal(decimal) :
        computeNonJiPitchFromDecimal(decimal)

const computePitchFromMonzo = <T extends NumericProperties>(monzo: Monzo<T>): Pitch<T> =>
    isMonzoRational(monzo) ?
        computeJiPitchFromRationalMonzo(monzo) :
        computeNonJiPitchFromMonzo(monzo)

const computePitchFromQuotient = <T extends NumericProperties>(quotient: Quotient<T>): Pitch<T> =>
    isQuotientRational(quotient) ?
        computeJiPitchFromRationalQuotient(quotient) :
        computeNonJiPitchFromQuotient(quotient)

export {
    computePitchFromCents,
    computePitchFromMonzo,
    computePitchFromQuotient,
    computePitchFromDecimal,
}
