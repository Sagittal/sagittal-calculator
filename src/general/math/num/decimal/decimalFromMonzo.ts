import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime, PRIMES } from "../../rational"
import { pow } from "../../typedOperations"
import { Exponent } from "../../types"
import { MonzoNotDefaultingToRational } from "../monzo"
import { NumTypeParameters } from "../types"
import { Decimal, DecimalNotDefaultingToPotentiallyIrrational } from "./types"

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
