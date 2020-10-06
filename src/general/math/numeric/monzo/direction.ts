import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime } from "../../rational"
import { Exponent } from "../../types"
import { computeDecimalFromMonzo } from "../decimal"
import { Direction, NumericProperties } from "../types"
import { Monzo } from "./types"

const isSubMonzo = <T extends NumericProperties>(
    candidateSubMonzo: Monzo<T>,
): candidateSubMonzo is Monzo<T & { direction: Direction.SUB }> => {
    if (
        candidateSubMonzo.length &&
        candidateSubMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent >= 0)
    ) {
        return false
    }
    if (
        candidateSubMonzo.length &&
        candidateSubMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent <= 0)
    ) {
        return true
    }

    return computeDecimalFromMonzo(candidateSubMonzo) < MULTIPLICATIVE_IDENTITY
}

const isSuperMonzo = <T extends NumericProperties>(
    candidateSuperMonzo: Monzo<T>,
): candidateSuperMonzo is Monzo<T & { direction: Direction.SUPER }> =>
    !(isUnisonMonzo(candidateSuperMonzo) || isSubMonzo(candidateSuperMonzo))

const isUnisonMonzo = <T extends NumericProperties>(
    candidateUnisonMonzo: Monzo<T>,
): candidateUnisonMonzo is Monzo<T & { direction: Direction.UNISON }> =>
    candidateUnisonMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent === 0)

const computeSuperMonzo = <T extends NumericProperties>(
    monzo: Monzo<T>,
): Monzo<T & { direction: Direction.SUPER, integer: false }> => {
    if (isSubMonzo(monzo)) {
        return invertMonzo(monzo) as Monzo<T & { direction: Direction.SUPER, integer: false }>
    }

    return monzo as Monzo<T & { direction: Direction.SUPER, integer: false }>
}

const invertMonzo: {
    <T extends NumericProperties & { direction: Direction.SUPER }>(
        monzo: Monzo<T>,
    ): Monzo<Omit<T, "direction"> & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUB }>(
        monzo: Monzo<T>,
    ): Monzo<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        monzo: Monzo<T>,
    ): Monzo<Omit<T, "direction"> & { integer: false }>,
} = <T extends NumericProperties>(
    monzo: Monzo<T>
): Monzo<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.SUB, integer: false }> =>
    monzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent === 0 ?
            0 as Exponent<Prime> :
            -primeExponent as Exponent<Prime>
    }) as Monzo<Omit<T, "direction"> & { integer: false }>


export {
    isSubMonzo,
    isSuperMonzo,
    isUnisonMonzo,
    computeSuperMonzo,
    invertMonzo,
}
