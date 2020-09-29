import { isUndefined } from "../code"
import {
    computeDecimalFromNum,
    computeNumFromNumParameter,
    computeQuotientFromMonzo,
    computeRationalMonzoFromRationalQuotient,
    Decimal,
    isRatio,
    NumOrDecimal,
    NumTypeParameters,
} from "../math"
import { computeCentsFromPitch } from "./centsFromPitch"
import { PitchAnalysis } from "./types"

const analyzePitch = <T extends NumTypeParameters, U extends NumOrDecimal<T>>(
    pitchNumOrDecimal: U,
): Exclude<U, Decimal<T>> & PitchAnalysis<T> => {
    const pitch = computeNumFromNumParameter(pitchNumOrDecimal)

    const pitchAnalysis = {
        ...pitch,
        decimal: computeDecimalFromNum(computeNumFromNumParameter(pitchNumOrDecimal)),
        cents: computeCentsFromPitch(computeNumFromNumParameter(pitchNumOrDecimal)),
    }

    if (isUndefined(pitch.quotient) && !isUndefined(pitch.monzo)) {
        pitchAnalysis.quotient = computeQuotientFromMonzo(pitch.monzo)
    }
    if (isUndefined(pitch.monzo) && !isUndefined(pitch.quotient) && isRatio(pitch)) {
        pitchAnalysis.monzo = computeRationalMonzoFromRationalQuotient(pitch.quotient)
    }

    return pitchAnalysis as Exclude<U, Decimal<T>> & PitchAnalysis<T>
}

export {
    analyzePitch,
}
