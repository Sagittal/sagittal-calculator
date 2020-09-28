import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime, PRIMES } from "../../rational"
import { pow } from "../../typedOperations"
import { Exponent } from "../../types"
import { Monzo } from "../monzo"
import { NumTypeParameters } from "../types"
import { Decimal } from "./types"

const computeDecimalFromMonzo = <T extends NumTypeParameters>(monzo: Monzo<T>): Decimal<T> => {
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
