import { computeSuperPitch, NumTypeParameters, Pitch, pitchIsHigher } from "../../../../general"
import { MAX_SIZE_CATEGORY_BOUND } from "./constants"

const computeIsCommaSized = <T extends NumTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T> & { _CommaBrand: boolean } =>
    pitchIsHigher(MAX_SIZE_CATEGORY_BOUND, computeSuperPitch(pitch as Pitch))

export {
    computeIsCommaSized,
}
