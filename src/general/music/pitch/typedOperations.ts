import { Decimal, divide, multiply, NumericProperties } from "../../math"
import { computeIrrationalDecimalFromPitch, computeNonJiPitchFromDecimal, SQRT_SCALER } from "../nonJi"
import { Pitch } from "./types"

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  Pitch & Interval
//  Maybe the solution to make this name is: it takes a bunch of intervals and then returns a pitch?
//  This might be helpful as a guide: http://forum.sagittal.org/viewtopic.php?p=2510#p2510

const computeStackedPitch = (jiPitchA: Pitch, jiPitchB: Pitch): Pitch<{ direction: undefined, integer: false }> =>
    computeNonJiPitchFromDecimal(
        multiply(computeIrrationalDecimalFromPitch(jiPitchA), computeIrrationalDecimalFromPitch(jiPitchB)),
    ) as Pitch<{ direction: undefined, rational: false }>

const computeInterval = (fromPitch: Pitch, toPitch: Pitch): Pitch<{ direction: undefined, rational: false }> =>
    computeNonJiPitchFromDecimal(
        divide(computeIrrationalDecimalFromPitch(toPitch), computeIrrationalDecimalFromPitch(fromPitch)),
    ) as Pitch<{ direction: undefined, rational: false }>

const sqrtPitch = <T extends NumericProperties>(pitch: Pitch<T>): Pitch<T & { rational: false }> =>
    ({ ...pitch, scaler: SQRT_SCALER } as Pitch<T & { rational: false }>)

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  If this one adds Max<>, then others should add types akin to in math/typedOperations
const maxPitches = (...pitches: Array<Pitch>): Pitch => {
    let maxDecimal = -Infinity as Decimal
    let maxIndex = undefined

    pitches.map(computeIrrationalDecimalFromPitch).forEach((decimal: Decimal, index: number): void => {
        if (decimal > maxDecimal) {
            maxDecimal = decimal
            maxIndex = index
        }
    })

    return pitches[ maxIndex as unknown as number ]
}

export {
    computeStackedPitch,
    sqrtPitch,
    maxPitches,
    computeInterval,
}
