import { deepClone, isUndefined } from "../../code"
import { invertDecimal, isSubDecimal, isSuperDecimal, isUnisonDecimal } from "./decimal"
import { invertMonzo, isSubMonzo, isSuperMonzo, isUnisonMonzo } from "./monzo"
import { invertQuotient, isSubQuotient, isSuperQuotient, isUnisonQuotient } from "./quotient"
import { Direction, Num, NumTypeParameters } from "./types"

const isSuperNum = <T extends NumTypeParameters, U extends Num<T>>(
    candidateSuperNum: U,
): candidateSuperNum is U & Num<T & { direction: Direction.SUPER }> => {
    const { monzo, quotient, decimal } = candidateSuperNum

    return (!isUndefined(decimal) && isSuperDecimal(decimal)) ||
        (!isUndefined(quotient) && isSuperQuotient(quotient)) ||
        (!isUndefined(monzo) && isSuperMonzo(monzo))
}

const isSubNum = <T extends NumTypeParameters, U extends Num<T>>(
    candidateSubNum: U,
): candidateSubNum is U & Num<T & { direction: Direction.SUB }> => {
    const { monzo, quotient, decimal } = candidateSubNum

    return (!isUndefined(decimal) && isSubDecimal(decimal)) ||
        (!isUndefined(quotient) && isSubQuotient(quotient)) ||
        (!isUndefined(monzo) && isSubMonzo(monzo))
}

const isUnisonNum = <T extends NumTypeParameters, U extends Num<T>>(
    candidateUnisonNum: U,
): candidateUnisonNum is U & Num<T & { direction: Direction.UNISON }> => {
    const { monzo, quotient, decimal } = candidateUnisonNum

    return (!isUndefined(decimal) && isUnisonDecimal(decimal)) ||
        (!isUndefined(quotient) && isUnisonQuotient(quotient)) ||
        (!isUndefined(monzo) && isUnisonMonzo(monzo))
}

const computeSuperNum = <T extends NumTypeParameters, U extends Num<T>>(
    num: U,
): Exclude<U, Num> & Num<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }> => {
    let superNum = {} as Exclude<U, Num> & Num<T & { direction: Direction.SUPER, integer: false }>

    if (isSubNum(num)) {
        const { monzo, quotient, decimal } = num
        if (!isUndefined(quotient)) {
            superNum.quotient = invertQuotient(quotient)
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
