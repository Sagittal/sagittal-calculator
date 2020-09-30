import { isUndefined } from "../code"
import {
    computeDecimalFromReal,
    computeQuotientFromMonzo,
    computeRationalMonzoFromRationalQuotient,
    computeRealFromRealOrDecimal,
    isRational,
    NumericProperties,
    Real,
    RealDecimal,
} from "../math"
import { computeCentsFromPitch } from "./centsFromPitch"
import { PitchAnalysis } from "./types"

const analyzePitch = <T extends NumericProperties, U extends Real | RealDecimal<T>>(
    pitchNumOrDecimal: U,
): Exclude<U, RealDecimal<T>> & PitchAnalysis<T> => {
    const pitch = computeRealFromRealOrDecimal(pitchNumOrDecimal)

    const pitchAnalysis = {
        ...pitch,
        decimal: computeDecimalFromReal(computeRealFromRealOrDecimal(pitchNumOrDecimal)),
        cents: computeCentsFromPitch(computeRealFromRealOrDecimal(pitchNumOrDecimal)),
    }

    if (isUndefined(pitch.quotient) && !isUndefined(pitch.monzo)) {
        pitchAnalysis.quotient = 
            computeQuotientFromMonzo(pitch.monzo, { disableErrorBecauseExactValueNotRequired: true })
    }
    if (isUndefined(pitch.monzo) && !isUndefined(pitch.quotient) && isRational(pitch)) {
        pitchAnalysis.monzo = computeRationalMonzoFromRationalQuotient(pitch.quotient)
    }

    return pitchAnalysis as Exclude<U, RealDecimal<T>> & PitchAnalysis<T>
}

export {
    analyzePitch,
}
