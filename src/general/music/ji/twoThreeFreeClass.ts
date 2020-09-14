import { isUndefined } from "../../code"
import { computeRoughMonzo, computeRoughRatio, computeSuperMonzo, computeSuperRatio, FIVE_ROUGHNESS } from "../../math"
import { JiPitch, TwoThreeFreeClass } from "./types"

const compute23FreeClass = ({ monzo, ratio }: JiPitch): TwoThreeFreeClass => {
    const twoThreeFreeClass = {} as TwoThreeFreeClass

    if (!isUndefined(monzo)) {
        const twoThreeFreeMonzo = computeRoughMonzo(monzo, FIVE_ROUGHNESS)
        twoThreeFreeClass.monzo = computeSuperMonzo(twoThreeFreeMonzo)
    }

    if (!isUndefined(ratio)) {
        const twoThreeFreeRatio = computeRoughRatio(ratio, FIVE_ROUGHNESS)
        twoThreeFreeClass.ratio = computeSuperRatio(twoThreeFreeRatio)
    }

    return twoThreeFreeClass
}

export {
    compute23FreeClass,
}
