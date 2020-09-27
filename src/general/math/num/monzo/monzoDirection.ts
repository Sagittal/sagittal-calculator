import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime } from "../../rational"
import { Exponent } from "../../types"
import { computeDecimalFromMonzo } from "../decimal"
import { Direction, NumTypeParameters } from "../types"
import { Monzo, MonzoNotDefaultingToRational } from "./types"

const isSubMonzo = <T extends NumTypeParameters>(
    monzo: MonzoNotDefaultingToRational<T>,
): monzo is Monzo<T & { direction: Direction.SUB }> => {
    if (monzo.length && monzo.every((term: Exponent<Prime>): boolean => term >= 0)) return false
    if (monzo.length && monzo.every((term: Exponent<Prime>): boolean => term <= 0)) return true

    return computeDecimalFromMonzo(monzo) < MULTIPLICATIVE_IDENTITY
}

const isSuperMonzo = <T extends NumTypeParameters>(
    monzo: MonzoNotDefaultingToRational<T>,
): monzo is Monzo<T & { direction: Direction.SUPER }> => {
    return !(isUnisonMonzo(monzo) || isSubMonzo(monzo))
}

const isUnisonMonzo = <T extends NumTypeParameters>(
    monzo: MonzoNotDefaultingToRational<T>,
): monzo is Monzo<T & { direction: Direction.UNISON }> => {
    return monzo.every((term: Exponent<Prime>): boolean => term === 0)
}

const computeSuperMonzo = <T extends NumTypeParameters>(
    monzo: MonzoNotDefaultingToRational<T>,
): Monzo<T & { direction: Direction.SUPER, integer: false }> => {
    if (isSubMonzo(monzo)) {
        return invertMonzo(monzo) as Monzo<T & { direction: Direction.SUPER, integer: false }>
    }

    return monzo as Monzo<T & { direction: Direction.SUPER, integer: false }>
}

const invertMonzo: {
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        monzo: MonzoNotDefaultingToRational<T>,
    ): Monzo<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        monzo: MonzoNotDefaultingToRational<T>,
    ): Monzo<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        monzo: MonzoNotDefaultingToRational<T>,
    ): Monzo<T & { integer: false }>,
} = <T extends NumTypeParameters>(monzo: MonzoNotDefaultingToRational<T>): Monzo<T & { integer: false }> =>
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
