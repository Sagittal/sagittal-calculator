import { Decimal, multiply, NumericProperties, sumMonzos } from "../../math"
import { isJi } from "../ji"
import { computeDecimalFromPitch, computePitchFromDecimal, Pitch, SQRT_SCALER } from "../pitch"

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  Pitch & Interval
//  Maybe the solution to make this name is: it takes a bunch of intervals and then returns a pitch?
const addPitches = (augendPitch: Pitch, addendPitch: Pitch): Pitch =>
    isJi(augendPitch) && isJi(addendPitch) ?
        ({ monzo: sumMonzos(augendPitch.monzo, addendPitch.monzo) }) as Pitch<{ rational: true }> :
        computePitchFromDecimal(multiply(computeDecimalFromPitch(augendPitch), computeDecimalFromPitch(addendPitch)))

const sqrtPitch = <T extends NumericProperties>(pitch: Pitch<T>): Pitch<T & { rational: false }> => {
    return {
        ...pitch,
        scaler: SQRT_SCALER,
    } as Pitch<T & { rational: false }>
}

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  If this one adds Max<>, then others should add types akin to in math/typedOperations
const maxPitches = (...pitches: Array<Pitch>): Pitch => {
    let maxDecimal = -Infinity as Decimal
    let maxIndex = undefined

    pitches.map(computeDecimalFromPitch).forEach((decimal: Decimal, index: number): void => {
        if (decimal > maxDecimal) {
            maxDecimal = decimal
            maxIndex = index
        }
    })

    return pitches[ maxIndex as unknown as number ]
}

export {
    addPitches,
    sqrtPitch,
    maxPitches,
}
