import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime, RationalMonzo } from "../../rational"
import { Exponent } from "../../types"
import { computeDecimalFromMonzo } from "../decimal"
import { Direction, NumTypeParameters } from "../types"
import { Monzo } from "./types"

const isSubMonzo = <T extends NumTypeParameters>(
    candidateSubMonzo: Monzo<T>,
): candidateSubMonzo is Monzo<T & { direction: Direction.SUB }> => {
    if (candidateSubMonzo.length && candidateSubMonzo.every((term: Exponent<Prime>): boolean => term >= 0)) return false
    if (candidateSubMonzo.length && candidateSubMonzo.every((term: Exponent<Prime>): boolean => term <= 0)) return true

    return computeDecimalFromMonzo(candidateSubMonzo) < MULTIPLICATIVE_IDENTITY
}

const isSuperMonzo = <T extends NumTypeParameters>(
    candidateSuperMonzo: Monzo<T>,
): candidateSuperMonzo is Monzo<T & { direction: Direction.SUPER }> => {
    return !(isUnisonMonzo(candidateSuperMonzo) || isSubMonzo(candidateSuperMonzo))
}

const isUnisonMonzo = <T extends NumTypeParameters>(
    candidateUnisonMonzo: Monzo<T>,
): candidateUnisonMonzo is Monzo<T & { direction: Direction.UNISON }> => {
    return candidateUnisonMonzo.every((term: Exponent<Prime>): boolean => term === 0)
}

const computeSuperMonzo: {
    <T extends NumTypeParameters>(
        rationalMonzo: RationalMonzo<T>,
    ): RationalMonzo<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        monzo: Monzo<T>,
    ): Monzo<T & { direction: Direction.SUPER, integer: false }>,
} = <T extends NumTypeParameters>(
    monzo: Monzo<T>,
): any => {
    if (isSubMonzo(monzo)) {
        return invertMonzo(monzo) as Monzo<T & { direction: Direction.SUPER, integer: false }>
    }

    return monzo as Monzo<T & { direction: Direction.SUPER, integer: false }>
}

const invertMonzo: {
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        rationalMonzo: RationalMonzo<T>,
    ): RationalMonzo<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        rationalMonzo: RationalMonzo<T>,
    ): RationalMonzo<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        rationalMonzo: RationalMonzo<T>,
    ): RationalMonzo<T & { integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        monzo: Monzo<T>,
    ): Monzo<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        monzo: Monzo<T>,
    ): Monzo<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        monzo: Monzo<T>,
    ): Monzo<T & { integer: false }>,
} = <T extends NumTypeParameters>(monzo: Monzo<T>): any =>
    monzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent === 0 ?
            0 as Exponent<Prime> :
            -primeExponent as Exponent<Prime>
    }) as Monzo<T & { integer: false }>


export {
    isSubMonzo,
    isSuperMonzo,
    isUnisonMonzo,
    computeSuperMonzo,
    invertMonzo,
}
