import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime, PRIMES } from "../../rational"
import { pow } from "../../typedOperations"
import { Exponent } from "../../types"
import { RealMonzo } from "../monzo"
import { NumericProperties } from "../types"
import { RealDecimal } from "./types"

const computeRealDecimalFromRealMonzo = <T extends NumericProperties>(realMonzo: RealMonzo<T>): RealDecimal<T> => {
    return realMonzo.reduce(
        (value: RealDecimal<T>, primeExponent: Exponent<Prime>, index: number): RealDecimal<T> => {
            return value * pow(PRIMES[ index ], primeExponent) as RealDecimal<T>
        },
        MULTIPLICATIVE_IDENTITY as RealDecimal<T>,
    )
}

export {
    computeRealDecimalFromRealMonzo,
}
