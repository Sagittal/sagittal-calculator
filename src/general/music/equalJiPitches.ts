import { deepEquals } from "../code"
import { computeJiPitchMonzo } from "./jiPitchMonzoOrRatio"
import { JiPitch } from "./types"

const equalJiPitches = (jiPitchA: JiPitch, jiPitchB: JiPitch): boolean => {
    const monzoA = computeJiPitchMonzo(jiPitchA)
    const monzoB = computeJiPitchMonzo(jiPitchB)

    return deepEquals(monzoA, monzoB)
}

export {
    equalJiPitches,
}
