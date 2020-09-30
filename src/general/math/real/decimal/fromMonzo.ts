import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime, PRIMES } from "../../rational"
import { pow } from "../../typedOperations"
import { Exponent } from "../../types"
import { Monzo } from "../monzo"
import { NumericProperties } from "../types"
import { RealDecimal } from "./types"

const computeDecimalFromMonzo = <T extends NumericProperties>(monzo: Monzo<T>): RealDecimal<T> => {
    return monzo.reduce(
        (value: RealDecimal<T>, primeExponent: Exponent<Prime>, index: number): RealDecimal<T> => {
            return value * pow(PRIMES[ index ], primeExponent) as RealDecimal<T>
        },
        MULTIPLICATIVE_IDENTITY as RealDecimal<T>,
    )
}

export {
    computeDecimalFromMonzo,
}
