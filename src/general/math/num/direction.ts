import { deepClone, isNumber, isUndefined } from "../../code"
import { reciprocal } from "../typedOperations"
import { invertDecimal, isSubDecimal, isSuperDecimal, isUnisonDecimal } from "./decimal"
import { computeNumFromNumParameter } from "./fromNumParameter"
import { invertMonzo, isSubMonzo, isSuperMonzo, isUnisonMonzo } from "./monzo"
import { invertQuotient, isSubQuotient, isSuperQuotient, isUnisonQuotient } from "./quotient"
import { Direction, Num, NumParameter, NumTypeParameters } from "./types"

const isSuperNum = <T extends NumTypeParameters, U extends NumParameter<T>>(
    candidateSuperNumParameter: U,
): candidateSuperNumParameter is U & NumParameter<T & { direction: Direction.SUPER }> => {
    const candidateSuperNum = computeNumFromNumParameter(candidateSuperNumParameter)

    const { monzo, quotient, decimal } = candidateSuperNum

    return (!isUndefined(decimal) && isSuperDecimal(decimal)) ||
        (!isUndefined(quotient) && isSuperQuotient(quotient)) ||
        (!isUndefined(monzo) && isSuperMonzo(monzo))
}

const isSubNum = <T extends NumTypeParameters, U extends NumParameter<T>>(
    candidateSubNumParameter: U,
): candidateSubNumParameter is U & NumParameter<T & { direction: Direction.SUB }> => {
    const candidateSubNum = computeNumFromNumParameter(candidateSubNumParameter)

    const { monzo, quotient, decimal } = candidateSubNum

    return (!isUndefined(decimal) && isSubDecimal(decimal)) ||
        (!isUndefined(quotient) && isSubQuotient(quotient)) ||
        (!isUndefined(monzo) && isSubMonzo(monzo))
}

const isUnisonNum = <T extends NumTypeParameters, U extends NumParameter<T>>(
    candidateUnisonNumParameter: U,
): candidateUnisonNumParameter is U & NumParameter<T & { direction: Direction.UNISON }> => {
    const candidateUnisonNum = computeNumFromNumParameter(candidateUnisonNumParameter)

    const { monzo, quotient, decimal } = candidateUnisonNum

    return (!isUndefined(decimal) && isUnisonDecimal(decimal)) ||
        (!isUndefined(quotient) && isUnisonQuotient(quotient)) ||
        (!isUndefined(monzo) && isUnisonMonzo(monzo))
}

const computeSuperNum = <T extends NumTypeParameters, U extends NumParameter<T>>(
    numParameter: U,
): Exclude<U, NumParameter> & NumParameter<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }> => {
    let superNum = {} as Exclude<U, NumParameter> & NumParameter<T & { direction: Direction.SUPER, integer: false }>

    if (isSubNum(numParameter)) {
        if (isNumber(numParameter)) {
            return reciprocal(
                numParameter,
            ) as Exclude<U, NumParameter> & NumParameter<T & { direction: Direction.SUPER, integer: false }>
        }
        
        const { monzo, quotient, decimal } = numParameter
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
            numParameter as Exclude<U, NumParameter> & NumParameter<T & { direction: Direction.SUPER, integer: false }>,
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
