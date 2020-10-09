import { isRationalMonzoRough, NumericProperties, Primes, Roughness } from "../../math"
import { Pitch } from "../pitch"

const isJiPitchRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughJiPitch: Pitch<T & { rational: true }>,
    roughness: S & Roughness,
): candidateRoughJiPitch is Pitch<T & { rational: true, rough: S }> =>
    isRationalMonzoRough(candidateRoughJiPitch.monzo, roughness)

export {
    isJiPitchRough,
}
