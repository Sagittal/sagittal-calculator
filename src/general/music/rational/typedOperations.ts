import { addMonzos, Mean, MeanType, NumericProperties, Quotient, subtractMonzos, sumMonzos } from "../../math"
import { Interval, Pitch } from "../pitch"
import { computeRationalMonzoFromJiPitch } from "./to"

const computeStackedJiPitch = <T extends NumericProperties>(
    jiPitchA: Pitch<T & { rational: true }>,
    jiPitchB: Pitch<T & { rational: true }>,
): Pitch<T & { direction: undefined, integer: false, rational: true }> =>
    ({
        monzo: addMonzos(jiPitchA.monzo, jiPitchB.monzo),
    }) as Pitch<T & { direction: undefined, integer: false, rational: true }>

const computeJiInterval = <T extends NumericProperties>(
    fromJiPitch: Pitch<T & { rational: true }>,
    toJiPitch: Pitch<T & { rational: true }>,
): Interval<T & { direction: undefined, integer: false, rational: true }> =>
    ({
        monzo: subtractMonzos(toJiPitch.monzo, fromJiPitch.monzo),
    }) as Interval<T & { direction: undefined, integer: false, rational: true }>

const computeJiPitchGeometricMean = (
    ...pitches: Array<Pitch<{ rational: true }>>
): Mean<{ of: Pitch<{ rational: false }>, meanType: MeanType.GEOMETRIC }> => {
    return {
        monzo: sumMonzos(...pitches.map(computeRationalMonzoFromJiPitch)),
        scaler: [1, pitches.length] as Quotient,
    } as Mean<{ of: Pitch<{ rational: false }>, meanType: MeanType.GEOMETRIC }>
}

export {
    computeJiInterval,
    computeStackedJiPitch,
    computeJiPitchGeometricMean,
}
