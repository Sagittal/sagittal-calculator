import { isUndefined } from "../../code"
import {
    computeDecimalFromRatio,
    computeRationalRatioFromRationalDecimal,
    computeRoughRationalMonzo,
    computeRoughRationalRatio,
    computeSuperMonzo,
    computeSuperRatio,
    FIVE_ROUGHNESS,
    isInteger,
    NumTypeParameters,
    RationalNum,
} from "../../math"
import { TwoThreeFreeClass } from "./types"

const compute23FreeClass = <T extends NumTypeParameters>(
    { monzo, ratio, decimal }: RationalNum<T>,
): TwoThreeFreeClass<T> => {
    const twoThreeFreeClass = {} as TwoThreeFreeClass

    if (!isUndefined(monzo)) {
        const twoThreeFreeMonzo = computeRoughRationalMonzo(monzo, FIVE_ROUGHNESS)
        twoThreeFreeClass.monzo = computeSuperMonzo(twoThreeFreeMonzo)
    }

    if (!isUndefined(ratio)) {
        const twoThreeFreeRatio = computeRoughRationalRatio(ratio, FIVE_ROUGHNESS)
        twoThreeFreeClass.ratio = computeSuperRatio(twoThreeFreeRatio)
    }

    if (!isUndefined(decimal)) {
        const ratio = computeRationalRatioFromRationalDecimal(decimal)
        const twoThreeFreeRatio = computeRoughRationalRatio(ratio, FIVE_ROUGHNESS)
        const super23FreeRatio = computeSuperRatio(twoThreeFreeRatio)
        const super23FreeDecimal = computeDecimalFromRatio(super23FreeRatio)

        if (!isInteger(super23FreeDecimal)) {
            throw new Error("Cannot safely represent a 2,3-free class (or JI in general) as a decimal which is not an integer.")
        }
        twoThreeFreeClass.decimal = super23FreeDecimal
    }

    return twoThreeFreeClass as TwoThreeFreeClass<T>
}

export {
    compute23FreeClass,
}
