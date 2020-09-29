import { deepClone, isNumber, isUndefined } from "../../code"
import { reciprocal } from "../typedOperations"
import { invertDecimal, isSubDecimal, isSuperDecimal, isUnisonDecimal } from "./decimal"
import { computeNumFromNumParameter } from "./fromNumParameter"
import { invertMonzo, isSubMonzo, isSuperMonzo, isUnisonMonzo } from "./monzo"
import { invertQuotient, isSubQuotient, isSuperQuotient, isUnisonQuotient } from "./quotient"
import { Direction, NumOrDecimal, NumTypeParameters } from "./types"

const isSuperNum = <T extends NumTypeParameters, U extends NumOrDecimal<T>>(
    candidateSuperNumParameter: U,
): candidateSuperNumParameter is U & NumOrDecimal<T & { direction: Direction.SUPER }> => {
    const { monzo, quotient, decimal } = computeNumFromNumParameter(candidateSuperNumParameter)

    return (!isUndefined(decimal) && isSuperDecimal(decimal)) ||
        (!isUndefined(quotient) && isSuperQuotient(quotient)) ||
        (!isUndefined(monzo) && isSuperMonzo(monzo))
}

const isSubNum = <T extends NumTypeParameters, U extends NumOrDecimal<T>>(
    candidateSubNumParameter: U,
): candidateSubNumParameter is U & NumOrDecimal<T & { direction: Direction.SUB }> => {
    const { monzo, quotient, decimal } = computeNumFromNumParameter(candidateSubNumParameter)

    return (!isUndefined(decimal) && isSubDecimal(decimal)) ||
        (!isUndefined(quotient) && isSubQuotient(quotient)) ||
        (!isUndefined(monzo) && isSubMonzo(monzo))
}

const isUnisonNum = <T extends NumTypeParameters, U extends NumOrDecimal<T>>(
    candidateUnisonNumParameter: U,
): candidateUnisonNumParameter is U & NumOrDecimal<T & { direction: Direction.UNISON }> => {
    const { monzo, quotient, decimal } = computeNumFromNumParameter(candidateUnisonNumParameter)

    return (!isUndefined(decimal) && isUnisonDecimal(decimal)) ||
        (!isUndefined(quotient) && isUnisonQuotient(quotient)) ||
        (!isUndefined(monzo) && isUnisonMonzo(monzo))
}

// TODO: I'm not convinced this is going to actually give you back a decimal if you put one in.
//  See computeNumSqrt for an exampel of me getting this to work.
//  And that will affect invertNum if you ever implement it here too.
const computeSuperNum = <T extends NumTypeParameters, U extends NumOrDecimal<T>>(
    numOrDecimal: U,
): Exclude<U, NumOrDecimal> & NumOrDecimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }> => {
    let superNum = {} as Exclude<U, NumOrDecimal> & NumOrDecimal<T & { direction: Direction.SUPER, integer: false }>

    if (isSubNum(numOrDecimal)) {
        if (isNumber(numOrDecimal)) {
            return reciprocal(
                numOrDecimal,
            ) as Exclude<U, NumOrDecimal> & NumOrDecimal<T & { direction: Direction.SUPER, integer: false }>
        }

        const { monzo, quotient, decimal } = numOrDecimal
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
            numOrDecimal as Exclude<U, NumOrDecimal> & NumOrDecimal<T & { direction: Direction.SUPER, integer: false }>,
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
