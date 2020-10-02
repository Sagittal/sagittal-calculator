import { isUndefined } from "../code"
import {
    computeRationalMonzoFromRationalQuotient,
    computeRealDecimalFromReal,
    computeRealFromRealOrRealDecimal,
    computeRealQuotientFromRealMonzo,
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
    const pitch = computeRealFromRealOrRealDecimal(pitchNumOrDecimal)

    const pitchAnalysis = {
        ...pitch,
        decimal: computeRealDecimalFromReal(computeRealFromRealOrRealDecimal(pitchNumOrDecimal)),
        cents: computeCentsFromPitch(computeRealFromRealOrRealDecimal(pitchNumOrDecimal)),
    }

    if (isUndefined(pitch.quotient) && !isUndefined(pitch.monzo)) {
        pitchAnalysis.quotient = 
            computeRealQuotientFromRealMonzo(pitch.monzo, { disableErrorBecauseExactValueNotRequired: true })
    }
    if (isRational(pitch) && isUndefined(pitch.monzo) && !isUndefined(pitch.quotient)) {
        pitchAnalysis.monzo = computeRationalMonzoFromRationalQuotient(pitch.quotient)
    }

    return pitchAnalysis as Exclude<U, RealDecimal<T>> & PitchAnalysis<T>
}

export {
    analyzePitch,
}
