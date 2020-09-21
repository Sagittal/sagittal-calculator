import { MULTIPLICATIVE_IDENTITY } from "../constants"
import { Direction, Exponent, NumericTypeParameters, Prime } from "../types"
import { computeNumberFromMonzo } from "./numberFromMonzo"
import { Monzo, PotentiallyIrrationalMonzoParameter } from "./types"

const computeIsSubMonzo = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<T>,
): monzo is Monzo<T & { direction: Direction.SUB }> => {
    if (monzo.length && monzo.every((term: Exponent<Prime>): boolean => term >= 0)) return false
    if (monzo.length && monzo.every((term: Exponent<Prime>): boolean => term <= 0)) return true

    return computeNumberFromMonzo(monzo) < MULTIPLICATIVE_IDENTITY
}

const computeIsSuperMonzo = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<T>,
): monzo is Monzo<T & { direction: Direction.SUPER }> => {
    return !(computeIsUnisonMonzo(monzo) || computeIsSubMonzo(monzo))
}

const computeIsUnisonMonzo = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<T>,
): monzo is Monzo<T & { direction: Direction.UNISON }> => {
    return monzo.every((term: Exponent<Prime>): boolean => term === 0)
}

const computeSuperMonzo = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<T>,
): Monzo<T & { direction: Direction.SUPER }> => {
    if (computeIsSubMonzo(monzo)) {
        return invertMonzo(monzo)
    }

    return monzo as Monzo<T & { direction: Direction.SUPER }>
}

const invertMonzo: {
    <T extends NumericTypeParameters & { direction: Direction.SUPER }>(
        monzo: PotentiallyIrrationalMonzoParameter<T>,
    ): Monzo<T & { direction: Direction.SUB }>,
    <T extends NumericTypeParameters & { direction: Direction.SUB }>(
        monzo: PotentiallyIrrationalMonzoParameter<T>,
    ): Monzo<T & { direction: Direction.SUPER }>,
    <T extends NumericTypeParameters>(
        monzo: PotentiallyIrrationalMonzoParameter<T>,
    ): Monzo<T>,
} = <T extends NumericTypeParameters>(monzo: Monzo<T>): Monzo<T> =>
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
