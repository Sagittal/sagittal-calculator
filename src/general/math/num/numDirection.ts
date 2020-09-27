import { deepClone, isUndefined } from "../../code"
import { Decimal, invertDecimal, isSubDecimal, isSuperDecimal, isUnisonDecimal } from "./decimal"
import { invertMonzo, isSubMonzo, isSuperMonzo, isUnisonMonzo, Monzo } from "./monzo"
import { invertRatio, isSubRatio, isSuperRatio, isUnisonRatio, Ratio } from "./ratio"
import { Direction, Num, NumTypeParameters } from "./types"

const isSuperNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): num is U & Num<T & { direction: Direction.SUPER }> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(decimal) && isSuperDecimal(decimal)) ||
        (!isUndefined(ratio) && isSuperRatio(ratio)) ||
        (!isUndefined(monzo) && isSuperMonzo(monzo))
}

const isSubNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): num is U & Num<T & { direction: Direction.SUB }> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(decimal) && isSubDecimal(decimal)) ||
        (!isUndefined(ratio) && isSubRatio(ratio)) ||
        (!isUndefined(monzo) && isSubMonzo(monzo))
}

const isUnisonNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): num is U & Num<T & { direction: Direction.UNISON }> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(decimal) && isUnisonDecimal(decimal)) ||
        (!isUndefined(ratio) && isUnisonRatio(ratio)) ||
        (!isUndefined(monzo) && isUnisonMonzo(monzo))
}

const computeSuperNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): Exclude<U, Num> & Num<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }> => {
    let superNum = {} as Exclude<U, Num> & Num<T & { direction: Direction.SUPER, integer: false }>

    if (isSubNum(num)) {
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
    isSubNum,
    isSuperNum,
    isUnisonNum,
    computeSuperNum,
}
