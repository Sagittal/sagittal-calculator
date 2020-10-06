import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime, PRIMES } from "../../rational"
import { pow } from "../../typedOperations"
import { Exponent } from "../../types"
import { Monzo } from "../monzo"
import { NumericProperties } from "../types"
import { Decimal } from "./types"

const computeDecimalFromMonzo = <T extends NumericProperties>(monzo: Monzo<T>): Decimal<T> =>
    monzo.reduce(
        (value: Decimal<T>, primeExponent: Exponent<Prime>, index: number): Decimal<T> => {
            return value * pow(PRIMES[ index ], primeExponent) as Decimal<T>
        },
        MULTIPLICATIVE_IDENTITY as Decimal<T>,
    )

export {
    computeDecimalFromMonzo,
}
