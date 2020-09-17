import { isUndefined } from "../code"
import { computeNumberFromMonzo, computeNumberFromRatio } from "../math"
import { computeCentsFromNumber } from "./centsFromNumber"
import { Cents, Pitch } from "./types"

const computeCentsFromPitch = (pitch: Pitch): Cents => {
    if (!isUndefined(pitch.cents)) {
        return pitch.cents
    }

    let number
    if (!isUndefined(pitch.ratio)) {
        number = computeNumberFromRatio(pitch.ratio)
    } else if (!isUndefined(pitch.monzo)) {
        number = computeNumberFromMonzo(pitch.monzo)
    }

    return computeCentsFromNumber(number as number)
}

export {
    computeCentsFromPitch,
}
