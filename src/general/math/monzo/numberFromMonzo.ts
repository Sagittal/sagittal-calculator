import { MULTIPLICATIVE_IDENTITY } from "../constants"
import { PRIMES } from "../primes"
import { pow } from "../typedOperations"
import { Direction, Exponent, Numeric, NumericTypeParameters, Prime } from "../types"
import { PotentiallyIrrationalMonzoParameter } from "./types"

const computeNumberFromMonzo = <T extends NumericTypeParameters & { direction: Direction }>(
    monzo: PotentiallyIrrationalMonzoParameter<T>,
): Numeric<T> => {
    return monzo.reduce(
        (value: Numeric<T>, term: Exponent<Prime>, index: number): Numeric<T> => {
            return value * pow(PRIMES[ index ], term) as Numeric<T>
        },
        MULTIPLICATIVE_IDENTITY as Numeric<T>,
    )
}

export {
    computeNumberFromMonzo,
}
