import { deepClone, isUndefined } from "../../code"
import { computeIsSubDecimal, computeIsSuperDecimal, computeIsUnisonDecimal, Decimal, invertDecimal } from "./decimal"
import { computeIsSubMonzo, computeIsSuperMonzo, computeIsUnisonMonzo, invertMonzo, Monzo } from "./monzo"
import { computeIsSubRatio, computeIsSuperRatio, computeIsUnisonRatio, invertRatio, Ratio } from "./ratio"
import { Direction, Num, NumTypeParameters } from "./types"

const computeIsSuperNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): num is U & Num<T & { direction: Direction.SUPER }> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(decimal) && computeIsSuperDecimal(decimal)) ||
        (!isUndefined(ratio) && computeIsSuperRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsSuperMonzo(monzo))
}

const computeIsSubNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): num is U & Num<T & { direction: Direction.SUB }> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(decimal) && computeIsSubDecimal(decimal)) ||
        (!isUndefined(ratio) && computeIsSubRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsSubMonzo(monzo))
}

const computeIsUnisonNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): num is U & Num<T & { direction: Direction.UNISON }> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(decimal) && computeIsUnisonDecimal(decimal)) ||
        (!isUndefined(ratio) && computeIsUnisonRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsUnisonMonzo(monzo))
}

const computeSuperNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): Exclude<U, Num> & Num<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }> => {
    let superNum = {} as Exclude<U, Num> & Num<T & { direction: Direction.SUPER, integer: false }>

    if (computeIsSubNum(num)) {
        const { monzo, ratio, decimal } = num
        if (!isUndefined(ratio)) {
            superNum.ratio = invertRatio(ratio)
        }
        if (!isUndefined(monzo)) {
            superNum.monzo = invertMonzo(monzo)
        }
        if (!isUndefined(decimal)) {
            superNum.decimal = invertDecimal(decimal)
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