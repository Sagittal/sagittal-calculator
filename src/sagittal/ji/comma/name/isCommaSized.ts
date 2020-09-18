import { abs, computeCentsFromPitch, NumericTypeParameters, Pitch } from "../../../../general"
import { MAX_SIZE_CATEGORY_BOUND } from "./constants"

const computeIsCommaSized = <T extends NumericTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T> & { _CommaBrand: "Comma" } => {
    const cents = computeCentsFromPitch(pitch)

    return abs(cents) < MAX_SIZE_CATEGORY_BOUND
}

export {
    computeIsCommaSized,
}
