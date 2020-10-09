import { Decimal, divide, Max, Min, multiply, NumericProperties } from "../../math"
import { computeIrrationalDecimalFromPitch, computeNonJiPitchFromDecimal, SQRT_SCALER } from "../nonJi"
import { Interval, Pitch } from "./types"

const computeStackedPitch = (pitchA: Pitch, pitchB: Pitch): Pitch<{ direction: undefined, rational: false }> =>
    computeNonJiPitchFromDecimal(
        multiply(computeIrrationalDecimalFromPitch(pitchA), computeIrrationalDecimalFromPitch(pitchB)),
    ) as Pitch<{ direction: undefined, rational: false }>

const computeInterval = (fromPitch: Pitch, toPitch: Pitch): Interval<{ direction: undefined, rational: false }> =>
    computeNonJiPitchFromDecimal(
        divide(computeIrrationalDecimalFromPitch(toPitch), computeIrrationalDecimalFromPitch(fromPitch)),
    ) as Interval<{ direction: undefined, rational: false }>

const sqrtPitch = <T extends NumericProperties>(pitch: Pitch<T>): Pitch<T & { rational: false }> =>
    ({ ...pitch, scaler: SQRT_SCALER } as Pitch<T & { rational: false }>)

const maxPitches = (...pitches: Array<Pitch>): Max<Pitch> => {
    let maxDecimal = -Infinity as Decimal
    let maxIndex = undefined

    pitches.map(computeIrrationalDecimalFromPitch).forEach((decimal: Decimal, index: number): void => {
        if (decimal > maxDecimal) {
            maxDecimal = decimal
            maxIndex = index
        }
    })

    return pitches[ maxIndex as unknown as number ] as Max<Pitch>
}

const minPitches = (...pitches: Array<Pitch>): Min<Pitch> => {
    let minDecimal = Infinity as Decimal
    let minIndex = undefined

    pitches.map(computeIrrationalDecimalFromPitch).forEach((decimal: Decimal, index: number): void => {
        if (decimal < minDecimal) {
            minDecimal = decimal
            minIndex = index
        }
    })

    return pitches[ minIndex as unknown as number ] as Min<Pitch>
}

export {
    computeStackedPitch,
    sqrtPitch,
    maxPitches,
    minPitches,
    computeInterval,
}
