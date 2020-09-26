import { deepClone, isUndefined } from "../../code"
import { MULTIPLICATIVE_IDENTITY } from "../constants"
import { reciprocal } from "../typedOperations"
import { Decimal } from "./decimal"
import { computeIsSubMonzo, computeIsSuperMonzo, computeIsUnisonMonzo, invertMonzo, Monzo } from "./monzo"
import { computeIsSubRatio, computeIsSuperRatio, computeIsUnisonRatio, invertRatio, Ratio } from "./ratio"
import { Direction, Num, NumTypeParameters } from "./types"

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
): Exclude<U, Num> & Num<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }> => {
    const isSubNum = computeIsSubNum(num)

    let superNum: Exclude<U, Num> & Num<T & { direction: Direction.SUPER, integer: false }> =
        {} as Exclude<U, Num> & Num<T & { direction: Direction.SUPER, integer: false }>
    if (isSubNum) {
        const { monzo, ratio, decimal } = num
        if (!isUndefined(ratio)) {
            superNum.ratio =
                invertRatio(ratio as Ratio<T>) as Ratio<T & { direction: Direction.SUPER, integer: false }>
        }
        if (!isUndefined(monzo)) {
            superNum.monzo =
                invertMonzo(monzo as Monzo<T>) as Monzo<T & { direction: Direction.SUPER, integer: false }>
        }
        if (!isUndefined(decimal)) {
            // TODO: invertDecimal helper for this type assertion, to remove integer: true
            //  since we can't expect reciprocal, for primitive numbers, to do that
            superNum.decimal =
                reciprocal(decimal as Decimal<T>) as Decimal<T & { direction: Direction.SUPER, integer: false }>
        }
    } else {
        superNum = deepClone(
            num as Exclude<U, Num> & Num<T & { direction: Direction.SUPER, integer: false }>,
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
