import { deepClone, isNumber, isUndefined } from "../../code"
import { reciprocal } from "../typedOperations"
import { invertRealDecimal, isSubRealDecimal, isSuperRealDecimal, isUnisonRealDecimal, RealDecimal } from "./decimal"
import { computeRealFromRealOrRealDecimal } from "./fromRealOrDecimal"
import { invertRealMonzo, isSubRealMonzo, isSuperRealMonzo, isUnisonRealMonzo, RealMonzo } from "./monzo"
import { invertRealQuotient, isSubRealQuotient, isSuperRealQuotient, isUnisonRealQuotient, RealQuotient } from "./quotient"
import { Direction, NumericProperties, Real } from "./types"

const isSuperReal = <T extends NumericProperties, U extends Real<T> | RealDecimal<T>>(
    candidateSuperRealOrRealDecimal: U,
): candidateSuperRealOrRealDecimal is
    U & (Real<T & { direction: Direction.SUPER }> | RealDecimal<T & { direction: Direction.SUPER }>) => {
    const { monzo, quotient, decimal } = computeRealFromRealOrRealDecimal(candidateSuperRealOrRealDecimal)

    return (!isUndefined(decimal) && isSuperRealDecimal(decimal)) ||
        (!isUndefined(quotient) && isSuperRealQuotient(quotient)) ||
        (!isUndefined(monzo) && isSuperRealMonzo(monzo))
}

const isSubReal = <T extends NumericProperties, U extends Real<T> | RealDecimal<T>>(
    candidateSubRealOrRealDecimal: U,
): candidateSubRealOrRealDecimal is
    U & (Real<T & { direction: Direction.SUB }> | RealDecimal<T & { direction: Direction.SUB }>) => {
    const { monzo, quotient, decimal } = computeRealFromRealOrRealDecimal(candidateSubRealOrRealDecimal)

    return (!isUndefined(decimal) && isSubRealDecimal(decimal)) ||
        (!isUndefined(quotient) && isSubRealQuotient(quotient)) ||
        (!isUndefined(monzo) && isSubRealMonzo(monzo))
}

const isUnisonReal = <T extends NumericProperties, U extends Real<T> | RealDecimal<T>>(
    candidateUnisonRealOrRealDecimal: U,
): candidateUnisonRealOrRealDecimal is
    U & (Real<T & { direction: Direction.UNISON }> | RealDecimal<T & { direction: Direction.UNISON }>) => {
    const { monzo, quotient, decimal } = computeRealFromRealOrRealDecimal(candidateUnisonRealOrRealDecimal)

    return (!isUndefined(decimal) && isUnisonRealDecimal(decimal)) ||
        (!isUndefined(quotient) && isUnisonRealQuotient(quotient)) ||
        (!isUndefined(monzo) && isUnisonRealMonzo(monzo))
}

const computeSuperReal = <T extends NumericProperties, U extends Real<T> | RealDecimal<T>>(
    realOrRealDecimal: U,
): Exclude<U, Real<T> | RealDecimal<T>>
    & (
    Real<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
    | RealDecimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
    ) => {

    // Todo: DEFER UNTIL AFTER SCALED MONZO
    //  I got confused for a moment and thought this meant "is this SUB thing REAL?" rather than "is this REAL thing Sub
    //  So maybe it should be "isRealSub" when a "SubReal" is not an actual thing?
    if (isSubReal(realOrRealDecimal)) {
        if (isNumber(realOrRealDecimal)) {
            return reciprocal(realOrRealDecimal) as Exclude<U, Real<T> | RealDecimal<T>>
                & Real<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
        }

        let superNum = {} as Exclude<U, Real<T>>
            & Real<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
        const { monzo, quotient, decimal } = realOrRealDecimal
        if (!isUndefined(quotient)) {
            superNum.quotient = invertRealQuotient(
                quotient
            ) as RealQuotient<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
        }
        if (!isUndefined(monzo)) {
            superNum.monzo = invertRealMonzo(
                monzo
            ) as RealMonzo<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
        }
        if (!isUndefined(decimal)) {
            superNum.decimal = invertRealDecimal(
                decimal
            ) as RealDecimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
        }
        return superNum as Exclude<U, Real<T> | RealDecimal<T>>
            & (
            Real<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
            | RealDecimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
            )
    } else {
        const superNum = deepClone(
            realOrRealDecimal as Exclude<U, RealDecimal<T>>
                & RealDecimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
        )
        return superNum as Exclude<U, Real<T> | RealDecimal<T>>
            & (
            Real<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
            | RealDecimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>
            )
    }
}

export {
    isSubReal,
    isSuperReal,
    isUnisonReal,
    computeSuperReal,
}
