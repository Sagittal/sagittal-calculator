import { isUndefined } from "../../code"
import {
    computeDecimalFromRatio,
    computeRatioFromRationalDecimal,
    computeRoughMonzo,
    computeRoughRatio,
    computeSuperMonzo,
    computeSuperRatio,
    FIVE_ROUGHNESS,
} from "../../math"
import { JiPitch, TwoThreeFreeClass } from "./types"

const compute23FreeClass = ({ monzo, ratio, decimal }: JiPitch): TwoThreeFreeClass => {
    const twoThreeFreeClass = {} as TwoThreeFreeClass

    if (!isUndefined(monzo)) {
        const twoThreeFreeMonzo = computeRoughMonzo(monzo, FIVE_ROUGHNESS)
        twoThreeFreeClass.monzo = computeSuperMonzo(twoThreeFreeMonzo)
    }

    if (!isUndefined(ratio)) {
        const twoThreeFreeRatio = computeRoughRatio(ratio, FIVE_ROUGHNESS)
        twoThreeFreeClass.ratio = computeSuperRatio(twoThreeFreeRatio)
    }

    if (!isUndefined(decimal)) {
        const ratio = computeRatioFromRationalDecimal(decimal)
        const twoThreeFreeRatio = computeRoughRatio(ratio, FIVE_ROUGHNESS)
        const super23FreeRatio = computeSuperRatio(twoThreeFreeRatio)
        twoThreeFreeClass.decimal = computeDecimalFromRatio(super23FreeRatio)
    }

    return twoThreeFreeClass
}

export {
    compute23FreeClass,
}
