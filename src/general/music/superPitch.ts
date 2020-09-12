import { isUndefined } from "../code"
import {
    computeIsSubMonzo,
    computeIsSubRatio,
    computeSuperMonzo, 
    computeSuperRatio,
    Direction,
    negative,
    NumericTypeParameters,
} from "../math"
import { computeIsSubPitch } from "./pitchDirection"
import { Pitch } from "./types"

const computeSuperPitch = <T extends NumericTypeParameters>(
    pitch: Pitch<T>,
): Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    const isSubPitch = computeIsSubPitch(pitch)
    
    let superPitch: Pitch = {} as Pitch
    if (isSubPitch) {
        const { monzo, ratio, cents } = pitch
        if (!isUndefined(ratio)) superPitch.ratio = computeSuperRatio(ratio)
        if (!isUndefined(monzo)) superPitch.monzo = computeSuperMonzo(monzo)
        if (!isUndefined(cents)) superPitch.cents = negative(cents)
        // TODO: if this modifies name, then it must be moved into sagittal/
        //  which I don't want to do if I don't have to
        //  but on the other hand, if it doesn't flip the name, then this can make the name into a lie...
        // if (!isUndefined(name)) superPitch.name = computeSagittalCommaName(superPitch as Comma)
    } else {
        superPitch = pitch
    }

    return superPitch as Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }>
}

export {
    computeSuperPitch,
}
