import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Direction, Exponent, NumTypeParameters } from "../../types"
import { Prime } from "../types"
import { computeDecimalFromMonzo } from "./decimalFromMonzo"
import { Monzo, MonzoNotDefaultingToRational } from "./types"

const computeIsSubMonzo = <T extends NumTypeParameters>(
    monzo: MonzoNotDefaultingToRational<T>,
): monzo is Monzo<T & { direction: Direction.SUB }> => {
    if (monzo.length && monzo.every((term: Exponent<Prime>): boolean => term >= 0)) return false
    if (monzo.length && monzo.every((term: Exponent<Prime>): boolean => term <= 0)) return true

    return computeDecimalFromMonzo(monzo) < MULTIPLICATIVE_IDENTITY
}

const computeIsSuperMonzo = <T extends NumTypeParameters>(
    monzo: MonzoNotDefaultingToRational<T>,
): monzo is Monzo<T & { direction: Direction.SUPER }> => {
    return !(computeIsUnisonMonzo(monzo) || computeIsSubMonzo(monzo))
}

const computeIsUnisonMonzo = <T extends NumTypeParameters>(
    monzo: MonzoNotDefaultingToRational<T>,
): monzo is Monzo<T & { direction: Direction.UNISON }> => {
    return monzo.every((term: Exponent<Prime>): boolean => term === 0)
}

const computeSuperMonzo = <T extends NumTypeParameters>(
    monzo: MonzoNotDefaultingToRational<T>,
): Monzo<T & { direction: Direction.SUPER }> => {
    if (computeIsSubMonzo(monzo)) {
        return invertMonzo(monzo)
    }

    return monzo as Monzo<T & { direction: Direction.SUPER }>
}

const invertMonzo: {
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        monzo: MonzoNotDefaultingToRational<T>,
    ): Monzo<T & { direction: Direction.SUB }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        monzo: MonzoNotDefaultingToRational<T>,
    ): Monzo<T & { direction: Direction.SUPER }>,
    <T extends NumTypeParameters>(
        monzo: MonzoNotDefaultingToRational<T>,
    ): Monzo<T>,
} = <T extends NumTypeParameters>(monzo: Monzo<T>): Monzo<T> =>
    monzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent === 0 ?
            0 as Exponent<Prime> :
            -primeExponent as Exponent<Prime>
    }) as Monzo<T>


export {
    computeIsSubMonzo,
    computeIsSuperMonzo,
    computeIsUnisonMonzo,
    computeSuperMonzo,
    invertMonzo,
}
