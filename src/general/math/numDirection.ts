import { deepClone, isUndefined } from "../code"
import { MULTIPLICATIVE_IDENTITY } from "./constants"
import {
    computeIsSubMonzo,
    computeIsSubRatio,
    computeIsSuperMonzo,
    computeIsSuperRatio,
    computeIsUnisonMonzo,
    computeIsUnisonRatio,
    invertMonzo,
    invertRatio,
    Monzo,
    Ratio,
} from "./rational"
import { reciprocal } from "./typedOperations"
import { Decimal, Direction, Num, NumTypeParameters } from "./types"

// TODO: MONZO/RATIO/DECIMAL VS INTEGER/RATIONAL/IRRATIONAL
//  maybe it's time to create a math/num directory and move everything in rational deeper nested into it.
//  in which case the parallel move I think would be to create a music/pitch folder and move ji/ inside of that.

const computeIsSuperNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): num is U & Num<T & { direction: Direction.SUPER }> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(decimal) && decimal > MULTIPLICATIVE_IDENTITY) ||
        (!isUndefined(ratio) && computeIsSuperRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsSuperMonzo(monzo))
}

const computeIsSubNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): num is U & Num<T & { direction: Direction.SUB }> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(decimal) && decimal < MULTIPLICATIVE_IDENTITY) ||
        (!isUndefined(ratio) && computeIsSubRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsSubMonzo(monzo))
}

const computeIsUnisonNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): num is U & Num<T & { direction: Direction.UNISON }> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(decimal) && decimal === MULTIPLICATIVE_IDENTITY) ||
        (!isUndefined(ratio) && computeIsUnisonRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsUnisonMonzo(monzo))
}

const computeSuperNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): Exclude<U, Num> & Num<Omit<T, "_DirectionBrand" | "_IntegerBrand"> & { direction: Direction.SUPER }> => {
    const isSubNum = computeIsSubNum(num)

    let superNum: Exclude<U, Num> & Num<Omit<T, "_DirectionBrand" | "_IntegerBrand"> & { direction: Direction.SUPER }> =
        {} as Exclude<U, Num> & Num<Omit<T, "_DirectionBrand" | "_IntegerBrand"> & { direction: Direction.SUPER }>
    if (isSubNum) {
        const { monzo, ratio, decimal } = num
        if (!isUndefined(ratio)) {
            superNum.ratio = invertRatio(ratio) as Ratio<Omit<T, "_DirectionBrand" | "_IntegerBrand">>
        }
        if (!isUndefined(monzo)) {
            superNum.monzo = invertMonzo(monzo) as Monzo<Omit<T, "_DirectionBrand" | "_IntegerBrand">>
        }
        if (!isUndefined(decimal)) {
            superNum.decimal =
                reciprocal(decimal as Decimal<T>) as Decimal<Omit<T, "_DirectionBrand" | "_IntegerBrand">>
        }
    } else {
        superNum = deepClone(
            num as Exclude<U, Num> & Num<Omit<T, "_DirectionBrand" | "_IntegerBrand"> & { direction: Direction.SUPER }>,
        )
    }

    return superNum
}

export {
    computeIsSubNum,
    computeIsSuperNum,
    computeIsUnisonNum,
    computeSuperNum,
}
