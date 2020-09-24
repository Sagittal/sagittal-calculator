import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { pow } from "../../typedOperations"
import { Decimal, DecimalNotDefaultingToPotentiallyIrrational, Exponent, NumTypeParameters } from "../../types"
import { PRIMES } from "../primes"
import { Prime } from "../types"
import { MonzoNotDefaultingToRational } from "./types"

const computeDecimalFromMonzo = <T extends NumTypeParameters>(
    monzo: MonzoNotDefaultingToRational<T>,
): DecimalNotDefaultingToPotentiallyIrrational<T> => {
    return monzo.reduce(
        (value: Decimal<T>, term: Exponent<Prime>, index: number): Decimal<T> => {
            return value * pow(PRIMES[ index ], term) as Decimal<T>
        },
        MULTIPLICATIVE_IDENTITY as Decimal<T>,
    )
}

export {
    computeDecimalFromMonzo,
}
