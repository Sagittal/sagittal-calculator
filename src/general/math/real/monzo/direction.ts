import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime, RationalMonzo } from "../../rational"
import { Exponent } from "../../types"
import { computeRealDecimalFromRealMonzo } from "../decimal"
import { Direction, NumericProperties } from "../types"
import { RealMonzo } from "./types"

const isSubRealMonzo = <T extends NumericProperties>(
    candidateSubRealMonzo: RealMonzo<T>,
): candidateSubRealMonzo is RealMonzo<T & { direction: Direction.SUB }> => {
    if (
        candidateSubRealMonzo.length &&
        candidateSubRealMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent >= 0)
    ) {
        return false
    }
    if (
        candidateSubRealMonzo.length &&
        candidateSubRealMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent <= 0)
    ) {
        return true
    }

    return computeRealDecimalFromRealMonzo(candidateSubRealMonzo) < MULTIPLICATIVE_IDENTITY
}

const isSuperRealMonzo = <T extends NumericProperties>(
    candidateSuperRealMonzo: RealMonzo<T>,
): candidateSuperRealMonzo is RealMonzo<T & { direction: Direction.SUPER }> => {
    return !(isUnisonRealMonzo(candidateSuperRealMonzo) || isSubRealMonzo(candidateSuperRealMonzo))
}

const isUnisonRealMonzo = <T extends NumericProperties>(
    candidateUnisonRealMonzo: RealMonzo<T>,
): candidateUnisonRealMonzo is RealMonzo<T & { direction: Direction.UNISON }> => {
    return candidateUnisonRealMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent === 0)
}

const computeSuperRealMonzo: {
    <T extends NumericProperties>(
        rationalMonzo: RationalMonzo<T>,
    ): RationalMonzo<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        realMonzo: RealMonzo<T>,
    ): RealMonzo<T & { direction: Direction.SUPER, integer: false }>,
} = <T extends NumericProperties>(
    realMonzo: RealMonzo<T>,
): any => {
    if (isSubRealMonzo(realMonzo)) {
        return invertRealMonzo(realMonzo) as RealMonzo<T & { direction: Direction.SUPER, integer: false }>
    }

    return realMonzo as RealMonzo<T & { direction: Direction.SUPER, integer: false }>
}

const invertRealMonzo: {
    <T extends NumericProperties & { direction: Direction.SUPER }>(
        rationalMonzo: RationalMonzo<T>,
    ): RationalMonzo<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUB }>(
        rationalMonzo: RationalMonzo<T>,
    ): RationalMonzo<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        rationalMonzo: RationalMonzo<T>,
    ): RationalMonzo<T & { integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUPER }>(
        realMonzo: RealMonzo<T>,
    ): RealMonzo<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUB }>(
        realMonzo: RealMonzo<T>,
    ): RealMonzo<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        realMonzo: RealMonzo<T>,
    ): RealMonzo<T & { integer: false }>,
} = <T extends NumericProperties>(realMonzo: RealMonzo<T>): any =>
    realMonzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent === 0 ?
            0 as Exponent<Prime> :
            -primeExponent as Exponent<Prime>
    }) as RealMonzo<T & { integer: false }>


export {
    isSubRealMonzo,
    isSuperRealMonzo,
    isUnisonRealMonzo,
    computeSuperRealMonzo,
    invertRealMonzo,
}
