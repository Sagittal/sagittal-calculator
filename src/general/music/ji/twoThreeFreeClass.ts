import { isUndefined } from "../../code"
import {
    computeDecimalFromRatio,
    computeRatioFromRationalDecimal,
    computeRoughMonzo,
    computeRoughRatio,
    computeSuperMonzo,
    computeSuperRatio,
    FIVE_ROUGHNESS,
    isInteger,
    RationalNum,
} from "../../math"
import { TwoThreeFreeClass } from "./types"

const compute23FreeClass = ({ monzo, ratio, decimal }: RationalNum): TwoThreeFreeClass => {
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
        const super23FreeDecimal = computeDecimalFromRatio(super23FreeRatio)

        if (!isInteger(super23FreeDecimal)) {
            // TODO: I have a feeling this error / checking process will turn up elsewhere and should maybe not
            //  primarily live here. if only because I want the error to mention JI pitches, not 2,3-free classes.
            throw new Error("Cannot safely represent JI as a decimal which is not an integer.")
        }
        twoThreeFreeClass.decimal = super23FreeDecimal
    }

    return twoThreeFreeClass
}

export {
    compute23FreeClass,
}
