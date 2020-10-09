import {
    computeRationalMonzoSmoothness,
    isRationalMonzoSmooth,
    Max,
    NumericProperties,
    Prime,
    Primes,
    Smoothness,
} from "../../math"
import { Pitch } from "../pitch"

const isJiPitchSmooth = <S extends Primes, T extends NumericProperties>(
    candidateSmoothJiPitch: Pitch<T & { rational: true }>,
    smoothness: S & Smoothness,
): candidateSmoothJiPitch is Pitch<T & { rational: true, smooth: S }> =>
    isRationalMonzoSmooth(candidateSmoothJiPitch.monzo, smoothness)

const computeJiPitchSmoothness = <T extends NumericProperties>(
    { monzo }: Pitch<T & { rational: true }>,
): Smoothness & Max<Prime<T>> =>
    computeRationalMonzoSmoothness(monzo) as Smoothness & Max<Prime<T>>

export {
    isJiPitchSmooth,
    computeJiPitchSmoothness,
}
