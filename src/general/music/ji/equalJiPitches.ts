import { isUndefined } from "../../code"
import { equalMonzos, equalRatios } from "../../math"
import { computeJiPitchMonzo } from "./jiPitchMonzoOrRatio"
import { JiPitch } from "./types"

const equalJiPitches = (jiPitchA: JiPitch, jiPitchB: JiPitch): boolean => {
    if (!isUndefined(jiPitchA.ratio) && !isUndefined(jiPitchB.ratio)) {
        return equalRatios(jiPitchA.ratio, jiPitchB.ratio)
    }

    if (!isUndefined(jiPitchA.monzo) && !isUndefined(jiPitchB.monzo)) {
        return equalMonzos(jiPitchA.monzo, jiPitchB.monzo)
    }

    return equalMonzos(computeJiPitchMonzo(jiPitchA), computeJiPitchMonzo(jiPitchB))
}

export {
    equalJiPitches,
}
