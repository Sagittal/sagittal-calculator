import { isUndefined } from "../code"
import {
    computeDecimalFromNum,
    computeNumFromNumOrDecimal,
    computeQuotientFromMonzo,
    computeRationalMonzoFromRationalQuotient,
    Decimal,
    isRatio,
    Num,
    NumTypeParameters,
} from "../math"
import { computeCentsFromPitch } from "./centsFromPitch"
import { PitchAnalysis } from "./types"

const analyzePitch = <T extends NumTypeParameters, U extends Num | Decimal<T>>(
    pitchNumOrDecimal: U,
): Exclude<U, Decimal<T>> & PitchAnalysis<T> => {
    const pitch = computeNumFromNumOrDecimal(pitchNumOrDecimal)

    const pitchAnalysis = {
        ...pitch,
        decimal: computeDecimalFromNum(computeNumFromNumOrDecimal(pitchNumOrDecimal)),
        cents: computeCentsFromPitch(computeNumFromNumOrDecimal(pitchNumOrDecimal)),
    }

    if (isUndefined(pitch.quotient) && !isUndefined(pitch.monzo)) {
        pitchAnalysis.quotient = 
            computeQuotientFromMonzo(pitch.monzo, { disableErrorBecauseExactValueNotRequired: true })
    }
    if (isUndefined(pitch.monzo) && !isUndefined(pitch.quotient) && isRatio(pitch)) {
        pitchAnalysis.monzo = computeRationalMonzoFromRationalQuotient(pitch.quotient)
    }

    return pitchAnalysis as Exclude<U, Decimal<T>> & PitchAnalysis<T>
}

export {
    analyzePitch,
}
