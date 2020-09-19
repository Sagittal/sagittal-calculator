import { deepEquals, isUndefined } from "../../code"
import { computeJiPitchMonzo } from "./jiPitchMonzoOrRatio"
import { JiPitch } from "./types"

const equalJiPitches = (jiPitchA: JiPitch, jiPitchB: JiPitch): boolean => {
    if (!isUndefined(jiPitchA.ratio) && !isUndefined(jiPitchB.ratio)) {
        return deepEquals(jiPitchA.ratio, jiPitchB.ratio)
    }

    if (!isUndefined(jiPitchA.monzo) && !isUndefined(jiPitchB.monzo)) {
        return deepEquals(jiPitchA.monzo, jiPitchB.monzo)
    }

    return deepEquals(computeJiPitchMonzo(jiPitchA), computeJiPitchMonzo(jiPitchB))
}

export {
    equalJiPitches,
}
