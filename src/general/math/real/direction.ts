import { deepClone, isNumber, isUndefined } from "../../code"
import { reciprocal } from "../typedOperations"
import { invertDecimal, isSubDecimal, isSuperDecimal, isUnisonDecimal, RealDecimal } from "./decimal"
import { computeRealFromRealOrDecimal } from "./fromRealOrDecimal"
import { invertMonzo, isSubMonzo, isSuperMonzo, isUnisonMonzo } from "./monzo"
import { invertQuotient, isSubQuotient, isSuperQuotient, isUnisonQuotient } from "./quotient"
import { Direction, NumericProperties, Real } from "./types"

const isSuperReal = <T extends NumericProperties, U extends Real<T> | RealDecimal<T>>(
    candidateSuperRealOrRealDecimal: U,
): candidateSuperRealOrRealDecimal is
    U & (Real<T & { direction: Direction.SUPER }> | RealDecimal<T & { direction: Direction.SUPER }>) => {
    const { monzo, quotient, decimal } = computeRealFromRealOrDecimal(candidateSuperRealOrRealDecimal)

    return (!isUndefined(decimal) && isSuperDecimal(decimal)) ||
        (!isUndefined(quotient) && isSuperQuotient(quotient)) ||
        (!isUndefined(monzo) && isSuperMonzo(monzo))
}

const isSubReal = <T extends NumericProperties, U extends Real<T> | RealDecimal<T>>(
    candidateSubRealOrRealDecimal: U,
): candidateSubRealOrRealDecimal is
    U & (Real<T & { direction: Direction.SUB }> | RealDecimal<T & { direction: Direction.SUB }>) => {
    const { monzo, quotient, decimal } = computeRealFromRealOrDecimal(candidateSubRealOrRealDecimal)

    return (!isUndefined(decimal) && isSubDecimal(decimal)) ||
        (!isUndefined(quotient) && isSubQuotient(quotient)) ||
        (!isUndefined(monzo) && isSubMonzo(monzo))
}

const isUnisonReal = <T extends NumericProperties, U extends Real<T> | RealDecimal<T>>(
    candidateUnisonRealOrRealDecimal: U,
): candidateUnisonRealOrRealDecimal is
    U & (Real<T & { direction: Direction.UNISON }> | RealDecimal<T & { direction: Direction.UNISON }>) => {
    const { monzo, quotient, decimal } = computeRealFromRealOrDecimal(candidateUnisonRealOrRealDecimal)

    return (!isUndefined(decimal) && isUnisonDecimal(decimal)) ||
        (!isUndefined(quotient) && isUnisonQuotient(quotient)) ||
        (!isUndefined(monzo) && isUnisonMonzo(monzo))
}

const computeSuperReal = <T extends NumericProperties, U extends Real<T> | RealDecimal<T>>(
    realOrRealDecimal: U,
): Exclude<U, Real<T> | RealDecimal<T>>
    & (
    Real<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
    | RealDecimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
    ) => {
    let superNum = {} as Exclude<U, RealDecimal<T>>
        & RealDecimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>

    if (isSubReal(realOrRealDecimal)) {
        if (isNumber(realOrRealDecimal)) {
            return reciprocal(realOrRealDecimal) as Exclude<U, Real<T> | RealDecimal<T>>
                & Real<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
        }

        const { monzo, quotient, decimal } = realOrRealDecimal
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
            realOrRealDecimal as Exclude<U, RealDecimal<T>>
                & RealDecimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
        )
    }

    return superNum as Exclude<U, Real<T> | RealDecimal<T>>
        & (
        Real<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
        | RealDecimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
        )
}

export {
    isSubReal,
    isSuperReal,
    isUnisonReal,
    computeSuperReal,
}
